export interface IHotel {
  id: number; // Unique identifier for the hotel
  name: string; // Hotel name
  reviewScore: number; // Numeric review score (e.g., 9)
  reviewScoreWord: string; // Word description of review score (e.g., "Superb")
  reviewCount: number; // Total number of reviews
  countryCode: string; // Country code (e.g., "IN" for India)
  propertyClass: number; // Star rating or class (e.g., 5 for a 5-star hotel)
  accuratePropertyClass: number; // Another rating classification
  qualityClass: number; // Hotel quality class score
  rankingPosition: number; // Ranking position for the hotel
  latitude: number; // Latitude coordinate
  longitude: number; // Longitude coordinate
  isPreferred: boolean; // Whether the hotel is preferred
  isFirstPage: boolean; // Whether the hotel is on the first page of results
  checkin: {
    // Check-in time information
    fromTime: string; // Earliest check-in time (e.g., "14:00")
    untilTime: string; // Latest check-in time (e.g., "00:00")
  };
  checkout: {
    // Checkout time information
    fromTime: string; // Earliest checkout time (e.g., "00:00")
    untilTime: string; // Latest checkout time (e.g., "12:00")
  };
  checkinDate: string; // Check-in date (e.g., "2023-11-21")
  checkoutDate: string; // Checkout date (e.g., "2023-11-22")
  mainPhotoId: number; // ID of the main photo
  photoUrls: string[]; // Array of photo URLs for the hotel
  priceBreakdown: {
    // Price breakdown information
    grossPrice: {
      // Gross price object
      currency: string; // Currency code (e.g., "INR")
      value: number; // Gross price value (e.g., 24190.00)
    };
    benefitBadges: string[]; // Array of benefit badges
    taxExceptions?: any; // Information on tax exceptions (if any)
  };
  position: number; // Position in the list
  wishlistName: string; // Wishlist name, if applicable (e.g., "Mumbai")
    blockIds: string[]; // Array of block IDs (e.g., ["7471708_158036154_2_42_0"])
    currency: string; // Currency code (e.g., "INR")
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