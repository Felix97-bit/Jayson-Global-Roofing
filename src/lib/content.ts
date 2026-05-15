/**
 * Edit your website text here.
 *
 * Every piece of body copy, every headline, every CTA label — they all live
 * in this file. Open it, find the line you want, change the text inside the
 * quotes, save, and the change appears site-wide.
 *
 * If you need to add a new project, review, or FAQ, those are arrays in
 * /src/data/projects.ts, /src/data/reviews.ts, and /src/data/faqs.ts.
 */

export const SITE = {
  name: "Jayson Global Roofing",
  shortName: "Jayson Global",
  legalName: "Jayson Global Roofing and Exteriors",
  tagline: "Family-owned and operated since 1988",
  trustStrip:
    "A+ BBB · IKO RoofPro Craftsman Premier · Malarkey Emerald Pro · Haag Certified Inspectors · 350+ five-star reviews",
  email: "info@jaysonglobal.com",
  hours: "Mon–Fri, 8:00 AM – 4:30 PM",
  phoneEdmonton: "(780) 438-0331",
  phoneEdmontonAlt: "(587) 413-5190",
  phoneCalgary: "(403) 444-3040",
  phoneCalgaryAlt: "(587) 324-7605",
  primaryPhone: "(780) 438-0331",
  primaryPhoneTel: "+17804380331",
  addressEdmonton: "9810 62 Ave NW, Edmonton, AB T6E 0E3",
  addressCalgary: "4546 14th Street NE, Calgary, AB T2E 6L7",
  founded: "1988",
  yearsInBusiness: 37,
  reviewCount: 350,
  averageRating: 4.7,
  liability: "$5M",
  footerNote: "WCB Insured · $5M Liability · A+ BBB",
};

export const NAV = {
  links: [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/projects" },
    { label: "Reviews", href: "/reviews" },
    { label: "Service Areas", href: "/service-areas" },
    { label: "Contact", href: "/contact" },
  ],
  servicesDropdown: [
    { label: "Residential Roofing", href: "/services/residential-roofing" },
    { label: "Commercial & Flat Roofing", href: "/services/commercial-roofing" },
    { label: "Storm Damage & Insurance", href: "/services/storm-and-insurance" },
    { label: "Siding & Exteriors", href: "/services/siding-and-exteriors" },
  ],
  ctaLabel: "Get a Free Quote",
};

export const HOME = {
  heroEyebrow: "EDMONTON & CALGARY · SINCE 1988",
  heroHeadline:
    "The roof over your family's head deserves a family's name on it.",
  heroSubhead:
    "Second-generation Alberta roofers. Premium shingles, real warranties, and the kind of crew that cleans up before they leave.",
  heroPrimaryCta: "Get a Free Quote",
  heroSecondaryCta: "Call (780) 438-0331",

  introEyebrow: "WHO WE ARE",
  introHeadline: "A family business, in the most literal sense.",
  introBody1:
    "John Bunce founded the company in 1988 and named it 4 Jay Roofing — one J for each of his four Js: John, his wife Joy, son Jonathan, and daughter Jennifer. Seven years later, Jonathan took over the books, the trucks, and the crew, and rebranded as Jayson Roofing.",
  introBody2:
    "In 2011 we merged with Global Roof Systems and became Jayson Global. Joy still helps run the office. Jennifer manages the front desk. Jonathan still walks roofs. The name on the truck is the family in the truck.",

  stats: [
    { value: 37, suffix: "", label: "Years in business" },
    { value: 350, suffix: "+", label: "Five-star reviews" },
    { value: 5, prefix: "$", suffix: "M", label: "Liability insurance" },
    { value: 2, suffix: "", label: "Alberta cities served" },
  ],

  servicesEyebrow: "WHAT WE DO",
  servicesHeadline: "Full-envelope exterior contractors.",
  servicesSubhead:
    "Roof, walls, trim, gutters, and the insulation behind it all — installed by one crew, warrantied by one company.",

  projectsEyebrow: "RECENT WORK",
  projectsHeadline: "Roofs we're proud of.",
  projectsSubhead:
    "A handful of recent installs across central Alberta. The full portfolio lives over on the projects page.",

  reviewsEyebrow: "WHAT HOMEOWNERS SAY",
  reviewsHeadline: "4.7 stars across 350+ reviews.",
  reviewsSubhead:
    "Three decades of Edmonton and Calgary homeowners have left us their words. Here are a few.",

  areasEyebrow: "WHERE WE WORK",
  areasHeadline: "Edmonton, Calgary, and most of central Alberta.",
  areasBody:
    "We run two yards — one in south Edmonton and one in northeast Calgary — and our trucks pull out daily to homes from Stony Plain to Okotoks. If you're between us, we're probably already there.",

  ctaHeadline: "Storm last night? Shingles in the yard?",
  ctaSubhead:
    "Free, no-pressure inspections — usually within 24 hours. Insurance claims handled in-house, start to finish.",
};

