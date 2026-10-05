// Content for the individual service pages (/services/:slug) and service-area pages
// (/service-areas/:slug). Each page targets a specific search ("house cleaning evansville in",
// "move out cleaning newburgh", ...), so keep titles, descriptions and copy unique per page.

export interface Faq {
  question: string;
  answer: string;
}

export interface ServicePage {
  slug: string;
  /** Short name used in navigation, links and schema. */
  name: string;
  /** Matching option value in the quote form's service dropdown. */
  formValue: string;
  /** id of the CORE_SPECIALTIES card that links to this page. */
  specialtyId?: string;
  metaTitle: string;
  metaDescription: string;
  /** One-line, location-neutral summary used on cards (city pages, etc.). */
  summary: string;
  h1: string;
  intro: string[];
  idealFor: string[];
  included: { area: string; tasks: string[] }[];
  whyUs: { title: string; text: string }[];
  faqs: Faq[];
  /** Gallery photo shown on the page (and used as its social sharing image). Optional until a real photo exists. */
  image?: string;
  imageAlt?: string;
}

export interface AreaPage {
  slug: string;
  city: string;
  state: string;
  stateName: string;
  /** Matching option value in the quote form's city dropdown. */
  formValue: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string[];
  localNotes: { title: string; text: string }[];
  neighborhoods: string[];
  nearby: string[];
  faqs: Faq[];
}

const AREAS_LINE = "Evansville, Newburgh, Boonville, Chandler and the surrounding areas";

