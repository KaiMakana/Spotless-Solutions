import { ServiceDetail, GalleryItem, SeoLandingPage } from "./types";

const porchBefore = "before-after-photos/PorchBefore1.jpg";
const porchAfter = "before-after-photos/PorchAfter1.jpg";
const concreteBefore = "before-after-photos/Concretebefore.jpg";
const concreteAfter = "before-after-photos/Concreteafter.jpg";
const poolBefore = "before-after-photos/Poolbefore.jpg";
const poolAfter = "before-after-photos/poolafter.jpg";
const divingBefore = "before-after-photos/DivingBefore1.jpg";
const divingAfter = "before-after-photos/DivingAfter1.jpg";

export const SERVICES_DATA: ServiceDetail[] = [
  {
    id: "pressure-washing",
    title: "Pressure Washing",
    shortDesc: "Remove stubborn grime, black mold, algae, and atmospheric dirt from hard surfaces with professional high-pressure surface scrubbing.",
    fullDesc: "Our high-pressure washing service is designed for maximum dirt-extraction from robust hardscapes. Utilizing state-of-the-art commercial grade pressure, we break down decades of deep-set organic mold, weed roots, and motor oils without causing stress fractures.",
    benefits: [
      "Overcomes slippery hazards on walking spaces",
      "Restores natural surface traction and brightness",
      "Increases concrete longevity and structural integrity",
      "Washes away harmful moss, oil shadows, lichen, and weed seeds"
    ],
    process: [
      "Preheating and surface inspection for cracks or soft joints",
      "Eco-safe biodegradable surfactant application that softens surface soils",
      "Flat-surface disc scrubbing under controlled PSI for uniform streak-free results",
      "Complete post-washing sanitizer flush to inhibit algae regrowth for up to 1 year"
    ],
    faq: [
      {
        question: "Can pressure washing damage concrete?",
        answer: "Only if done incorrectly. Our technicians use high-volume, variable pressure nozzles and flat-surface disc scrubbers that distribute the force evenly, leaving your concrete perfectly safe."
      },
      {
        question: "How long does a typical concrete clean take?",
        answer: "Most domestic front pathways and patios take between 1.5 to 3 hours depending on the level of mold buildup."
      }
    ],
    beforeImage: porchBefore,
    afterImage: porchAfter
  },
  {
    id: "driveway-cleaning",
    title: "Driveway Cleaning",
    shortDesc: "Treat oil discolorations, tyre marks, and dark biological growth to make your driveway the cleanest on the block.",
    fullDesc: "Your driveway is the literal welcome mat of your home. Our driveway restoration system removes grease residues, tyre rubber, and thick organic micro-growth, dramatically enhancing instant curb appeal and property valuation.",
    benefits: [
      "Erases dangerous, slippery algae and biological slickness",
      "Removes unsightly black mold, mud stains, and tire friction marks",
      "Includes premium pre-treatment and post-treating biological inhibitors",
      "Extends the lifespan of your asphalt or concrete aggregate"
    ],
    process: [
      "Clear off all dirt, loose debris and perimeter leaves",
      "Apply high-strength specialized detergent to emulsify vehicle fluids",
      "Scrub with our premium professional twin-nozzle floor machine",
      "Triple-rinse and apply premium organic growth inhibitor"
    ],
    faq: [
      {
        question: "Will you remove all old oil stains?",
        answer: "We use professional-strength degreasers that significantly lighten or completely lift oil stains. However, deep-seated oils that have saturated the concrete over several years may leave a shadow."
      }
    ],
    beforeImage: concreteBefore,
    afterImage: concreteAfter
  },
  {
    id: "fence-cleaning",
    title: "Fence Cleaning",
    shortDesc: "Safely strip grey weathered fibers, mildew, and mildew stains from wooden and vinyl fences to reveal their vibrant colors.",
    fullDesc: "Fences are continuously exposed to damp Wisconsin soil and seasonal debris. Our controlled low-pressure fence cleaning process gently lifts sun-bleached grey fibers, green mildew, and environmental stains without splintering wooden grains or cracking plastic panels.",
    benefits: [
      "Prepares wood perfectly for paint, sealer, or stain adhesion",
      "Saves thousands compared to replacing boards",
      "Dissolves green mold and yellow pollen film on vinyl and timber",
      "Restores beautiful, rich natural wood color in minutes"
    ],
    process: [
      "Thorough evaluation of wood species (Cedar, treated Pine) or Vinyl integrity",
      "Application of wood-safe oxygenated softwash treatment to lift silver UV fibers",
      "Delicate low-pressure scrub with specialized fan tips to glide off organic debris",
      "Application of neutralizing rinse to balance pH values and brighten timber fibers"
    ],
    faq: [
      {
        question: "Does fence cleaning splinter soft timber?",
        answer: "Absolutely not. We avoid high pressure altogether, using a specialized 'softwash' technique. This uses chemical emulsification to lift soil, requiring only garden-hose pressure to wipe away."
      }
    ]
  },
  {
    id: "patio-cleaning",
    title: "Patio & Porch Cleaning",
    shortDesc: "Restore the welcoming warmth of your outdoor entertainment areas. Safe for stone, brick, wood, and composite decking.",
    fullDesc: "Protect your favorite weekend hosting spaces. We utilize tailored surface cleaners to deep-clean porous bricks, pavers, composite decks, and flagstones, bringing back their natural deep hues and removing mossy joint infestations.",
    benefits: [
      "Lifts deeply ingrained pollen and BBQ food grease spots",
      "Inhibits hazardous weed sprouting in sand and paver grout",
      "Safe on expensive materials like Trex composite and slate",
      "Creates an exceptionally clean environment for family and pets"
    ],
    process: [
      "Remove patio furniture, plant pots, and perimeter decorations",
      "Target organic spore spots with localized biodegradable cleaners",
      "Power-sweep or softwash paver blocks or wooden floor joists",
      "Rinse with clean, filtered water and restore layout elements"
    ],
    faq: [
      {
        question: "Do you refill the paver sand after cleaning?",
        answer: "We clean sand joints to clear out weeds and moss without removing solid underlying sand. We offer light post-clean rinsing or can advise if your pavers require a full polymer joint sand re-application."
      }
    ],
    beforeImage: porchBefore,
    afterImage: porchAfter
  },
  {
    id: "pool-cleaning",
    title: "Pool Area Cleaning",
    shortDesc: "Ensure safe, slip-free, sanitary lounging surfaces around your pool, fully free of green algae and chlorine-resistant grime.",
    fullDesc: "Pool areas are prone to moisture-loving molds, suntan oils, and calcium stains. Our specialized pool surround cleaning system keeps concrete, travertine, and safety decking sanitarily clean, completely slip-free, and inviting for swimmers.",
    benefits: [
      "Removes slippery green slime layer to prevent severe slips and falls",
      "Sanitizes concrete surfaces against biological spores",
      "Extracts sun-screen residues, chlorine chalking, and dirt layers",
      "Safe chemical management ensures no run-off enters your pool"
    ],
    process: [
      "Block off borders to isolate and redirect wash water runoff patterns",
      "Gently mist eco-safe sanitizing solution to neutralize persistent mildew",
      "Run specialized non-marking surface spinners",
      "Rinse all water flows safely away from pool coping and filter systems"
    ],
    faq: [
      {
        question: "Will cleaning chemical agents get into my pool water?",
        answer: "No. We utilize advanced water redirection techniques and sweep runoff away from pool edges. Any detergents used are fully biodegradable and highly diluted."
      }
    ],
    beforeImage: poolBefore,
    afterImage: poolAfter
  },
  {
    id: "house-washing",
    title: "House Exterior Washing",
    shortDesc: "Protect your siding's lifespan and remove black mold and spider webs using our certified ultra-safe softwash machinery.",
    fullDesc: "High pressure should never be sprayed on raw siding. Our softwash system uses high-volume, low-pressure gentle streams combined with premium mold-destroying agents to gently wash dirt, pollen, and cobwebs from your brick, vinyl, or wood home exterior.",
    benefits: [
      "Keeps vinyl, cedar siding, and stucco perfectly safe from paint chipping",
      "Eradicates biological organisms at their chemical core to prevent fast returns",
      "Clears away heavy nests, cobwebs, soot, and Wisconsin pollen layers",
      "Instantly increases street-level valuation and brightens window frames"
    ],
    process: [
      "Prework seal of all electricity meters, door lock keyholes, and outdoor outlets",
      "Protective soaking of all lawn grasses and ornamentals to shield roots",
      "Mist dynamic surfactant soap safely onto gutters, fascia, and siding planes",
      "Low-pressure gentle warm-water rinse to present a spotless home outline"
    ],
    faq: [
      {
        question: "Do you use high pressure on my vinyl siding?",
        answer: "Never. High pressure can force water behind siding panels, causing unseen mold or rot inside your drywall. We use 'Softwashing', keeping pressure under 300 PSI (similar to a standard garden hose)."
      }
    ]
  },
  {
    id: "gutter-cleaning",
    title: "Gutter Cleaning",
    shortDesc: "Avoid foundation erosion, basement moisture, and dangerous roof ice dams with total debris clear-out and flushing.",
    fullDesc: "Wisconsin soils and deciduous trees lead to rapid leaf buildup. Our elite gutter wellness program ensures pristine, free-flowing gutters. We clear out heavy sludge, flush all downspouts, and brighten gutter faces to eliminate black streak stains.",
    benefits: [
      "Prevents heavy water overflow that leads to basement flooding",
      "Prevents roof rust, wood rot, and winter frost roof damage",
      "Includes full downspout flow testing to verify free drainage",
      "Cleans black static streak stains ('tiger striping') off gutter faces"
    ],
    process: [
      "Carefully scoop out and bag thick leaf mud, twigs, and shingle slate gravel",
      "Vacuum downspout entries and remove persistent branch blocks",
      "Flush entire line with high-pressure hose nozzles, checking exit joints",
      "Hand-wipe gutter exteriors with restoration cleaner to highlight clean white metal"
    ],
    faq: [
      {
        question: "Do you clean the outside of the gutters too?",
        answer: "Yes, our comprehensive service includes clearing out inner debris, checking flow joints, and standard hand-washing of the outer visual faces to remove black streaking."
      },
      {
        question: "How often should my Wisconsion gutters be serviced?",
        answer: "We recommend twice annually: in early Spring to clear Winter grit, and in late Autumn once leaves have completely finished falling."
      }
    ]
  }
];

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: "gal-1",
    before: porchBefore,
    after: porchAfter,
    title: "Porch & Patio Deep Clean",
    category: "Patios",
    description: "Concrete front porch restored from thick organic mold and lichen layers to a pristine, light finish."
  },
  {
    id: "gal-2",
    before: concreteBefore,
    after: concreteAfter,
    title: "Oil & Stain Concrete Driveway Restoration",
    category: "Driveways",
    description: "High-volume surface cleaning removed accumulated tire tracks, dark algae patches, and stubborn surface grime on this Wisconsin driveway."
  },
  {
    id: "gal-3",
    before: poolBefore,
    after: poolAfter,
    title: "Sanitary Pool Deck Algae Wash",
    category: "Pool Area",
    description: "Removed slippery black biological growth around domestic poolside lounging areas, improving safety and appearance."
  },
  {
    id: "gal-4",
    before: divingBefore,
    after: divingAfter,
    title: "Diving Board Mold Treatment & Surfacing",
    category: "Pool Area",
    description: "Controlled soft-wash process lifted years of embedded black mold spores from physical diving platform materials safely."
  }
];

