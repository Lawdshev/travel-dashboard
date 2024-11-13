import { FaStar, FaTimes } from "react-icons/fa";
import {
  PiCurrencyNgnBold,
  PiClockBold,
  PiCaretCircleUp,
  PiCaretCircleDown,
} from "react-icons/pi";
import { IoLocationOutline } from "react-icons/io5";

interface IActivityProps {
  activityName: string;
  description: string;
  location: string;
  rating: number;
  reviews: number;
  duration: string;
  price: number;
  time: string;
  date: string;
  includedItems: string[];
  day: number;
  onRemove: () => void;
}

const ActivitiesCard: React.FC<IActivityProps> = ({
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
    <div className="flex items-stretch w-full rounded-lg shadow-lg overflow-hidden">
      <div className="p-4 bg-white w-[97%] flex items-start">
        <div className="w-1/4">
          <img
            src="https://via.placeholder.com/150" // Use dynamic image URL if available
            alt={activityName}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="bg-white w-full">
          <div className="flex items-start justify-between px-6 py-2">
            <div className="space-y-4">
              <div>
                <p className="text-xl font-semibold text-[#1D2433]">
                  {activityName}
                </p>
                <p className="font-medium text-[#1D2433] max-w-md">
                  {description}
                </p>
              </div>
              <div className="flex items-center gap-4">
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
              <div className="flex items-center text-3xl font-semibold text-[#1D2433]">
                <PiCurrencyNgnBold />
                <span>{price.toLocaleString("en-NG")}</span>
              </div>
              <p className="text-[#1D2433] font-medium">
                {time} on {date}
              </p>
            </div>
          </div>
          <hr />
          <div className="px-6 py-3 flex items-center justify-between text-lg font-medium text-[#647995]">
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-medium">What's Included:</span>
              {includedItems.map((item, index) => (
                <span key={index} className="flex items-center gap-1">
                  {item}
                </span>
              ))}
              <span className="text-[#0D6EFD]">See more</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-xs font-medium bg-[#0A369D] text-white rounded px-2 py-1">
                Day {day}
              </div>
              <div>
                <PiCaretCircleUp />
                <PiCaretCircleDown />
              </div>
            </div>
          </div>
          <hr />
          <div className="flex justify-between items-center px-6 py-3 text-[#0D6EFD] text-lg font-medium">
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
