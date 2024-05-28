import { Calendario } from './Calendario';
import { Perfil } from './Perfil';
import { SideBar } from './SideBar';
import Profile from '../assets/imgs/profile.png';
import { Info } from './info';
import { Navbar } from './Navbar';
import { Link } from 'react-router-dom';

export function AppProfile() {
  return (
    <>
      <div className='flex '>
        <SideBar />
        <Navbar />
        <div className='mx-[5vw] laptop:mx-[2.5vw] m-auto  mt-[7vh] laptop:my-0 laptop:w-[75vw] w-[90vw] laptop:mb-0 mb-[25vh] '>
         
          <div className=' m-auto laptop:my-0 laptop:w-[75vw] w-[90vw] md:mb-[17rem] mb-[37rem] '>
            <Info Name="Perfil" />
              <Perfil />
          </div>
        </div>
      </div>
        </>
        );
}