export const GENERAL_FAQ_DATA = [
  {
    question: "Do I need to be home for the cleaning?",
    answer: "No, as long as we have full access to a working outdoor water supply (spigot) and your gates are unlocked, our team can perform the service while you are at work. We will text before and after pictures representing our progress."
  },
  {
    question: "Can pressure washing damage house siding?",
    answer: "Yes, using too much pressure on delicate siding materials like vinyl or wood can cause deep water intrusion, crack panels, or strip paints. This is why Spotless Solutions uses a dedicated low-pressure Softwash technique, relying on bio-detergents to break down grime rather than brute pressure."
  },
  {
    question: "What areas does Spotless Solutions service?",
    answer: "We proudly serve the entirety of Waukesha County, Wisconsin, operating directly out of our home base in Mukwonago, WI! Our service communities include Mukwonago, Waukesha, Pewaukee, Brookfield, New Berlin, Muskego, Hartland, Delafield, Oconomowoc, Sussex, and Menomonee Falls."
  },
  {
    question: "Do you have a satisfaction guarantee?",
    answer: "Absolutely! We do not ask for final payment until you have completely walked around and inspected our work with the crew. If any spot is not up to our spotless standard, we will clean it immediately until you are 100% satisfied."
  },
  {
    question: "Are you licensed and certified?",
    answer: "Yes, Spotless Solutions is a fully licensed local crew. Our technicians Will and Avery are trained in all safety regulations and softwash procedures to safeguard your family and property."
  }
];

