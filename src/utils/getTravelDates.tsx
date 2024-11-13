export function getTravelDates() {
  const today = new Date();

  // Arrival date: 1 day from today
  const arrival = new Date(today);
  arrival.setDate(today.getDate() + 7);

  // Departure date: 7 days from arrival
  const departure = new Date(arrival);
  departure.setDate(arrival.getDate() + 15);

  // Format date to yyyy-mm-dd
  const formatDate = (date: Date) => date.toISOString().split("T")[0];

  return {
    arrival: formatDate(arrival),
    departure: formatDate(departure),
  };
}

console.log(getTravelDates());
