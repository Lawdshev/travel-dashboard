import { FaStar, FaTimes } from "react-icons/fa";
import { PiBedFill, PiCurrencyNgnBold, PiSwimmingPool, PiWineLight } from "react-icons/pi";
import hotelImage from "../assets/images/Rectangle 3437.png";
import { IoCalendarClearOutline, IoLocationOutline } from "react-icons/io5";


interface Iprops {
  name: string;
  location: string;
  price: number;
  currency: string;
  checkOutFrom: string;
  checkOutTo: string;
  reviewCount: string;
  reviewScore: number;
  imageUrl: string;
}

const HotelCard = (props: Iprops) => {
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
                  {props.name}
                </p>
                <p className="font-medium text-[#1D2433] max-w-md">
                  18, Kenneth Agbakuru Street, Off Access Bank Admiralty Way,
                  Lekki Phase1
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center font-medium text-[#0D6EFD]">
                  <IoLocationOutline className="text-lg" />
                  <p>Show in map</p>
                </div>
                <div className="flex items-center text-[#676E7E] font-medium">
                  <FaStar color="#F4B93E" />
                  <p className="text-[#676E7E] font-medium">8.5 (436)</p>
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
                Total Price: {props.currency} {props.price}
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
              <span className="flex items-center gap-1" >
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
                <span className="font-medium">Check In: 20-04-2024</span>
              </div>
              <div className="flex items-center gap-1">
                <IoCalendarClearOutline color="#475367" />
                <span className="font-medium">Check Out: 29-04-2024</span>
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
