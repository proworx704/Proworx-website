import { useState, useEffect } from "react";
import { useQuery, useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import type { Id } from "../../convex/_generated/dataModel";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Lock, Phone, Clock, DollarSign, Image, Star, LogOut, Settings, Save, Plus, Trash2,
  Pencil, X, Check, Link2, ChevronRight, LayoutDashboard, GripVertical, Loader2,
} from "lucide-react";
import { toast } from "sonner";

const ADMIN_PASSWORD = "proworx2026";

// ─── PASSWORD GATE ───────────────────────────────────────────────────────────
function PasswordGate({ onAuth }: { onAuth: () => void }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      localStorage.setItem("pw_admin", "1");
      onAuth();
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  return (
    <div className="flex-1 flex items-center justify-center min-h-screen bg-background">
      <form onSubmit={handleSubmit} className="w-full max-w-sm mx-auto p-8">
        <div className="text-center mb-8">
          <div className="size-16 rounded-2xl bg-gold/10 flex items-center justify-center mx-auto mb-4">
            <Lock className="size-8 text-gold" />
          </div>
          <h1 className="text-2xl font-bold mb-1">Admin Access</h1>
          <p className="text-sm text-muted-foreground">Enter password to continue</p>
        </div>
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={`mb-4 h-12 text-center text-lg ${error ? "border-red-500" : ""}`}
          autoFocus
        />
        <Button type="submit" className="w-full bg-gold text-gold-foreground hover:bg-gold/90 h-12 font-bold">
          Enter
        </Button>
        {error && <p className="text-red-500 text-sm text-center mt-3">Incorrect password</p>}
      </form>
    </div>
  );
}

// ─── SECTION WRAPPER ─────────────────────────────────────────────────────────
function Section({ title, icon, children, action }: { title: string; icon: React.ReactNode; children: React.ReactNode; action?: React.ReactNode }) {
  return (
    <div className="rounded-2xl bg-card border border-border p-6">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-3">
          <div className="size-10 rounded-xl bg-gold/10 flex items-center justify-center text-gold">{icon}</div>
          <h2 className="text-xl font-bold">{title}</h2>
        </div>
        {action}
      </div>
      {children}
    </div>
  );
}

// ─── EDITABLE ROW ────────────────────────────────────────────────────────────
function EditableRow({ label, value, onSave }: { label: string; value: string; onSave: (val: string) => void }) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(value);

  useEffect(() => { setDraft(value); }, [value]);

  if (editing) {
    return (
      <div className="flex items-center gap-2 py-3 border-b border-border/50 last:border-0">
        <span className="text-sm text-muted-foreground w-36 shrink-0">{label}</span>
        <Input
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          className="h-8 text-sm flex-1"
          autoFocus
          onKeyDown={(e) => {
            if (e.key === "Enter") { onSave(draft); setEditing(false); }
            if (e.key === "Escape") { setDraft(value); setEditing(false); }
          }}
        />
        <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-green-500" onClick={() => { onSave(draft); setEditing(false); }}>
          <Check className="size-3.5" />
        </Button>
        <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-muted-foreground" onClick={() => { setDraft(value); setEditing(false); }}>
          <X className="size-3.5" />
        </Button>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-between py-3 border-b border-border/50 last:border-0 group">
      <span className="text-sm text-muted-foreground">{label}</span>
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium">{value}</span>
        <button type="button" onClick={() => setEditing(true)} className="opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground hover:text-gold">
          <Pencil className="size-3.5" />
        </button>
      </div>
    </div>
  );
}

// ─── TAB NAVIGATION ──────────────────────────────────────────────────────────
type Tab = "overview" | "contact" | "services" | "memberships";