export const SERVICES_LIST = [
  {
    slug: "residential-roofing",
    title: "Residential Roofing",
    blurb:
      "Asphalt shingles, metal, cedar, tile. Lifetime product warranties from IKO, Malarkey, and BP, backed by a 10-year workmanship warranty.",
    icon: "Home",
    href: "/services/residential-roofing",
  },
  {
    slug: "commercial-roofing",
    title: "Commercial & Flat Roofing",
    blurb:
      "BUR, SBS, PVC, TPO, EPDM, and metal decking for retail, multi-family, and industrial. Maintenance programs available.",
    icon: "Building2",
    href: "/services/commercial-roofing",
  },
  {
    slug: "storm-and-insurance",
    title: "Storm Damage & Insurance",
    blurb:
      "Haag Certified Inspectors, in-house claims handling. We work directly with your adjuster so you don't have to.",
    icon: "CloudLightning",
    href: "/services/storm-and-insurance",
  },
  {
    slug: "siding-and-cladding",
    title: "Siding & Cladding",
    blurb:
      "Vinyl, fibre cement, and engineered wood. Properly tied flashings where the wall meets the roof.",
    icon: "Layers",
    href: "/services/siding-and-exteriors#siding",
  },
  {
    slug: "gutters",
    title: "Gutters & Eavestroughs",
    blurb:
      "Seamless 5\" and 6\" aluminum, leaf guards, downspouts. Sized for Alberta's freeze-thaw and the runoff it creates.",
    icon: "ArrowDownToLine",
    href: "/services/siding-and-exteriors#gutters",
  },
  {
    slug: "insulation",
    title: "Attic Insulation",
    blurb:
      "Blown-in cellulose and fibreglass top-ups. Stops ice damming at the source and cuts the heating bill.",
    icon: "Thermometer",
    href: "/services/siding-and-exteriors#insulation",
  },
];

export const ABOUT = {
  heroEyebrow: "OUR STORY",
  heroHeadline: "Four Js, one roof, thirty-seven years.",
  heroSubhead:
    "How a family of four became one of Alberta's most-recommended roofing contractors.",

  chapters: [
    {
      year: "1988",
      title: "The four Js",
      body:
        "John Bunce was a journeyman roofer with a young family and a willingness to start his own crew. He named the business 4 Jay Roofing for the four Js under his roof — John, his wife Joy, son Jonathan, and daughter Jennifer. The company was small, the work was steady, and the standard was set early: do the roof the way you'd want it done on your own house.",
    },
    {
      year: "1995",
      title: "The handover",
      body:
        "After seven years of summer work and shoulder-season chaos, Jonathan took over from his father. He kept the family on the books — Joy in the office, Jennifer growing into the role she still holds — and rebranded the company as Jayson Roofing. The trucks were repainted. The standard didn't move.",
    },
    {
      year: "2011",
      title: "The merger",
      body:
        "Alberta's energy boom brought work faster than any single roofer could keep up with. Jayson Roofing merged with Global Roof Systems to broaden into commercial and flat-roof work. The combined company became Jayson Global Roofing and Exteriors — bigger, but still the same family running it.",
    },
    {
      year: "Today",
      title: "Edmonton and Calgary",
      body:
        "We run two locations now — south Edmonton and northeast Calgary — and we've expanded into the full building envelope: siding, gutters, insulation. Joy still works in the office. Jennifer still answers the phone. Jonathan still climbs roofs. The name on the truck is still the family in the truck.",
    },
  ],

  teamEyebrow: "THE PEOPLE",
  teamHeadline: "Leadership.",
  team: [
    {
      name: "Jonathan Bunce",
      role: "President · Second-generation owner",
      initials: "JB",
    },
    {
      name: "Joy Bunce",
      role: "Office & Accounts · Founding family",
      initials: "JB",
    },
    {
      name: "Jennifer Cerra",
      role: "Operations Manager · Founding family",
      initials: "JC",
    },
    {
      name: "Lawrence Roberts",
      role: "Calgary General Manager",
      initials: "LR",
    },
  ],

  certsEyebrow: "CERTIFICATIONS & MEMBERSHIPS",
  certsHeadline: "The credentials behind the work.",
  certs: [
    "IKO RoofPro Craftsman Premier",
    "Malarkey Emerald Pro",
    "Haag Certified Inspectors",
    "BBB Accredited A+ (15+ years)",
    "Edmonton Construction Association",
    "Edmonton Region Home Builders' Association",
    "BILD Alberta",
    "Alberta Allied Roofing Association",
    "National Roofing Contractors Association (NRCA)",
  ],
};

