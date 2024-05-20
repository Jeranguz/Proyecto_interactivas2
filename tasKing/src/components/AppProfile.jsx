import { Calendario } from './Calendario';
import { Perfil } from './Perfil';
import { SideBar } from './SideBar';
import Profile from '../assets/imgs/profile.png';

export function AppProfile() {
  return (
    <>
        <div className='w-[90%] laptop:w-[77%]  m-auto mt-2 '>
          <div className=' flex justify-between  m-auto mt-6' >
            <h1 className='text-[clamp(1rem,_2.9vw,_3.75rem)] font-bold'>Perfil Usuario</h1>
            <div className='flex items-center gap-4'>
              <div className='text-end'>
                <h2 className='font-bold'>Jason</h2>
                <p className='text-[clamp(0.5rem,_0.8rem,_1.1rem)]'>Jason_morales@gmail.com</p>
              </div>
              <img className='w-[2.688rem] h-[2.688rem]' src={Profile} alt="" />
            </div>

          </div>
          <div>
            <Perfil/>
          </div>
            
        </div>

    </>
  );
}