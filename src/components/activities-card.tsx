import { FaStar, FaTimes } from "react-icons/fa";
import {
  PiCurrencyNgnBold,
  PiClockBold,
  PiCaretCircleUp,
  PiCaretCircleDown,
} from "react-icons/pi";
import { IoLocationOutline } from "react-icons/io5";
import { IActivity } from "../utils/types";


const ActivitiesCard: React.FC<IActivity> = ({
  activityName,
  description,
  location,
  rating,
  reviews,
  duration,
  price,
  time,
  date,
  includedItems,
  day,
  onRemove,
}) => {
  return (
    <div className="flex flex-col md:flex-row items-stretch w-full rounded-lg shadow-lg overflow-hidden">
      <div className="p-2 md:p-4 bg-white w-full md:w-[97%] flex flex-col md:flex-row items-start">
        <div className="w-full md:w-[25%] flex-shrink-0 mb-4 md:mb-0">
          <img
            src="https://via.placeholder.com/150" // Use dynamic image URL if available
            alt={activityName}
            className="w-full h-40 md:h-full object-cover rounded-lg"
          />
        </div>
        <div className="bg-white w-full">
          <div className="flex flex-col md:flex-row items-start justify-between px-4 md:px-6 py-2 space-y-4 md:space-y-0 overflow-x-auto">
            <div className="space-y-2 md:space-y-4 mr-3">
              <div>
                <p className="text-base md:text-lg xl:text-xl font-semibold text-[#1D2433]">
                  {activityName}
                </p>
                <p className="text-sm md:text-base text-[#1D2433] max-w-md">
                  {description}
                </p>
              </div>
              <div className="flex flex-wrap gap-2 md:gap-4 items-center text-xs md:text-base">
                <div className="flex items-center text-[#0D6EFD] gap-1">
                  <IoLocationOutline className="text-base" />
                  <p>{location}</p>
                </div>
                <div className="flex items-center text-[#676E7E] gap-1">
                  <FaStar color="#F4B93E" />
                  <p>
                    {rating} ({reviews})
                  </p>
                </div>
                <div className="flex items-center gap-1">
                  <PiClockBold />
                  <p>{duration}</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start md:items-end text-sm md:text-lg">
              <div className="flex items-center text-lg md:text-2xl font-semibold text-[#1D2433]">
                <PiCurrencyNgnBold />
                <span>{price.toLocaleString("en-NG")}</span>
              </div>
              <p className="text-[#1D2433] text-xs md:text-sm">
                {time} on {date}
              </p>
            </div>
          </div>
          <hr />
          <div className="px-4 md:px-6 py-2 md:py-3 flex flex-col md:flex-row items-start md:items-center justify-between text-sm md:text-base font-medium text-[#647995] space-y-3 md:space-y-0">
            <div className="flex flex-wrap items-center gap-2 md:gap-3">
              <span className="font-medium">What's Included:</span>
              {includedItems.map((item, index) => (
                <span key={index} className="flex items-center gap-1">
                  {item}
                </span>
              ))}
              <span className="text-[#0D6EFD]">See more</span>
            </div>
            <div className="flex items-center gap-2 md:gap-3">
              <div className="text-xs md:text-sm font-medium bg-[#0A369D] px-2 py-1 text-white rounded">
                Day {day}
              </div>
              <div className="flex items-center gap-1">
                <PiCaretCircleUp />
                <PiCaretCircleDown />
              </div>
            </div>
          </div>
          <hr />
          <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-6 py-2 md:py-3 text-[#0D6EFD] text-sm md:text-base font-medium">
            <div className="flex space-x-4 md:space-x-8">
              <a href="#" className="hover:underline">
                Activity Details
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
      {/* Remove button */}
      <div
        onClick={onRemove}
        className="bg-[#FBEAE9] flex items-center justify-center text-red-700 w-full md:w-[3%] cursor-pointer"
      >
        <FaTimes className="text-lg md:text-xl" />
      </div>
    </div>
  );
};


export default ActivitiesCard;
