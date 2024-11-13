import { TbPlaneInflight } from "react-icons/tb";
import FlightCard from "../components/flight-card";
import useDestinationFlightsSearch from "../services/use-getFlights";
import { useMemo } from "react";
import { IFlightData } from "../utils/types";
import EmptyState from "../components/empty-state";
import { RiFlightTakeoffFill } from "react-icons/ri";
import { useState } from "react";
import { PiWarehouseBold } from "react-icons/pi";

const FlightsSection = ({ query }: { query: string }) => {
  const { data, error, isLoading } = useDestinationFlightsSearch(query);
  console.log({ flights: data });
  const flightsData = useMemo<IFlightData[]>(() => {
    if (!data || data.flightOffers.length === 0) return [];

    return data.flightOffers.map((flight: any) => ({
      //check amenities for facilities
      airline: flight.segments[0]?.legs[0]?.carriersData[0]?.name || "",
      flightNumber: flight.segments[0]?.legs[0]?.flightInfo?.flightNumber || "",
      departureTime: flight.segments[0]?.legs[0]?.departureTime || "",
      departureDate: flight.segments[0]?.legs[0]?.departureTime || "",
      duration: flight.segments[0]?.legs[0]?.totalTime || "",
      arrivalTime: flight.segments[0]?.legs[0]?.arrivalTime || "",
      arrivalDate: flight.segments[0]?.legs[0]?.arrivalTime || "",
      from: flight.segments[0]?.legs[0]?.departureAirport?.city || "",
      to: flight.segments[0]?.legs[0]?.arrivalAirport?.city || "",
      price: flight.priceBreakDown?.total.nanos || 0,
      baggage:
        flight.segments[0]?.travellerCheckedLuggage[0]?.luggageAllowance
          ?.maxWeightPerPiece || 0,
      cabinBaggage:
        flight.segments[0]?.travellerCabinLuggage[0]?.luggageAllowance
          ?.maxWeightPerPiece || 0,
      inFlightEntertainment: true,
      inFlightMeal: true,
      usbPort: true,
      onRemove: () => {},
    }));
  }, [data]);

  return (
    <div
      className={`${
        data?.length > 0 ? "h-[700px]" : ""
      } "px-4 pb-4 bg-[#F0F2F5] overflow-y-scroll"`}
    >
      <div className="flex items-center justify-between  p-4">
        <div className="flex items-center gap-2">
          <TbPlaneInflight className="text-xl" />
          <span className=" text-base lg:text-lg font-semibold text-[#1D2433]">
            Flights
          </span>
        </div>
        <button className="bg-white text-[#0D6EFD] px-4 py-3 rounded text-sm font-semibold">
          Add Flights
        </button>
      </div>

      <div className="flex flex-col gap-4 p-4">
        {flightsData?.map((flight: any, index: number) => (
          <FlightCard {...flight} key={index} />
        ))}
        {!data && (
          <EmptyState
            icon={
              <PiWarehouseBold className="text-6xl text-gray-300" size={100} />
            }
            buttonText="Add Flights"
          />
        )}
        {isLoading && (
          <div className="flex items-center justify-center py-8 mx-auto text-center">
            Fetching Flights...
          </div>
        )}
      </div>
    </div>
  );
};

export default FlightsSection;
