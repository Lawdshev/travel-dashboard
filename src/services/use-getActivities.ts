import { useQuery } from "@tanstack/react-query";
import fetchRequest from "./fetch-request";

const useDestinationActivitiesSearch = (query: string) => {
  return useQuery({
    queryKey: ["activities", query],
    queryFn: () =>
      fetchRequest(
        `https://booking-com15.p.rapidapi.com/api/v1/attraction/searchAttractions?id=eyJ1ZmkiOi0yMDkyMTc0fQ%3D%3D&page=1&currency_code=${query}&sortBy=trending&languagecode=en-us`
      ),
    enabled: !!query,
    retry: 1,
  });
};

export default useDestinationActivitiesSearch;
