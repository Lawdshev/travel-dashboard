import { useQuery } from "@tanstack/react-query";
import fetchRequest from "./fetch-request";
import { getTravelDates } from "../utils/getTravelDates";

const useDestinationFlightsSearch = (query: string) => {
  const dates = getTravelDates();
  return useQuery({
    queryKey: ["flights", query],
    queryFn: () =>
      fetchRequest(
        `/flights/searchFlights?fromId=BOM.AIRPORT&toId=DEL.AIRPORT&departDate=${dates.departure}&pageNo=1&adults=1&children=0%2C17&sort=BEST&cabinClass=ECONOMY&currency_code=AED`
      ),
    enabled: !!query,
    retry: 1,
  });
};

export default useDestinationFlightsSearch;
