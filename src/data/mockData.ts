import { Vehicle, CruiseTerminal, SightseeingStop } from '../types';

export const VEHICLES: Vehicle[] = [
  {
    id: 'v-class',
    name: 'Mercedes-Benz V-Class Extra Long',
    category: 'VIP Luxury MPV',
    badge: 'Cruise Traveler Top Pick',
    tagline: 'The ultimate chauffeur vehicle for cruise luggage, families, and executive groups.',
    passengers: 7,
    luggageCapacity: {
      largeSuitcases: 7,
      cabinBags: 7,
    },
    features: [
      'Up to 7 Large Full-Size Suitcases + 7 Hand Bags',
      'Face-to-Face Conference Seating or Forward Facing',
      'Rear Climate Control & Privacy Tinted Glass',
      'Onboard 5G Wi-Fi & Multi-device USB Fast Chargers',
      'Complimentary Chilled Harrogate Spring Water & Mints',
      'Electric Sliding Doors & Air Suspension Comfort',
    ],
    specs: {
      seatingConfig: 'Flexible 6-7 VIP Captain Chairs',
      comfort: 'Nappa leather, ambient LED lighting',
      wifi: 'High-speed 5G secure hotspot',
      refreshments: 'Still & sparkling mineral waters',
    },
    baseFareSouthamptonFromLondon: 310,
    baseFareSouthamptonFromHeathrow: 285,
    imageUrl: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1200&q=80',
    recommendedFor: 'Cruise passengers with substantial luggage (14+ day cruises), families & groups up to 7.',
  },
  {
    id: 'luxury-suv',
    name: 'Luxury First-Class SUV',
    category: 'Flagship VIP SUV',
    badge: 'Ultimate Prestige',
    tagline: 'Range Rover Long-Wheelbase / Mercedes-Benz GLS for premier executive distinction.',
    passengers: 4,
    luggageCapacity: {
      largeSuitcases: 4,
      cabinBags: 4,
    },
    features: [
      'Accommodates 4 Large Check-in Bags + Cabin Luggage',
      'First-Class Executive Reclining Rear Seats',
      'Panoramic Sunroof & Acoustic Acoustic Glazing',
      'Burmester / Meridian Surround Sound System',
      'VIP Meet & Greet at Heathrow Terminal or Hotel Lobby',
      'Chilled Beverages & Premium Refreshment Kit',
    ],
    specs: {
      seatingConfig: '4 Luxury Executive Captains / Lounge',
      comfort: 'Heated & ventilated massage leather seats',
      wifi: 'High-speed 5G hotspot',
      refreshments: 'Gourmet artisanal snacks & bottled water',
    },
    baseFareSouthamptonFromLondon: 360,
    baseFareSouthamptonFromHeathrow: 330,
    imageUrl: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
    recommendedFor: 'VIP couples, solo executives, and discerning travelers seeking maximum luxury & status.',
  },
  {
    id: 'standard-suv',
    name: 'Standard Executive SUV',
    category: 'Executive SUV',
    badge: 'Popular Value & Comfort',
    tagline: 'Mercedes-Benz GLE / Audi Q7 / Volvo XC90 combining generous space with refined luxury.',
    passengers: 4,
    luggageCapacity: {
      largeSuitcases: 3,
      cabinBags: 4,
    },
    features: [
      'Accommodates 3-4 Large Bags + 4 Hand Bags',
      'Elevated Seating Position for Scenic UK Countryside Views',
      'Smooth Highway Cruiser with All-Wheel Drive Safety',
      'Dual-zone Climate Control & Device Charging Ports',
      'Complimentary Bottled Mineral Water',
      'Professional PCO-Licensed Chauffeur',
    ],
    specs: {
      seatingConfig: '4 Adults Comfortably',
      comfort: 'Full leather interior with quiet cabin ride',
      wifi: 'Fast 4G/5G mobile hotspot',
      refreshments: 'Bottled water included',
    },
    baseFareSouthamptonFromLondon: 275,
    baseFareSouthamptonFromHeathrow: 250,
    imageUrl: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1200&q=80',
    recommendedFor: 'Couples or small families with standard cruise luggage wanting high SUV ride comfort.',
  },
];

