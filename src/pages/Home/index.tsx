import { Banner } from '../../components/Banner';
import { HouseList } from '../../components/HouseList';


export function Home() {
  return (
    <section>
      <div className='min-h-[1800px]'>
        <Banner />
        <HouseList />
      </div>
    </section>
  );
}