export const SERVICE_PAGES: ServicePage[] = [
  {
    slug: "house-cleaning",
    name: "House Cleaning",
    formValue: "House Cleaning",
    specialtyId: "house-cleaning",
    metaTitle: "Weekly & Biweekly House Cleaning Evansville | Home Sweet Clean",
    metaDescription:
      "Weekly, biweekly & monthly house cleaning in Evansville, Newburgh, Boonville & Chandler, IN. Kitchens, bathrooms, floors & more. Local, reliable, friendly.",
    summary: "Weekly, biweekly or monthly cleaning for busy families.",
    h1: "House Cleaning Services in Evansville, IN",
    intro: [
      "Life is messy. Your house doesn't have to be. Home Sweet Clean is a local cleaning service in Evansville, Indiana, providing dependable residential cleaning for busy families who want a fresh, comfortable home without spending their free time cleaning.",
      `Choose weekly, biweekly or monthly house cleaning and we'll tackle the kitchens, bathrooms, floors, bedrooms and living areas, plus the "I'll get to that later" pile. We serve ${AREAS_LINE}.`,
    ],
    idealFor: [
      "Busy families and working parents",
      "Anyone who'd rather spend weekends having fun",
      "Pet owners fighting fur and dust bunnies",
      "Seniors who'd like a helping hand",
    ],
    included: [
      {
        area: "Kitchen",
        tasks: [
          "Counters, sink and backsplash cleaned",
          "Stovetop and appliance fronts wiped",
          "Cabinet fronts and handles",
          "Floors swept and mopped",
        ],
      },
      {
        area: "Bathrooms",
        tasks: [
          "Toilets cleaned and sanitized",
          "Tubs, showers and sinks scrubbed",
          "Mirrors and fixtures shined",
          "Floors cleaned",
        ],
      },
      {
        area: "Bedrooms & living areas",
        tasks: [
          "Dusting of furniture and surfaces",
          "Beds made",
          "Tidying and straightening",
          "Trash emptied",
        ],
      },
      {
        area: "Floors & vacuuming",
        tasks: [
          "Carpets and rugs vacuumed",
          "Hard floors mopped",
          "Under-furniture dust bunnies evicted",
          "Entryways and stairs",
        ],
      },
    ],
    whyUs: [
      {
        title: "Local",
        text: "We live and work right here in the Evansville area, so you're supporting a neighbour.",
      },
      {
        title: "Reliable",
        text: "We show up when we say we will, and your home gets the same care every visit.",
      },
      {
        title: "Friendly",
        text: "Easy to talk to, easy to book, and happy to customize the clean to your home.",
      },
    ],
    faqs: [
      {
        question: "How much does house cleaning cost in Evansville?",
        answer:
          "It depends on the size of your home, how often you'd like us to come and what you need cleaned. Call or text (725) 261-6776 or request a free quote, and ask about our new client special.",
      },
      {
        question: "How often can you clean my house?",
        answer: "We offer weekly, biweekly and monthly cleaning, and one-time cleans too.",
      },
      {
        question: "Can I customize what gets cleaned?",
        answer:
          "Yes. Custom cleaning is available. Tell us which rooms and tasks matter most and we'll build the clean around them.",
      },
      {
        question: "Do I need to be home during the cleaning?",
        answer: "No. Many clients let us in and head out. We'll agree on what works best for you.",
      },
    ],
    image: "/images/house-cleaning-evansville-in.jpg",
    imageAlt: "Sparkling clean bathtub and fresh towels after a house cleaning in Evansville, IN",
  },
  {
    slug: "move-in-move-out-cleaning",
    name: "Move-In & Move-Out Cleaning",
    formValue: "Move-In / Move-Out Cleaning",
    specialtyId: "move-in-move-out-cleaning",
    metaTitle: "Move-Out Cleaning Evansville, IN | Home Sweet Clean",
    metaDescription:
      "Move-in and move-out cleaning in Evansville, Newburgh, Boonville & Chandler, IN for renters, landlords, buyers and sellers. Call or text for a free quote.",
    summary: "Top-to-bottom cleaning of an empty home before or after a move.",
    h1: "Move-In & Move-Out Cleaning in Evansville, IN",
    intro: [
      "Moving is stressful enough without scrubbing an empty house. Home Sweet Clean provides move-in and move-out cleaning in Evansville and the surrounding areas so you can hand over the keys, or settle into your new place, with confidence.",
      "We clean empty homes, apartments and rentals from top to bottom for renters hoping to get their deposit back, landlords getting ready for new tenants, and buyers and sellers.",
    ],
    idealFor: [
      "Renters moving out",
      "Landlords between tenants",
      "Home buyers moving in",
      "Sellers getting ready to list",
    ],
    included: [
      {
        area: "Kitchen",
        tasks: [
          "Cabinets and drawers wiped",
          "Counters, sink and backsplash",
          "Appliances wiped down",
          "Floors cleaned",
        ],
      },
      {
        area: "Bathrooms",
        tasks: [
          "Toilet, tub and shower scrubbed",
          "Vanity and cabinets wiped",
          "Mirrors and fixtures",
          "Floors cleaned",
        ],
      },
      {
        area: "Every room",
        tasks: [
          "Closets and shelves",
          "Baseboards and doors wiped",
          "Light switches and outlets",
          "Window sills",
        ],
      },
      {
        area: "Finishing",
        tasks: [
          "Floors vacuumed and mopped",
          "Trash removed",
          "Final walk-through",
          "Ready for keys or photos",
        ],
      },
    ],
    whyUs: [
      {
        title: "Fits your moving date",
        text: "We schedule around your move-out or move-in day so you're not scrambling.",
      },
      {
        title: "Deposit-friendly",
        text: "We clean the spots landlords check so you leave the place in great shape.",
      },
      {
        title: "Local team",
        text: "Based in Evansville and serving Newburgh, Boonville, Chandler and nearby.",
      },
    ],
    faqs: [
      {
        question: "Should the home be empty for a move-out clean?",
        answer:
          "It's best when furniture and boxes are already out so we can reach every surface, closet and corner.",
      },
      {
        question: "Do you clean apartments and rentals?",
        answer: "Yes. We clean houses, apartments and rental homes before and after a move.",
      },
      {
        question: "How do I book a move-out cleaning?",
        answer:
          "Call or text (725) 261-6776 or request a free quote with your moving date and address.",
      },
    ],
    image: "/images/move-in-move-out-cleaning-evansville-in.jpg",
    imageAlt: "Clean, empty kitchen after a move-out cleaning in Evansville, IN",
  },
  {
    slug: "custom-cleaning",
    name: "One-Time & Custom Cleaning",
    formValue: "One-Time / Custom Cleaning",
    specialtyId: "custom-cleaning",
    metaTitle: "One-Time & Custom Cleaning Evansville | Home Sweet Clean",
    metaDescription:
      "One-time, seasonal and custom house cleaning in Evansville, Newburgh, Boonville & Chandler, IN. Pick the rooms and tasks, we handle the mess.",
    summary: "One-time, seasonal or custom cleans built around your home.",
    h1: "One-Time & Custom Cleaning in Evansville, IN",
    intro: [
      "Not every home needs the same clean. Whether you're catching up after a busy month, getting ready for guests or the holidays, or just want certain rooms done, Home Sweet Clean builds a custom clean around you.",
      `Tell us what matters most and we'll take care of it, one time or whenever you need us. We serve ${AREAS_LINE}.`,
    ],
    idealFor: [
      "Catching up after a busy season",
      "Before and after guests or holidays",
      "Spring and fall refreshes",
      "Homes that need a few specific rooms done",
    ],
    included: [
      {
        area: "You choose",
        tasks: [
          "Pick the rooms to clean",
          "Add the extra tasks you need",
          "One-time or occasional",
          "Quote built around your list",
        ],
      },
      {
        area: "Popular extras",
        tasks: [
          "Baseboards and doors",
          "Inside the microwave",
          "Light fixtures and ceiling fans",
          "Window sills",
        ],
      },
      {
        area: "Kitchens & bathrooms",
        tasks: [
          "Counters and sinks",
          "Tubs, showers and toilets",
          "Mirrors and fixtures",
          "Floors",
        ],
      },
      {
        area: "Living spaces",
        tasks: ["Dusting", "Vacuuming and mopping", "Tidying up", "Trash emptied"],
      },
    ],
    whyUs: [
      {
        title: "Your list, your way",
        text: "We focus on what matters to you instead of a one-size-fits-all checklist.",
      },
      {
        title: "No long commitment",
        text: "Book once, book occasionally, or switch to recurring cleaning any time.",
      },
      {
        title: "Friendly & local",
        text: "A local Evansville team that's easy to reach by phone or text.",
      },
    ],
    faqs: [
      {
        question: "Can I book just one cleaning?",
        answer: "Yes. One-time cleans are welcome, and you can switch to recurring any time.",
      },
      {
        question: "Can you clean only certain rooms?",
        answer: "Absolutely. Custom cleaning lets you pick the rooms and tasks.",
      },
      {
        question: "How is custom cleaning priced?",
        answer:
          "It depends on the rooms and tasks. Call or text (725) 261-6776 or request a free quote with your list.",
      },
    ],
    image: "/images/custom-one-time-cleaning-evansville-in.jpg",
    imageAlt: "Bright, freshly cleaned bathroom and laundry area in Evansville, IN",
  },
  {
    slug: "helping-hand",
    name: "A Helping Hand: Errands & Household Help",
    formValue: "A Helping Hand (Errands & Household Help)",
    specialtyId: "helping-hand",
    metaTitle: "Errand & Household Help Evansville, IN | Home Sweet Clean",
    metaDescription:
      "A Helping Hand from Home Sweet Clean: dog care, mail, groceries, prescription pick-up, decorating & household tasks in Evansville. $40/hr per helper.",
    summary: "An extra set of hands for errands and household tasks, $40/hr per helper.",
    h1: "A Helping Hand: Errand & Household Help in Evansville, IN",
    intro: [
      "Got a to-do list longer than your patience? Need someone to lend a hand without moving into your house? A Helping Hand from Home Sweet Clean is here for the little jobs that pile up.",
      "We'll let the dog out, grab the mail, pick up groceries or a prescription, help with decorating and take care of the household tasks staring at you. Because sometimes life doesn't need a maid, it just needs a helping hand.",
    ],
    idealFor: [
      "Busy parents and professionals",
      "Seniors and anyone recovering from surgery",
      "Pet owners with long work days",
      "Anyone who wishes they had an extra set of hands",
    ],
    included: [
      {
        area: "Pets & home",
        tasks: [
          "Let the dog out",
          "Bring in the mail and packages",
          "Water the plants",
          "Quick tidy-ups",
        ],
      },
      {
        area: "Errands",
        tasks: [
          "Grocery pick-up",
          "Prescription pick-up",
          "Drop-offs and returns",
          "Other local errands",
        ],
      },
      {
        area: "Around the house",
        tasks: [
          "Help with decorating",
          "Seasonal decor up or down",
          "Organizing a space",
          "Household tasks you've been putting off",
        ],
      },
      {
        area: "Simple pricing",
        tasks: [
          "$40 per hour, per helper",
          "2-hour minimum",
          "Book as needed",
          "Call or text to schedule",
        ],
      },
    ],
    whyUs: [
      {
        title: "Simple, honest pricing",
        text: "$40 per hour per helper with a 2-hour minimum. No surprises.",
      },
      {
        title: "Flexible help",
        text: "Pets, errands, decorating or household tasks: book the help you need.",
      },
      {
        title: "Trusted locals",
        text: "The same friendly Home Sweet Clean team you'd trust with your home.",
      },
    ],
    faqs: [
      {
        question: "How much does A Helping Hand cost?",
        answer: "$40 per hour, per helper, with a 2-hour minimum.",
      },
      {
        question: "What can a helper do?",
        answer:
          "Let the dog out, grab the mail, pick up groceries or prescriptions, help with decorating and handle household tasks. Not sure if it fits? Just ask.",
      },
      {
        question: "Can I combine a helping hand with a cleaning?",
        answer: "Yes. Call or text (725) 261-6776 and we'll plan the visit together.",
      },
    ],
    image: "/images/helping-hand-household-help-evansville-in.jpg",
    imageAlt: "Freshly folded laundry, household help from Home Sweet Clean in Evansville, IN",
  },
];

