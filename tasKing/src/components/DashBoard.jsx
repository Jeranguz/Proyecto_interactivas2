import { Calendario } from './Calendario';
import { SideBar } from './SideBar';
import Profile from '../assets/imgs/profile.png';
import { DayTasksBento } from './Bento_Componentes/DayTasksBento';
import { ProgressBento } from './Bento_Componentes/ProgressBento';
import { WorkLoadBento } from './Bento_Componentes/WorkLoadBento';

export function DashBoard() {
    return (
        <>
            <div className='flex h-full'>
                <SideBar />
                <div className='w-[70%] sm:w-[75%]  m-auto mt-2'>
                    <div className=' flex justify-between  m-auto mt-8' >
                        <h1 className='text-6xl font-bold'>Bienvenido, Jason!</h1>

                        <div className='flex items-center gap-4'>

                            <div className='text-end'>
                                <h2>Jason</h2>
                                <p>Jason_morales@gmail.com</p>
                            </div>
                            <img className='w-[2.688rem] h-[2.688rem]' src={Profile} alt="" />
                        </div>

                    </div>
                    <div className="grid grid-cols-[repeat(1_,1fr)] grid-rows-[repeat(5_,1fr)] sm:h-[80vh] gap-4 mt-8 h-screen sm:grid-cols-[repeat(16_,1fr)] sm:gap-8">


                        <div className=" space-x-1 w-full h-full sm:bg-gray-100 rounded-3xl sm:h-full col-span-1 sm:col-span-7 sm:row-span-3">
                            <div className='h-[]'>
                                
                            </div>

                        </div>

                        <div className="w-full h-full sm:bg-gray-100 rounded-3xl sm:h-full sm:col-span-5 sm:row-span-3">
                        </div>

                        <div className="w-full h-full sm:bg-gray-100 rounded-3xl sm:h-full sm:col-start-13 sm:col-span-4 sm:row-span-full">
                            <DayTasksBento />
                        </div>
                        <div className="w-full h-full sm:bg-gray-100 rounded-3xl sm:h-full sm:row-start-4 sm:col-span-6 sm:row-span-full">
                            <ProgressBento />
                        </div>
                        <div className="w-full h-full sm:bg-gray-100 rounded-3xl sm:h-full sm:row-start-4 sm:col-span-6 sm:row-span-full">
                            <WorkLoadBento />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}