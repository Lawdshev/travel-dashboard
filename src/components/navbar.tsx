import { GoHome } from "react-icons/go";
import { PiChartPieSlice } from "react-icons/pi";
import { PiWalletLight } from "react-icons/pi";
import { GrTask } from "react-icons/gr";
import { PiHandCoinsLight } from "react-icons/pi";
import { FiBell } from "react-icons/fi";
import { PiBasketLight } from "react-icons/pi";
import { CiSquarePlus } from "react-icons/ci";
import { PiCaretDown } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";
import { CiMenuBurger } from "react-icons/ci";
import { MdCancel } from "react-icons/md";

import logo from "../assets/svgs/logo.svg";

const navBarLinks = [
  {
    name: "Home",
    icon: GoHome,
  },
  {
    name: "Dashboard",
    icon: PiChartPieSlice,
  },
  {
    name: "Wallet",
    icon: PiWalletLight,
  },
  {
    name: "PlanTrip",
    icon: GrTask,
  },
  {
    name: "Commission for life",
    icon: PiHandCoinsLight,
  },
];

const notifications = [
  {
    name: "Notifications",
    icon: FiBell,
  },
  {
    name: "Cart",
    icon: PiBasketLight,
  },
  {
    name: "Create",
    icon: CiSquarePlus,
  },
  {
    name: "",
    icon: PiCaretDown,
  },
];

const Navbar = ({
  navbarOpen,
  setNavbarOpen,
}: {
  navbarOpen: boolean;
  setNavbarOpen: (open: boolean) => void;
}) => {
  return (
    <header className="flex justify-between items-center bg-white py-4 px-6 lg:px-8 shadow-md relative">
      {/* Logo and Search */}
      <div className="flex items-center gap-6">
        <img className="w-10" src={logo} alt="Logo" />
        <div className="hidden md:flex items-center gap-2 bg-[#F0F2F5] px-3 py-2 rounded-md">
          <CiSearch className="text-xl text-gray-500" />
          <input
            className="bg-transparent text-sm text-gray-700 p-1 outline-none"
            placeholder="Search"
          />
        </div>
      </div>

      {/* Large Screen Navbar Links */}
      <div className="hidden lg:flex items-center gap-6">
        {navBarLinks.map((link) => (
          <a
            key={link.name}
            className="text-[#647995] hover:text-blue-500 flex flex-col items-center text-sm cursor-pointer"
          >
            <link.icon className="text-2xl mb-1" />
            <span>{link.name}</span>
          </a>
        ))}
        <div className="w-[1px] h-8 bg-[#98A2B3]"></div>
        <button className="bg-blue-500 text-white px-4 py-2 text-sm rounded-lg">
          Subscribe
        </button>
        <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
        {notifications.map((link) => (
          <a
            key={link.name}
            className="text-[#647995] hover:text-blue-500 flex flex-col items-center text-sm cursor-pointer"
          >
            <link.icon className="text-2xl mb-1" />
            <span>{link.name}</span>
          </a>
        ))}
      </div>

      {/* Mobile Menu Toggle */}
      <div className="lg:hidden">
        {navbarOpen ? (
          <MdCancel
            className="text-3xl text-gray-700 cursor-pointer"
            onClick={() => setNavbarOpen(!navbarOpen)}
          />
        ) : (
          <CiMenuBurger
            className="text-3xl text-gray-700 cursor-pointer"
            onClick={() => setNavbarOpen(!navbarOpen)}
          />
        )}
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          navbarOpen ? "block" : "hidden"
        } absolute top-16 left-0 w-full bg-white shadow-lg lg:hidden z-10`}
      >
        <div className="p-6 space-y-4">
          {/* Mobile search bar */}
          <div className="flex items-center gap-2 bg-[#F0F2F5] px-3 py-2 rounded-md mb-4">
            <CiSearch className="text-xl text-gray-500" />
            <input
              className="bg-transparent text-sm text-gray-700 p-1 outline-none"
              placeholder="Search"
            />
          </div>
          {/* Links */}
          {navBarLinks.map((link) => (
            <a
              key={link.name}
              className="flex items-center gap-4 text-[#647995] hover:text-blue-500 text-sm"
            >
              <link.icon className="text-2xl" />
              <span>{link.name}</span>
            </a>
          ))}
          <div className="w-full h-px bg-[#98A2B3] my-4"></div>
          {/* Notifications */}
          {notifications.map((link) => (
            <a
              key={link.name}
              className="flex items-center gap-4 text-[#647995] hover:text-blue-500 text-sm"
            >
              <link.icon className="text-2xl" />
              <span>{link.name}</span>
            </a>
          ))}
          <button className="bg-blue-500 text-white w-full py-2 rounded-lg text-sm">
            Subscribe
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