export const CRUISE_TERMINALS: CruiseTerminal[] = [
  {
    id: 'ocean-terminal',
    name: 'Ocean Cruise Terminal (Berth 46/47)',
    dockNumber: 'Dock Gate 4, Cunard Road, Southampton SO14 3QN',
    popularCruiseLines: ['Cunard (Queen Mary 2, Queen Anne)', 'P&O Cruises (Iona, Arvia, Britannia)', 'Princess Cruises'],
    transitTimeFromLHR: '70 - 85 mins',
    transitTimeFromLondon: '100 - 120 mins',
    meetPointDescription: 'Driver waits directly outside the Arrivals Gate with personalized electronic nameboard.',
  },
  {
    id: 'horizon-terminal',
    name: 'Horizon Cruise Terminal (Berth 102)',
    dockNumber: 'Dock Gate 10, Western Docks, Southampton SO15 1AW',
    popularCruiseLines: ['MSC Cruises (Virtuosa, Euribia)', 'Norwegian Cruise Line (NCL)', 'Celebrity Cruises'],
    transitTimeFromLHR: '75 - 90 mins',
    transitTimeFromLondon: '105 - 125 mins',
    meetPointDescription: 'VIP drop-off lane directly adjacent to cruise luggage porter station.',
  },
  {
    id: 'mayflower-terminal',
    name: 'Mayflower Cruise Terminal (Berth 106)',
    dockNumber: 'Dock Gate 10, Western Docks, Southampton SO15 1HJ',
    popularCruiseLines: ['P&O Cruises (Ventura, Aurora)', 'Disney Cruise Line', 'Silversea', 'Regent Seven Seas'],
    transitTimeFromLHR: '75 - 90 mins',
    transitTimeFromLondon: '105 - 125 mins',
    meetPointDescription: 'Dedicated private chauffeur waiting bay right at the main passenger concourse.',
  },
  {
    id: 'city-terminal',
    name: 'City Cruise Terminal (Berth 101)',
    dockNumber: 'Solent Road, Western Docks, Southampton SO15 1BS',
    popularCruiseLines: ['Royal Caribbean (Anthem of the Seas)', 'Celebrity Cruises (Apex, Silhouette)'],
    transitTimeFromLHR: '75 - 90 mins',
    transitTimeFromLondon: '105 - 125 mins',
    meetPointDescription: 'Immediate curbside baggage drop and VIP escort assistance.',
  },
  {
    id: 'qe2-terminal',
    name: 'Queen Elizabeth II Terminal (Berth 38/39)',
    dockNumber: 'Dock Gate 4, Eastern Docks, Southampton SO14 3GG',
    popularCruiseLines: ['Fred. Olsen Cruise Lines', 'Saga Cruises', 'Occasional Cunard / Princess'],
    transitTimeFromLHR: '70 - 85 mins',
    transitTimeFromLondon: '100 - 120 mins',
    meetPointDescription: 'Chauffeur meets you inside the terminal foyer or designated VIP passenger pickup area.',
  },
];

export const SIGHTSEEING_STOPS: SightseeingStop[] = [
  {
    id: 'none',
    name: 'Direct Express Transfer (No Stops)',
    duration: '0 hrs',
    description: 'Fastest door-to-ship or airport route via M3/M27 highways.',
    extraPrice: 0,
    highlight: 'Direct motorway journey with zero delays',
  },
  {
    id: 'stonehenge',
    name: 'Stonehenge UNESCO World Heritage Stopover',
    duration: '2.0 hrs',
    description: 'Break up your transfer with a visit to the mystical ancient stone circle on Salisbury Plain.',
    extraPrice: 110,
    highlight: 'Includes 2 hours chauffeur wait time & luggage security',
  },
  {
    id: 'windsor',
    name: 'Windsor Castle & Royal Town Visit',
    duration: '2.0 hrs',
    description: 'Explore the oldest and largest occupied castle in the world just outside London Heathrow.',
    extraPrice: 110,
    highlight: 'Perfect for Heathrow arrivals heading to Southampton',
  },
  {
    id: 'salisbury',
    name: 'Salisbury Cathedral (Original Magna Carta)',
    duration: '1.5 hrs',
    description: 'Marvel at Britain’s tallest church spire and see the best-preserved 1215 Magna Carta.',
    extraPrice: 85,
    highlight: 'Quaint medieval city en-route to Southampton port',
  },
  {
    id: 'winchester',
    name: 'Historic Winchester & King Arthur’s Round Table',
    duration: '1.5 hrs',
    description: 'Ancient capital of England, Winchester Cathedral and the Great Hall.',
    extraPrice: 75,
    highlight: 'Just 20 minutes from Southampton Cruise Docks',
  },
];

