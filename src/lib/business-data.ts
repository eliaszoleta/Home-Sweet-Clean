export interface BusinessInfo {
  name: string;
  /** Brand line from the flyer and Facebook page. */
  tagline: string;
  logoUrl: string;
  phone: string;
  phoneRaw: string;
  email: string;
  city: string;
  state: string;
  zip: string;
  facebookUrl?: string;
  googleBusinessUrl?: string;
}

export const BUSINESS_INFO: BusinessInfo = {
  name: "Home Sweet Clean",
  tagline: "Because a clean house makes for a happy family!",
  logoUrl: "/logo.png",
  phone: "(725) 261-6776",
  phoneRaw: "7252616776",
  email: "hello.homesweetclean@gmail.com",
  city: "Evansville",
  state: "IN",
  zip: "47715",
  // Add the Facebook page URL and Google Business Profile once you have them; they show up site-wide.
};

/** tel: link for call buttons. */
export const PHONE_HREF = `tel:+1${BUSINESS_INFO.phoneRaw}`;
/** sms: link for "text us" buttons. */
export const SMS_TEXT_HREF = `sms:+1${BUSINESS_INFO.phoneRaw}`;

/** Social / review profiles that exist (used for schema sameAs and footer links). */
export const SOCIAL_LINKS = [
  BUSINESS_INFO.facebookUrl && { label: "Facebook", url: BUSINESS_INFO.facebookUrl },
  BUSINESS_INFO.googleBusinessUrl && { label: "Google", url: BUSINESS_INFO.googleBusinessUrl },
].filter((link): link is { label: string; url: string } => Boolean(link));

/** "A Helping Hand" pricing, from the business's Facebook post. */
export const HELPING_HAND = { rate: 40, minimumHours: 2 };

export interface Specialty {
  /** Same as the service page slug. */
  id: string;
  title: string;
  badge: string;
  summary: string;
  description: string;
  features: string[];
  image?: string;
  imageAlt?: string;
}

// Services from the client's flyer and Facebook page.
export const CORE_SPECIALTIES: Specialty[] = [
  {
    id: "house-cleaning",
    title: "House Cleaning",
    badge: "Weekly · Biweekly · Monthly",
    summary:
      "Recurring house cleaning for busy families: kitchens, bathrooms, floors, bedrooms and living areas.",
    description:
      "Pick weekly, biweekly or monthly visits and come home to a fresh, comfortable house without giving up your free time.",
    features: [
      "Kitchens & bathrooms",
      "Floors & vacuuming",
      "Bedrooms & living areas",
      "Same friendly faces every visit",
    ],
    image: "/images/house-cleaning-evansville-in.jpg",
    imageAlt: "Sparkling clean bathtub and fresh towels after a house cleaning in Evansville, IN",
  },
  {
    id: "move-in-move-out-cleaning",
    title: "Move-In & Move-Out Cleaning",
    badge: "Moving Day",
    summary:
      "A top-to-bottom clean of an empty home so you can hand over the keys, or move in, stress-free.",
    description:
      "For renters, landlords, buyers and sellers. We clean the home from top to bottom so it's ready for the next chapter.",
    features: [
      "Kitchen and appliances wiped down",
      "Bathrooms scrubbed and sanitized",
      "Cabinets, closets and shelves",
      "Floors cleaned edge to edge",
    ],
    image: "/images/move-in-move-out-cleaning-evansville-in.jpg",
    imageAlt: "Clean, empty kitchen after a move-out cleaning in Evansville, IN",
  },
  {
    id: "custom-cleaning",
    title: "One-Time & Custom Cleaning",
    badge: "Your Way",
    summary:
      "Need a catch-up clean, a spring refresh or help before guests arrive? We'll build the clean around you.",
    description:
      "Tell us the rooms and the to-dos and we'll take care of them. Custom cleaning is available for whatever your home needs.",
    features: [
      "One-time or occasional cleans",
      "Before & after guests or holidays",
      "Pick the rooms and tasks",
      "Spring and seasonal refreshes",
    ],
    image: "/images/custom-one-time-cleaning-evansville-in.jpg",
    imageAlt: "Bright, freshly cleaned bathroom and laundry area in Evansville, IN",
  },
  {
    id: "helping-hand",
    title: "A Helping Hand (Errands & Household Help)",
    badge: `$${HELPING_HAND.rate}/hr per helper`,
    summary:
      "An extra set of hands for the dog, the mail, groceries, prescriptions, decorating and household tasks.",
    description:
      "Sometimes life doesn't need a maid, it just needs a helping hand. Book a helper for the little jobs that pile up.",
    features: [
      "Let the dog out",
      "Grab the mail",
      "Groceries & prescription pick-up",
      "Decorating & household tasks",
    ],
    image: "/images/helping-hand-household-help-evansville-in.jpg",
    imageAlt: "Freshly folded laundry, household help from Home Sweet Clean in Evansville, IN",
  },
];