export const SERVICES_OVERVIEW = {
  heroEyebrow: "WHAT WE DO",
  heroHeadline: "One contractor for the entire building envelope.",
  heroSubhead:
    "Roof, walls, trim, gutters, insulation. We install all of it, and when something goes wrong it's one phone call instead of four.",

  introEyebrow: "WHY ONE CONTRACTOR",
  introHeadline: "The roof doesn't end at the eave.",
  introBody:
    "Most roofing problems aren't really about the shingles — they're about the flashing where the roof meets the wall, the gutter that overflowed onto the soffit, the insulation that let warm air leak up and form ice dams. When the same crew installs all of it, those joints get done right the first time. And when you do need a warranty conversation later, you have it once, with us.",
};

export const RESIDENTIAL = {
  heroEyebrow: "RESIDENTIAL ROOFING",
  heroHeadline: "Built for the worst Alberta weather, finished for the prettiest street.",
  heroSubhead:
    "Asphalt, metal, cedar, tile — installed by a crew that's been on Edmonton roofs for three decades.",

  materialsEyebrow: "WHAT WE INSTALL",
  materialsHeadline: "Materials.",
  materials: [
    {
      title: "Architectural asphalt shingles",
      body:
        "IKO Cambridge and Dynasty, Malarkey Vista and Legacy, BP Mystique and Manoir. The standard Alberta roof done at the standard we'd put on our own homes.",
    },
    {
      title: "Standing seam metal",
      body:
        "24-gauge concealed-fastener metal. 50-year paint warranty, sheds snow cleanly, looks sharp on a modern build or a heritage rebuild.",
    },
    {
      title: "Stone-coated steel",
      body:
        "The look of cedar shake or clay tile with the impact rating of metal. A favourite for hail-prone neighbourhoods south of the river.",
    },
    {
      title: "Cedar shakes",
      body:
        "Hand-split #1 cedar for character homes and Glenora restorations. Treated for fire and rot per Edmonton bylaw.",
    },
    {
      title: "Concrete tile",
      body:
        "Heavy, beautiful, and built to outlast the house. We'll inspect your roof structure first to confirm it can carry the load.",
    },
  ],

  processEyebrow: "OUR PROCESS",
  processHeadline: "How a residential job runs.",
  process: [
    {
      step: "1",
      title: "Free inspection with photo report",
      body:
        "An estimator climbs your roof, photographs every slope, valley, and flashing, and emails you the report. No high-pressure sales meeting on your front step.",
    },
    {
      step: "2",
      title: "Written quote and material selection",
      body:
        "Line-by-line pricing, samples in your hand, recommendations based on your roof's pitch, exposure, and your budget.",
    },
    {
      step: "3",
      title: "Schedule and material delivery",
      body:
        "We confirm a start date, pull the permit on your behalf, and deliver shingles and underlayment 24–48 hours ahead so the crew can start at first light.",
    },
    {
      step: "4",
      title: "Tear-off and install",
      body:
        "A typical bungalow takes one day. A two-storey custom takes two. We tarp your landscaping and stage debris into a single bin in the driveway.",
    },
    {
      step: "5",
      title: "Cleanup and final photo report",
      body:
        "We sweep the lawn with a magnet, haul the bin away, and email you a final photo set of the completed roof. The yard goes back the way we found it.",
    },
  ],

  warrantyEyebrow: "WARRANTIES",
  warrantyHeadline: "What's covered, in plain English.",
  warrantyBody:
    "Lifetime manufacturer product warranty on every shingle we install (transferable to a future owner). 10-year Jayson Global workmanship warranty on the install itself. We register the warranty for you and email you the certificate.",
};

