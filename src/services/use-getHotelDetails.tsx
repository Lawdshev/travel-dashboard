import { useQuery } from "@tanstack/react-query";
import fetchRequest from "./fetch-request";
import { getTravelDates } from "../utils/getTravelDates";

const useHotelsSearch = (dest_id: string) => {
  const dates = getTravelDates();
  return useQuery({
    queryKey: ["hotels", dest_id],
    queryFn: () =>
      fetchRequest(
        `https://booking-com15.p.rapidapi.com/api/v1/hotels/searchHotels?search_type=city&arrival_date=${dates.arrival}&departure_date=${dates.departure}&locale=en&dest_id=${dest_id}`,
      ),
    enabled: !!dest_id,
    retry: 1,
  });
};

export default useHotelsSearch;
