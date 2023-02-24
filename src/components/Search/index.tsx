// import components
import { CountryDropdown } from "../CountryDropdown";
import { PropertyDropDown } from "../PropertyDropDown";
import { PriceRangeDropDown } from "../PriceRangeDropDown";

// import icons
import { RiSearchLine } from "react-icons/ri";
import { useContext } from "react";
//import context
import { HouseContext } from "../HouseContext";



export function Search() {
  const { handleClick } = useContext(HouseContext);
  const { houses } = useContext(HouseContext);
  //console.log("Searching for houses: ", houses);

  return (
    <div className="px-[30px] py-6 max-w-[1170px] mx-auto flex flex-col lg:flex-row justify-between gap-4 lg:gap-x-3 relative lg:-top-4 lg:shadow-1 bg-white lg:bg-transparent lg:backdrop-blur rounded-lg">
      <CountryDropdown />
      <PropertyDropDown />
      <PriceRangeDropDown />
      <button
        onClick={handleClick}
        className="bg-violet-700 hover:bg-violet-800 transition w-full lg:max-w-[162px] h-16 rounded-l flex justify-center items-center text-white text-lg">
        <RiSearchLine />
      </button>
    </div>
  );
}
