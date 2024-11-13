import { IHotel, IActivity, IFlightData } from "./types";

export const activities = [
  {
    title: "Activities",
    color: "#000031",
    textColor: "#FFFFFF",
    buttonColor: "#0D6EFD",
  },
  {
    title: "Hotels",
    color: "#E7F0FF",
    textColor: "#1D2433",
    buttonColor: "#0D6EFD",
  },
  {
    title: "Flights",
    color: "#0D6EFD",
    textColor: "#FFFFFF",
    buttonColor: "#FFFFFF",
  },
];

export function getRandomHotelData(num: number): IHotel[] {
  const randomNames = ["Sunshine Resort", "Grand Palace", "Ocean View", "Mountain Escape", "City Central Hotel"];
  const countries = ["US", "FR", "IT", "ES", "JP"];
  const roomTypes = ["Double Room", "Suite", "Single Room", "Family Room"];
  const facilities = [
    { name: "Free WiFi", icon: "📶" },
    { name: "Swimming Pool", icon: "🏊" },
    { name: "Spa", icon: "💆" },
    { name: "Parking", icon: "🅿️" },
    { name: "Fitness Center", icon: "🏋️" },
  ];

  const randomTime = () => `${Math.floor(Math.random() * 12) + 1}:00 ${Math.random() > 0.5 ? "AM" : "PM"}`;
  const randomCurrency = ["USD", "EUR", "JPY"];
  const randomPhotoUrls = [
    "https://source.unsplash.com/random/200x200?hotel1",
    "https://source.unsplash.com/random/200x200?hotel2",
    "https://source.unsplash.com/random/200x200?hotel3",
  ];

  const hotels: IHotel[] = [];

  for (let i = 0; i < num; i++) {
    hotels.push({
      photoUrls: randomPhotoUrls,
      name: randomNames[Math.floor(Math.random() * randomNames.length)],
      countryCode: countries[Math.floor(Math.random() * countries.length)],
      reviewScore: parseFloat((Math.random() * 5).toFixed(1)),
      reviewCount: Math.floor(Math.random() * 1000),
      roomType: roomTypes[Math.floor(Math.random() * roomTypes.length)],
      priceBreakdown: {
        grossPrice: {
          currency: randomCurrency[Math.floor(Math.random() * randomCurrency.length)],
          value: parseFloat((Math.random() * 300 + 50).toFixed(2)), // random price between 50 and 350
        },
      },
      checkin: {
        fromTime: randomTime(),
      },
      checkout: {
        untilTime: randomTime(),
      },
      facilities: facilities.sort(() => 0.5 - Math.random()).slice(0, 3), // pick random 3 facilities
    });
  }

  return hotels;
}

export function getRandomActivityData(num: number): IActivity[] {
  const activityNames = ["City Walking Tour", "Wine Tasting Experience", "Mountain Hiking", "Museum Visit", "Beach Day"];
  const descriptions = [
    "A guided tour through the city's historic sites.",
    "Sample local wines and learn about winemaking.",
    "A scenic hike up the famous mountain trails.",
    "Explore ancient artifacts and modern art.",
    "Relax by the seaside and enjoy the sun.",
  ];
  const locations = ["New York", "Paris", "Rome", "Tokyo", "Sydney"];
  const includedItemsOptions = [
    ["Guide", "Refreshments", "Tickets"],
    ["Equipment", "Guide", "Snacks"],
    ["Transportation", "Lunch", "Guide"],
    ["Map", "Souvenir", "Guide"],
    ["Umbrella", "Towel", "Sunblock"],
  ];

  const randomTime = () => `${Math.floor(Math.random() * 12) + 1}:00 ${Math.random() > 0.5 ? "AM" : "PM"}`;
  const randomDate = () => {
    const date = new Date();
    date.setDate(date.getDate() + Math.floor(Math.random() * 30)); // within the next 30 days
    return date.toISOString().split("T")[0];
  };

  const randomPhotoUrls = [
    "https://source.unsplash.com/random/200x200?activity1",
    "https://source.unsplash.com/random/200x200?activity2",
    "https://source.unsplash.com/random/200x200?activity3",
  ];

  const activities: IActivity[] = [];

  for (let i = 0; i < num; i++) {
    activities.push({
      photoUrl: randomPhotoUrls[Math.floor(Math.random() * randomPhotoUrls.length)],
      activityName: activityNames[Math.floor(Math.random() * activityNames.length)],
      description: descriptions[Math.floor(Math.random() * descriptions.length)],
      location: locations[Math.floor(Math.random() * locations.length)],
      rating: parseFloat((Math.random() * 5).toFixed(1)),
      reviews: Math.floor(Math.random() * 1000),
      duration: `${Math.floor(Math.random() * 4) + 1} hours`,
      price: parseFloat((Math.random() * 200 + 20).toFixed(2)), // random price between 20 and 220
      time: randomTime(),
      date: randomDate(),
      includedItems: includedItemsOptions[Math.floor(Math.random() * includedItemsOptions.length)],
      day: Math.floor(Math.random() * 7) + 1, // random day of the week (1 to 7)
      onRemove: () => console.log("Activity removed"), // placeholder function
    });
  }

  return activities;
}

export function getRandomFlightData(num: number): IFlightData[] {
  const airlines = ["Delta Airlines", "United Airlines", "American Airlines", "British Airways", "Lufthansa"];
  const locations = ["New York", "Los Angeles", "London", "Paris", "Tokyo", "Sydney", "Dubai"];
  const baggages = ["20kg", "25kg", "30kg"];
  const cabinBaggages = ["7kg", "10kg", "12kg"];

  const randomTime = () => `${String(Math.floor(Math.random() * 12) + 1).padStart(2, '0')}:${String(Math.floor(Math.random() * 60)).padStart(2, '0')} ${Math.random() > 0.5 ? "AM" : "PM"}`;
  
  const randomDate = () => {
    const date = new Date();
    date.setDate(date.getDate() + Math.floor(Math.random() * 30)); // within the next 30 days
    return date.toISOString().split("T")[0];
  };

  const flights: IFlightData[] = [];

  for (let i = 0; i < num; i++) {
    const departureTime = randomTime();
    const arrivalTime = randomTime();
    const departureDate = randomDate();
    const arrivalDate = randomDate();

    flights.push({
      airline: airlines[Math.floor(Math.random() * airlines.length)],
      flightNumber: `FL${Math.floor(Math.random() * 9000) + 1000}`, // Random flight number
      departureTime: departureTime,
      departureDate: departureDate,
      duration: `${Math.floor(Math.random() * 10) + 1}h ${Math.floor(Math.random() * 60)}m`, // Random duration
      arrivalTime: arrivalTime,
      arrivalDate: arrivalDate,
      from: locations[Math.floor(Math.random() * locations.length)],
      to: locations[Math.floor(Math.random() * locations.length)],
      price: parseFloat((Math.random() * 500 + 100).toFixed(2)), // random price between 100 and 600
      baggage: baggages[Math.floor(Math.random() * baggages.length)],
      cabinBaggage: cabinBaggages[Math.floor(Math.random() * cabinBaggages.length)],
      inFlightEntertainment: Math.random() > 0.5,
      inFlightMeal: Math.random() > 0.5,
      usbPort: Math.random() > 0.5,
      onRemove: () => console.log("Flight removed"), // placeholder function
    });
  }

  return flights;
}