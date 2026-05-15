/**
 * Single source of truth for every image URL used on the site.
 * Swap any photo by changing one line here — no need to hunt through pages.
 *
 * All photos are hotlinked from Unsplash (royalty-free) and tuned with
 * `?q=80&w=2000&auto=format&fit=crop` for performance.
 */

const u = (id: string) =>
  `https://images.unsplash.com/photo-${id}?q=80&w=2000&auto=format&fit=crop`;

// Hero / page banners
export const HERO_HOME = u("1518780664697-55e3ad937233");
export const ABOUT_HERO = u("1572120360610-d971b9d7767c");
export const RESIDENTIAL_HERO = u("1597047084897-51e81819a499");
export const COMMERCIAL_HERO = u("1486325212027-8081e485255e");
export const STORM_HERO = u("1605727216801-e27ce1d0cc28");
export const SIDING_HERO = u("1503594384566-461fe158e797");
export const SERVICES_HERO = u("1480074568708-e7b720bb3f09");
export const PROJECTS_HERO = u("1564013799919-ab600027ffc6");
export const REVIEWS_HERO = u("1583608205776-bfd35f0d9f83");
export const CONTACT_HERO = u("1605276374104-dee2a0ed3cd6");
export const QUOTE_HERO = u("1448630360428-65456885c650");
export const SERVICE_AREAS_HERO = u("1502005229762-cf1b2da7c5d6");

// Featured projects on the homepage
export const FEATURE_PROJECT_1 = u("1564013799919-ab600027ffc6");
export const FEATURE_PROJECT_2 = u("1583608205776-bfd35f0d9f83");
export const FEATURE_PROJECT_3 = u("1605276374104-dee2a0ed3cd6");

// Generic gallery pool used by the projects page
export const GALLERY = [
  u("1448630360428-65456885c650"),
  u("1480074568708-e7b720bb3f09"),
  u("1502005229762-cf1b2da7c5d6"),
  u("1576941465524-fd1b0f80a4d4"),
  u("1592595896616-c37162298647"),
  u("1430285561322-7808604715df"),
  u("1494526585095-c41746248156"),
  u("1416331108676-a22ccb276e35"),
  u("1564013799919-ab600027ffc6"),
  u("1583608205776-bfd35f0d9f83"),
  u("1605276374104-dee2a0ed3cd6"),
  u("1597047084897-51e81819a499"),
];
