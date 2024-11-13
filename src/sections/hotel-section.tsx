import { PiWarehouseBold } from "react-icons/pi";
import HotelCard from "../components/hotel-card";
import useHotelsSearch from "../services/use-getHotelDetails";
import { IHotel } from "../utils/types";
import { useMemo } from "react";

const HotelsSection = ({ query }: { query: string }) => {
  const { data, error, isLoading } = useHotelsSearch(query ?? "");
  const hotelData = useMemo<IHotel[]>(() => {
    if (!data || data.hotels?.length === 0) return [];

    return data.hotels.map((hotel: any) => ({
      photoUrls: hotel.property?.photoUrls ?? [],
      name: hotel.property?.name ?? "",
      countryCode: hotel.property?.countryCode ?? "",
      reviewScore: hotel.property?.reviewScore ?? 0,
      reviewCount: hotel.property?.reviewCount ?? 0,
      roomType: hotel.roomType ?? "",
      priceBreakdown: {
        grossPrice: {
          currency: hotel.priceBreakdown?.grossPrice?.currency ?? "",
          value: hotel.priceBreakdown?.grossPrice?.value ?? 0,
        },
      },
      checkin: {
        fromTime: hotel.checkin?.fromTime ?? "",
      },
      checkout: {
        untilTime: hotel.checkout?.untilTime ?? "",
      },
      facilities: hotel.facilities ?? [],
    }))
  }, [data]);
  
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
        {
          hotelData?.map((hotel: IHotel, index: number) => <HotelCard {...hotel} key={index} />)
        }
      </div>
    </div>
  );
};

export default HotelsSection;