function areaFaqs(city: string, extra: Faq): Faq[] {
  return [
    {
      question: `Do you offer house cleaning in ${city}, IN?`,
      answer: `Yes. Home Sweet Clean offers weekly, biweekly and monthly house cleaning, move-in and move-out cleaning, one-time and custom cleaning, and A Helping Hand errand and household help in ${city}.`,
    },
    extra,
    {
      question: `How do I get a cleaning quote in ${city}?`,
      answer:
        "Call or text (725) 261-6776, email hello.homesweetclean@gmail.com, or use the free quote form on this page. Ask about our new client special!",
    },
  ];
}

export const AREA_PAGES: AreaPage[] = [
  {
    slug: "evansville-in",
    city: "Evansville",
    state: "IN",
    stateName: "Indiana",
    formValue: "Evansville",
    metaTitle: "Evansville, IN House Cleaning | Home Sweet Clean",
    metaDescription:
      "Local Evansville house cleaning: weekly, biweekly & monthly cleans, move-out cleaning and errand help. Call or text (725) 261-6776. New client special!",
    h1: "House Cleaning in Evansville, Indiana",
    intro: [
      "Home Sweet Clean is a local Evansville cleaning service. We help busy families across the city keep a fresh, comfortable home, from the East Side to the West Side and everywhere in between.",
      "Book recurring house cleaning, a one-time or custom clean, a move-in or move-out clean, or A Helping Hand for errands and household tasks.",
    ],
    localNotes: [
      {
        title: "Right here at home",
        text: "We're based on Evansville's East Side, so we're never far away when you need us.",
      },
      {
        title: "River-city living",
        text: "Humid Ohio Valley summers and muddy spring days mean floors and bathrooms need extra love. We've got it.",
      },
      {
        title: "Busy families",
        text: "Between work, school and ball games, weekends go fast. Let us handle the mess so you can enjoy your home.",
      },
    ],
    neighborhoods: [
      "East Side",
      "West Side",
      "North Side",
      "Downtown",
      "Haynie's Corner",
      "McCutchanville",
    ],
    nearby: ["newburgh-in", "chandler-in", "boonville-in"],
    faqs: areaFaqs("Evansville", {
      question: "Are you a local Evansville cleaning company?",
      answer: "Yes. Home Sweet Clean is based in Evansville, Indiana (47715).",
    }),
  },
  {
    slug: "newburgh-in",
    city: "Newburgh",
    state: "IN",
    stateName: "Indiana",
    formValue: "Newburgh",
    metaTitle: "Newburgh, IN House Cleaning | Home Sweet Clean",
    metaDescription:
      "House cleaning in Newburgh, Indiana: recurring cleans, move-in/move-out cleaning, custom cleaning and errand help from a local Evansville-area team.",
    h1: "House Cleaning in Newburgh, Indiana",
    intro: [
      "Home Sweet Clean serves Newburgh families with friendly, dependable house cleaning. From historic downtown Newburgh by the river to the neighbourhoods off Bell Road and Epworth Road, we'll tackle the dust, dirt and \"I'll get to that later\" pile.",
      "Choose weekly, biweekly or monthly cleaning, a custom clean, a move-in or move-out clean, or A Helping Hand for errands and household tasks.",
    ],
    localNotes: [
      {
        title: "Just down the road",
        text: "Newburgh is a quick drive from our Evansville home base, so scheduling is easy.",
      },
      {
        title: "Family homes",
        text: "Bigger homes get a thorough room-by-room clean on a schedule that fits your family.",
      },
      {
        title: "Extra hands",
        text: "Need the dog let out or groceries picked up? Our Helping Hand service covers Newburgh too.",
      },
    ],
    neighborhoods: [
      "Historic Downtown Newburgh",
      "Bell Road area",
      "Epworth Road area",
      "Warrick County",
    ],
    nearby: ["evansville-in", "chandler-in", "boonville-in"],
    faqs: areaFaqs("Newburgh", {
      question: "Do you offer A Helping Hand in Newburgh?",
      answer:
        "Yes. Errand and household help is available in Newburgh at $40/hour per helper (2-hour minimum).",
    }),
  },
  {
    slug: "boonville-in",
    city: "Boonville",
    state: "IN",
    stateName: "Indiana",
    formValue: "Boonville",
    metaTitle: "Boonville, IN House Cleaning | Home Sweet Clean",
    metaDescription:
      "Boonville, Indiana house cleaning: weekly, biweekly & monthly cleaning, move-out cleaning and custom cleans. Local, reliable & friendly. Free quote.",
    h1: "House Cleaning in Boonville, Indiana",
    intro: [
      "Home Sweet Clean brings local, reliable and friendly house cleaning to Boonville and the rest of Warrick County.",
      "We offer recurring house cleaning, one-time and custom cleans, move-in and move-out cleaning, and A Helping Hand for errands and household tasks.",
    ],
    localNotes: [
      {
        title: "Small-town service",
        text: "We treat every Boonville home like a neighbour's, because it is.",
      },
      {
        title: "Country living, clean home",
        text: "Mud, dust and pets come with the territory. Regular cleaning keeps it from taking over.",
      },
      {
        title: "Moving made easier",
        text: "Our move-in and move-out cleans help Boonville renters, landlords and sellers.",
      },
    ],
    neighborhoods: [
      "Downtown Boonville",
      "Courthouse Square area",
      "Scales Lake area",
      "Warrick County",
    ],
    nearby: ["chandler-in", "newburgh-in", "evansville-in"],
    faqs: areaFaqs("Boonville", {
      question: "Do you travel to Boonville for cleanings?",
      answer: "Yes. Boonville is one of the Warrick County towns we serve regularly.",
    }),
  },
  {
    slug: "chandler-in",
    city: "Chandler",
    state: "IN",
    stateName: "Indiana",
    formValue: "Chandler",
    metaTitle: "Chandler, IN House Cleaning | Home Sweet Clean",
    metaDescription:
      "House cleaning in Chandler, Indiana: recurring and one-time cleans, move-in/move-out cleaning and errand help from your local Home Sweet Clean team.",
    h1: "House Cleaning in Chandler, Indiana",
    intro: [
      "Home Sweet Clean serves Chandler with the same local, reliable and friendly cleaning our Evansville and Newburgh clients count on.",
      "Book weekly, biweekly or monthly house cleaning, a one-time or custom clean, a move-in or move-out clean, or A Helping Hand for errands and household tasks.",
    ],
    localNotes: [
      {
        title: "Close to home",
        text: "Chandler sits between Evansville, Newburgh and Boonville, right in our regular service area.",
      },
      {
        title: "Busy households",
        text: "Recurring cleaning keeps kitchens, bathrooms and floors under control all month long.",
      },
      {
        title: "Custom cleaning",
        text: "Need just a few rooms done or a seasonal refresh? We'll build the clean around you.",
      },
    ],
    neighborhoods: ["Chandler", "Warrick County", "Nearby Newburgh & Boonville"],
    nearby: ["newburgh-in", "boonville-in", "evansville-in"],
    faqs: areaFaqs("Chandler", {
      question: "Do you clean homes in Chandler, IN?",
      answer: "Yes. Chandler is part of our regular service area in Warrick County.",
    }),
  },
];

