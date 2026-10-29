// All site copy and content lives here so it can be edited (or swapped for a CMS) in one place.

// Placeholder photography (Unsplash) stored in /public/images. Replace with your own photos.
// next/image serves resized versions automatically.
const img = (id: string) => `/images/${id}.jpg`;

export const site = {
  name: "Elxir",
  tagline: "Architecture & Interiors",
  description:
    "Elxir is an architecture and interior design studio shaping calm, enduring spaces for living, working and gathering.",
  email: "hello@elxir.studio",
  phone: "+1 (555) 014-2290",
  address: ["24 Foundry Lane", "Studio 3B", "Brooklyn, NY 11201"],
  hours: "Mon – Fri, 9:00 – 18:00",
  socials: [
    { short: "FB", label: "Facebook", href: "https://facebook.com" },
    { short: "IN", label: "Instagram", href: "https://instagram.com" },
    { short: "LI", label: "LinkedIn", href: "https://linkedin.com" },
    { short: "BE", label: "Behance", href: "https://behance.net" },
  ],
  footerBlurb:
    "We take every project from first idea and concept through to realisation. We respect tradition and build it into how we innovate. The client is at the heart of every project.",
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "Portfolio", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "News", href: "/news" },
  { label: "Contacts", href: "/contact" },
] as const;

export const categories = ["Architecture", "Interior", "Residential", "Commercial"] as const;
export type Category = (typeof categories)[number];

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  categories: Category[];
  location: string;
  year: string;
  client: string;
  area: string;
  cover: string;
  thumb: string;
  gallery: string[];
  summary: string;
  body: string[];
};

