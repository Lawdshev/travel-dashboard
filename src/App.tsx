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

function App() {
  return (
    <div>
      <Navbar />
      <div className="p-8 bg-[#f1f2f5] flex gap-8">
        <Sidebar />
        <div className="bg-white p-4">
          <div className="relative">
            <img src={banner} alt="" />
            <button className="p-3 bg-[#d9edff] rounded-md absolute top-4 left-4">
              <IoMdArrowRoundBack />
            </button>
          </div>
          <div className="flex justify-between mt-2 ">
            <div className="">
              <div className="flex items-center gap-2 text-[#7A4504] bg-[#FEF4E6] py-1 px-2 text-sm w-fit">
                <IoCalendarClearOutline />
                <span>21 March 2024</span>
                <FaArrowRight />
                <span>21 April 2024</span>
              </div>
              <h1 className="text-2xl font-bold">Bahamas Family Trip</h1>
              <div className="text-[#676E7E] flex items-center gap-2">
                <span>New York,  United States of America </span>
                <div className="w-[1px] h-4 bg-[#D0D5DD]"></div>
                <span>Solo Trip</span>
              </div>
              <div className="mt-4 flex gap-2 ">
                {activities.map((activity) => (
                  <ActivityCard key={activity.title} {...activity} />
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
            <h4 className="text-[#1D2433] text-xl font-semibold">
              Trip itineraries
            </h4>
            <h6 className="text-sm font-medium text-[#647995]">
              Your trip itineraries are placed here
            </h6>
            <div className="mt-4 space-y-6">
              <FlightsSection />
              <HotelsSection />
              <ActivitiesSection/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
