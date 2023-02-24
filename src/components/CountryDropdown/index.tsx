import { ReactNode, useState, useEffect, useContext } from 'react';
//import icons
import { RiMapPinLine, RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
// import headless ui
import { Menu } from '@headlessui/react';
// import context
import { HouseContext } from "../HouseContext";

export function CountryDropdown() {

  const { country, setCountry, countries } = useContext(HouseContext);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <Menu as='div' className='dropdown relative'>
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className='dropdown-btn w-full text-left'>
        <RiMapPinLine className='dropdown-icon-primary' />
        <div className=''>
          <div className='text-[15px] font-medium leading-tight'>{country}</div>
          <div className='text-[13px]'> Select your place </div>
        </div>
        {isOpen ? (
          <RiArrowUpSLine className='dropdown-icon-secondary' />
        ) : (
          <RiArrowDownSLine className='dropdown-icon-secondary' />
        )}
      </Menu.Button>
      <Menu.Items className='dropdown-menu absolute w-full bg-white shadow-lg rounded-lg'>
        {countries.map((country, i) => {
          return (
            <Menu.Item
              onClick={() => setCountry(country)}
              as='li' key={i} className='cursor-pointer
               hover:text-violet-700 transition'
            >{country}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
}