export interface GalleryProject {
  id: string;
  /** Service page slug this photo belongs to (also picks the placeholder icon). */
  serviceSlug: string;
  title: string;
  category: string;
  location: string;
  /** Photo path in public/gallery/. Leave empty to show a "photo coming soon" panel. */
  imageUrl?: string;
  seoAlt: string;
  seoDescription: string;
  highlights: string[];
  description: string;
}

// Home page gallery (stock photos for now). Swap in real job photos as they come in.
export const WORK_GALLERY: GalleryProject[] = [
  {
    id: "living-room",
    serviceSlug: "house-cleaning",
    title: "Fresh Living Room",
    category: "House Cleaning",
    location: "Evansville, IN",
    imageUrl: "/gallery/living-room-cleaning-evansville-in.jpg",
    seoAlt: "Tidy, freshly cleaned living room after house cleaning in Evansville, IN",
    seoDescription: "Dusted surfaces, fluffed pillows and freshly vacuumed floors.",
    highlights: ["Dusting & tidying", "Floors vacuumed", "Pillows & throws reset"],
    description: "A living room you can finally relax in.",
  },
  {
    id: "bedroom",
    serviceSlug: "house-cleaning",
    title: "Bedroom Refresh",
    category: "House Cleaning",
    location: "Newburgh, IN",
    imageUrl: "/gallery/bedroom-cleaning-newburgh-in.jpg",
    seoAlt: "Clean, tidy bedroom after house cleaning in Newburgh, IN",
    seoDescription: "Made bed, dusted furniture and clean floors and rugs.",
    highlights: ["Beds made", "Furniture dusted", "Rugs vacuumed"],
    description: "Calm, clean and ready for a good night's sleep.",
  },
  {
    id: "bathroom",
    serviceSlug: "house-cleaning",
    title: "Sparkling Bathroom",
    category: "Kitchens & Bathrooms",
    location: "Boonville, IN",
    imageUrl: "/gallery/bathroom-cleaning-boonville-in.jpg",
    seoAlt: "Spotless bathtub and towels after bathroom cleaning in Boonville, IN",
    seoDescription: "Tub, fixtures and floors scrubbed and shined.",
    highlights: ["Tub & shower scrubbed", "Fixtures shined", "Towels folded"],
    description: "The room everyone notices, sparkling again.",
  },
  {
    id: "dust-bunnies",
    serviceSlug: "custom-cleaning",
    title: "Dust Bunny Eviction",
    category: "Floors & Vacuuming",
    location: "Chandler, IN",
    imageUrl: "/gallery/dust-bunny-removal-chandler-in.jpg",
    seoAlt: "Vacuuming carpet to remove dust and dirt in Chandler, IN",
    seoDescription: "Dust bunnies evicted from under the furniture and corners.",
    highlights: ["Under furniture", "Corners & edges", "Carpets & rugs"],
    description: "Goodbye dust bunnies... you're fired!",
  },
  {
    id: "floors",
    serviceSlug: "house-cleaning",
    title: "Floors & Vacuuming",
    category: "House Cleaning",
    location: "Evansville, IN",
    imageUrl: "/gallery/floors-vacuuming-evansville-in.jpg",
    seoAlt: "Vacuuming floors during a house cleaning in Evansville, IN",
    seoDescription: "Carpets vacuumed and hard floors cleaned room by room.",
    highlights: ["Carpets vacuumed", "Hard floors mopped", "Entryways"],
    description: "Clean floors from the front door to the back bedroom.",
  },
  {
    id: "fresh-bedding",
    serviceSlug: "helping-hand",
    title: "Fresh Sheets & Made Beds",
    category: "A Helping Hand",
    location: "Newburgh, IN",
    imageUrl: "/gallery/fresh-bedding-newburgh-in.jpg",
    seoAlt: "Bed made with fresh white linens in Newburgh, IN",
    seoDescription: "Beds made and the little household tasks taken care of.",
    highlights: ["Beds made", "Household tasks", "Extra set of hands"],
    description: "The little things, done for you.",
  },
];
