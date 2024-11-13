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
import { IFlightData } from "../utils/types";



const FlightCard: React.FC<IFlightData> = ({
  airline,
  flightNumber,
  departureTime,
  departureDate,
  duration,
  arrivalTime,
  arrivalDate,
  from,
  to,
  price,
  baggage,
  cabinBaggage,
  inFlightEntertainment,
  inFlightMeal,
  usbPort,
  onRemove,
}) => {
  return (
    <div className="flex items-stretch w-full rounded-sm">
      <div className="bg-white w-[97%]">
        <div className="flex items-center lg:justify-between p-4 w-full overflow-x-scroll gap-6 ">
          <div className=" flex items-center gap-2 ">
            <img src={planeLogo} alt="" />
            <div>
              <p className="text-sm lg:text-base xl:text-xl font-semibold text-[#1D2433]">
                {airline}
              </p>
              <div className="flex items-center gap-1">
                <p className="font-medium text-[8px] md:text-[10px] xl:text-sm text-[#676E7E]">
                  {flightNumber}
                </p>
                <GoDotFill className="text-[8px]" />
                <span className="text-[8px] w-20  md:w-24 flex items-center justify-center md:text-[10px] xl:text-sm font-semibold bg-blue-600 text-white rounded px-2">
                  First Class
                </span>
              </div>
            </div>
          </div>
          <div className="flex gap-8">
            <div>
              <p className="md:text-base text-sm lg:text-lg xl:text-2xl font-semibold text-[#1D2433]">
                {departureTime}
              </p>
              <p className="text-[#676E7E] font-medium text-[10px] xl:text-sm">
                {departureDate}
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between gap-8">
                <TbPlaneDeparture className="text-xl" />
                <span className="text-[#676E7E] text-sm xl:text-base font-medium">
                  Duration: {duration}
                </span>
                <LuPlaneLanding className="text-xl" />
              </div>
              <div className="flex justify-center items-center bg-[#E7F0FF] h-fit rounded-full">
                <div className="bg-blue-500 h-2 w-1/2 rounded-full"></div>
              </div>
              <div className="flex text-sm lg:text-base xl:text-lg items-center justify-between">
                <p className="font-semibold text-[#1D2433]">{from}</p>
                <p className="text-[#676E7E] font-medium">Direct</p>
                <p className="font-semibold text-[#1D2433]">{to}</p>
              </div>
            </div>
            <div>
              <p className="md:text-base text-sm lg:text-lg xl:text-2xl font-semibold text-[#1D2433]">
                {arrivalTime}
              </p>
              <p className="text-[#676E7E] font-medium text-[10px] xl:text-sm">
                {arrivalDate}
              </p>
            </div>
          </div>
          <div className="flex items-center text-sm lg:text-xl xl:text-3xl font-semibold text-[#1D2433]">
            <PiCurrencyNgnBold />
            <span>{price.toLocaleString("en-NG")}</span>
          </div>
        </div>
        <hr />
        <div className="p-4">
          <div className="flex flex-wrap items-center gap-3 my-2 text-sm md:text-base xl:text-lg font-medium text-[#647995]">
            <span>Facilities:</span>
            <p className="flex items-center space-x-1">
              <PiSuitcaseRolling />
              <span>Baggage: {baggage}, Cabin Baggage: {cabinBaggage}</span>
            </p>
            {inFlightEntertainment && (
              <p className="flex items-center space-x-1">
                <PiFilmSlate />
                <span>In-flight entertainment</span>
              </p>
            )}
            {inFlightMeal && (
              <p className="flex items-center space-x-1">
                <PiForkKnifeBold />
                <span>In-flight meal</span>
              </p>
            )}
            {usbPort && (
              <p className="flex items-center space-x-1">
                <PiUsb />
                <span>USB Port</span>
              </p>
            )}
          </div>
        </div>
        <hr />
        <div className="flex justify-between items-center p-4 text-[#0D6EFD] text-[10px] md:text-sm lg:text-base xl:text-lg font-medium">
          <div className="space-x-8">
            <a href="#">Flight Details</a>
            <a href="#">Price Details</a>
          </div>
          <a href="#">Edit Details</a>
        </div>
      </div>
      <div
        onClick={onRemove}
        className="bg-[#FBEAE9] flex-1 w-[3%] flex items-center justify-center text-red-700 rounded-r-sm cursor-pointer"
      >
        <FaTimes />
      </div>
    </div>
  );
};

export default FlightCard;
