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
    <div className="flex flex-col md:flex-row items-stretch w-full rounded-sm shadow-lg">
      <div className="bg-white w-full md:w-[97%]">
        <div className="flex flex-col lg:flex-row items-center p-4 w-full overflow-x-auto gap-6">
          <div className="flex items-center gap-2 min-w-[150px]">
            <img
              src={planeLogo}
              alt="Airline Logo"
              className="w-8 md:w-12 lg:w-16"
            />
            <div>
              <p className="text-sm lg:text-base xl:text-xl font-semibold text-[#1D2433]">
                {airline}
              </p>
              <div className="flex items-center gap-1">
                <p className="font-medium text-xs md:text-sm xl:text-base text-[#676E7E]">
                  {flightNumber}
                </p>
                <GoDotFill className="text-xs" />
                <span className="text-xs md:text-sm xl:text-base font-semibold bg-blue-600 text-white rounded px-2">
                  First Class
                </span>
              </div>
            </div>
          </div>

          <div className="flex gap-8 items-center justify-between w-full lg:w-auto">
            <div className="text-center">
              <p className="text-sm lg:text-lg xl:text-2xl font-semibold text-[#1D2433]">
                {departureTime}
              </p>
              <p className="text-[#676E7E] font-medium text-xs xl:text-sm">
                {departureDate}
              </p>
            </div>

            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-4">
                <TbPlaneDeparture className="text-lg" />
                <span className="text-[#676E7E] text-xs xl:text-sm font-medium">
                  Duration: {duration}
                </span>
                <LuPlaneLanding className="text-lg" />
              </div>
              <div className="w-full bg-[#E7F0FF] rounded-full">
                <div className="bg-blue-500 h-2 w-1/2 rounded-full"></div>
              </div>
              <div className="flex items-center gap-4 text-sm lg:text-base xl:text-lg">
                <p className="font-semibold text-[#1D2433]">{from}</p>
                <p className="text-[#676E7E] font-medium">Direct</p>
                <p className="font-semibold text-[#1D2433]">{to}</p>
              </div>
            </div>

            <div className="text-center">
              <p className="text-sm lg:text-lg xl:text-2xl font-semibold text-[#1D2433]">
                {arrivalTime}
              </p>
              <p className="text-[#676E7E] font-medium text-xs xl:text-sm">
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
          <div className="flex flex-wrap items-center gap-2 md:gap-3 my-2 text-xs md:text-sm xl:text-base font-medium text-[#647995]">
            <span>Facilities:</span>
            <p className="flex items-center space-x-1">
              <PiSuitcaseRolling />
              <span>
                Baggage: {baggage}, Cabin Baggage: {cabinBaggage}
              </span>
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

        <div className="flex justify-between items-center p-4 text-[#0D6EFD] text-xs md:text-sm lg:text-base xl:text-lg font-medium">
          <div className="space-x-4 md:space-x-8">
            <a href="#">Flight Details</a>
            <a href="#">Price Details</a>
          </div>
          <a href="#">Edit Details</a>
        </div>
      </div>

      <div
        onClick={onRemove}
        className="bg-[#FBEAE9] flex-1 md:w-[3%] flex items-center justify-center text-red-700 rounded-r-sm cursor-pointer"
      >
        <FaTimes />
      </div>
    </div>
  );
};


export default FlightCard;
