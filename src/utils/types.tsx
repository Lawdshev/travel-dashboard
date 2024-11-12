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
