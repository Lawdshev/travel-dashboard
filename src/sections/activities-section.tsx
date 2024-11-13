import { PiRoadHorizonBold, PiWarehouseBold } from "react-icons/pi";
import ActivitiesCard from "../components/activities-card";
import useDestinationActivitiesSearch from "../services/use-getActivities";
import { useMemo } from "react";
import { IActivity } from "../utils/types";
import EmptyState from "../components/empty-state";
import { getRandomActivityData } from "../utils/data";

const ActivitiesSection = ({ query }: { query: string }) => {
  const { data, isLoading } = useDestinationActivitiesSearch(query);

  const activitiesData = useMemo<IActivity[]>(() => {
    if (!data || data.products?.length === 0  ) return getRandomActivityData(5);

    return data.products.map((activity: any)=> ({
      activityName: activity.name || "",
      photoUrl: activity?.primaryPhoto?.small || "",
      description: activity?.shortDescription || "",
      location: activity?.ufiDetails?.bCityName || "",
      rating: activity?.reviewStats?.combinedNumericStats?.average || 0,
      reviews: activity?.reviewStats?.allReviewsCount || 0,
      duration: activity?.duration || "00:00",
      price: activity?.representativePrice?.publicAmount || 0,
      time: activity?.time || "00:00",
      date: activity?.date || "2022-01-01",
      includedItems: activity?.includedItems || [],
      day: activity?.day || 1,
      onRemove: () => {}
    }))
  }, [data])

  console.log({data,activitiesData})
  return (
    <div
      className={`${
        !data|| getRandomActivityData(5).length <= 0 ? "h-[700px]" : ""
      } px-4 pb-4 bg-[#0054E4] overflow-y-scroll`}
    >
      <div className="flex items-center justify-between  p-4">
        <div className="flex items-center gap-2 text-white">
          <PiRoadHorizonBold className="text-xl" />
          <span className="text-base lg:text-lg font-semibold ">
            Activities
          </span>
        </div>
        <button className="bg-white text-[#1D2433] px-4 py-3 rounded text-sm font-semibold">
          Add Activities
        </button>
      </div>
      <div className="flex flex-col gap-4 p-4 ">
        {activitiesData?.map((activity: any, index: number) => (
          <ActivitiesCard {...activity} key={index} />
        ))}
        { !data|| getRandomActivityData(5).length <= 0 && (
          <EmptyState
            icon={
              <PiWarehouseBold className="text-6xl text-gray-300" size={100} />
            }
            buttonText="Add Activities"
          />
        )}
        {isLoading && (
          <div className="flex items-center justify-center py-8 mx-auto text-center">
            Fetching Activities...
          </div>
        )}
      </div>
    </div>
  );
};

export default ActivitiesSection;