export const COMMERCIAL = {
  heroEyebrow: "COMMERCIAL & FLAT ROOFING",
  heroHeadline: "Flat roofs done so the next service call doesn't go to us.",
  heroSubhead:
    "Single-ply, modified bitumen, BUR, and metal decking for retail, multi-family, and industrial buildings across Alberta.",

  systemsEyebrow: "SYSTEMS WE INSTALL",
  systemsHeadline: "The full commercial menu.",
  systems: [
    {
      title: "PVC single-ply",
      body:
        "Hot-air-welded seams, white reflective surface, 20+ year membrane life. The default for new commercial construction.",
    },
    {
      title: "TPO single-ply",
      body:
        "Cost-effective alternative to PVC with similar reflective properties. We carry GAF and Carlisle.",
    },
    {
      title: "EPDM (rubber)",
      body:
        "Dark single-ply membrane, excellent for low-traffic roofs and retrofits over existing torch-down.",
    },
    {
      title: "SBS modified bitumen",
      body:
        "Two-ply torch-applied. Workhorse system for multi-family and walk-on roofs with mechanical equipment.",
    },
    {
      title: "Built-up roofing (BUR)",
      body:
        "Traditional layered tar-and-gravel for institutional buildings where redundancy matters most.",
    },
    {
      title: "Metal decking & standing seam",
      body:
        "Pre-engineered steel buildings, agricultural, and architectural commercial work.",
    },
  ],

  processEyebrow: "OUR PROCESS",
  processHeadline: "How a commercial job runs.",
  process: [
    {
      step: "1",
      title: "Site survey & roof core sample",
      body:
        "We pull a core to confirm existing assembly thickness, insulation R-value, and substrate condition before we write a number.",
    },
    {
      step: "2",
      title: "System spec & engineer-stamped drawings (where required)",
      body:
        "We work with your property manager, architect, or insurer to spec the system that meets your warranty, building code, and budget targets.",
    },
    {
      step: "3",
      title: "Tenant coordination & scheduling",
      body:
        "Phased work, after-hours starts, dust and noise controls — whatever your operation needs.",
    },
    {
      step: "4",
      title: "Install & quality inspections",
      body:
        "Daily progress photos sent to your project manager. Manufacturer rep inspections at hand-off where the warranty requires it.",
    },
    {
      step: "5",
      title: "Maintenance program (optional)",
      body:
        "Twice-yearly inspections, drain clearing, and seam touch-ups to extend membrane life and protect the warranty.",
    },
  ],

  warrantyEyebrow: "WARRANTIES",
  warrantyHeadline: "Manufacturer-backed, properly assigned.",
  warrantyBody:
    "Single-ply systems carry NDL (no-dollar-limit) manufacturer warranties of 15–25 years. We file the warranty paperwork in your building's name and hand you the certificate. On a sale, we re-assign it to the new owner free of charge.",
};

