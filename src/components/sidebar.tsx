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
import { RxCaretSort } from "react-icons/rx";

const Sidebar = () => {
  const menuItems = [
    { name: "Activities", icon: FaUmbrellaBeach },
    { name: "Hotels", icon: FaHotel },
    { name: "Flights", icon: FaPlane },
    { name: "Study", icon: FaGraduationCap },
    { name: "Visa", icon: FaPassport },
    { name: "Immigration", icon: FaPassport },
    { name: "Medical", icon: FaStethoscope },
    { name: "Vacation Packages", icon: FaBoxOpen },
  ];

  return (
    <div className="flex flex-col max-h-[calc(100vh-100px)]  w-72 bg-white p-6 rounded-sm">
      <nav className="flex flex-col space-y-8">
        {menuItems.map((item, index) => (
          <a
            key={index}
            href="#"
            className="flex items-center gap-4 text-gray-600 hover:text-blue-500"
          >
            <item.icon className="text-2xl" />
            <span className="text-lg">{item.name}</span>
          </a>
        ))}
      </nav>
      <div className="mt-16">
        <div className="flex items-center justify-between p-4 bg-gray-100 rounded-lg">
          <div className="flex items-center gap-2">
            <button className="bg-blue-500 text-white w-12 py-2 rounded-md">
              Go
            </button>
            <span className="text-[#647995] text-sm">Personal Account</span>
          </div>
          <RxCaretSort className="text-2xl text-[#667185]" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
