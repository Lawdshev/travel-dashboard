import { useQuery } from "@tanstack/react-query";
import fetchRequest from "./fetch-request";

const useDestinationActivitiesSearch = (query: string) => {
  return useQuery({
    queryKey: ["activities", query],
    queryFn: () =>
      fetchRequest(
        `https://booking-com15.p.rapidapi.com/api/v1/attraction/searchLocation?dest_type=district&locale=en&dest_id=${query}`
      ),
    enabled: !!query,
    retry: 1,
  });
};

export default useDestinationActivitiesSearch;
