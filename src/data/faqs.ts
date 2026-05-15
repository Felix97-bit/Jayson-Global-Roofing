export interface FAQ {
  question: string;
  answer: string;
}

export const residentialFaqs: FAQ[] = [
  {
    question: "How long does a typical residential re-roof take?",
    answer:
      "A standard bungalow is one day. A two-storey is one to two days. Custom builds with multiple roof planes, dormers, or steep pitches can run two to three days. We'll give you a firm window when we quote.",
  },
  {
    question: "When can you start? What about winter installs?",
    answer:
      "In peak season (May–October) we typically schedule four to eight weeks out. Winter installs are absolutely possible — asphalt shingles can be installed safely down to about -10°C with cold-weather adhesives, and we tarp daily to keep the deck dry. Insurance and emergency work jumps the queue.",
  },
  {
    question: "Do you handle the permits?",
    answer:
      "Yes. We pull the permit on your behalf in every municipality we work in. The permit fee is a line item on your quote.",
  },
  {
    question: "What shingle do you recommend for Alberta weather?",
    answer:
      "For most Edmonton and Calgary roofs we recommend an architectural laminate from IKO, Malarkey, or BP. If you're in a known hail belt — south Calgary, Airdrie, parts of Sherwood Park — we'll usually recommend stepping up to a Class 4 impact-rated shingle. The premium pays for itself the first time it bounces a hail stone.",
  },
  {
    question: "Will my insurance cover this?",
    answer:
      "Insurance covers storm damage (hail, wind) but not normal wear-and-tear. If you're not sure, let us do a free Haag-certified inspection first. We'll tell you honestly which it is, and we'll never push a claim that doesn't exist.",
  },
  {
    question: "How do I know if I need a full replacement vs. a repair?",
    answer:
      "Some signs point to repair (one missing shingle, an isolated leak around a vent). Others point to replacement (curling shingles across multiple slopes, granules in the gutters, a roof more than 20 years old). The free inspection answers this question definitively.",
  },
];

export const commercialFaqs: FAQ[] = [
  {
    question: "Which membrane system should I spec for a new commercial roof?",
    answer:
      "PVC and TPO are the modern defaults — both are white reflective single-ply with 20+ year membrane lives. PVC handles chemical exposure better and is the standard for restaurants and industrial. TPO is more cost-effective for typical retail and office. We'll recommend the right one based on your building's use and your insurer's requirements.",
  },
  {
    question: "How does the warranty assignment work if I sell the building?",
    answer:
      "Manufacturer NDL warranties on single-ply systems are written in the building owner's name and are transferable. We re-assign the warranty to the new owner free of charge — we just need a few days' notice and the closing date.",
  },
  {
    question: "Can you work around our tenants and operations?",
    answer:
      "Yes. We routinely run after-hours starts, phased work, and isolated shutdowns. For tenants we'll coordinate noisy work to off-hours and dust controls to limit indoor air impact.",
  },
  {
    question: "Do you offer maintenance programs?",
    answer:
      "Yes. Twice-yearly inspections, drain clearing, seam touch-ups, and a written report after each visit. Required to maintain some manufacturer warranties; recommended for all of them.",
  },
  {
    question: "Will you work with our property manager or construction manager?",
    answer:
      "Always. We have standing relationships with most major Alberta property management firms. We provide weekly progress reports, attend OAC meetings, and submit progress draws on whatever cycle you require.",
  },
  {
    question: "Can you handle a roof core test before we sign the contract?",
    answer:
      "Yes — that's standard practice for us on retrofits over an existing membrane. The core confirms substrate condition, insulation R-value, and the existing assembly so we don't price guesses.",
  },
];

export const stormFaqs: FAQ[] = [
  {
    question: "What's the difference between ACV and RCV in my insurance policy?",
    answer:
      "ACV is Actual Cash Value — the depreciated value of your roof at the time of the loss. RCV is Replacement Cost Value — what it costs to actually replace it today. Most modern policies pay ACV up front and release the depreciation (the difference) once the work is completed. We help you navigate this.",
  },
  {
    question: "Do I have to use the contractor my insurance company recommends?",
    answer:
      "No. You have the right to choose your own contractor. Your insurer's job is to pay the claim, not to pick the roofer. Pick the contractor you trust.",
  },
  {
    question: "What if the adjuster's scope misses something?",
    answer:
      "It happens often, especially with code-required items (drip edge, ice-and-water shield, ventilation upgrades). We file a supplement to the insurer with documentation. Supplements are a routine part of the claims process.",
  },
  {
    question: "Will my deductible go up if I file a claim?",
    answer:
      "Hail and wind claims in Alberta typically don't directly raise your premiums in the way an at-fault auto claim would, but rate increases are at the insurer's discretion — and many Alberta carriers have raised rates broadly after the 2020s hail seasons regardless of who claimed. Talk to your broker before filing if you're unsure.",
  },
  {
    question: "How long does the whole process take?",
    answer:
      "From initial inspection to a finished roof, usually three to six weeks — most of that is waiting on the insurer's adjuster meeting. Once we have approval and the deposit cheque, we're typically on the roof within one to two weeks.",
  },
  {
    question: "What if it storms again before my new roof is on?",
    answer:
      "Call us. We'll come out and tarp any new damage, no charge, and document it for your existing claim or a new one. We don't leave customers waiting through a second storm.",
  },
];

export const sidingFaqs: FAQ[] = [
  {
    question: "Why bundle siding with the roof?",
    answer:
      "Because the joint between them — the flashing where the wall meets the roof — is the single most common leak point in any house. When the same crew installs both, that joint is properly tied, and if anything goes wrong later it's a single warranty conversation.",
  },
  {
    question: "What's the difference between vinyl, fibre cement, and engineered wood siding?",
    answer:
      "Vinyl is the most economical, comes in dozens of colours, and lasts 30–50 years with no maintenance. Fibre cement (James Hardie) is heavier, more impact-resistant, looks like painted wood, and lasts 30+ years with periodic painting. Engineered wood (LP SmartSide) is a middle ground — looks like cedar, costs less than fibre cement, holds paint well.",
  },
  {
    question: "How long do seamless gutters last?",
    answer:
      "Seamless aluminum gutters last 20–30 years with normal cleaning. Adding leaf guards extends that and dramatically reduces the maintenance burden, especially on treed lots.",
  },
  {
    question: "Will adding attic insulation actually reduce my heating bill?",
    answer:
      "Usually yes — most Alberta homes built before about 2005 have R-32 to R-40 in the attic, and current code is R-50 to R-60. Topping up to current code typically saves 10–20% on winter heating and dramatically reduces ice damming.",
  },
];
