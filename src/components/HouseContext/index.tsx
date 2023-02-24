import { createContext, ReactNode, useEffect, useState } from 'react';

//import data
import { housesData } from '../../data';

interface HouseContextProps {
  children: ReactNode;
}


interface HouseContextType {
  country: string;
  countries: string[];
  property: string;
  properties: string[];
  price: string;
  houses: typeof housesData;
  loading: boolean;
  setPrice: (price: string) => void;
  setCountry: (country: string) => void;
  setProperty: (property: string) => void;
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;

}


//create context for houses
export const HouseContext = createContext({} as HouseContextType);

export function HouseContextProvider({ children }: HouseContextProps) {
  const [houses, setHouses] = useState(housesData);
  const [country, setCountry] = useState('Location Type (any)');
  const [countries, setCountries] = useState<string[]>([]);
  const [property, setProperty] = useState('Property Type (any)');
  const [properties, setProperties] = useState<string[]>([]);
  const [price, setPrice] = useState('Price range (any)');
  const [loading, setLoading] = useState(false);
  const [allCountries, setAllCountries] = useState<string[]>([]);
  const [allProperties, setAllProperties] = useState<string[]>([]);

  //return all properties
  useEffect(() => {
    setAllCountries(houses.map((house) => { return house.country }));
    setAllProperties(houses.map((house) => { return house.type }));
  }, [houses]);
  //return unique properties
  useEffect(() => {
    if (allCountries.length > 0) {
      const uniqueCountries = ['Location (any)', ...new Set(allCountries)];
      // set countries to unique properties
      setCountries(uniqueCountries);
    }
  }, [allCountries]);

  //return unique properties
  useEffect(() => {
    if (allProperties.length > 0) {
      const uniqueProperties = ['Property Type (any)', ...new Set(allProperties)];
      setProperties(uniqueProperties);
    }
  }, [allProperties]);

  const handleClick = () => {

    //set loading to true
    setLoading(true);
    //create a function that checks if string includes 'any'
    const checkAny = (str: string) => {
      return str.split(' ').includes('(any)');
    };

    //get first value of price and parse it to number
    const minPrice = parseInt(price.split(' ')[0]);
    //get second value of price which is the max price and parse it to number
    const maxPrice = parseInt(price.split(' ')[2]);

    //filter houses by country
    const newHouses = housesData.filter((house) => {
      const housePrice = parseInt(house.price);

      //if all values are selected
      if (house.country === country && house.type === property && housePrice >= minPrice && housePrice <= maxPrice) {
        console.log(house);
        return house;
      }

      //if all values are default
      if (checkAny(country) && checkAny(property) && checkAny(price)) {
        console.log(house);
        return house;
      }

      //if country is not default
      if (!checkAny(country) && checkAny(property) && checkAny(price)) {
        console.log(house);
        return (house.country === country);
      }

      //if property is not default
      if (checkAny(country) && !checkAny(property) && checkAny(price)) {
        console.log(house);
        return (house.type === property);
      }
      //if price is not default
      if (checkAny(country) && checkAny(property) && !checkAny(price)) {
        console.log(house);
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house;
        }
      }

      //if country and property are not default
      if (!checkAny(country) && !checkAny(property) && checkAny(price)) {
        if (house.country === country && house.type === property) {
          return house;
        }
        console.log(house);
      }
      //if country and price are not default
      if (!checkAny(country) && checkAny(property) && !checkAny(price)) {
        if (house.country === country && housePrice >= minPrice && housePrice <= maxPrice) {
          return house;
        }
      }
      //if property and price are not default 
      if (checkAny(country) && !checkAny(property) && !checkAny(price)) {
        if (house.type === property && housePrice >= minPrice && housePrice <= maxPrice) {
          return house;
        }
      }
      //if country, property and price are not default
      if (!checkAny(country) && !checkAny(property) && !checkAny(price)) {
        if (house.country === country && house.type === property && housePrice >= minPrice && housePrice <= maxPrice) {
          return house;
        }
      }


    });

    setTimeout(() => {
      return newHouses.length < 1 ? setHouses([]) : setHouses(newHouses),
        setLoading(false);
    }, 1000);

    return newHouses;
  }


  return (
    <HouseContext.Provider value={{
      country,
      setCountry,
      countries,
      property,
      setProperty,
      properties,
      price,
      setPrice,
      houses,
      loading,
      handleClick
    }}>
      {children}
    </HouseContext.Provider >
  );
}
