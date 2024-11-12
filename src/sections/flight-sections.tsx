import { TbPlaneInflight } from "react-icons/tb";
import FlightCard from "../components/flight-card";

const FlightsSection = () => {
  return (
    <div className="px-4 pb-4 bg-[#F0F2F5]">
      <div className="flex items-center justify-between  p-4">
        <div className="flex items-center gap-2">
          <TbPlaneInflight className="text-xl" />
          <span className="text-lg font-semibold text-[#1D2433]">Flights</span>
        </div>
        <button className="bg-white text-[#0D6EFD] px-4 py-3 rounded text-sm font-semibold">
          Add Flights
        </button>
      </div>
      <div className="flex flex-col gap-4 px-4">
        <FlightCard />
        <FlightCard />
      </div>
    </div>
  );
};

export default FlightsSection;