export const projects: Project[] = [
  {
    slug: "villa-solace",
    title: "Villa Solace",
    subtitle: "A hillside residence opened to the light",
    categories: ["Architecture", "Residential"],
    location: "Malibu, California",
    year: "2025",
    client: "Private",
    area: "620 m²",
    cover: img("photo-1600585154340-be6161a56a0c"),
    thumb: img("photo-1600585154340-be6161a56a0c"),
    gallery: [
      img("photo-1600607687939-ce8a6c25118c"),
      img("photo-1600566753190-17f0baa2a6c3"),
      img("photo-1600210492486-724fe5c67fb0"),
      img("photo-1600596542815-ffad4c1539a9"),
    ],
    summary:
      "Three stepped volumes follow the slope, each framing a different view of the coastline.",
    body: [
      "The brief asked for a home that felt sheltered yet entirely open to its setting. We answered with three stepped volumes that follow the natural fall of the land, so every principal room has its own framed view of the ocean.",
      "Board-formed concrete, white oak and travertine make up a deliberately restrained palette. Deep overhangs and operable screens temper the western sun and let the house breathe through the seasons.",
    ],
  },
  {
    slug: "atelier-house",
    title: "Atelier House",
    subtitle: "Warm minimalism for a family of makers",
    categories: ["Interior", "Residential"],
    location: "Copenhagen, Denmark",
    year: "2024",
    client: "The Halvorsen Family",
    area: "280 m²",
    cover: img("photo-1618221195710-dd6b41faaea6"),
    thumb: img("photo-1618221195710-dd6b41faaea6"),
    gallery: [
      img("photo-1616486338812-3dadae4b4ace"),
      img("photo-1586023492125-27b2c045efd7"),
      img("photo-1600573472550-8090b5e0745e"),
      img("photo-1502005229762-cf1b2da7c5d6"),
    ],
    summary:
      "A 1930s townhouse reworked around a central workshop and a long, sunlit kitchen.",
    body: [
      "We removed later partitions to recover the original proportions, then organised the plan around a double-height workshop at the heart of the house.",
      "Limewashed walls, linen, and solid ash joinery keep the interiors tactile and quiet, a calm backdrop to a busy creative household.",
    ],
  },
  {
    slug: "meridian-tower",
    title: "Meridian Tower",
    subtitle: "A mixed-use landmark with a civic ground floor",
    categories: ["Architecture", "Commercial"],
    location: "Rotterdam, Netherlands",
    year: "2024",
    client: "Meridian Holdings",
    area: "18,400 m²",
    cover: img("photo-1487958449943-2429e8be8625"),
    thumb: img("photo-1487958449943-2429e8be8625"),
    gallery: [
      img("photo-1511818966892-d7d671e672a2"),
      img("photo-1449844908441-8829872d2607"),
      img("photo-1503387762-592deb58ef4e"),
      img("photo-1541888946425-d81bb19240f5"),
    ],
    summary:
      "Twenty-two storeys of offices and homes rising from a public arcade along the river.",
    body: [
      "The tower's base is given back to the city as a covered arcade of cafés, studios and a public library branch, extending the waterfront promenade beneath the building.",
      "A ribbed precast façade shifts from solid to open as it rises, balancing daylight, solar control and the rhythm of the street.",
    ],
  },
  {
    slug: "north-loft",
    title: "North Loft",
    subtitle: "An industrial shell turned light-filled workspace",
    categories: ["Interior", "Commercial"],
    location: "Brooklyn, New York",
    year: "2023",
    client: "Northbound Creative",
    area: "1,150 m²",
    cover: img("photo-1497366216548-37526070297c"),
    thumb: img("photo-1497366216548-37526070297c"),
    gallery: [
      img("photo-1524758631624-e2822e304c36"),
      img("photo-1497366216548-37526070297c"),
      img("photo-1505843513577-22bb7d21e455"),
      img("photo-1586023492125-27b2c045efd7"),
    ],
    summary:
      "A former printworks reimagined as an open studio for a hundred-person creative agency.",
    body: [
      "We kept the cast-iron columns and timber ceilings, inserting a freestanding oak pavilion that holds meeting rooms, focus booths and a library.",
      "Acoustic felt, planted courts and a long communal table make the vast floorplate feel intimate and easy to inhabit.",
    ],
  },
  {
    slug: "casa-lumen",
    title: "Casa Lumen",
    subtitle: "A courtyard home built around shade and water",
    categories: ["Architecture", "Residential"],
    location: "Marbella, Spain",
    year: "2023",
    client: "Private",
    area: "410 m²",
    cover: img("photo-1613490493576-7fde63acd811"),
    thumb: img("photo-1613490493576-7fde63acd811"),
    gallery: [
      img("photo-1600047509807-ba8f99d2cdde"),
      img("photo-1512917774080-9991f1c4c750"),
      img("photo-1600596542815-ffad4c1539a9"),
      img("photo-1494526585095-c41746248156"),
    ],
    summary:
      "Rooms wrap a shaded courtyard and reflecting pool that cool the house through summer.",
    body: [
      "Drawing on Andalusian precedents, the house turns inward to a courtyard where water, planting and shade create a microclimate of their own.",
      "Thick lime-rendered walls, terracotta floors and hand-made tiles root the home in its region while the plan remains entirely contemporary.",
    ],
  },
  {
    slug: "harbor-residences",
    title: "Harbor Residences",
    subtitle: "Thirty-six apartments on a reclaimed quay",
    categories: ["Architecture", "Residential", "Commercial"],
    location: "Oslo, Norway",
    year: "2022",
    client: "Fjordline Developments",
    area: "5,200 m²",
    cover: img("photo-1494526585095-c41746248156"),
    thumb: img("photo-1494526585095-c41746248156"),
    gallery: [
      img("photo-1560448204-e02f11c3d0e2"),
      img("photo-1600607687939-ce8a6c25118c"),
      img("photo-1600566753190-17f0baa2a6c3"),
      img("photo-1512917774080-9991f1c4c750"),
    ],
    summary:
      "Timber-clad homes stepping down to the water, each with a deep loggia facing the fjord.",
    body: [
      "Cross-laminated timber structure and a larch rainscreen give the building a low-carbon footprint and a warm presence on the harbour.",
      "Every apartment is dual-aspect, with a generous loggia that acts as an outdoor room for most of the year.",
    ],
  },
  {
    slug: "glasshouse-pavilion",
    title: "Glasshouse Pavilion",
    subtitle: "A garden room dissolved into its landscape",
    categories: ["Architecture", "Residential"],
    location: "Kent, United Kingdom",
    year: "2022",
    client: "Private",
    area: "180 m²",
    cover: img("photo-1600596542815-ffad4c1539a9"),
    thumb: img("photo-1600596542815-ffad4c1539a9"),
    gallery: [
      img("photo-1600566753190-17f0baa2a6c3"),
      img("photo-1600210492486-724fe5c67fb0"),
      img("photo-1600607687939-ce8a6c25118c"),
      img("photo-1560448204-e02f11c3d0e2"),
    ],
    summary: "A steel and glass pavilion set between mature trees, built for gathering and quiet.",
    body: [
      "Slender steel columns and frameless glazing let the garden flow straight through the building, while a deep roof plate keeps the interior cool.",
      "A single run of oak joinery holds the kitchen, library and storage so that the rest of the room stays open.",
    ],
  },
  {
    slug: "cedar-ridge-house",
    title: "Cedar Ridge House",
    subtitle: "A family home built around a long gallery",
    categories: ["Architecture", "Residential"],
    location: "Aspen, Colorado",
    year: "2021",
    client: "The Marlow Family",
    area: "540 m²",
    cover: img("photo-1512917774080-9991f1c4c750"),
    thumb: img("photo-1512917774080-9991f1c4c750"),
    gallery: [
      img("photo-1600585154340-be6161a56a0c"),
      img("photo-1613490493576-7fde63acd811"),
      img("photo-1600047509807-ba8f99d2cdde"),
      img("photo-1494526585095-c41746248156"),
    ],
    summary: "Cedar, stone and glass arranged along a gallery that frames the mountain views.",
    body: [
      "A double-height gallery runs the length of the house, joining family rooms, guest wing and studio under one long roof.",
      "Local stone and untreated cedar weather naturally, so the house settles into the ridge over time.",
    ],
  },
  {
    slug: "atrium-offices",
    title: "Atrium Offices",
    subtitle: "A headquarters organised around light",
    categories: ["Interior", "Commercial"],
    location: "Berlin, Germany",
    year: "2021",
    client: "Atrium Capital",
    area: "3,600 m²",
    cover: img("photo-1524758631624-e2822e304c36"),
    thumb: img("photo-1524758631624-e2822e304c36"),
    gallery: [
      img("photo-1497366216548-37526070297c"),
      img("photo-1505843513577-22bb7d21e455"),
      img("photo-1586023492125-27b2c045efd7"),
      img("photo-1503387762-592deb58ef4e"),
    ],
    summary: "Five floors of workspace opened around a planted atrium and a feature stair.",
    body: [
      "We cut a new atrium through the middle of the building and filled it with planting and a sculptural stair that links every floor.",
      "Workspaces are organised in neighbourhoods around the atrium, each with its own meeting rooms and quiet areas.",
    ],
  },
];

