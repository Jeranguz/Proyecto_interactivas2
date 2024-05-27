import { SideBar } from './SideBar';
import Profile from '../assets/imgs/profile.png';
import { Entrada } from './comunicate_components/Entrada';
import { Enviados } from './comunicate_components/Enviados';
import { Redactar } from './comunicate_components/Redactar';
import { Perfil } from './Perfil';

import { useState, useEffect, useRef } from 'react';

export function Comunicados() {

  const [currentSection, setCurrentSection] = useState('entrada'); // Estado para manejar la sección visible

  const renderSection = () => {
    switch (currentSection) {
      case 'entrada':
        return <Entrada />;
      case 'redactar':
        return <Redactar />;
      case 'enviados':
        return <Enviados />;
      default:
        return <Entrada />;
    }
  };

  return (
    <>
      <div className='w-[90%] laptop:w-[77%]  m-auto mt-2 '>
        <div className='flex justify-between m-auto mt-6'>
          <h1 className='text-[clamp(1rem,_2.9vw,_3.75rem)] font-bold'>Comunicados</h1>
          <div className='flex items-center gap-4'>
            <div className='text-end'>
              <h2 className='font-bold'>Jason</h2>
              <p className='text-[clamp(0.5rem,_0.8rem,_1.1rem)]'>Jason_morales@gmail.com</p>
            </div>
            <a href='./AppProfile'>
              <img className='w-[2.688rem] h-[2.688rem]' src={Profile} alt="" />
            </a>
          </div>
        </div>
        <div className='flex w-[100%] mt-4 mb-4 max-sm:grid max-[768px]:grid max-lg:grid laptop:grid-cols-[repeat(2_,1fr)] grid-cols-1 max-[600px]:grid-cols-[repeat(1_,1fr)]'>
          <div className='w-1/4 max-sm:w-[100%] max-sm:rounded-3xl max-sm:mb-4 max-[768px]:w-[100%] max-md:rounded-3xl max-md:mb-4 max-lg:w-[100%] max-lg:rounded-3xl max-lg:mb-4 bg-white dark:bg-zinc-900 p-5 rounded-l-3xl'>
            <div className='flex items-center space-x-2 border-b pb-5 mb-5 '>
              <span className='font-medium text-zinc-700 text-[clamp(0.8rem,_1rem,_1.3rem)]'>Jason_morales@gmail.com</span>
            </div>
            <div className='space-y-2'>
              <div>
                <button className='w-full text-left p-2 hover:text-blue-500 rounded hover:bg-primary' onClick={() => setCurrentSection('entrada')}>Entrada</button>
              </div>
              <div>
                <button className='w-full text-left p-2 hover:text-blue-500 rounded hover:bg-primary' onClick={() => setCurrentSection('redactar')}>Redactar</button>
              </div>
              <div>
                <button className='w-full text-left p-2 hover:text-blue-500 rounded hover:bg-primary' onClick={() => setCurrentSection('enviados')}>Enviados</button>
              </div>
            </div>
          </div>
          {renderSection()}
        </div>
      </div>
    </>
  );
}