export const STORM = {
  heroEyebrow: "STORM DAMAGE & INSURANCE",
  heroHeadline: "Hail last night? Take a breath. We've done this five thousand times.",
  heroSubhead:
    "Free inspections, Haag Certified documentation, and a claims team that talks to your adjuster so you don't have to.",

  firstStepsEyebrow: "FIRST 24 HOURS",
  firstStepsHeadline: "What to do right now.",
  firstSteps: [
    {
      title: "Stay off the roof",
      body:
        "If you can see damage from the ground, that's enough. A wet hail-struck roof is the easiest way to fall.",
    },
    {
      title: "Document from the ground",
      body:
        "Take wide photos of every side of the house, plus close-ups of any siding dents, gutter damage, or shingle granules in the downspouts.",
    },
    {
      title: "Cover obvious openings",
      body:
        "If you have water coming inside, throw a tarp over the area or call us — we'll come tarp it for you, no charge, before the next system rolls in.",
    },
    {
      title: "Call us before you call your insurer",
      body:
        "We'll do a free Haag-certified inspection and give you a written damage report. Then you can call your insurer with documentation in hand instead of guessing.",
    },
  ],

  claimsEyebrow: "HOW INSURANCE CLAIMS WORK",
  claimsHeadline: "Five steps from storm to new roof.",
  claims: [
    {
      step: "1",
      title: "Free Haag-certified inspection",
      body:
        "We document hail bruising, wind-lifted shingles, granule loss, and collateral damage to siding, gutters, and vents. You get the photo report regardless of whether you file a claim.",
    },
    {
      step: "2",
      title: "Claim filed with your insurer",
      body:
        "You call your insurer with our report. They open a claim and assign an adjuster.",
    },
    {
      step: "3",
      title: "Adjuster meeting",
      body:
        "We meet the adjuster on-site and walk them through the damage together. This single step is the biggest difference in claim outcomes.",
    },
    {
      step: "4",
      title: "Scope agreement & supplements",
      body:
        "We reconcile the adjuster's scope with what the actual install requires. Missing line items (code upgrades, drip edge, ice-and-water shield) get supplemented before work starts.",
    },
    {
      step: "5",
      title: "Install & final invoice to insurer",
      body:
        "We do the work, depreciation gets released by your insurer, and we invoice the carrier directly. Your only out-of-pocket is the deductible.",
    },
  ],

  warrantyEyebrow: "WHY HAAG CERTIFICATION MATTERS",
  warrantyHeadline: "The credential adjusters trust.",
  warrantyBody:
    "Haag is the engineering firm that wrote the standard for storm-damage roof inspection. A Haag-certified inspector's report carries weight in claim disputes — which is why every estimator on our storm team carries the credential.",
};

export const SIDING = {
  heroEyebrow: "SIDING, GUTTERS & INSULATION",
  heroHeadline: "Everything below the shingle line.",
  heroSubhead:
    "Combine the exteriors with the roof and you get one warranty conversation, one crew on-site, and properly tied flashings at every joint.",

  whyEyebrow: "WHY BUNDLE",
  whyHeadline: "One contractor. One warranty. Zero finger-pointing.",
  whyBody:
    "When the roof and the siding are installed by different crews, the flashing where they meet is everyone's job and no one's job. When we do both, that joint is ours, and so is the leak that doesn't happen because of it.",

  siding: {
    eyebrow: "SIDING & CLADDING",
    headline: "Vinyl, fibre cement, engineered wood.",
    body:
      "We install the full Mitten and Kaycan vinyl lines, James Hardie fibre cement, and LP SmartSide engineered wood. Insulated backers and rainscreen detailing where the spec calls for it. Manufacturer warranties up to 50 years on vinyl, 30 years on fibre cement.",
  },

  gutters: {
    eyebrow: "GUTTERS & EAVESTROUGHS",
    headline: "Seamless 5\" and 6\" aluminum.",
    body:
      "Run on-site from a coil, so the only seams are at corners and downspouts. Sized for Alberta's freeze-thaw cycle and the runoff that comes with it. Leaf guards available for treed lots in Riverbend or Bowness.",
  },

  insulation: {
    eyebrow: "ATTIC INSULATION",
    headline: "The cheapest fix for ice damming.",
    body:
      "Most ice dams are an insulation problem, not a roofing problem — warm attic air melts snow on the upper roof, it refreezes at the cold eave, and water backs up under the shingles. A proper R-50 to R-60 blown-in top-up usually fixes the cycle for the cost of a long weekend.",
  },
};

export const PROJECTS = {
  heroEyebrow: "RECENT WORK",
  heroHeadline: "A portfolio that talks for itself.",
  heroSubhead:
    "A sample of recent installs across Edmonton, Calgary, and central Alberta. Filter by category to narrow it down.",
  filters: ["All", "Residential", "Commercial", "Multi-Family", "Storm Restoration"],
};

export const REVIEWS = {
  heroEyebrow: "REVIEWS",
  heroHeadline: "350+ verified reviews. 4.7 stars.",
  heroSubhead:
    "Every word here is from a real Alberta homeowner. Filter by review source if you'd like to see only Google or HomeStars or BBB.",
  pictureReportEyebrow: "WHY WE TAKE PHOTOS",
  pictureReportHeadline: "The picture report.",
  pictureReportBody:
    "Every job — residential, commercial, storm — gets a before-and-after photo set delivered to the homeowner by email. It's the single thing customers mention most often in their reviews. You'd be surprised how rare it still is in this trade.",
  filters: ["All", "Google", "HomeStars", "BBB"],
};

