import { FaStar, FaTimes } from "react-icons/fa";
import { PiBedFill, PiCurrencyNgnBold, PiSwimmingPool, PiWineLight } from "react-icons/pi";
import hotelImage from "../assets/images/Rectangle 3437.png";
import { IoCalendarClearOutline, IoLocationOutline } from "react-icons/io5";
import { IHotel } from "../utils/types";

const HotelCard = (props: IHotel) => {
  return (
    <div className="flex items-stretch w-full rounded-lg shadow-lg overflow-hidden ">
      <div  className="p-2 lg:p-4 bg-white w-[97%] flex items-start">
        <div className="w-[15%] lg:w-1/4">
          <img
            src={props.photoUrls[0]}
            alt="Hotel"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="bg-white w-full">
          <div className="flex items-start justify-between px-6 py-2 overflow-x-scroll">
            <div className="space-y-4">
              <div>
                <p className="text-sm lg:text-base xl:text-xlfont-semibold text-[#1D2433]">
                  {props.name}
                </p>
                <p className="font-medium text-[12px] lg:text-sm xl:text-base text-[#1D2433] max-w-md">
                  {props.countryCode}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center font-medium text-[#0D6EFD]">
                  <IoLocationOutline className="text-lg" />
                  <p>Show in map</p>
                </div>
                <div className="flex items-center text-[#676E7E] font-medium">
                  <FaStar color="#F4B93E" />
                  <p className="text-[#676E7E] font-medium">
                    {props.reviewScore} ({props.reviewCount})
                  </p>
                </div>
                <div className="flex items-center gap-1">
                  <PiBedFill />
                  <p className="text-[#676E7E] font-medium">King size room</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <div className="flex items-center text-3xl font-semibold text-[#1D2433]">
                <PiCurrencyNgnBold />
                <span>123,450.00</span>
              </div>
              <p className="text-[#1D2433] font-medium">
                Total Price: {props.priceBreakdown.grossPrice.currency}{" "}
                {props.priceBreakdown.grossPrice.value}
              </p>
              <p className="text-[#1D2433] font-medium">
                1 room x 10 nights incl. taxes
              </p>
            </div>
          </div>
          <hr />
          <div className="px-6 py-3 flex items-center justify-between  text-lg font-medium text-[#647995]">
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-medium">Facilities:</span>
              <span className="flex items-center gap-1">
                <PiSwimmingPool />
                <span>Pool</span>
              </span>
              <span className="flex items-center gap-1">
                <PiWineLight /> <span>Bar</span>{" "}
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-1">
                <IoCalendarClearOutline color="#475367" />
                <span className="font-medium">Check In: {props.checkin.fromTime}</span>
              </div>
              <div className="flex items-center gap-1">
                <IoCalendarClearOutline color="#475367" />
                <span className="font-medium">Check Out: {props.checkout.untilTime} </span>
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

export default HotelCard;
