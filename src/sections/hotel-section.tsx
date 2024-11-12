import { PiWarehouseBold } from "react-icons/pi";
import HotelCard from "../components/hotel-card";

const HotelsSection = () => {
  return (
    <div className="px-4 pb-4 bg-[#344054]">
      <div className="flex items-center justify-between  p-4">
        <div className="flex items-center gap-2 text-white">
          <PiWarehouseBold className="text-xl" />
          <span className="text-lg font-semibold ">Hotels</span>
        </div>
        <button className="bg-white text-[#1D2433] px-4 py-3 rounded text-sm font-semibold">
          Add Hotels
        </button>
      </div>
      <div className="flex flex-col gap-4 px-4 ">
        <HotelCard />
        <HotelCard />
      </div>
    </div>
  );
};

export default HotelsSection;