export const POPULAR_ROUTES = [
  {
    from: 'Central London Hotels / Mayfair / Westminster',
    to: 'Southampton Cruise Terminals (All Berths)',
    distance: '78 Miles',
    duration: '1h 45m',
    highlight: 'Door-to-ship luxury without dragging luggage across train stations',
    vClassPrice: '£310',
    luxurySuvPrice: '£360',
    standardSuvPrice: '£275',
  },
  {
    from: 'London Heathrow Airport (LHR T2, T3, T4, T5)',
    to: 'Southampton Cruise Port',
    distance: '65 Miles',
    duration: '1h 15m',
    highlight: 'Meet & greet inside baggage hall with 60 minutes free waiting time',
    vClassPrice: '£285',
    luxurySuvPrice: '£330',
    standardSuvPrice: '£250',
  },
  {
    from: 'London Gatwick Airport (LGW North / South)',
    to: 'Southampton Cruise Port',
    distance: '88 Miles',
    duration: '1h 35m',
    highlight: 'Scenic southern route with real-time flight tracking',
    vClassPrice: '£320',
    luxurySuvPrice: '£370',
    standardSuvPrice: '£285',
  },
  {
    from: 'Southampton Cruise Port Disembarkation',
    to: 'London Heathrow / Central London (Return)',
    distance: '65 - 80 Miles',
    duration: '1h 20m - 1h 50m',
    highlight: 'Punctual ship docking pickup so you comfortably make your flight home',
    vClassPrice: '£285',
    luxurySuvPrice: '£330',
    standardSuvPrice: '£250',
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "Our transfer from London Marriott Grosvenor Square to the Queen Mary 2 at Ocean Terminal was pure perfection. The Mercedes V-Class easily swallowed all 6 of our massive cruise bags, and the chauffeur was courteous, impeccably dressed, and got us right to the porter drop-off in record time.",
    author: "Richard & Eleanor Vance",
    location: "New York, USA",
    trip: "London Mayfair → Southampton Ocean Terminal (Cunard QM2)",
    vehicle: "Mercedes V-Class",
    rating: 5,
  },
  {
    quote:
      "After a long overnight flight into Heathrow T5, having FourFold Worldwide waiting with a nameboard made our transatlantic cruise stress-free. We even stopped for 2 hours at Stonehenge on the way down to Southampton! Cannot recommend enough.",
    author: "Captain David Miller (Ret.)",
    location: "Florida, USA",
    trip: "Heathrow LHR T5 → Stonehenge → Horizon Terminal (Celebrity Apex)",
    vehicle: "Luxury SUV (Range Rover)",
    rating: 5,
  },
  {
    quote:
      "Superb executive SUV service. Spotlessly clean car, smooth driving, cold water waiting for us, and child seats pre-installed for our twin 5-year-olds. Best private transfer service between London and Southampton.",
    author: "Sophie Campbell",
    location: "Sydney, Australia",
    trip: "Southampton Disembarkation → Central London Hotel",
    vehicle: "Standard Executive SUV (Mercedes GLE)",
    rating: 5,
  },
];

export const FAQS = [
  {
    question: "How much luggage can your Mercedes V-Class and SUVs accommodate?",
    answer:
      "Our Mercedes-Benz V-Class Extra-Long is our cruise flagship: it comfortably holds up to 7 large hard-shell 28-32\" suitcases plus 7 carry-on bags alongside 7 passengers. Our Luxury SUVs (Range Rover / Mercedes GLS) fit 4 large bags + 4 cabin bags, and our Standard Executive SUVs (GLE / Audi Q7) hold 3-4 large check-in bags plus hand luggage.",
  },
  {
    question: "Where will my chauffeur meet me at the airport or cruise terminal?",
    answer:
      "At Airports (Heathrow/Gatwick): Your chauffeur tracks your flight in real time and meets you inside the arrivals terminal holding an electronic nameboard with your name, 30 minutes after your wheels touch down (with 60 minutes free waiting time included). At Southampton Cruise Port: Your chauffeur meets you curbside at the designated VIP private hire pickup zone right as you exit customs.",
  },
  {
    question: "What happens if our cruise disembarkation or flight is delayed?",
    answer:
      "We actively monitor all Southampton maritime vessel arrivals and flight radar feeds. If your ship is cleared late or your flight lands early/late, your pickup time is automatically synchronized at no additional charge.",
  },
  {
    question: "Can we add a sightseeing stopover like Stonehenge or Windsor Castle en route?",
    answer:
      "Yes! Because the M3/A303 route passes near some of England's greatest landmarks, you can select our 2-hour Stonehenge, Windsor Castle, or Salisbury Cathedral stopover. Your driver safely guards your luggage inside the vehicle while you explore.",
  },
  {
    question: "Are child and baby seats provided?",
    answer:
      "Yes, we provide complimentary, professionally sanitized infant capsules, toddler forward-facing seats, and high-back booster seats upon request. Simply select the count in our booking form.",
  },
  {
    question: "Is this booking form compatible with Netlify?",
    answer:
      "Yes, our booking and contact engine is 100% Netlify Forms compliant with standard HTML static markup, honeypot spam protection, and instant direct dispatch options via WhatsApp and Email confirmation.",
  },
];

export const COMPANY_INFO = {
  name: 'FourFold Worldwide',
  tagline: 'VIP Private Chauffeur & Cruise Transfer Specialists',
  phone: '+44 20 8123 4890',
  whatsapp: '+447400123456',
  email: 'bookings@fourfoldworldwide.com',
  address: 'Mayfair, London & Western Docks, Southampton, United Kingdom',
  operatingHours: '24 Hours / 7 Days a Week (Dispatch & Transfers)',
  license: 'Licensed by Transport for London (TfL PCO) & Southampton City Council',
};
