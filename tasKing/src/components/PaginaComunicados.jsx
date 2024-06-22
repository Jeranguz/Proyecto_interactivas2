import { SideBar } from './SideBar';
import Profile from '../assets/imgs/profile.png';
import { Entrada } from './comunicate_components/Entrada';
import { Enviados } from './comunicate_components/Enviados';
import { Redactar } from './comunicate_components/Redactar';
import { Perfil } from './Perfil';
import { Info } from './info';
import { Navbar } from './Navbar';

import { useState, useEffect, useRef } from 'react';

export function Comunicados({user}) {

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
      <div className='flex '>
        <SideBar />
        <Navbar />

        <div className='mt-[8vh] laptop:mt-0 w-[90%]  laptop:w-[75%]  m-auto '>
          <Info Name="Comunicados" user={user}/>
          <div className='grid w-full laptop:mb-0 laptop:flex  mt-4 mb-[15vh] laptop:grid-cols-1'>
            <div className='w-1/4 max-sm:w-full max-sm:rounded-3xl max-sm:mb-4  max-md:rounded-3xl max-md:mb-4 max-laptop:w-[100%] max-laptop:rounded-3xl max-laptop:mb-4 bg-white p-5 rounded-l-3xl'>
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
      </div>
    </>
  );
}