import { PiWarehouseBold } from "react-icons/pi";
import HotelCard from "../components/hotel-card";
import useHotelsSearch from "../services/use-getHotelDetails";
import { IHotel } from "../utils/types";
import { useState } from "react";
import EmptyState from "./empty-state";

const HotelsSection = ({ query }: { query: string }) => {
  const { data, error, isLoading } = useHotelsSearch(query ?? "");
  const [dataLength, setDataLength] = useState(0);
  return (
    <div
      className={`${
        data?.length > 0 ? "h-[700px]" : ""
      } "px-4 pb-4 bg-[#344054] overflow-y-scroll"`}
    >
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-2 text-white">
          <PiWarehouseBold className="text-xl" />
          <span className="text-base lg:text-lg  font-semibold ">Hotels</span>
        </div>
        <button className="bg-white text-[#1D2433] px-4 py-3 rounded text-sm font-semibold">
          Add Hotels
        </button>
      </div>
      <div className="flex flex-col gap-4 p-4">
        {data?.map((hotel: IHotel, index: number) => (
          <HotelCard {...hotel} key={index} />
        ))}
        {!data && (
          <EmptyState
            icon={
              <PiWarehouseBold className="text-6xl text-gray-300" size={100} />
            }
            buttonText="Add Hotels"
          />
        )}
      </div>
    </div>
  );
};

export default HotelsSection;
