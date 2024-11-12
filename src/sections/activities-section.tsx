import { PiRoadHorizonBold } from "react-icons/pi";
import ActivitiesCard from "../components/activities-card";
import useDestinationActivitiesSearch from "../services/use-getActivities";

const ActivitiesSection = ({ query }: { query: string }) => {
  const { data, error, isLoading } = useDestinationActivitiesSearch(query);
  return (
    <div className="px-4 pb-4 bg-[#0054E4]">
      <div className="flex items-center justify-between  p-4">
        <div className="flex items-center gap-2 text-white">
          <PiRoadHorizonBold className="text-xl" />
          <span className="text-lg font-semibold ">Activities</span>
        </div>
        <button className="bg-white text-[#1D2433] px-4 py-3 rounded text-sm font-semibold">
          Add Activities
        </button>
      </div>
      <div className="flex flex-col gap-4 px-4 ">
        <ActivitiesCard />
        <ActivitiesCard />
      </div>
    </div>
  );
};

export default ActivitiesSection;
