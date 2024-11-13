import { FaStar, FaTimes } from "react-icons/fa";
import { IoCalendarClearOutline, IoLocationOutline } from "react-icons/io5";
import { IHotel } from "../utils/types";
import { PiSwimmingPool, PiWineLight } from "react-icons/pi";

const HotelCard = (props: IHotel) => {
  return (
    <div className="flex flex-col md:flex-row items-stretch w-full rounded-lg shadow-lg overflow-hidden">
      <div className="p-2 md:p-4 bg-white w-full md:w-[97%] flex items-start flex-col md:flex-row">
        <div className="w-full md:w-[25%] flex-shrink-0 mb-4 md:mb-0">
          <img
            src={props.photoUrls[0]}
            alt="Hotel"
            className="w-full h-40 md:h-full object-cover rounded-lg"
          />
        </div>
        <div className="bg-white w-full">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between px-4 md:px-6 py-2 space-y-4 md:space-y-0 overflow-x-auto">
            <div className="space-y-2 md:space-y-4">
              <div>
                <p className="text-base md:text-lg xl:text-xl font-semibold text-[#1D2433]">
                  {props.name}
                </p>
                <p className="text-sm md:text-base text-[#1D2433] max-w-md">
                  {props.countryCode}
                </p>
              </div>
              <div className="flex flex-wrap gap-2 md:gap-4 items-center text-sm md:text-base">
                <div className="flex items-center text-[#0D6EFD] gap-1">
                  <IoLocationOutline className="text-base" />
                  <p>Show in map</p>
                </div>
                <div className="flex items-center text-[#676E7E] gap-1">
                  <FaStar color="#F4B93E" />
                  <p>
                    {props.reviewScore} ({props.reviewCount})
                  </p>
                </div>
                <p>{props.roomType}</p>
              </div>
            </div>
            <div className="flex flex-col items-start md:items-end text-sm md:text-lg">
              <div className="flex items-center text-2xl md:text-3xl font-semibold text-[#1D2433]">
                <b>{props.priceBreakdown.grossPrice.currency}</b>
                <span>{props.priceBreakdown.grossPrice.value}</span>
              </div>
              <p className="text-[#1D2433] font-medium text-sm md:text-base">
                Total: {props.priceBreakdown.grossPrice.currency}{" "}
                {(props.priceBreakdown.grossPrice.value * 10).toLocaleString()}
              </p>
              <p className="text-[#1D2433] font-medium text-xs md:text-sm">
                1 room x 10 nights incl. taxes
              </p>
            </div>
          </div>
          <hr />
          <div className="px-4 md:px-6 py-3 flex flex-col md:flex-row items-start md:items-center justify-between text-sm md:text-lg font-medium text-[#647995] space-y-3 md:space-y-0">
            <div className="flex flex-wrap gap-2 md:gap-3">
              <span className="font-medium">Facilities:</span>
              <span className="flex items-center gap-1">
                <PiSwimmingPool />
                <span>Pool</span>
              </span>
              <span className="flex items-center gap-1">
                <PiWineLight /> <span>Bar</span>
              </span>
            </div>
            <div className="flex flex-wrap gap-2 md:gap-4">
              <div className="flex items-center gap-1">
                <IoCalendarClearOutline color="#475367" />
                <span className="font-medium">
                  Check In: {props.checkin.fromTime}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <IoCalendarClearOutline color="#475367" />
                <span className="font-medium">
                  Check Out: {props.checkout.untilTime}
                </span>
              </div>
            </div>
          </div>
          <hr />
          <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-6 py-3 text-[#0D6EFD] text-sm md:text-lg font-medium">
            <div className="flex space-x-4 md:space-x-8">
              <a href="#" className="hover:underline">
                Hotel Details
              </a>
              <a href="#" className="hover:underline">
                Price Details
              </a>
            </div>
            <a href="#" className="hover:underline">
              Edit Details
            </a>
          </div>
        </div>
      </div>
      <div className="bg-[#FBEAE9] flex items-center justify-center text-red-700 w-full md:w-[3%] cursor-pointer">
        <FaTimes className="text-lg md:text-xl" />
      </div>
    </div>
  );
};


export default HotelCard;
