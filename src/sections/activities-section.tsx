import { PiRoadHorizonBold } from "react-icons/pi";
import ActivitiesCard from "../components/activities-card";
import useDestinationActivitiesSearch from "../services/use-getActivities";
import { useMemo } from "react";
import { IActivity } from "../utils/types";

const ActivitiesSection = ({ query }: { query: string }) => {
  const { data, error, isLoading } = useDestinationActivitiesSearch(query);
  const activitiesData = useMemo<IActivity[]>(() => {
    if (!data || data.products?.length === 0  ) return [];

    return data.products.map((activity: any)=> ({
      activityName: activity.name,
      photoUrl: activity.primaryPhoto.small,
      description: activity.shortDescription,
      location: activity.ufiDetails.bCityName,
      rating: activity.reviewStats.combinedNumericStats.average,
      reviews: activity.reviewStats.allReviewsCount,
      duration: activity.duration || "00:00",
      price: activity.representativePrice.publicAmount,
      time: activity.time || "00:00",
      date: activity.date || "2022-01-01",
      includedItems: activity.includedItems,
      day: activity.day || 1,
      onRemove: () => {}
    }))
  }, [data])
  return (
    <div className={`${
      activitiesData.length > 0 ? "h-[700px]" : ""
    } "px-4 pb-4 bg-[#0054E4] overflow-y-scroll"`}>
      <div className="flex items-center justify-between  p-4">
        <div className="flex items-center gap-2 text-white">
          <PiRoadHorizonBold className="text-xl" />
          <span className="text-base lg:text-lg font-semibold ">Activities</span>
        </div>
        <button className="bg-white text-[#1D2433] px-4 py-3 rounded text-sm font-semibold">
          Add Activities
        </button>
      </div>
      <div className="flex flex-col gap-4 p-4 ">
        {
          activitiesData?.map((activity: any, index: number) => <ActivitiesCard {...activity} key={index} />)
        }
      </div>
    </div>
  );
};

export default ActivitiesSection;
