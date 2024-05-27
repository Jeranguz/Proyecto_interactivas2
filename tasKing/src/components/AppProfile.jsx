import { Calendario } from './Calendario';
import { Perfil } from './Perfil';
import { SideBar } from './SideBar';
import Profile from '../assets/imgs/profile.png';

export function AppProfile() {
  return (
    <>
      <div className=' m-auto laptop:my-0 laptop:w-[75vw] w-[90vw] md:mb-[17rem] mb-[37rem] '>
        <div className=' flex justify-between  m-auto mt-6' >
          <h1 className='text-[clamp(1rem,_2.9vw,_3.75rem)] font-bold'>Perfil</h1>
          <div className='flex items-center gap-4'>
            <div className='text-end'>
              <h2 className="font-bold">Jason</h2>
              <p>Jason_morales@gmail.com</p>
            </div>
            <a href='./AppProfile'>
              <img className='w-[2.688rem] h-[2.688rem]' src={Profile} alt="" />
            </a>
          </div>
        </div>
        <div>
          <Perfil/>
        </div>
      </div>
    </>
  );
}