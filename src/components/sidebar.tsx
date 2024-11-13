import React from "react";
import {
  FaPlane,
  FaHotel,
  FaUmbrellaBeach,
  FaGraduationCap,
  FaPassport,
  FaStethoscope,
  FaBoxOpen,
} from "react-icons/fa";
import { GoHome } from "react-icons/go";
import { PiChartPieSlice } from "react-icons/pi";
import { PiWalletLight } from "react-icons/pi";
import { GrTask } from "react-icons/gr";
import { PiHandCoinsLight } from "react-icons/pi";
import { FiBell } from "react-icons/fi";
import { PiBasketLight } from "react-icons/pi";
import { CiSquarePlus } from "react-icons/ci";
import { PiCaretDown } from "react-icons/pi";
import { RxCaretSort } from "react-icons/rx";
import { RiHotelLine } from "react-icons/ri";
import { LuPlane } from "react-icons/lu";
import { RiFirstAidKitLine } from "react-icons/ri";
import { RxCube } from "react-icons/rx";
import { PiRoadHorizon } from "react-icons/pi";
import { PiNewspaperClipping } from "react-icons/pi";
import { PiStudent } from "react-icons/pi";
import { PiSuitcaseRolling } from "react-icons/pi";
import { PiPackageFill } from "react-icons/pi";
const Sidebar = ({ navbarOpen }: { navbarOpen: boolean }) => {
  const menuItems = [
    { name: "Activities", icon: PiRoadHorizon },
    { name: "Hotels", icon: RiHotelLine },
    { name: "Flights", icon: LuPlane },
    { name: "Study", icon: PiStudent },
    { name: "Visa", icon: PiNewspaperClipping },
    { name: "Immigration", icon: PiSuitcaseRolling },
    { name: "Medical", icon: RiFirstAidKitLine },
    { name: "Vacation Packages", icon: PiPackageFill },
  ];

  const navBarLinks = [
    { name: "Home", icon: GoHome },
    { name: "Dashboard", icon: PiChartPieSlice },
    { name: "Wallet", icon: PiWalletLight },
    { name: "PlanTrip", icon: GrTask },
    { name: "Commission for life", icon: PiHandCoinsLight },
  ];

  const notifications = [
    { name: "Notifications", icon: FiBell },
    { name: "Cart", icon: PiBasketLight },
    { name: "Create", icon: CiSquarePlus },
  ];

  return (
    <div
      className={`${
        navbarOpen ? "translate-x-0" : "-translate-x-full"
      } fixed top-0 left-0 w-[300px] h-full bg-white text-base md:text-lg p-6 shadow-lg rounded-sm transform transition-transform duration-300 ease-in-out z-10 overflow-y-auto lg:translate-x-0 lg:relative lg:w-[250px] lg:h-auto lg:mt-0 lg:z-auto`}
    >
      {/* Top Navigation Links (Mobile) */}
      <div className="flex lg:hidden flex-col space-y-8 mt-8 w-full">
        {navBarLinks.map((link) => (
          <a
            key={link.name}
            className="flex items-center gap-4 text-gray-600 hover:text-blue-500 cursor-pointer"
          >
            <link.icon className="text-2xl mb-1" />
            <span>{link.name}</span>
          </a>
        ))}
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
          Subscribe
        </button>
        <div className="flex items-center gap-4 mt-4">
          {notifications.map((link) => (
            <a
              key={link.name}
              className="flex items-center gap-4 text-gray-600 hover:text-blue-500 cursor-pointer"
            >
              <link.icon className="text-2xl mb-1" />
              <span>{link.name}</span>
            </a>
          ))}
          <a className="flex items-center gap-4 text-gray-600 hover:text-blue-500 cursor-pointer">
            <PiCaretDown className="text-2xl mb-1" />
          </a>
        </div>
      </div>

      {/* Sidebar Menu Items */}
      <nav className="flex flex-col space-y-8 mt-8">
        {menuItems.map((item, index) => (
          <a
            key={index}
            href="#"
            className="flex items-center gap-4 text-gray-600 hover:text-blue-500"
          >
            <item.icon className="text-2xl" />
            <span>{item.name}</span>
          </a>
        ))}
      </nav>

      {/* Account Section */}
      <div className="mt-16">
        <div className="flex items-center justify-between p-4 bg-gray-100 rounded-lg">
          <div className="flex items-center gap-2">
            <button className="bg-blue-500 text-white w-12 py-2 rounded-md">
              Go
            </button>
            <span className="text-[#647995]">Personal Account</span>
          </div>
          <RxCaretSort className="text-2xl text-[#667185]" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