export function getServicePage(slug: string) {
  return SERVICE_PAGES.find((page) => page.slug === slug);
}

export function getAreaPage(slug: string) {
  return AREA_PAGES.find((page) => page.slug === slug);
}

export function servicePathForSpecialty(specialtyId: string) {
  const page = SERVICE_PAGES.find((p) => p.specialtyId === specialtyId);
  return page ? `/services/${page.slug}` : "/services";
}

export const HOME_FAQS: Faq[] = [
  {
    question: "What areas does Home Sweet Clean serve?",
    answer:
      "We're based in Evansville, Indiana and serve Evansville, Newburgh, Boonville, Chandler and the surrounding areas.",
  },
  {
    question: "What services do you offer?",
    answer:
      "Weekly, biweekly and monthly house cleaning, move-in and move-out cleaning, one-time and custom cleaning, and A Helping Hand for errands and household tasks.",
  },
  {
    question: "What's included in a house cleaning?",
    answer:
      "Kitchens and bathrooms, floors and vacuuming, and bedrooms and living areas. Custom cleaning is available if you'd like something specific.",
  },
  {
    question: "Do you have a new client special?",
    answer:
      "Yes! Book your first cleaning and save. Call or text us to ask about the current special.",
  },
  {
    question: "How much is A Helping Hand?",
    answer: "$40 per hour, per helper, with a 2-hour minimum.",
  },
  {
    question: "How do I book?",
    answer:
      "Call or text (725) 261-6776, email hello.homesweetclean@gmail.com, or fill out the free quote form.",
  },
];
