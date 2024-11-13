import { TbPlaneInflight } from "react-icons/tb";
import FlightCard from "../components/flight-card";
import useDestinationFlightsSearch from "../services/use-getFlights";
import EmptyState from "./empty-state";
import { RiFlightTakeoffFill } from "react-icons/ri";
import { useState } from "react";

const FlightsSection = ({ query }: { query: string }) => {
  const { data, error, isLoading } = useDestinationFlightsSearch(query);

  const [dataLength, setDataLength] = useState(0);
  return (
    <div
      className={`${
        data?.length > 0 ? "h-[700px]" : ""
      } "px-4 pb-4 bg-[#F0F2F5] overflow-y-scroll"`}
    >
      <div className="flex items-center justify-between  p-4">
        <div className="flex items-center gap-2">
          <TbPlaneInflight className="text-xl" />
          <span className=" text-base lg:text-lg font-semibold text-[#1D2433]">Flights</span>
        </div>
        <button className="bg-white text-[#0D6EFD] px-4 py-3 rounded text-sm font-semibold">
          Add Flights
        </button>
      </div>
      <div className="flex flex-col gap-4 p-4">
        <FlightCard />
        <FlightCard />
        <FlightCard />
        {/* <EmptyState
          icon={
            <RiFlightTakeoffFill
              className="text-6xl text-gray-300"
              size={100}
            />
          }
          buttonText="Add Flight"
        /> */}
      </div>
    </div>
  );
};

export default FlightsSection;