export const CONTACT = {
  heroEyebrow: "CONTACT",
  heroHeadline: "Two yards. One company.",
  heroSubhead:
    "Edmonton headquarters and Calgary location, both staffed Monday through Friday by people who answer the phone.",
  edmontonEyebrow: "EDMONTON",
  calgaryEyebrow: "CALGARY",
  miniFormHeadline: "Or fire over a quick request.",
  miniFormSubhead:
    "Three fields. We'll call you within one business day to set up a free inspection.",
};

export const QUOTE = {
  heroEyebrow: "FREE QUOTE",
  heroHeadline: "Tell us about your roof.",
  heroSubhead:
    "Fill in the form, or call (780) 438-0331 if you'd rather talk to a person. Free inspection, free written quote, no obligation.",
  whatHappensEyebrow: "WHAT HAPPENS NEXT",
  whatHappensHeadline: "Three steps to a written quote.",
  steps: [
    {
      step: "1",
      title: "We call you within one business day",
      body:
        "A real person from our office, not a call centre. We confirm your address, the scope, and a window for the inspection.",
    },
    {
      step: "2",
      title: "Free on-site inspection with photo report",
      body:
        "An estimator climbs the roof, photographs everything, and emails you the full report by end of day.",
    },
    {
      step: "3",
      title: "Written quote, no obligation",
      body:
        "Line-by-line pricing, your material samples, and a recommended start window. The decision is yours, on your timeline.",
    },
  ],
};

export const SERVICE_AREAS = {
  heroEyebrow: "SERVICE AREAS",
  heroHeadline: "Edmonton, Calgary, and the towns between.",
  heroSubhead:
    "Two yards, fourteen-plus communities served daily. If you're in central Alberta, we can probably be on your roof this week.",

  groups: [
    {
      name: "Greater Edmonton",
      driveTime: "0–45 min from our Edmonton yard",
      cities: [
        { name: "Edmonton", note: "Home base. Roofs from Glenora to Riverbend." },
        { name: "Sherwood Park", note: "10 min east. Heavy hail-restoration market." },
        { name: "St. Albert", note: "20 min north. Steep-pitch heritage and new builds." },
        { name: "Spruce Grove", note: "25 min west. Acreage and new-construction work." },
        { name: "Stony Plain", note: "30 min west. Rural homes and shop roofs." },
        { name: "Fort Saskatchewan", note: "30 min northeast. Industrial and residential." },
        { name: "Leduc", note: "20 min south. Airport-corridor commercial included." },
        { name: "Beaumont", note: "25 min south. Custom home builds." },
      ],
    },
    {
      name: "Greater Calgary",
      driveTime: "0–45 min from our Calgary yard",
      cities: [
        { name: "Calgary", note: "Northeast yard, citywide service." },
        { name: "Airdrie", note: "20 min north. Heavy storm-restoration volume." },
        { name: "Cochrane", note: "30 min northwest. Mountain-style architecture." },
        { name: "Okotoks", note: "30 min south. New developments and acreages." },
        { name: "Chestermere", note: "20 min east. Lakeside custom homes." },
      ],
    },
    {
      name: "Central Alberta",
      driveTime: "Halfway between the two yards",
      cities: [
        { name: "Red Deer", note: "Both yards within reach. Commercial and residential." },
      ],
    },
  ],

  climateEyebrow: "ALBERTA-SPECIFIC EXPERTISE",
  climateHeadline: "Roofs built for the climate they live in.",
  climateBody:
    "Alberta isn't one climate — it's three. Edmonton sees deep cold and ice damming. Calgary takes the worst of the chinook freeze-thaw and the Stampede-month hail season. The Highway 2 corridor in between gets a bit of everything. We spec materials, ventilation, and ice-and-water coverage based on which of those climates your house actually sits in.",
};

export const NOT_FOUND = {
  eyebrow: "404",
  headline: "That page took a different roof.",
  body: "The page you're looking for isn't here. The home page is, though.",
  cta: "Back to home",
};