export const heroSlides = projects.slice(0, 4);

export const services = [
  {
    no: "01",
    title: "Architecture",
    icon: "ruler" as const,
    price: "$12k – $60k",
    tags: ["Concept", "Visualisation", "3D Modelling"],
    text: "New-build homes, cultural and commercial buildings, from feasibility and concept through planning, detail and site.",
    points: ["Feasibility & briefing", "Concept design", "Planning applications", "Technical design"],
    image: img("photo-1503387762-592deb58ef4e"),
  },
  {
    no: "02",
    title: "Interior Design",
    icon: "chair" as const,
    price: "$6k – $30k",
    tags: ["Concept", "Visualisation", "3D Modelling"],
    text: "Considered interiors where space, light, material and furniture are designed together as one complete idea.",
    points: ["Spatial planning", "Material palettes", "Bespoke joinery", "Lighting design"],
    image: img("photo-1616486338812-3dadae4b4ace"),
  },
  {
    no: "03",
    title: "Renovation",
    icon: "hammer" as const,
    price: "$8k – $40k",
    tags: ["Concept", "Visualisation", "3D Modelling"],
    text: "Sensitive transformations of existing and heritage buildings that respect their past and prepare them for the future.",
    points: ["Measured surveys", "Heritage consents", "Retrofit & energy", "Extensions"],
    image: img("photo-1600573472550-8090b5e0745e"),
  },
  {
    no: "04",
    title: "Furniture & Styling",
    icon: "bag" as const,
    price: "$2k – $12k",
    tags: ["Concept", "Visualisation", "3D Modelling"],
    text: "Curation and custom pieces that complete a project, from sourcing to final installation and styling.",
    points: ["Furniture sourcing", "Custom pieces", "Art curation", "Installation"],
    image: img("photo-1586023492125-27b2c045efd7"),
  },
];

export const process = [
  { no: "01", title: "Listen", text: "We begin with conversation, understanding how you live, work and what the place asks of us." },
  { no: "02", title: "Concept", text: "Sketches, models and references define a clear idea that guides every later decision." },
  { no: "03", title: "Develop", text: "We refine the design with engineers and makers, resolving detail, cost and programme." },
  { no: "04", title: "Build", text: "On site we protect the design intent through to handover and beyond." },
];