function TabNav({ active, onChange }: { active: Tab; onChange: (t: Tab) => void }) {
  const tabs: Array<{ id: Tab; label: string; icon: React.ReactNode }> = [
    { id: "overview", label: "Overview", icon: <LayoutDashboard className="size-4" /> },
    { id: "contact", label: "Contact & Links", icon: <Settings className="size-4" /> },
    { id: "services", label: "Services", icon: <Star className="size-4" /> },
    { id: "memberships", label: "Memberships", icon: <DollarSign className="size-4" /> },
  ];
  return (
    <div className="flex gap-1 overflow-x-auto pb-1">
      {tabs.map((t) => (
        <button
          key={t.id}
          type="button"
          onClick={() => onChange(t.id)}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
            active === t.id ? "bg-gold text-gold-foreground" : "text-muted-foreground hover:text-foreground hover:bg-muted"
          }`}
        >
          {t.icon}
          {t.label}
        </button>
      ))}
    </div>
  );
}

// ─── SERVICE EDITOR ──────────────────────────────────────────────────────────
function ServiceEditor({ category, categoryLabel }: { category: string; categoryLabel: string }) {
  const services = useQuery(api.cms.getServicesByCategory, { category });
  const addService = useMutation(api.cms.addService);
  const updateService = useMutation(api.cms.updateService);
  const deleteService = useMutation(api.cms.deleteService);
  const [adding, setAdding] = useState(false);
  const [newService, setNewService] = useState({ name: "", description: "", price: "", duration: "" });
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editDraft, setEditDraft] = useState({ name: "", description: "", price: "", duration: "" });

  if (!services) return <div className="animate-pulse h-20 bg-muted rounded-lg" />;

  const handleAdd = async () => {
    if (!newService.name.trim()) { toast.error("Service name is required"); return; }
    await addService({ ...newService, category });
    setNewService({ name: "", description: "", price: "", duration: "" });
    setAdding(false);
    toast.success("Service added");
  };

  const handleUpdate = async (id: Id<"services">) => {
    await updateService({ id, ...editDraft });
    setEditingId(null);
    toast.success("Service updated");
  };

  const handleDelete = async (id: Id<"services">, name: string) => {
    if (!confirm(`Delete "${name}"?`)) return;
    await deleteService({ id });
    toast.success("Service deleted");
  };

  return (
    <div className="mb-6 last:mb-0">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-bold text-gold uppercase tracking-widest">{categoryLabel}</h3>
        <Button variant="ghost" size="sm" className="h-7 text-xs text-gold hover:text-gold/80" onClick={() => setAdding(true)}>
          <Plus className="size-3 mr-1" /> Add
        </Button>
      </div>

      {services.map((s) => {
        if (editingId === s._id) {
          return (
            <div key={s._id} className="rounded-lg border border-gold/30 bg-gold/5 p-4 mb-2">
              <div className="grid grid-cols-2 gap-3 mb-3">
                <div>
                  <label className="text-xs text-muted-foreground mb-1 block">Name</label>
                  <Input value={editDraft.name} onChange={(e) => setEditDraft({ ...editDraft, name: e.target.value })} className="h-8 text-sm" />
                </div>
                <div>
                  <label className="text-xs text-muted-foreground mb-1 block">Price</label>
                  <Input value={editDraft.price} onChange={(e) => setEditDraft({ ...editDraft, price: e.target.value })} className="h-8 text-sm" />
                </div>
                <div>
                  <label className="text-xs text-muted-foreground mb-1 block">Duration</label>
                  <Input value={editDraft.duration} onChange={(e) => setEditDraft({ ...editDraft, duration: e.target.value })} className="h-8 text-sm" />
                </div>
              </div>
              <div className="mb-3">
                <label className="text-xs text-muted-foreground mb-1 block">Description</label>
                <Input value={editDraft.description} onChange={(e) => setEditDraft({ ...editDraft, description: e.target.value })} className="h-8 text-sm" />
              </div>
              <div className="flex gap-2 justify-end">
                <Button variant="ghost" size="sm" className="h-7 text-xs" onClick={() => setEditingId(null)}>Cancel</Button>
                <Button size="sm" className="h-7 text-xs bg-gold text-gold-foreground hover:bg-gold/90" onClick={() => handleUpdate(s._id)}>
                  <Save className="size-3 mr-1" /> Save
                </Button>
              </div>
            </div>
          );
        }

        return (
          <div key={s._id} className="flex items-start justify-between py-3 border-b border-border/50 last:border-0 group">
            <div className="flex items-start gap-2 flex-1 min-w-0">
              <GripVertical className="size-4 text-muted-foreground/30 mt-0.5 shrink-0" />
              <div className="min-w-0">
                <h4 className="font-semibold text-sm">{s.name}</h4>
                <p className="text-xs text-muted-foreground truncate max-w-md">{s.description}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <div className="text-right">
                <p className="font-bold text-gold text-sm">{s.price}</p>
                <p className="text-xs text-muted-foreground flex items-center gap-1 justify-end">
                  <Clock className="size-3" />{s.duration}
                </p>
              </div>
              <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  type="button"
                  className="text-muted-foreground hover:text-gold p-1"
                  onClick={() => { setEditingId(s._id); setEditDraft({ name: s.name, description: s.description, price: s.price, duration: s.duration }); }}
                >
                  <Pencil className="size-3.5" />
                </button>
                <button type="button" className="text-muted-foreground hover:text-red-500 p-1" onClick={() => handleDelete(s._id, s.name)}>
                  <Trash2 className="size-3.5" />
                </button>
              </div>
            </div>
          </div>
        );
      })}

      {adding && (
        <div className="rounded-lg border border-dashed border-gold/40 bg-gold/5 p-4 mt-2">
          <div className="grid grid-cols-2 gap-3 mb-3">
            <div>
              <label className="text-xs text-muted-foreground mb-1 block">Name</label>
              <Input value={newService.name} onChange={(e) => setNewService({ ...newService, name: e.target.value })} className="h-8 text-sm" placeholder="Service name" />
            </div>
            <div>
              <label className="text-xs text-muted-foreground mb-1 block">Price</label>
              <Input value={newService.price} onChange={(e) => setNewService({ ...newService, price: e.target.value })} className="h-8 text-sm" placeholder="$XX" />
            </div>
            <div>
              <label className="text-xs text-muted-foreground mb-1 block">Duration</label>
              <Input value={newService.duration} onChange={(e) => setNewService({ ...newService, duration: e.target.value })} className="h-8 text-sm" placeholder="30 min" />
            </div>
          </div>
          <div className="mb-3">
            <label className="text-xs text-muted-foreground mb-1 block">Description</label>
            <Input value={newService.description} onChange={(e) => setNewService({ ...newService, description: e.target.value })} className="h-8 text-sm" placeholder="Brief description" />
          </div>
          <div className="flex gap-2 justify-end">
            <Button variant="ghost" size="sm" className="h-7 text-xs" onClick={() => { setAdding(false); setNewService({ name: "", description: "", price: "", duration: "" }); }}>Cancel</Button>
            <Button size="sm" className="h-7 text-xs bg-gold text-gold-foreground hover:bg-gold/90" onClick={handleAdd}>
              <Plus className="size-3 mr-1" /> Add Service
            </Button>
          </div>
        </div>
      )}

      {services.length === 0 && !adding && (
        <p className="text-sm text-muted-foreground py-4 text-center">No services yet. Click "Add" to create one.</p>
      )}
    </div>
  );
}

// ─── MEMBERSHIP EDITOR ───────────────────────────────────────────────────────
function MembershipEditor() {
  const memberships = useQuery(api.cms.getMemberships);
  const updateMembership = useMutation(api.cms.updateMembership);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [draft, setDraft] = useState({ name: "", price: 0, url: "", features: "", popular: false });

  if (!memberships) return <div className="animate-pulse h-40 bg-muted rounded-lg" />;

  const startEdit = (m: NonNullable<typeof memberships>[number]) => {
    setEditingId(m._id);
    setDraft({ name: m.name, price: m.price, url: m.url, features: m.features.join("\n"), popular: m.popular });
  };

  const handleSave = async (id: Id<"memberships">) => {
    await updateMembership({
      id,
      name: draft.name,
      price: draft.price,
      url: draft.url,
      features: draft.features.split("\n").map((f) => f.trim()).filter(Boolean),
      popular: draft.popular,
    });
    setEditingId(null);
    toast.success("Membership updated");
  };

  return (
    <div className="grid md:grid-cols-3 gap-4">
      {memberships.map((m) => {
        if (editingId === m._id) {
          return (
            <div key={m._id} className="rounded-xl border border-gold/30 bg-gold/5 p-5">
              <div className="space-y-3 mb-4">
                <div>
                  <label className="text-xs text-muted-foreground mb-1 block">Plan Name</label>
                  <Input value={draft.name} onChange={(e) => setDraft({ ...draft, name: e.target.value })} className="h-8 text-sm" />
                </div>
                <div>
                  <label className="text-xs text-muted-foreground mb-1 block">Price ($/mo)</label>
                  <Input type="number" value={draft.price} onChange={(e) => setDraft({ ...draft, price: Number(e.target.value) })} className="h-8 text-sm" />
                </div>
                <div>
                  <label className="text-xs text-muted-foreground mb-1 block">Square Payment Link</label>
                  <Input value={draft.url} onChange={(e) => setDraft({ ...draft, url: e.target.value })} className="h-8 text-sm" />
                </div>
                <div>
                  <label className="text-xs text-muted-foreground mb-1 block">Features (one per line)</label>
                  <textarea
                    value={draft.features}
                    onChange={(e) => setDraft({ ...draft, features: e.target.value })}
                    className="w-full text-sm bg-background border border-border rounded-md p-2 min-h-[120px] resize-y focus:outline-none focus:ring-1 focus:ring-gold"
                  />
                </div>
                <label className="flex items-center gap-2 text-sm cursor-pointer">
                  <input type="checkbox" checked={draft.popular} onChange={(e) => setDraft({ ...draft, popular: e.target.checked })} className="rounded" />
                  Mark as "Best Value"
                </label>
              </div>
              <div className="flex gap-2 justify-end">
                <Button variant="ghost" size="sm" className="h-7 text-xs" onClick={() => setEditingId(null)}>Cancel</Button>
                <Button size="sm" className="h-7 text-xs bg-gold text-gold-foreground hover:bg-gold/90" onClick={() => handleSave(m._id)}>
                  <Save className="size-3 mr-1" /> Save
                </Button>
              </div>
            </div>
          );
        }

        return (
          <div key={m._id} className={`rounded-xl border p-5 relative group ${m.popular ? "border-gold shadow-md shadow-gold/10" : "border-border"}`}>
            {m.popular && <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-gold text-gold-foreground text-[10px] font-bold rounded-full">Best Value</div>}
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="font-bold text-lg">{m.name}</h3>
                <p className="text-2xl font-black">${m.price}<span className="text-sm font-normal text-muted-foreground">/mo</span></p>
              </div>
              <button type="button" onClick={() => startEdit(m)} className="opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground hover:text-gold p-1">
                <Pencil className="size-4" />
              </button>
            </div>
            <ul className="space-y-1.5 mb-3">
              {m.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-xs text-muted-foreground">
                  <Check className="size-3 text-gold mt-0.5 shrink-0" />{f}
                </li>
              ))}
            </ul>
            <a href={m.url} target="_blank" rel="noreferrer" className="text-xs text-gold hover:underline flex items-center gap-1">
              <Link2 className="size-3" /> Payment link
            </a>
          </div>
        );
      })}
    </div>
  );
}

// ─── STANDARD DETAIL EDITOR ──────────────────────────────────────────────────
function StandardDetailEditor() {
  const detail = useQuery(api.cms.getStandardDetail);
  const updateDetail = useMutation(api.cms.updateStandardDetail);
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState({ name: "", description: "", price: "", duration: "", features: "" });

  if (!detail) return <div className="animate-pulse h-20 bg-muted rounded-lg" />;

  const startEdit = () => {
    setDraft({
      name: detail.name,
      description: detail.description,
      price: detail.price,
      duration: detail.duration,
      features: detail.features.join("\n"),
    });
    setEditing(true);
  };

  const handleSave = async () => {
    await updateDetail({
      name: draft.name,
      description: draft.description,
      price: draft.price,
      duration: draft.duration,
      features: draft.features.split("\n").map((f) => f.trim()).filter(Boolean),
    });
    setEditing(false);
    toast.success("Standard detail updated");
  };

  if (editing) {
    return (
      <div className="rounded-lg border border-gold/30 bg-gold/5 p-4 mb-6">
        <h3 className="text-sm font-bold text-gold uppercase tracking-widest mb-3">Standard Detail (Inside & Out)</h3>
        <div className="grid grid-cols-2 gap-3 mb-3">
          <div>
            <label className="text-xs text-muted-foreground mb-1 block">Name</label>
            <Input value={draft.name} onChange={(e) => setDraft({ ...draft, name: e.target.value })} className="h-8 text-sm" />
          </div>
          <div>
            <label className="text-xs text-muted-foreground mb-1 block">Price</label>
            <Input value={draft.price} onChange={(e) => setDraft({ ...draft, price: e.target.value })} className="h-8 text-sm" />
          </div>
          <div>
            <label className="text-xs text-muted-foreground mb-1 block">Duration</label>
            <Input value={draft.duration} onChange={(e) => setDraft({ ...draft, duration: e.target.value })} className="h-8 text-sm" />
          </div>
        </div>
        <div className="mb-3">
          <label className="text-xs text-muted-foreground mb-1 block">Description</label>
          <Input value={draft.description} onChange={(e) => setDraft({ ...draft, description: e.target.value })} className="h-8 text-sm" />
        </div>
        <div className="mb-3">
          <label className="text-xs text-muted-foreground mb-1 block">Features (one per line)</label>
          <textarea value={draft.features} onChange={(e) => setDraft({ ...draft, features: e.target.value })} className="w-full text-sm bg-background border border-border rounded-md p-2 min-h-[80px] resize-y focus:outline-none focus:ring-1 focus:ring-gold" />
        </div>
        <div className="flex gap-2 justify-end">
          <Button variant="ghost" size="sm" className="h-7 text-xs" onClick={() => setEditing(false)}>Cancel</Button>
          <Button size="sm" className="h-7 text-xs bg-gold text-gold-foreground hover:bg-gold/90" onClick={handleSave}>
            <Save className="size-3 mr-1" /> Save
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="mb-6 group">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-bold text-gold uppercase tracking-widest">Standard Detail (Inside & Out)</h3>
        <button type="button" onClick={startEdit} className="opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground hover:text-gold p-1">
          <Pencil className="size-3.5" />
        </button>
      </div>
      <div className="flex items-start justify-between py-3 border-b border-border/50">
        <div>
          <h4 className="font-semibold text-sm">{detail.name}</h4>
          <p className="text-xs text-muted-foreground">{detail.description}</p>
          <ul className="mt-2 space-y-1">
            {detail.features.map((f) => (
              <li key={f} className="flex items-center gap-2 text-xs text-muted-foreground">
                <Check className="size-3 text-gold shrink-0" />{f}
              </li>
            ))}
          </ul>
        </div>
        <div className="text-right shrink-0 ml-4">
          <p className="font-bold text-gold text-sm">{detail.price}</p>
          <p className="text-xs text-muted-foreground">{detail.duration}</p>
        </div>
      </div>
    </div>
  );
}

// ─── OVERVIEW TAB ────────────────────────────────────────────────────────────
function OverviewTab() {
  const allConfig = useQuery(api.cms.getAllConfig);
  const allServices = useQuery(api.cms.getAllServices);
  const memberships = useQuery(api.cms.getMemberships);

  const config: Record<string, string> = {};
  for (const c of allConfig ?? []) config[c.key] = c.value;

  const photos = [
    { name: "escalade-front.jpg", used: "Homepage Hero" },
    { name: "escalade-rear.jpg", used: "Ceramic Coating Hero" },
    { name: "porsche-van.jpg", used: "About Section" },
    { name: "ferrari-van.jpg", used: "Gallery" },
    { name: "corvette-front.jpg", used: "Services Hero, Gallery" },
    { name: "tesla-bay.jpg", used: "Paint Correction Hero" },
    { name: "aston-front.jpg", used: "Ceramic Why Section" },
    { name: "fleet-real.jpg", used: "Fleet Section" },
    { name: "rangerover-interior.jpg", used: "Interior Services" },
  ];

  return (
    <div className="space-y-6">
      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Pages", value: "7" },
          { label: "Photos", value: "20+" },
          { label: "Services", value: `${allServices?.length ?? "..."}` },
          { label: "Memberships", value: `${memberships?.length ?? "..."}` },
        ].map((s) => (
          <div key={s.label} className="rounded-xl bg-card border border-border p-4 text-center">
            <p className="text-2xl font-black text-gold">{s.value}</p>
            <p className="text-xs text-muted-foreground mt-0.5">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Contact Info */}
        <Section title="Contact Info" icon={<Phone className="size-5" />}>
          <div className="flex items-center justify-between py-3 border-b border-border/50">
            <span className="text-sm text-muted-foreground">Phone</span>
            <span className="text-sm font-medium">{config.phone || "..."}</span>
          </div>
          <div className="flex items-center justify-between py-3 border-b border-border/50">
            <span className="text-sm text-muted-foreground">Email</span>
            <span className="text-sm font-medium">{config.email || "..."}</span>
          </div>
          <div className="flex items-center justify-between py-3">
            <span className="text-sm text-muted-foreground">Address</span>
            <span className="text-sm font-medium">{config.address || "..."}</span>
          </div>
        </Section>

        {/* Business Hours */}
        <Section title="Business Hours" icon={<Clock className="size-5" />}>
          <div className="flex items-center justify-between py-3 border-b border-border/50">
            <span className="text-sm text-muted-foreground">Monday – Friday</span>
            <span className="text-sm font-medium">{config.hoursWeekday || "..."}</span>
          </div>
          <div className="flex items-center justify-between py-3 border-b border-border/50">
            <span className="text-sm text-muted-foreground">Saturday</span>
            <span className="text-sm font-medium">{config.hoursSaturday || "..."}</span>
          </div>
          <div className="flex items-center justify-between py-3">
            <span className="text-sm text-muted-foreground">Sunday</span>
            <span className="text-sm font-medium">{config.hoursSunday || "..."}</span>
          </div>
        </Section>

        {/* Memberships */}
        <Section title="Membership Plans" icon={<DollarSign className="size-5" />}>
          {(memberships ?? []).map((m) => (
            <div key={m._id} className="flex items-center justify-between py-3 border-b border-border/50 last:border-0">
              <span className="text-sm text-muted-foreground">{m.name}</span>
              <span className="text-sm font-medium">${m.price}/mo</span>
            </div>
          ))}
        </Section>

        {/* Pages */}
        <Section title="Site Pages" icon={<LayoutDashboard className="size-5" />}>
          {[
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: "Ceramic Coating", path: "/ceramic-coating" },
            { name: "Paint Correction", path: "/paint-correction" },
            { name: "Book Now", path: "/book" },
            { name: "Areas We Serve", path: "/areas" },
            { name: "Contact", path: "/contact" },
          ].map((p) => (
            <a key={p.path} href={p.path} target="_blank" rel="noreferrer" className="flex items-center justify-between py-3 border-b border-border/50 last:border-0 group hover:text-gold transition-colors">
              <span className="text-sm font-medium">{p.name}</span>
              <ChevronRight className="size-3.5 text-muted-foreground group-hover:text-gold transition-colors" />
            </a>
          ))}
        </Section>

        {/* Photos */}
        <Section title="Site Photos" icon={<Image className="size-5" />}>
          <div className="grid grid-cols-3 gap-2 mb-3">
            {photos.map((p) => (
              <div key={p.name} className="relative group">
                <img src={`/images/${p.name}`} alt={p.name} className="rounded-lg aspect-square object-cover w-full" />
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center p-2">
                  <p className="text-[10px] text-white text-center leading-tight">{p.used}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground text-center">Hover to see where photos are used</p>
        </Section>
      </div>
    </div>
  );
}

// ─── CONTACT & LINKS TAB ────────────────────────────────────────────────────
function ContactTab() {
  const allConfig = useQuery(api.cms.getAllConfig);
  const setConfig = useMutation(api.cms.setConfig);

  if (!allConfig) return <div className="flex items-center justify-center py-20"><Loader2 className="size-6 animate-spin text-gold" /></div>;

  const config: Record<string, string> = {};
  for (const c of allConfig) config[c.key] = c.value;

  const handleSave = async (key: string, value: string) => {
    await setConfig({ key, value });
    toast.success("Saved");
  };

  return (
    <div className="grid lg:grid-cols-2 gap-6">
      <Section title="Contact Information" icon={<Phone className="size-5" />}>
        <EditableRow label="Phone" value={config.phone || ""} onSave={(v) => handleSave("phone", v)} />
        <EditableRow label="Phone Link" value={config.phoneLink || ""} onSave={(v) => handleSave("phoneLink", v)} />
        <EditableRow label="Email" value={config.email || ""} onSave={(v) => handleSave("email", v)} />
        <EditableRow label="Address" value={config.address || ""} onSave={(v) => handleSave("address", v)} />
      </Section>

      <Section title="Business Hours" icon={<Clock className="size-5" />}>
        <EditableRow label="Mon – Fri" value={config.hoursWeekday || ""} onSave={(v) => handleSave("hoursWeekday", v)} />
        <EditableRow label="Saturday" value={config.hoursSaturday || ""} onSave={(v) => handleSave("hoursSaturday", v)} />
        <EditableRow label="Sunday" value={config.hoursSunday || ""} onSave={(v) => handleSave("hoursSunday", v)} />
      </Section>

      <Section title="Booking & Payments" icon={<Link2 className="size-5" />}>
        <EditableRow label="Booking URL" value={config.bookingUrl || ""} onSave={(v) => handleSave("bookingUrl", v)} />
        <EditableRow label="Ceramic Deposit" value={config.ceramicDepositUrl || ""} onSave={(v) => handleSave("ceramicDepositUrl", v)} />
        <EditableRow label="Gift Cards" value={config.giftCardsUrl || ""} onSave={(v) => handleSave("giftCardsUrl", v)} />
        <EditableRow label="Wisetack" value={config.wisetackUrl || ""} onSave={(v) => handleSave("wisetackUrl", v)} />
      </Section>

      <Section title="Social Media" icon={<Link2 className="size-5" />}>
        <EditableRow label="Instagram" value={config.instagramUrl || ""} onSave={(v) => handleSave("instagramUrl", v)} />
        <EditableRow label="Facebook" value={config.facebookUrl || ""} onSave={(v) => handleSave("facebookUrl", v)} />
        <EditableRow label="Google Business" value={config.googleBusinessUrl || ""} onSave={(v) => handleSave("googleBusinessUrl", v)} />
      </Section>

      <Section title="Book Now Buttons" icon={<ChevronRight className="size-5" />}>
        <p className="text-xs text-muted-foreground mb-3">Set a custom checkout URL for each section's "Book Now" button. Leave blank to use the main booking widget page.</p>
        <EditableRow label="Full Detail" value={config.bookingUrlFullDetail || ""} onSave={(v) => handleSave("bookingUrlFullDetail", v)} />
        <EditableRow label="Interior Detail" value={config.bookingUrlInterior || ""} onSave={(v) => handleSave("bookingUrlInterior", v)} />
        <EditableRow label="Exterior Detail" value={config.bookingUrlExterior || ""} onSave={(v) => handleSave("bookingUrlExterior", v)} />
        <EditableRow label="Add-Ons / Package" value={config.bookingUrlAddOns || ""} onSave={(v) => handleSave("bookingUrlAddOns", v)} />
        <EditableRow label="Paint Correction" value={config.bookingUrlPaintCorrection || ""} onSave={(v) => handleSave("bookingUrlPaintCorrection", v)} />
        <EditableRow label="Home Page CTA" value={config.bookingUrlHomeCta || ""} onSave={(v) => handleSave("bookingUrlHomeCta", v)} />
      </Section>
    </div>
  );
}

// ─── SERVICES TAB ────────────────────────────────────────────────────────────
function ServicesTab() {
  return (
    <div className="grid lg:grid-cols-2 gap-6">
      <Section title="Standard Detail & Interior" icon={<Star className="size-5" />}>
        <StandardDetailEditor />
        <ServiceEditor category="interiorPackages" categoryLabel="Interior Packages" />
        <ServiceEditor category="interiorAddons" categoryLabel="Interior Add-ons" />
      </Section>

      <Section title="Exterior & Ceramic" icon={<Star className="size-5" />}>
        <ServiceEditor category="exteriorPackages" categoryLabel="Exterior Packages" />
        <ServiceEditor category="exteriorAddons" categoryLabel="Exterior Add-ons" />
        <ServiceEditor category="ceramicAddons" categoryLabel="Ceramic Add-ons" />
      </Section>
    </div>
  );
}

// ─── MEMBERSHIPS TAB ─────────────────────────────────────────────────────────
function MembershipsTab() {
  return (
    <Section title="Membership Plans" icon={<DollarSign className="size-5" />}>
      <p className="text-sm text-muted-foreground mb-4">Click the edit icon on any plan to update its name, price, features, or Square payment link.</p>
      <MembershipEditor />
    </Section>
  );
}

// ─── MAIN ADMIN DASHBOARD ────────────────────────────────────────────────────
function AdminDashboard() {
  const [tab, setTab] = useState<Tab>("overview");
  const seed = useMutation(api.cms.checkAndSeed);
  const allConfig = useQuery(api.cms.getAllConfig);

  // Auto-seed on first load
  useEffect(() => {
    if (allConfig !== undefined && allConfig.length === 0) {
      seed().then((seeded) => {
        if (seeded) toast.success("CMS initialized with default content");
      }).catch(console.error);
    }
  }, [allConfig, seed]);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-card/50">
        <div className="container py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/images/logo-full-white.png" alt="ProWorx" className="h-8" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
            <img src="/images/logo-horizontal.png" alt="ProWorx" className="h-8" />
            <span className="text-sm font-semibold text-gold border border-gold/30 rounded-md px-2 py-0.5">Admin</span>
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="text-muted-foreground"
            onClick={() => { localStorage.removeItem("pw_admin"); window.location.reload(); }}
          >
            <LogOut className="size-4 mr-1.5" /> Sign Out
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="container py-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-2">Site Manager</h1>
          <p className="text-muted-foreground text-sm">Edit your website content directly. Changes are live instantly.</p>
        </div>

        {/* Tabs */}
        <div className="mb-8">
          <TabNav active={tab} onChange={setTab} />
        </div>

        {/* Tab Content */}
        {tab === "overview" && <OverviewTab />}
        {tab === "contact" && <ContactTab />}
        {tab === "services" && <ServicesTab />}
        {tab === "memberships" && <MembershipsTab />}
      </div>
    </div>
  );
}

// ─── ENTRY POINT ─────────────────────────────────────────────────────────────
export function AdminPage() {
  const [authed, setAuthed] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("pw_admin") === "1") {
      setAuthed(true);
    }
  }, []);

  if (!authed) {
    return <PasswordGate onAuth={() => setAuthed(true)} />;
  }

  return <AdminDashboard />;
}
