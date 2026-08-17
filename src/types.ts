export type VehicleType = 'v-class' | 'luxury-suv' | 'standard-suv';

export interface Vehicle {
  id: VehicleType;
  name: string;
  category: string;
  badge: string;
  tagline: string;
  passengers: number;
  luggageCapacity: {
    largeSuitcases: number; // 28"-32" check-in
    cabinBags: number;      // carry-on
  };
  features: string[];
  specs: {
    seatingConfig: string;
    comfort: string;
    wifi: string;
    refreshments: string;
  };
  baseFareSouthamptonFromLondon: number; // in GBP
  baseFareSouthamptonFromHeathrow: number; // in GBP
  imageUrl: string;
  recommendedFor: string;
}

export interface CruiseTerminal {
  id: string;
  name: string;
  dockNumber: string;
  popularCruiseLines: string[];
  transitTimeFromLHR: string;
  transitTimeFromLondon: string;
  meetPointDescription: string;
}

export interface SightseeingStop {
  id: string;
  name: string;
  duration: string;
  description: string;
  extraPrice: number;
  highlight: string;
}

export interface BookingFormData {
  fullName: string;
  email: string;
  phone: string;
  serviceType: 'london-to-southampton' | 'southampton-to-london' | 'heathrow-to-southampton' | 'southampton-to-heathrow' | 'gatwick-to-southampton' | 'custom-transfer';
  pickupAddress: string;
  dropoffAddress: string;
  cruiseTerminal: string;
  cruiseShipName: string;
  flightNumber?: string;
  pickupDate: string;
  pickupTime: string;
  returnTrip: boolean;
  returnDate?: string;
  returnTime?: string;
  vehicleCategory: VehicleType;
  passengers: number;
  largeSuitcases: number;
  cabinBags: number;
  sightseeingStopId: string;
  childSeats: {
    infant: number;
    toddler: number;
    booster: number;
  };
  flightTrackingConsent: boolean;
  specialRequests: string;
}

export interface PriceEstimate {
  basePrice: number;
  sightseeingPrice: number;
  returnTripPrice: number;
  totalPriceGBP: number;
  totalPriceUSD: number;
  totalPriceEUR: number;
  distanceApproxMiles: number;
  durationApproxMinutes: number;
}