export const WAUKESHA_CITIES = [
  { name: "Mukwonago", zipcode: "53149" },
  { name: "Waukesha", zipcode: "53188" },
  { name: "Pewaukee", zipcode: "53072" },
  { name: "Brookfield", zipcode: "53005" },
  { name: "New Berlin", zipcode: "53151" },
  { name: "Muskego", zipcode: "53150" },
  { name: "Hartland", zipcode: "53029" },
  { name: "Delafield", zipcode: "53018" },
  { name: "Oconomowoc", zipcode: "53066" },
  { name: "Sussex", zipcode: "53089" },
  { name: "Menomonee Falls", zipcode: "53051" }
];

// Dynamically generate SEO pages structured around City, State and Target Service keywords.
export const generateSeoLanding = (city: string, serviceKey: string): SeoLandingPage => {
  const serviceMap: { [key: string]: { label: string; details: string; process: string } } = {
    "pressure-washing": {
      label: "Pressure Washing",
      details: "concrete and durable outdoor surfaces restored from heavy Wisconsin winter lichen and stains",
      process: "deep mechanical flat surface cleaners paired with warm water flushing and pre-treatments"
    },
    "gutter-cleaning": {
      label: "Gutter Cleaning",
      details: "comprehensive leaf debris removal, drain flow diagnostics, and high-volume gutter brightening",
      process: "certified safety ladder protocols, debris bagging, and structural high-flow downspout flushing"
    },
    "driveway-cleaning": {
      label: "Driveway Cleaning",
      details: "stubborn oil stain disintegration, tyre mark washes, and biological mold bleaching",
      process: "commercial degreaser saturations, combined with non-marking flat surface floor cleaners"
    }
  };

  const currentService = serviceMap[serviceKey] || serviceMap["pressure-washing"];
  const serviceLabel = currentService.label;

  return {
    slug: `${serviceKey}-in-${city.toLowerCase().replace(/\s+/g, "-")}-wi`,
    serviceKey,
    city,
    title: `Best ${serviceLabel} in ${city} WI | Spotless Solutions`,
    metaDescription: `Spotless Solutions is the leader in licensed ${serviceLabel} services in ${city} WI. Highly rated, commercial equipment. Instantly book a free estimate!`,
    headline: `Premier ${serviceLabel} Services In ${city}, Wisconsin`,
    subheadline: `Premium local care operated by Will and Avery with commercial-grade cleaning systems. Ready to make your property look new again?`,
    localBodyText: `For homeowners, property managers, and business operators in the ${city} area, keeping outdoor brickwork, siding, and gutters clean is essential against Wisconsin's challenging seasonal climates. Our locally-owned crew provides custom ${currentService.details} with no mess and a 100% satisfaction guarantee. Using our state-of-the-art ${currentService.process}, Spotless Solutions ensures your ${city} neighborhood property remains clean, pristine, and highly valued. Join hundreds of your local Wisconsin neighbors who depend on Will & Avery for immediate support, excellent pricing, and premium local craftsmanship.`,
    keywords: [
      `${serviceLabel} ${city} WI`,
      `best ${serviceLabel} ${city}`,
      `exterior cleaners near ${city}`,
      `${city} pressure washing contractors`
    ]
  };
};
