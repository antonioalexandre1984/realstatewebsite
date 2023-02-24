import { ReactNode, useContext } from 'react';

//import context
import { HouseContext } from "../HouseContext";

//import components
import { House, HouseProps } from "../House";

//import link


//import icons
import { ImSpinner2 } from "react-icons/im";
import { Link } from 'react-router-dom';



export function HouseList() {
  const { houses, loading } = useContext(HouseContext);

  // if loading is true, show spinner
  if (loading) {
    return (<ImSpinner2 className='mx-auto animate-spin text-violet-700 text-4xl mt-[200px]' />);
  }

  //if no houses, show message
  if (houses.length < 0) {
    return (<div className='text-center text-3xl text-gray-400 mt-48'>Sorry!Nothing Found.</div>);
  }

  return (
    <section className='mb-20'>
      <div className='container mx-auto'>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-14'>
          {houses.map((house: HouseProps, i) => {
            return (
              <Link to={`/house/${house.id}`} key={i}>
                <House house={house} />
              </Link>
            );
          })
          }
        </div>
      </div>
    </section>
  );
}
