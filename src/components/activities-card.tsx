import { FaStar, FaTimes } from "react-icons/fa";
import {
  PiCurrencyNgnBold,
  PiClockBold,
  PiCaretCircleUp,
  PiCaretCircleDown,
} from "react-icons/pi";
import hotelImage from "../assets/images/Rectangle 3437.png";
import { IoCalendarClearOutline, IoLocationOutline } from "react-icons/io5";

const ActivitiesCard = () => {
  return (
    <div className="flex items-stretch w-full rounded-lg shadow-lg overflow-hidden ">
      <div className="p-4 bg-white w-[97%] flex items-start">
        <div className="w-1/4">
          <img
            src={hotelImage}
            alt="Hotel"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="bg-white w-full">
          <div className="flex items-start justify-between px-6 py-2">
            <div className="space-y-4">
              <div>
                <p className="text-xl font-semibold text-[#1D2433]">
                  American Airlines
                </p>
                <p className="font-medium text-[#1D2433] max-w-md">
                  Works from Van Gogh to Warhol & beyond plus a sculpture
                  garden, 2 cafes & The modern restaurant
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center font-medium text-[#0D6EFD]">
                  <IoLocationOutline className="text-lg" />
                  <p>Direction</p>
                </div>
                <div className="flex items-center text-[#676E7E] font-medium">
                  <FaStar color="#F4B93E" />
                  <p className="text-[#676E7E] font-medium">8.5 (436)</p>
                </div>
                <div className="flex items-center gap-1">
                  <PiClockBold />
                  <p className="text-[#676E7E] font-medium">1 Hour</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <div className="flex items-center text-3xl font-semibold text-[#1D2433]">
                <PiCurrencyNgnBold />
                <span>123,450.00</span>
              </div>
              <p className="text-[#1D2433] font-medium">10:30 AM on Mar 19</p>
            </div>
          </div>
          <hr />
          <div className="px-6 py-3 flex items-center justify-between  text-lg font-medium text-[#647995]">
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-medium">What's Included:</span>
              <span className="flex items-center gap-1">
                Admission to the Empire State Building
              </span>
              <span className="text-[#0D6EFD]">See more</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-xs font-medium bg-[#0A369D] text-white rounded px-2 py-1">
                Day 1
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
      {/* Remove button */}
      <div className="bg-[#FBEAE9] flex items-center justify-center text-red-700 w-[3%] cursor-pointer">
        <FaTimes className="text-lg" />
      </div>
    </div>
  );
};

export default ActivitiesCard;
