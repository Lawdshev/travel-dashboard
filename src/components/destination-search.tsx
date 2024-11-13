import { useCallback, useState } from "react";
import { CiSearch } from "react-icons/ci";
import useDestinationHotelsSearch from "../services/use-getHotels";

interface IProp { 
  setDestination: React.SetStateAction<any>;
  destination: any
}

const debounce = (func: (...args: any[]) => void, delay: number) => {
  let timer: NodeJS.Timeout;
  return (...args: any[]) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

export default function DestinationSearch({setDestination,destination}:IProp) {
    const [ query,setQuery] = useState("")
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);   

    const debouncedSetQuery = useCallback(
      debounce((value: string) => {
        setQuery(value);
      }, 500),
      []
    );

  // Fetch destination suggestions
  const { data: destinations, isLoading } =
      useDestinationHotelsSearch(query);
    
    console.log(destinations)

  // Handler for input change
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setDestination(value);
    debouncedSetQuery(value);
    setIsDropdownOpen(!!value);
  };

  return (
    <div className="relative">
      {/* Search Input */}
      <div className="flex items-center gap-2 bg-[#F0F2F5] px-3 py-2 rounded-md">
        <CiSearch className="text-xl text-gray-500" />
        <input
          className="bg-transparent text-sm text-gray-700 p-1 outline-none"
          placeholder="Input destination"
          value={destination.label}
          onChange={handleSearch}
          onFocus={() => setIsDropdownOpen(!!destination)}
          onBlur={() => setTimeout(() => setIsDropdownOpen(false), 200)} 
        />
      </div>

      {/* Dropdown for suggestions */}
      {isDropdownOpen && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto z-10">
          {isLoading ? (
            <div className="p-2 text-center text-gray-500">Loading...</div>
          ) : destinations?.length ? (
            destinations.map((dest: any) => (
              <div
                key={dest.dest_id}
                className="p-2 cursor-pointer hover:bg-gray-100 border-b-2 border-gray-600"
                onClick={() => {
                  setDestination(dest.label);
                  setIsDropdownOpen(false);
                }}
              >
                {dest.label}
              </div>
            ))
          ) : (
            <div className="p-2 text-center text-gray-500">
              No results found
            </div>
          )}
        </div>
      )}
    </div>
  );
}
