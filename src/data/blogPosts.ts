export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  imageAlt: string;
  publishedAt: string; // ISO date
  readingTime: string;
  content: BlogSection[];
}

export interface BlogSection {
  heading?: string;
  body: string; // supports HTML
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "how-often-should-you-detail-your-car",
    title: "How Often Should You Detail Your Car?",
    excerpt:
      "Most car owners wait too long between details. Learn the recommended schedule based on your driving habits, environment, and vehicle type — plus how a maintenance plan saves you money long-term.",
    category: "Car Care Tips",
    image: "/images/rangerover-front.jpg",
    imageAlt: "Freshly detailed Range Rover showcasing a showroom-quality finish",
    publishedAt: "2026-03-15",
    readingTime: "6 min read",
    content: [
      {
        body: `<p>If you've ever wondered "how often should I get my car detailed?" — you're not alone. It's one of the most common questions we hear at ProWorx. The short answer is <strong>every 4–6 weeks for a maintenance detail</strong> and <strong>every 6–12 months for a full interior and exterior detail</strong>. But the real answer depends on how you drive, where you park, and what you want your vehicle to look like.</p>`,
      },
      {
        heading: "The Difference Between a Car Wash and a Detail",
        body: `<p>A car wash removes surface dirt. A <strong>professional detail</strong> goes far deeper — decontaminating the paint, deep-cleaning the interior, conditioning leather, polishing surfaces, and protecting everything with sealants or ceramic coatings. Think of it like the difference between brushing your teeth and going to the dentist.</p>
<p>At ProWorx, our <a href="/services">full detail packages</a> include everything from a thorough hand wash and clay bar treatment to interior steam cleaning and UV protection — all done at your location with our fully-equipped mobile setup.</p>`,
      },
      {
        heading: "Recommended Detailing Schedule",
        body: `<p>Here's a general guide based on typical driving conditions in the Charlotte, NC area:</p>
<ul>
<li><strong>Every 2–4 weeks:</strong> Exterior maintenance wash (especially during pollen season in the Carolinas — March through May is brutal)</li>
<li><strong>Every 4–8 weeks:</strong> Interior wipe-down, vacuum, and quick exterior detail</li>
<li><strong>Every 6 months:</strong> Full interior and exterior detail with paint decontamination</li>
<li><strong>Annually:</strong> Paint correction and/or ceramic coating top-up</li>
</ul>
<p>If you park outdoors, have kids or pets, or drive frequently on highways, you'll want to lean toward the shorter intervals. Tree sap, bird droppings, and road grime actively damage your clear coat if left too long.</p>`,
      },
      {
        heading: "Why a Maintenance Plan Makes Sense",
        body: `<p>One-off details are great, but the real value is in <strong>consistent care</strong>. That's why we created our <a href="/maintenance">monthly maintenance plans</a> — starting at just $59/month for exterior care. Regular maintenance keeps your paint protected, your interior fresh, and your vehicle's resale value high.</p>
<p>Think about it: a single paint correction job to fix years of neglect can cost $500–$1,000+. Monthly maintenance prevents that damage from ever accumulating in the first place.</p>`,
      },
      {
        heading: "Signs Your Car Needs a Detail Right Now",
        body: `<ul>
<li>Your paint feels rough or gritty to the touch (contamination buildup)</li>
<li>Water no longer beads on the surface (your protection has worn off)</li>
<li>The interior smells stale or musty</li>
<li>You can see swirl marks or scratches in direct sunlight</li>
<li>Dashboard and trim look faded or chalky</li>
</ul>
<p>If any of these sound familiar, it's time. <a href="https://book.proworxdetailing.com/book" target="_blank" rel="noopener noreferrer">Book a detail today</a> and we'll come to you — anywhere in the <a href="/areas">Charlotte metro area</a>.</p>`,
      },
    ],
  },
  {
    slug: "ceramic-coating-vs-wax-which-is-better",
    title: "Ceramic Coating vs. Wax: Which Is Better?",
    excerpt:
      "Wax gives you a beautiful shine that lasts weeks. Ceramic coating gives you protection that lasts years. Here's an honest comparison to help you decide which is right for your vehicle and budget.",
    category: "Paint Protection",
    image: "/images/escalade-rear.jpg",
    imageAlt: "Cadillac Escalade with deep gloss ceramic coating reflecting the surroundings",
    publishedAt: "2026-03-10",
    readingTime: "7 min read",
    content: [
      {
        body: `<p>The debate between ceramic coating and traditional wax is one of the biggest in the detailing world. Both protect your paint and make your car look incredible — but they work very differently, last different amounts of time, and cost very different amounts. Let's break it down honestly.</p>`,
      },
      {
        heading: "What Is Car Wax?",
        body: `<p>Car wax (including synthetic sealants) is a <strong>sacrificial layer</strong> that sits on top of your clear coat. It creates a slick, shiny surface that repels water and provides some UV protection. Natural carnauba wax gives the warmest, deepest glow — but it typically lasts only <strong>4–8 weeks</strong> before it washes away.</p>
<p>Pros: affordable ($30–$60 per application at a detail shop), beautiful warm shine, easy to reapply. Cons: short-lived, doesn't protect against chemical etching, requires frequent reapplication.</p>`,
      },
      {
        heading: "What Is Ceramic Coating?",
        body: `<p>A professional-grade ceramic coating is a <strong>semi-permanent chemical bond</strong> with your vehicle's clear coat. It creates a glass-like layer of protection that's significantly harder than wax and lasts <strong>1–10+ years</strong> depending on the product and application.</p>
<p>At ProWorx, we're certified installers of <strong>Gyeon and IGL ceramic coatings</strong> — two of the most respected brands in the industry. Our <a href="/ceramic-coating">ceramic coating packages</a> range from 1-year protection (GYEON Q² One EVO) all the way to 10-year protection (GYEON Q² Mohs EVO).</p>`,
      },
      {
        heading: "Head-to-Head Comparison",
        body: `<table>
<thead><tr><th>Factor</th><th>Wax / Sealant</th><th>Ceramic Coating</th></tr></thead>
<tbody>
<tr><td><strong>Durability</strong></td><td>4–8 weeks</td><td>1–10 years</td></tr>
<tr><td><strong>Hardness</strong></td><td>Soft (sacrificial)</td><td>9H hardness rating</td></tr>
<tr><td><strong>Hydrophobic</strong></td><td>Moderate</td><td>Extreme water beading</td></tr>
<tr><td><strong>UV Protection</strong></td><td>Minimal</td><td>Strong</td></tr>
<tr><td><strong>Chemical Resistance</strong></td><td>Low</td><td>High</td></tr>
<tr><td><strong>Cost</strong></td><td>$30–$80 per application</td><td>$499–$2,499 (one-time)</td></tr>
<tr><td><strong>Maintenance</strong></td><td>Reapply monthly</td><td>Wash normally + annual inspection</td></tr>
</tbody>
</table>`,
      },
      {
        heading: "Which Should You Choose?",
        body: `<p><strong>Choose wax if:</strong> You're on a tight budget, you enjoy waxing your car yourself as a hobby, or you're planning to sell the vehicle soon and just want it looking great for a few weeks.</p>
<p><strong>Choose ceramic coating if:</strong> You want long-term protection, you hate re-waxing every month, your car sits outside, or you're investing in keeping the vehicle for years. The cost per year of a ceramic coating is often <em>less</em> than waxing monthly.</p>
<p>Many of our clients start with a <a href="/services">full detail</a> to get the paint perfect, then add a ceramic coating for long-lasting protection. If your paint has swirl marks or scratches, <a href="/paint-correction">paint correction</a> before coating ensures you're locking in a flawless finish — not sealing in imperfections.</p>
<p>Curious about pricing for your specific vehicle? <a href="https://book.proworxdetailing.com/book" target="_blank" rel="noopener noreferrer">Get a quote</a> — we'll walk you through the options.</p>`,
      },
    ],
  },
  {
    slug: "what-is-paint-correction",
    title: "What Is Paint Correction?",
    excerpt:
      "Swirl marks, scratches, water spots, and oxidation — paint correction removes them all. Learn what the process involves, how it works, and when your vehicle actually needs it.",
    category: "Paint Protection",
    image: "/images/corvette-rear.jpg",
    imageAlt: "Corvette showing mirror-like finish after professional paint correction",
    publishedAt: "2026-03-01",
    readingTime: "6 min read",
    content: [
      {
        body: `<p>Have you ever looked at your car in direct sunlight and noticed a spiderweb of fine scratches covering the paint? Those are <strong>swirl marks</strong> — and nearly every vehicle on the road has them. Paint correction is the professional process of removing these imperfections to restore your paint to a factory-fresh (or better) finish.</p>`,
      },
      {
        heading: "How Paint Gets Damaged",
        body: `<p>Your car's clear coat is surprisingly delicate. Here are the most common culprits:</p>
<ul>
<li><strong>Automatic car washes</strong> — The spinning brushes at drive-through washes are the #1 cause of swirl marks. Those brushes drag dirt across your paint thousands of times per wash.</li>
<li><strong>Improper hand washing</strong> — Using a single bucket, dirty sponges, or dish soap breaks down protection and grinds contaminants into the surface.</li>
<li><strong>Environmental factors</strong> — Tree sap, bird droppings, hard water spots, industrial fallout, and UV exposure all etch and damage clear coat over time.</li>
<li><strong>Road debris</strong> — Gravel, sand, and road salt create chips and micro-scratches.</li>
</ul>`,
      },
      {
        heading: "What Paint Correction Actually Is",
        body: `<p>Paint correction uses <strong>machine polishing</strong> with specialized abrasive compounds to level the clear coat and remove defects. It's not a coating or a cover-up — it's literally removing microscopic layers of damaged clear coat to reveal the pristine paint underneath.</p>
<p>The process typically involves:</p>
<ol>
<li><strong>Thorough wash and decontamination</strong> — Clay bar treatment removes bonded contaminants</li>
<li><strong>Paint depth measurement</strong> — Using a gauge to ensure there's enough clear coat to work with safely</li>
<li><strong>Compounding</strong> — Heavier cuts to remove deeper scratches and defects</li>
<li><strong>Polishing</strong> — Finer passes to refine the finish and maximize gloss</li>
<li><strong>Final inspection</strong> — Under LED panel lights to verify 100% defect removal</li>
</ol>
<p>Our <a href="/paint-correction">paint correction services</a> at ProWorx range from a single-stage polish (great for light swirl removal) to multi-stage correction for heavily damaged paint.</p>`,
      },
      {
        heading: "Does Your Car Need Paint Correction?",
        body: `<p>Here's a simple test: wash your car, park it in direct sunlight, and look at the paint from a 45-degree angle. If you see:</p>
<ul>
<li><strong>Spiderweb/swirl marks</strong> — Yes, you need correction</li>
<li><strong>Visible scratches you can feel with a fingernail</strong> — Likely needs correction (may be too deep for single-stage)</li>
<li><strong>Dull, hazy, or oxidized paint</strong> — Definitely needs correction + coating</li>
<li><strong>Water spots that won't wash off</strong> — These are etched in and need polishing out</li>
</ul>
<p>If your paint looks smooth, glossy, and defect-free — you probably just need a good sealant or <a href="/ceramic-coating">ceramic coating</a> to keep it that way.</p>`,
      },
      {
        heading: "Paint Correction + Ceramic Coating: The Perfect Combo",
        body: `<p>Here's the thing most people don't realize: applying a ceramic coating to damaged paint just <em>locks in</em> the imperfections. That's why we always recommend paint correction <em>before</em> coating. You correct first, then protect.</p>
<p>This combination gives you the absolute best result — a flawless, mirror-like finish protected for years. It's the single best investment you can make in your vehicle's appearance and value.</p>
<p>Ready to see what your paint can really look like? <a href="/contact">Contact us</a> for a free assessment, or <a href="https://book.proworxdetailing.com/book" target="_blank" rel="noopener noreferrer">book online</a> today.</p>`,
      },
    ],
  },
  {
    slug: "benefits-of-mobile-auto-detailing",
    title: "Benefits of Mobile Auto Detailing",
    excerpt:
      "No drop-off. No waiting room. No rearranging your schedule. Mobile detailing brings the shop to your driveway — and the results are just as good (if not better). Here's why it's taking over.",
    category: "Industry Insights",
    image: "/images/porsche-van.jpg",
    imageAlt: "ProWorx mobile detailing van set up next to a Porsche in a residential driveway",
    publishedAt: "2026-02-20",
    readingTime: "5 min read",
    content: [
      {
        body: `<p>Ten years ago, getting your car detailed meant driving to a shop, leaving it for half a day, finding a ride home, and then coming back to pick it up. Today, <strong>mobile detailing</strong> brings professional-grade results directly to your driveway, office, or wherever your vehicle happens to be. And it's growing fast for good reason.</p>`,
      },
      {
        heading: "How Mobile Detailing Works",
        body: `<p>A professional mobile detailer arrives at your location with <strong>everything needed</strong> to perform a full detail — water supply, power, professional-grade tools, premium products, and a portable canopy or tent for weather protection.</p>
<p>At ProWorx, we're completely self-contained. We carry our own water, generator, and professional equipment. We don't need to use your hose, electricity, or anything else. You literally just point us to the car and go about your day.</p>
<p>We serve the entire <a href="/areas">Charlotte metro area</a> — from Waxhaw and Matthews to Huntersville and Fort Mill.</p>`,
      },
      {
        heading: "Why Mobile Beats the Shop",
        body: `<ul>
<li><strong>Zero downtime</strong> — Work from home while we detail your car in the driveway. No trips, no waiting rooms, no Uber rides.</li>
<li><strong>Personal attention</strong> — Mobile detailers typically work on one vehicle at a time. Your car gets 100% focus, not assembly-line treatment.</li>
<li><strong>Same professional results</strong> — We use the same Gyeon, IGL, and premium products that the best shops use. The equipment is the same. The training is the same. The only difference is location.</li>
<li><strong>Convenience for families</strong> — Got kids at home? Pets? Working from home? Mobile detailing fits your life, not the other way around.</li>
<li><strong>Fleet-friendly</strong> — If you manage a <a href="/fleet">business fleet</a>, mobile detailing means zero vehicles off the road. We come to your lot and work through them on-site.</li>
</ul>`,
      },
      {
        heading: "What About Ceramic Coating?",
        body: `<p>Great question. <a href="/ceramic-coating">Ceramic coating</a> can absolutely be applied mobile — and we do it regularly. For standalone ceramic applications, mobile works perfectly. However, for paint correction + ceramic coating combos that require extensive machine polishing, <strong>drop-off is preferred</strong> for the best possible result under controlled conditions.</p>
<p>We'll always be upfront about what can be done mobile versus what benefits from a controlled environment. The goal is always the best result for your vehicle.</p>`,
      },
      {
        heading: "Ready to Try Mobile Detailing?",
        body: `<p>If you've never tried professional mobile detailing, you're in for a treat. Browse our <a href="/services">full detail packages</a> or <a href="https://book.proworxdetailing.com/book" target="_blank" rel="noopener noreferrer">book your first appointment</a> online. We'll handle the rest — you just enjoy the results.</p>`,
      },
    ],
  },
  {
    slug: "how-to-maintain-your-car-between-details",
    title: "How to Maintain Your Car Between Details",
    excerpt:
      "Your detail shouldn't start fading the day after. Here are the pro tips and common mistakes to avoid so your vehicle stays looking freshly detailed for weeks longer.",
    category: "Car Care Tips",
    image: "/images/porsche-foam.jpg",
    imageAlt: "Porsche covered in foam during a professional maintenance wash",
    publishedAt: "2026-02-10",
    readingTime: "5 min read",
    content: [
      {
        body: `<p>You just got your car professionally detailed and it looks absolutely stunning. Now the question is: how do you keep it looking that way? Here are the tips we give every single client after their appointment.</p>`,
      },
      {
        heading: "The Golden Rules of Paint Care",
        body: `<ul>
<li><strong>Never use automatic car washes.</strong> This is the single most important rule. Drive-through car washes with spinning brushes create hundreds of micro-scratches every single visit. If you must use one, touchless-only.</li>
<li><strong>Use the two-bucket method.</strong> One bucket with soapy water, one with clean rinse water. Rinse your mitt in the clean bucket before reloading with soap. This prevents dragging dirt across the paint.</li>
<li><strong>Wash in the shade.</strong> Direct sunlight causes soap to dry on the paint before you can rinse it, leaving water spots and streaks.</li>
<li><strong>Use a dedicated car wash soap.</strong> Not dish soap, not laundry detergent. These strip wax and sealant. A pH-neutral car wash soap cleans without stripping your protection.</li>
<li><strong>Dry with a microfiber drying towel.</strong> Never let your car air-dry — that's how water spots form. A quality waffle-weave or twist-pile microfiber makes drying fast and scratch-free.</li>
</ul>`,
      },
      {
        heading: "Interior Maintenance Tips",
        body: `<ul>
<li><strong>Keep a small trash container in the car</strong> — Sounds simple, but it's the #1 way to prevent interior clutter and stains.</li>
<li><strong>Wipe down surfaces weekly</strong> — A quick pass with an interior detailer spray and microfiber cloth keeps dust and grime from building up.</li>
<li><strong>Vacuum floor mats regularly</strong> — Dirt on floor mats gets ground into carpet. Shake them out or vacuum once a week.</li>
<li><strong>Condition leather every 2–3 months</strong> — Leather dries out, especially in the Carolina heat. A good conditioner prevents cracking and keeps it supple.</li>
<li><strong>Don't eat in the car</strong> — We know, easier said than done. But food crumbs in seat crevices and cup holder residue are the top interior complaints we see.</li>
</ul>`,
      },
      {
        heading: "What If You Have Ceramic Coating?",
        body: `<p>If you have a <a href="/ceramic-coating">ceramic coating</a>, maintenance is actually easier. The hydrophobic surface repels dirt and water, so washes take half the time. But you still need to wash regularly — ceramic coatings aren't self-cleaning.</p>
<p>For coated vehicles, we recommend:</p>
<ul>
<li>Bi-weekly hand wash with a ceramic-safe soap (pH-neutral)</li>
<li>Avoid wax or sealant products (they can interfere with the coating)</li>
<li>Annual professional inspection and decontamination wash</li>
<li>Use a ceramic coating maintenance spray (like GYEON Cure) for extra gloss between washes</li>
</ul>`,
      },
      {
        heading: "Consider a Maintenance Plan",
        body: `<p>The easiest way to keep your vehicle looking its best? Let us handle it. Our <a href="/maintenance">monthly maintenance plans</a> start at $59/month and include regular professional care so you never have to worry about it. We come to you on a regular schedule, keep your vehicle protected, and catch any issues before they become problems.</p>
<p>Already a client? <a href="https://book.proworxdetailing.com/book" target="_blank" rel="noopener noreferrer">Book your next maintenance wash</a> and keep that shine going.</p>`,
      },
    ],
  },
  {
    slug: "is-ceramic-coating-worth-it",
    title: "Is Ceramic Coating Worth It?",
    excerpt:
      "Ceramic coating isn't cheap — packages range from $499 to $2,499+. But when you break down the math over 3–10 years of ownership, it often pays for itself. Here's the real breakdown.",
    category: "Paint Protection",
    image: "/images/aston-front.jpg",
    imageAlt: "Aston Martin with professional ceramic coating showing brilliant reflections",
    publishedAt: "2026-01-25",
    readingTime: "7 min read",
    content: [
      {
        body: `<p>We get this question constantly: <em>"Is ceramic coating really worth the money?"</em> It's a fair question. A professional ceramic coating installation ranges from $499 to $2,499+ depending on the package and vehicle size. That's real money. So let's look at the actual numbers.</p>`,
      },
      {
        heading: "The True Cost of NOT Having Ceramic Coating",
        body: `<p>Without ceramic coating, here's what you're likely spending annually to keep your paint protected and looking good:</p>
<ul>
<li><strong>Wax/sealant applications</strong> — 6–12 per year at $40–$80 each = <strong>$240–$960/year</strong></li>
<li><strong>Paint correction</strong> — Every 2–3 years to remove accumulated swirl marks = <strong>$200–$500/visit</strong></li>
<li><strong>Time and effort</strong> — Hours spent washing more carefully, re-waxing, and worrying about bird droppings and tree sap</li>
</ul>
<p>Over 5 years, that's easily <strong>$2,000–$5,000+</strong> in product and services — plus the slow degradation of your paint and resale value.</p>`,
      },
      {
        heading: "The Ceramic Coating Math",
        body: `<p>Let's take our most popular package as an example — the <a href="/ceramic-coating">GYEON Q² Pure EVO (3-year protection)</a> starting at $899:</p>
<ul>
<li><strong>Cost:</strong> $899 (one-time)</li>
<li><strong>Protection:</strong> 3 years</li>
<li><strong>Cost per year:</strong> ~$300/year</li>
<li><strong>Cost per month:</strong> ~$25/month</li>
</ul>
<p>For $25/month, you get superior protection against UV rays, chemical etching, bird droppings, tree sap, water spots, and oxidation. Your washes take half the time. Your paint stays glossy without constant waxing. And when it's time to sell or trade in, your paint condition directly impacts your vehicle's value.</p>`,
      },
      {
        heading: "Real-World Benefits Our Clients Notice",
        body: `<ul>
<li><strong>Easier washing</strong> — Dirt slides off a ceramic-coated surface. What used to be a 2-hour wash becomes a 30-minute rinse.</li>
<li><strong>No more water spots</strong> — The hydrophobic surface sheds water so effectively that spots rarely form.</li>
<li><strong>Bird droppings and sap wipe right off</strong> — No more panic when you see a bird hit on your hood. It comes off with a simple wipe instead of etching into your clear coat.</li>
<li><strong>Insane gloss</strong> — There's a reason people stop and ask "did you just get it painted?" A ceramic-coated car has a depth of shine that wax can't match.</li>
<li><strong>Resale value</strong> — Perfect paint condition can add $1,000–$3,000+ to your vehicle's resale value, depending on the car.</li>
</ul>`,
      },
      {
        heading: "When Ceramic Coating is NOT Worth It",
        body: `<p>Let's be honest — ceramic coating isn't for everyone:</p>
<ul>
<li><strong>If you're selling the car within 6 months</strong> — A good detail and wax will do. The coating won't provide enough value in that short window.</li>
<li><strong>If the paint is already severely damaged</strong> — You'll need <a href="/paint-correction">paint correction</a> first. Coating over scratches just seals them in.</li>
<li><strong>If you expect it to be bulletproof</strong> — Ceramic coating is not a magic shield. Rock chips still happen. You still need to wash the car. It's protection, not invincibility.</li>
</ul>
<p>For most vehicle owners who plan to keep their car 2+ years, ceramic coating is one of the smartest investments you can make. <a href="/contact">Contact us</a> for a free consultation and we'll help you figure out the right package for your vehicle and budget.</p>`,
      },
    ],
  },
  {
    slug: "interior-detailing-what-to-expect",
    title: "Interior Detailing: What to Expect",
    excerpt:
      "A professional interior detail goes far beyond vacuuming. From steam cleaning and leather conditioning to odor treatment and UV protection — here's exactly what happens when we clean your car's interior.",
    category: "Car Care Tips",
    image: "/images/porsche-interior.jpg",
    imageAlt: "Porsche interior meticulously detailed with conditioned leather and clean surfaces",
    publishedAt: "2026-01-15",
    readingTime: "5 min read",
    content: [
      {
        body: `<p>When most people think of "getting the inside of the car cleaned," they picture a quick vacuum and wipe-down. A professional interior detail is a completely different experience. Here's what actually happens — and why it makes such a dramatic difference.</p>`,
      },
      {
        heading: "The Full Interior Detail Process",
        body: `<p>A thorough interior detail at ProWorx includes:</p>
<ol>
<li><strong>Full vacuum</strong> — Seats, carpets, floor mats, trunk, and every crevice. We use commercial-grade extraction vacuums, not a shop-vac.</li>
<li><strong>Steam cleaning</strong> — High-temperature steam sanitizes and deep-cleans vents, cupholders, buttons, crevices, and hard-to-reach areas. Kills bacteria and removes built-up grime without chemicals.</li>
<li><strong>All-surface wipe-down</strong> — Dashboard, center console, door panels, steering wheel, gear shifter, and every touchpoint gets cleaned and conditioned.</li>
<li><strong>Leather/vinyl conditioning</strong> — Proper conditioning prevents cracking, fading, and that dried-out look. Especially critical in the North Carolina heat.</li>
<li><strong>Glass cleaning</strong> — Interior windows get streak-free treatment. You'd be amazed how much film builds up on the inside of your windshield.</li>
<li><strong>UV protection</strong> — <a href="/services">Our packages</a> include UV protection on plastics and vinyl to prevent sun damage and fading.</li>
</ol>`,
      },
      {
        heading: "Optional Deep-Clean Services",
        body: `<p>Beyond the standard interior detail, we offer specialized services for tougher jobs:</p>
<ul>
<li><strong>Pet hair removal ($80)</strong> — Pet owners know the struggle. We use specialized tools and techniques to remove embedded pet hair from fabric and carpet.</li>
<li><strong>Stain removal ($45)</strong> — Coffee spills, food stains, ink marks — we have targeted treatments for specific types of stains.</li>
<li><strong>Odor/ozone treatment ($45)</strong> — Smoke smell? Mildew? Pet odor? Our ozone generator doesn't just mask odors — it chemically neutralizes them.</li>
<li><strong>Leather deep clean & condition ($25)</strong> — For leather that's been neglected and needs serious restoration.</li>
</ul>
<p>Check out our full <a href="/services">services menu</a> for pricing and details on every option.</p>`,
      },
      {
        heading: "How Often Should You Get an Interior Detail?",
        body: `<p>For most people, a <strong>full interior detail every 3–6 months</strong> keeps everything in great shape. Between full details, a monthly <a href="/maintenance">maintenance plan</a> keeps surfaces clean and protected.</p>
<p>If you have kids, pets, or eat in your car frequently, every 2–3 months is more appropriate. Families with young children are some of our most loyal clients — once you see (and smell) the difference, you won't go back.</p>`,
      },
      {
        heading: "Why Interior Detailing Matters for Your Health",
        body: `<p>Here's something most people don't think about: your car's interior is a <strong>breeding ground for bacteria</strong>. Studies have shown that the average steering wheel has more bacteria than a public toilet seat. Cup holders, door handles, and gear shifters aren't much better.</p>
<p>Our steam cleaning process reaches 300°F+ and kills 99.9% of bacteria and allergens. If you have allergies, young kids, or just want a genuinely clean environment, professional interior detailing isn't a luxury — it's hygiene.</p>
<p>Ready for a fresh interior? <a href="https://book.proworxdetailing.com/book" target="_blank" rel="noopener noreferrer">Book online</a> and we'll transform your car's cabin.</p>`,
      },
    ],
  },
  {
    slug: "boat-detailing-guide",
    title: "Boat Detailing 101: A Complete Guide",
    excerpt:
      "Your boat takes a beating from sun, salt, algae, and water. Professional marine detailing preserves its value and keeps it looking showroom-ready. Here's what every boat owner should know.",
    category: "Marine Care",
    image: "/images/boat-exterior.webp",
    imageAlt: "Freshly detailed boat exterior showing restored gel coat shine",
    publishedAt: "2026-01-05",
    readingTime: "6 min read",
    content: [
      {
        body: `<p>Whether you've got a bass boat on Lake Wylie or a pontoon on Lake Norman, your watercraft is a significant investment — and the elements are constantly trying to destroy it. Sun, water, algae, and environmental fallout take a serious toll on gel coat, upholstery, and hardware. Professional <a href="/boat-detailing">boat detailing</a> isn't just about appearances — it's about protecting your investment.</p>`,
      },
      {
        heading: "Why Boats Need Different Care Than Cars",
        body: `<p>Marine environments are <em>far</em> harsher than road conditions:</p>
<ul>
<li><strong>UV exposure</strong> — Boats get relentless sun exposure with no shade. Gel coat oxidation, fading, and chalking happen fast without protection.</li>
<li><strong>Water damage</strong> — Constant water contact causes mineral deposits, water line staining, and promotes algae/mold growth.</li>
<li><strong>Salt and chemicals</strong> — Even freshwater lakes have minerals that etch and stain surfaces over time.</li>
<li><strong>Upholstery abuse</strong> — Marine vinyl takes a beating from sunscreen, wet swimsuits, cooler spills, and UV degradation.</li>
</ul>`,
      },
      {
        heading: "What Professional Boat Detailing Includes",
        body: `<p>A comprehensive marine detail covers far more than just washing the hull:</p>
<ul>
<li><strong>Hull wash and decontamination</strong> — Remove water line staining, algae, and oxidation</li>
<li><strong>Gel coat restoration</strong> — Machine polishing to remove oxidation and restore the original shine and color depth</li>
<li><strong>Marine ceramic coating or sealant</strong> — Long-lasting protection against UV, water spots, and staining</li>
<li><strong>Interior deep clean</strong> — Seats, carpet, dash, storage compartments</li>
<li><strong>Vinyl restoration and UV protection</strong> — Condition and protect marine upholstery</li>
<li><strong>Metal polishing</strong> — Chrome, stainless steel, and aluminum hardware restored to a mirror finish</li>
</ul>
<p>At ProWorx, we bring the same professional equipment and premium products to your boat that we use on luxury vehicles. <a href="/boat-detailing">View our marine detailing services</a> for full details.</p>`,
      },
      {
        heading: "How Often Should You Detail Your Boat?",
        body: `<ul>
<li><strong>Pre-season (spring)</strong> — Full detail + ceramic protection before launching. This is the most important one.</li>
<li><strong>Mid-season (July/August)</strong> — Maintenance wash and protection reapplication. Heavy use months need a refresh.</li>
<li><strong>Post-season (fall)</strong> — Thorough cleaning and winterization protection before storage.</li>
<li><strong>As needed</strong> — After any heavy use, long trips, or if you notice oxidation building up.</li>
</ul>
<p>Lake Norman and Lake Wylie boat owners: we come to your dock, marina, or driveway. <a href="/contact">Contact us</a> to schedule your marine detail.</p>`,
      },
    ],
  },
];

/** Look up a single blog post by slug */
export function getBlogPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
