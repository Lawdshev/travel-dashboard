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
    <div className="flex items-stretch w-full rounded-lg shadow-lg overflow-hidden ">
      <div className="p-2 lg:p-4 bg-white w-[97%] flex items-start">
        <div className="w-[15%] lg:w-1/4">
          <img
            src="https://via.placeholder.com/150" // Use dynamic image URL if available
            alt={activityName}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="bg-white w-full">
          <div className="flex items-start justify-between px-6 py-2 overflow-x-scroll">
            <div className="space-y-4  mr-3">
              <div>
                <p className="lg:text-lg text-base xl:text-xl font-semibold text-[#1D2433]">
                  {activityName}
                </p>
                <p className="font-medium text-[#1D2433] text-[12px] lg:text-sm xl:text-base max-w-md">
                  {description}
                </p>
              </div>
              <div className="flex lg:text-lg text-[10px] xl:text-xl items-center gap-2 flex-wrap  w-full lg:gap-4">
                <div className="flex items-center font-medium text-[#0D6EFD]">
                  <IoLocationOutline className="text-lg" />
                  <p>{location}</p>
                </div>
                <div className="flex items-center text-[#676E7E] font-medium">
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
            <div className="flex flex-col items-end">
              <div className="flex items-center text-base md:text-lg lg:text-xl xl:text-3xl font-semibold text-[#1D2433]">
                <PiCurrencyNgnBold />
                <span>{price.toLocaleString("en-NG")}</span>
              </div>
              <p className="text-[#1D2433] text-[12px] lg:text-sm xl:text-base font-medium">{time} on {date}</p>
            </div>
          </div>
          <hr />
          <div className="lg:px-6 lg:py-3 py-2 px-3 flex items-center justify-between text-sm lg:text-base xl:text-lg font-medium text-[#647995]">
            <div className="flex flex-wrap items-center gap-3 lg:gap-3">
              <span className="font-medium">What's Included:</span>
              {includedItems.map((item, index) => (
                <span key={index} className="flex items-center gap-1">
                  {item}
                </span>
              ))}
              <span className="text-[#0D6EFD]">See more</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-[10px] lg:text-xs font-medium bg-[#0A369D] px-2 text-white rounded w-[50px] py-1">
                Day {day}
              </div>
              <div>
                <PiCaretCircleUp />
                <PiCaretCircleDown />
              </div>
            </div>
          </div>
          <hr />
          <div className="flex justify-between items-center px-6 py-3 text-[#0D6EFD] text-sm lg:text-base  xl:text-lg font-medium">
            <div className="space-x-8">
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
        className="bg-[#FBEAE9] flex items-center justify-center text-red-700 w-[3%] cursor-pointer"
      >
        <FaTimes className="text-lg" />
      </div>
    </div>
  );
};

export default ActivitiesCard;
