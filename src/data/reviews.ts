export type ReviewSource = "Google" | "HomeStars" | "BBB";

export interface Review {
  quote: string;
  name: string;
  location: string;
  source: ReviewSource;
  rating: 5 | 4;
  service?: string;
}

/**
 * Edit, add, or remove reviews here.
 * Reviews show up on the homepage (top 3) and the full /reviews page.
 */
export const reviews: Review[] = [
  {
    quote:
      "Stef came out the day after I called, walked the roof, sent me photos of every hail strike, and had the insurance paperwork moving before I even committed. Six days later we had a new roof.",
    name: "Karen M.",
    location: "Sherwood Park",
    source: "Google",
    rating: 5,
    service: "Storm restoration",
  },
  {
    quote:
      "Crew showed up at 7 AM with the tarps already laid. Done by 4 PM. You'd never know they were here except the roof is new and the yard is cleaner than they found it.",
    name: "Dave T.",
    location: "Edmonton",
    source: "HomeStars",
    rating: 5,
    service: "Residential re-roof",
  },
  {
    quote:
      "Third generation in our house, second roof from Jayson. They did my parents' place in 2003 and ours last summer. Same family, same standard.",
    name: "Linda R.",
    location: "St. Albert",
    source: "BBB",
    rating: 5,
    service: "Residential re-roof",
  },
  {
    quote:
      "After the June hailstorm I had three roofers come look. Jayson was the only one who explained what an insurance supplement was and why I needed one. They got my claim approved for almost twice what the adjuster originally wrote.",
    name: "Michael S.",
    location: "Calgary",
    source: "Google",
    rating: 5,
    service: "Insurance claim",
  },
  {
    quote:
      "We had to replace the roof on a 12-unit condo and the board was nervous about it. Jonathan came to a board meeting, walked us through every line item, answered every question. The job was done a week early and on budget.",
    name: "Heather P.",
    location: "Edmonton",
    source: "HomeStars",
    rating: 5,
    service: "Multi-family",
  },
  {
    quote:
      "Polite. On time. Tidy. The estimator pointed out two things he could have charged me to fix and explained why I didn't actually need to. That kind of honesty is why I'll call them again.",
    name: "Robert J.",
    location: "Spruce Grove",
    source: "BBB",
    rating: 5,
  },
  {
    quote:
      "Picture report at the end was a nice surprise. Showed me everything I'd never see from the ground. Felt like I actually knew what I was paying for.",
    name: "Anna K.",
    location: "Edmonton",
    source: "Google",
    rating: 5,
    service: "Residential re-roof",
  },
  {
    quote:
      "Wind took half the shingles off the back of our roof in March. Jayson had a crew there to tarp it that afternoon and a permanent fix the following week.",
    name: "Tom W.",
    location: "Sherwood Park",
    source: "HomeStars",
    rating: 5,
    service: "Storm restoration",
  },
  {
    quote:
      "The whole experience was easy. Quote in writing the day after they came out, no pressure, no follow-up calls bugging me. When I called back two weeks later they remembered me and we were on the schedule a week later.",
    name: "Susan B.",
    location: "St. Albert",
    source: "Google",
    rating: 5,
  },
  {
    quote:
      "Standing seam metal roof on our infill — beautiful work. They coordinated perfectly with our builder and finished on the day they said they would. The detail at the soffit is the cleanest I've ever seen.",
    name: "Daniel L.",
    location: "Edmonton",
    source: "HomeStars",
    rating: 5,
    service: "Custom build",
  },
  {
    quote:
      "Replaced our flat roof on a small commercial building. The previous roof had been patched twelve times by other companies. This one's three years old now and not a drop.",
    name: "Marlene F.",
    location: "Calgary",
    source: "Google",
    rating: 5,
    service: "Commercial",
  },
  {
    quote:
      "BBB-accredited, A+ rating, and they actually live up to it. Family-run feel, no upselling. We'll recommend them to everyone.",
    name: "Kevin H.",
    location: "Leduc",
    source: "BBB",
    rating: 5,
  },
  {
    quote:
      "Had ice damming for three winters running. Jayson came out, looked at the attic before they even talked about the roof, and recommended an insulation top-up first. Solved the problem for a quarter of what a re-roof would have cost.",
    name: "Patricia G.",
    location: "St. Albert",
    source: "Google",
    rating: 5,
    service: "Attic insulation",
  },
  {
    quote:
      "Couldn't be happier. Estimator showed up exactly when he said. Crew showed up exactly when they said. Final invoice matched the quote to the dollar.",
    name: "Greg N.",
    location: "Beaumont",
    source: "HomeStars",
    rating: 5,
  },
  {
    quote:
      "We've used Jayson Global twice on our acreage now. Calgary office, easy to deal with. They handle everything.",
    name: "Christine D.",
    location: "Okotoks",
    source: "Google",
    rating: 5,
    service: "Residential re-roof",
  },
  {
    quote:
      "Hail-rated shingles after our second storm in three years. Worth every penny knowing we're not doing this again next summer.",
    name: "Rajesh V.",
    location: "Airdrie",
    source: "Google",
    rating: 5,
    service: "Storm restoration",
  },
  {
    quote:
      "Family business through and through. Spoke with Jennifer in the office multiple times — always friendly, always knew exactly where my project was at.",
    name: "Margaret S.",
    location: "Edmonton",
    source: "BBB",
    rating: 5,
  },
  {
    quote:
      "Roof, gutters, and soffits all in one go. Made far more sense than dealing with three contractors. The whole exterior of the house was redone in under two weeks.",
    name: "Brian M.",
    location: "Sherwood Park",
    source: "HomeStars",
    rating: 5,
    service: "Full exterior",
  },
];
