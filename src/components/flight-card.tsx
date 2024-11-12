import {
  PiForkKnifeBold,
  PiSuitcaseRolling,
  PiUsb,
  PiFilmSlate,
} from "react-icons/pi";
import { FaTimes } from "react-icons/fa";
import { PiCurrencyNgnBold } from "react-icons/pi";
import { GoDotFill } from "react-icons/go";
import planeLogo from "../assets/svgs/Group.svg";
import { TbPlaneDeparture } from "react-icons/tb";
import { LuPlaneLanding } from "react-icons/lu";

const FlightCard = () => {
  return (
    <div className="flex items-stretch w-full rounded-sm">
      <div className="bg-white w-[97%]">
        <div className="flex items-center justify-between p-4">
          <div className=" flex items-center gap-2">
            <img src={planeLogo} alt="" />
            <div>
              <p className="text-xl font-semibold text-[#1D2433]">
                American Airlines
              </p>
              <div className="flex items-center gap-1">
                <p className="font-medium text-[#676E7E]">AA-829</p>
                <GoDotFill className="text-[8px]" />
                <span className="text-sm font-semibold bg-blue-600 text-white rounded px-2">
                  First Class
                </span>
              </div>
            </div>
          </div>
          <div className="flex gap-8">
            <div>
              <p className="text-2xl font-semibold text-[#1D2433]">08:35</p>
              <p className="text-[#676E7E] font-medium text-sm">Sun, 20 Aug</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between gap-8">
                <TbPlaneDeparture className="text-xl" />
                <span className="text-[#676E7E] font-medium">
                  Duration: 1h 45m
                </span>
                <LuPlaneLanding className="text-xl" />
              </div>
              <div className="flex justify-center items-center bg-[#E7F0FF] h-fit rounded-full">
                <div className="bg-blue-500 h-2 w-1/2 rounded-full"></div>
              </div>
              <div className="flex items-center justify-between">
                <p className="font-semibold text-[#1D2433]">LOS</p>
                <p className="text-[#676E7E] font-medium">Direct</p>
                <p className="font-semibold text-[#1D2433]">SIN</p>
              </div>
            </div>
            <div>
              <p className="text-2xl font-semibold text-[#1D2433]">08:35</p>
              <p className="text-[#676E7E] font-medium text-sm">Sun, 20 Aug</p>
            </div>
          </div>
          <div className="flex items-center text-3xl font-semibold text-[#1D2433]">
            <PiCurrencyNgnBold />
            <span>123,450.00</span>
          </div>
        </div>
        <hr />
        <div className="p-4">
          <div className="flex flex-wrap items-center gap-3 my-2 text-lg font-medium text-[#647995]">
            <span>Facilities:</span>
            <p className="flex items-center space-x-1">
              <PiSuitcaseRolling />
              <span>Baggage: 20kg, Cabin Baggage: 8kg</span>
            </p>
            <p className="flex items-center space-x-1">
              <PiFilmSlate />
              <span>In-flight entertainment</span>
            </p>
            <p className="flex items-center space-x-1">
              <PiForkKnifeBold />   
              <span>In-flight meal</span>
            </p>
            <p className="flex items-center space-x-1">
              <PiUsb />
              <span>USB Port</span>
            </p>
          </div>
        </div>
        <hr />
        <div className="flex justify-between items-center p-4 text-[#0D6EFD] text-lg font-medium">
          <div className="space-x-8">
            <a href="#">Flight Details</a>
            <a href="#">Price Details</a>
          </div>
          <a href="#">Edit Details</a>
        </div>
      </div>
      {/* Remove button */}
      <div className="bg-[#FBEAE9] flex-1 w-[3%] flex items-center justify-center text-red-700 rounded-r-sm cursor-pointer">
        <FaTimes />
      </div>
    </div>
  );
};

export default FlightCard;
