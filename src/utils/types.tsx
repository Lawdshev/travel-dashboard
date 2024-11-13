export interface IHotel {
  photoUrls: string[];
  name: string;
  countryCode: string;
  reviewScore: number;
  reviewCount: number;
  roomType: string;
  priceBreakdown: {
    grossPrice: {
      currency: string;
      value: number;
    };
  };
  checkin: {
    fromTime: string;
  };
  checkout: {
    untilTime: string;
  };
  facilities: { name: string; icon: React.ReactNode }[];
}

export interface IActivity {
  photoUrl: string;
  activityName: string;
  description: string;
  location: string;
  rating: number;
  reviews: number;
  duration: string;
  price: number;
  time: string;
  date: string;
  includedItems: string[];
  day: number;
  onRemove: () => void;
}


export interface IDestination {
  dest_type: string; // Type of destination, e.g., "district"
  cc1: string; // Country code, e.g., "us"
  city_name: string; // Name of the city, e.g., "New York"
  label: string; // Full label for the location, e.g., "Manhattan, New York, New York State, United States"
  longitude: number; // Longitude, e.g., -73.970894
  latitude: number; // Latitude, e.g., 40.776115
  type: string; // Short type code, e.g., "di"
  region: string; // Region or state, e.g., "New York State"
  city_ufi: number; // Unique identifier for the city, e.g., 20088325
  name: string; // Name of the district, e.g., "Manhattan"
  roundtrip: string; // Roundtrip code, e.g., "GgEwIAAoATICZW46A21hbkAASgBQAA=="
  country: string; // Full country name, e.g., "United States"
  image_url: string; // URL of the destination's image, e.g., "https://cf.bstatic.com/xdata/images/district/150x150/37931.jpg..."
  dest_id: string; // Destination ID, e.g., "929"
  nr_hotels: number; // Number of hotels in the area, e.g., 568
  lc: string; // Language code, e.g., "en"
  hotels: number; // Number of hotels, e.g., 568
}

export interface IFlightData {
  airline: string;
  flightNumber: string;
  departureTime: string;
  departureDate: string;
  duration: string;
  arrivalTime: string;
  arrivalDate: string;
  from: string;
  to: string;
  price: number;
  baggage: string;
  cabinBaggage: string;
  inFlightEntertainment: boolean;
  inFlightMeal: boolean;
  usbPort: boolean;
  onRemove: () => void;
}