export const stats = [
  { value: 18, suffix: "", label: "Years of practice", note: "Founded in 2008" },
  { value: 240, suffix: "+", label: "Completed projects", note: "Homes, workplaces & public buildings" },
  { value: 32, suffix: "", label: "Design awards", note: "Including two national prizes" },
  { value: 14, suffix: "", label: "Countries", note: "Across Europe & North America" },
];

export const testimonials = [
  {
    quote:
      "They listened more carefully than anyone we spoke to. The house feels like it has always belonged on that hillside.",
    name: "Laura Reyes",
    role: "Villa Solace",
    date: "04.04.2025",
    source: "Google",
  },
  {
    quote:
      "Our team moved in and the way we work changed overnight. Calm, generous and incredibly well detailed.",
    name: "Jonah Patel",
    role: "Founder, Northbound Creative",
    date: "12.02.2025",
    source: "LinkedIn",
  },
  {
    quote:
      "A rare studio that is equally strong on ideas and delivery. Every promise in the concept made it to site.",
    name: "Ingrid Solberg",
    role: "Director, Fjordline Developments",
    date: "01.02.2025",
    source: "Houzz",
  },
  {
    quote:
      "Clear communication, beautiful drawings and a site team that cared as much as we did. We would hire them again tomorrow.",
    name: "Marcus Webb",
    role: "Atrium Capital",
    date: "18.11.2024",
    source: "Google",
  },
];

// Placeholder people and portraits (Unsplash). Replace with your real team.
export const team = [
  {
    name: "Adaeze Okafor",
    role: "Founding Partner",
    bio: "Leads the studio's design direction across every project.",
    image: "/images/team/adaeze.jpg",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Tomas Lindqvist",
    role: "Partner, Architecture",
    bio: "Shapes our residential and cultural buildings from concept to site.",
    image: "/images/team/tomas.jpg",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Mei Tanaka",
    role: "Head of Interiors",
    bio: "Brings material, light and furniture together into one idea.",
    image: "/images/team/mei.jpg",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Daniel Hart",
    role: "Project Director",
    bio: "Keeps design intent intact through cost, programme and construction.",
    image: "/images/team/daniel.jpg",
    linkedin: "https://linkedin.com",
  },
];

export const pageImages = {
  about: img("photo-1600047509807-ba8f99d2cdde"),
  aboutSide: img("photo-1505843513577-22bb7d21e455"),
  services: img("photo-1524758631624-e2822e304c36"),
  contact: img("photo-1600210492486-724fe5c67fb0"),
  intro: img("photo-1560448204-e02f11c3d0e2"),
  cta: img("photo-1502005229762-cf1b2da7c5d6"),
};

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getNextProject(slug: string) {
  const i = projects.findIndex((p) => p.slug === slug);
  return projects[(i + 1) % projects.length];
}

// Placeholder partner names, rendered as simple wordmarks. Swap for real client logos.
export const partners = ["Northbound", "Fjordline", "Meridian", "Atrium", "Halvorsen", "Marlow & Co"];

export const offerCategories = [
  { title: "Residential design", image: img("photo-1600607687939-ce8a6c25118c") },
  { title: "Commercial design", image: img("photo-1497366216548-37526070297c") },
];

export type Post = {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  image: string;
  excerpt: string;
  body: string[];
};

