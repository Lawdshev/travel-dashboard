import { useQuery } from "@tanstack/react-query";
import fetchRequest from "./fetch-request";

const useHotelsSearch = (dest_id: string) => {
  return useQuery({
    queryKey: ["hotels", dest_id],
    queryFn: () =>
      fetchRequest(
        `https://booking-com15.p.rapidapi.com/api/v1/hotels/searchHotels?dest_type=district&locale=en&dest_id=${dest_id}`,
      ),
    enabled: !!dest_id,
    retry: 1,
  });
};

export default useHotelsSearch;
