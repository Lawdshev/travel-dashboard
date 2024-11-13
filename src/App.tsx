import "./App.css";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import banner from "./assets/images/banner.png";
import { IoMdArrowRoundBack } from "react-icons/io";
import { IoCalendarClearOutline } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";
import ActivityCard from "./components/activity-card";
import { activities } from "./utils/data";
import { LuUserPlus2 } from "react-icons/lu";
import { BsThreeDots } from "react-icons/bs";
import { PiGear } from "react-icons/pi";
import FlightsSection from "./sections/flight-sections";
import HotelsSection from "./sections/hotel-section";
import ActivitiesSection from "./sections/activities-section";
import { useState } from "react";
import DestinationSearch from "./components/destination-search";
import { IDestination } from "./utils/types";


function App() {
  const [destination, setDestination] = useState<IDestination>({} as IDestination);
  const [navbarOpen, setNavbarOpen] = useState(false);

  console.log(destination)

  return (
    <div
      className="w-screen overscroll-x-hidden"
      style={{ overflowX: "hidden" }}
    >
      <Navbar navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
      <div className="p-4 sm:p-6 md:p-8 lg:p-3 xl:p-8 bg-[#f1f2f5] grid grid-cols-1 md:grid-cols-10 w-full space-y-4 md:space-x-1 md:space-y-0">
        <div className="hidden lg:block lg:col-span-2 overflow-hidden">
          <Sidebar navbarOpen={navbarOpen} />
        </div>
        <div className="bg-white w-full p-4 sm:p-6 md:p-8 col-span-10 lg:col-span-8">
          <div className="relative">
            <img src={banner} alt="" />
            <button className="p-3 rounded-md absolute top-4 left-4">
              <IoMdArrowRoundBack />
            </button>
          </div>
          <div className="flex justify-between mt-2 w-full">
            <div className="w-full">
              <div className="flex items-center gap-2 text-[#7A4504] bg-[#FEF4E6] py-1 px-2 text-sm w-fit">
                <IoCalendarClearOutline />
                <span>21 March 2024</span>
                <FaArrowRight />
                <span>21 April 2024</span>
              </div>
              <div className="text-[#676E7E] flex items-center gap-2 mt-2">
                <DestinationSearch
                  destination={destination}
                  setDestination={setDestination}
                />
              </div>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-9 gap-4 w-full ">
                {activities.map((activity) => (
                  <div className="col-span-1 sm:col-span-1 lg:col-span-3 lg:min-w-[200px]" key={activity.title}>
                    <ActivityCard key={activity.title} {...activity} />
                  </div>
                ))}
              </div>
            </div>
            <div className="">
              <div className="flex items-center gap-2">
                <button className="bg-[#E7F0FF] px-12 py-2 rounded-md">
                  <LuUserPlus2 />
                </button>
                <BsThreeDots className="text-xl" />
              </div>
              <div className="flex items-center mt-4 mr-6 justify-end">
                <div className="w-8 h-8  border-2 border-[#E7F0FF] rounded-full"></div>
                <div className="w-6 h-[1px] bg-[#E7F0FF]"></div>
                <div className="w-8 h-8 border-2 border-[#E7F0FF] rounded-full flex items-center justify-center">
                  <PiGear className="text-lg" />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12">
            <h4 className="text-[#1D2433] text-base md:text-lg lg:text-xl font-semibold">
              Trip itineraries
            </h4>
            <h6 className=" text-[12px] md:text-sm font-medium text-[#647995]">
              Your trip itineraries are placed here
            </h6>
            <div className="mt-4 space-y-6">
              <FlightsSection query={destination.city_name ?? ""} />
              <HotelsSection query={destination.dest_id ?? ""} />
              <ActivitiesSection query={destination.cc1 ?? ""} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
