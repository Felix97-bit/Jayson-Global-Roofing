import { GALLERY } from "@/lib/images";

export type ProjectCategory =
  | "Residential"
  | "Commercial"
  | "Multi-Family"
  | "Storm Restoration";

export interface Project {
  slug: string;
  title: string;
  location: string;
  category: ProjectCategory;
  scope: string;
  materials: string;
  details: string;
  image: string;
  span?: "tall" | "wide" | "normal";
}

/**
 * Edit, add, or remove projects here. Each project shows up on /projects
 * and gets its own modal lightbox automatically.
 */
export const projects: Project[] = [
  {
    slug: "sherwood-park-dynasty",
    title: "Sherwood Park Re-Roof",
    location: "Sherwood Park, AB",
    category: "Residential",
    scope: "Full tear-off and re-roof on a two-storey family home.",
    materials: "IKO Dynasty architectural shingles, ice-and-water shield to 6 ft.",
    details:
      "Two-day install in early September. Original 1990s roof was 24 years old and shedding granules. Upgraded ventilation with two new turbine vents and increased intake at the soffit.",
    image: GALLERY[0],
    span: "tall",
  },
  {
    slug: "calgary-hail-restoration",
    title: "Calgary Hail Restoration",
    location: "Calgary, AB",
    category: "Storm Restoration",
    scope: "Insurance claim, four-day turnaround on a hail-damaged bungalow.",
    materials: "Malarkey Vista AR shingles (Class 4 impact rated), aluminum gutters.",
    details:
      "Hailstorm in late June caused widespread damage across the southwest quadrant. Haag inspection completed within 48 hours, claim filed and approved within a week, install completed before the next forecast hail event.",
    image: GALLERY[1],
    span: "wide",
  },
  {
    slug: "edmonton-standing-seam",
    title: "Edmonton Custom Build",
    location: "Edmonton, AB",
    category: "Residential",
    scope: "Standing seam metal roof on a custom infill in Garneau.",
    materials: "24-gauge concealed-fastener standing seam in matte black.",
    details:
      "New construction; coordinated with the GC and architect from framing. 50-year paint warranty, snow guards installed above the front entry.",
    image: GALLERY[2],
    span: "normal",
  },
  {
    slug: "leduc-condo-complex",
    title: "Leduc Condo Complex",
    location: "Leduc, AB",
    category: "Multi-Family",
    scope: "Full re-roof of a 12-unit townhouse complex.",
    materials: "BP Mystique 42 architectural shingles, full tear-off.",
    details:
      "Phased over four weeks to minimize disruption to residents. Daily photo updates to the property management company. All warranty paperwork filed in the corporation's name.",
    image: GALLERY[3],
    span: "normal",
  },
  {
    slug: "south-edmonton-tpo",
    title: "South Edmonton Retail Plaza",
    location: "Edmonton, AB",
    category: "Commercial",
    scope: "30,000 sq ft TPO single-ply re-roof.",
    materials: "Carlisle 60-mil TPO with tapered insulation.",
    details:
      "Tenants stayed open through the install. Phased work with overnight crane lifts to keep the parking lot clear during business hours.",
    image: GALLERY[4],
    span: "wide",
  },
  {
    slug: "airdrie-acreage",
    title: "Airdrie Acreage",
    location: "Airdrie, AB",
    category: "Residential",
    scope: "Stone-coated steel re-roof on a 4,000 sq ft acreage home.",
    materials: "DECRA Tile XD in slate grey.",
    details:
      "Replaced original wood shake roof. Engineered for the heavier load and wind-uplift ratings appropriate for the open Highway 2 wind corridor.",
    image: GALLERY[5],
    span: "tall",
  },
  {
    slug: "st-albert-cedar",
    title: "St. Albert Heritage Restoration",
    location: "St. Albert, AB",
    category: "Residential",
    scope: "Hand-split cedar shake replacement on a heritage home.",
    materials: "Class A fire-treated #1 cedar shakes.",
    details:
      "Preserved the original architectural detail while bringing the assembly up to current bylaw fire ratings. Three-week project including custom flashing fabrication.",
    image: GALLERY[6],
    span: "normal",
  },
  {
    slug: "okotoks-storm",
    title: "Okotoks Storm Damage",
    location: "Okotoks, AB",
    category: "Storm Restoration",
    scope: "Hail and wind damage, full insurance claim.",
    materials: "IKO Cambridge IR (impact-resistant), new ridge vents.",
    details:
      "Adjuster meeting attended on-site. Supplemented for code-required ice-and-water and drip edge that was missing from the original scope.",
    image: GALLERY[7],
    span: "normal",
  },
  {
    slug: "calgary-school",
    title: "Calgary K-9 School Re-Roof",
    location: "Calgary, AB",
    category: "Commercial",
    scope: "Summer-break re-roof of a single-storey school building.",
    materials: "PVC single-ply with fully-adhered insulation.",
    details:
      "65-day window between dismissal and first day back. Delivered in 52 days, including manufacturer rep inspection and 25-year NDL warranty registration.",
    image: GALLERY[8],
    span: "wide",
  },
  {
    slug: "spruce-grove-newbuild",
    title: "Spruce Grove New-Build",
    location: "Spruce Grove, AB",
    category: "Residential",
    scope: "New construction roofing for a 2,800 sq ft two-storey.",
    materials: "Malarkey Legacy shingles in Storm Grey.",
    details:
      "Installed during the home's framing-to-lock-up window. Coordinated with the builder's schedule for a single mobilization.",
    image: GALLERY[9],
    span: "normal",
  },
  {
    slug: "edmonton-multi-family",
    title: "Edmonton Multi-Family Walk-Up",
    location: "Edmonton, AB",
    category: "Multi-Family",
    scope: "Three-storey walk-up apartment, full SBS re-roof.",
    materials: "Two-ply SBS modified bitumen, granulated cap sheet.",
    details:
      "Replaced 30-year-old built-up roofing. Upgraded all roof drains and added secondary scuppers for code compliance.",
    image: GALLERY[10],
    span: "normal",
  },
  {
    slug: "fort-saskatchewan-shop",
    title: "Fort Saskatchewan Industrial Shop",
    location: "Fort Saskatchewan, AB",
    category: "Commercial",
    scope: "Pre-engineered steel building re-roof and re-clad.",
    materials: "26-gauge through-fastened steel roofing and wall cladding.",
    details:
      "Combined roof and siding scope for a single mobilization. Operations continued inside the shop throughout the install.",
    image: GALLERY[11],
    span: "tall",
  },
];
