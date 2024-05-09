import { Calendario } from './Calendario';
import { Perfil } from './Perfil';
import { SideBar } from './SideBar';
import Profile from '../assets/imgs/profile.png';

export function AppProfile() {
  return (
    <>
        <div className='w-[75%]  m-auto mt-2'>
          <div className=' flex justify-between  m-auto mt-8' >
            <h1 className='text-6xl font-bold'>Perfil Usuario</h1>
            <div className='flex items-center gap-4'>
              <div className='text-end'>
                <h2>Jason</h2>
                <p>Jason_morales@gmail.com</p>
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