// Journal posts. Placeholder articles; replace with your own (or load from a CMS).
export const posts: Post[] = [
  {
    slug: "principles-of-smart-living",
    title: "Principles of smart living",
    date: "2026-02-27",
    tags: ["Concept", "Inspiration"],
    image: img("photo-1600585154340-be6161a56a0c"),
    excerpt:
      "Smart homes are not about gadgets. They start with orientation, daylight and plans that adapt as families change.",
    body: [
      "When clients ask for a smart home, they often mean technology: lighting scenes, heating apps, voice control. Those have their place, but the smartest decisions are made much earlier, on the site plan and in the first sketches.",
      "Orientation decides how much free heat and daylight a house receives. A plan with generous circulation and a few flexible rooms can become a nursery, a studio or a home office without building work. Thick walls, good insulation and shading reduce the need for active systems in the first place.",
      "Technology then becomes a quiet layer on top: simple controls, sensors where they genuinely help, and wiring routes that make future upgrades easy. The result is a home that is comfortable, efficient and easy to live in for decades.",
    ],
  },
  {
    slug: "graphic-design-and-architecture",
    title: "Graphic design and architecture",
    date: "2026-01-12",
    tags: ["Contemporary", "Photography"],
    image: img("photo-1613490493576-7fde63acd811"),
    excerpt:
      "Wayfinding, signage and material graphics are part of the building, not stickers added at the end.",
    body: [
      "Good buildings communicate. Entrances should be obvious, routes legible and rooms easy to find, and graphic design is one of the most powerful tools we have to make that happen.",
      "On our commercial projects we bring graphic designers in during concept design. Letterforms are cast into concrete, numbers are inlaid in floors and colour is used to code floors and departments, so the identity is built into the architecture rather than applied afterwards.",
      "The same thinking works at home: a carefully chosen house number, a cast name plate or a tiled threshold can give a building its personality from the street.",
    ],
  },
  {
    slug: "house-vs-apartment",
    title: "House vs apartment: pros and cons",
    date: "2025-12-02",
    tags: ["Portfolio", "Urban design"],
    image: img("photo-1494526585095-c41746248156"),
    excerpt:
      "Space, cost, maintenance and community: how we help clients decide between a house and an apartment.",
    body: [
      "Choosing between a house and an apartment is one of the first questions many of our residential clients face. Neither is better in absolute terms; it depends on how you want to live.",
      "Houses offer more space, private outdoor areas and freedom to extend, but they come with higher running and maintenance costs. Apartments trade some space for location, security and shared amenities, and well-designed ones can feel just as generous.",
      "We often help clients by testing both options on paper: sketch layouts, rough budgets and daylight studies make the trade-offs concrete before anyone commits.",
    ],
  },
  {
    slug: "modern-spaces-premium-design",
    title: "Modern spaces, premium design",
    date: "2025-11-15",
    tags: ["Contemporary", "Concept"],
    image: img("photo-1600607687939-ce8a6c25118c"),
    excerpt: "Premium design is less about expensive finishes and more about proportion, light and detail.",
    body: [
      "Luxury is often confused with expensive materials. In our experience, the spaces that feel most premium are the ones with the best proportions, the most considered daylight and the cleanest details.",
      "A shadow gap at the base of a wall, a door that runs floor to ceiling, a window set exactly where the view is best: these cost little but make a room feel calm and complete.",
      "Spend the budget where you touch and see every day: handles, worktops, floors and lighting. Then let the architecture do the rest.",
    ],
  },
  {
    slug: "designing-with-timber",
    title: "Designing with timber",
    date: "2025-10-08",
    tags: ["Inspiration", "Urban design"],
    image: img("photo-1600047509807-ba8f99d2cdde"),
    excerpt: "Why mass timber is changing how we build homes and offices, and what to consider before choosing it.",
    body: [
      "Cross-laminated timber and glulam let us build faster, lighter and with far less embodied carbon than concrete or steel. They also bring warmth and texture to interiors that is hard to achieve any other way.",
      "Timber needs careful detailing: protection from moisture during construction, good acoustic separation between floors and a clear fire strategy. When those are resolved early, it is a robust and beautiful choice.",
      "Our Harbor Residences project uses a full CLT structure with a larch rainscreen, and has become a reference for clients considering timber.",
    ],
  },
  {
    slug: "light-as-a-material",
    title: "Light as a building material",
    date: "2025-09-21",
    tags: ["Photography", "Portfolio"],
    image: img("photo-1600566753190-17f0baa2a6c3"),
    excerpt: "How we model daylight from the first sketch, and why it shapes almost every decision we make.",
    body: [
      "Daylight is free, changes through the day and the seasons, and affects how people feel in a space more than almost anything else. We treat it as a material, designed as carefully as stone or timber.",
      "From the first sketch we study sun paths and model daylight in every main room. Window positions, ceiling heights and room depths are adjusted until each space has the right quality of light for its use.",
      "Artificial lighting is then designed to complement daylight, not replace it: warm, low and layered in the evening, so the house feels as good at night as it does at noon.",
    ],
  },
];

export const postTags = [...new Set(posts.flatMap((p) => p.tags))];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}

export function formatDate(iso: string) {
  const [y, m, d] = iso.split("-");
  return `${d}.${m}.${y.slice(2)}`;
}

// Studio location for the contact map.
export const location = { lat: 40.6995, lon: -73.9866 };
