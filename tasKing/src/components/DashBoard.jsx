import { Calendario } from './Calendario';
import { SideBar } from './SideBar';
import { Notification, Noti } from "./Notification";
import Profile from '../assets/imgs/profile.png';
import { DayTasks } from './calendary_components/DayTasks';
import { DayTasksBento } from './Bento_Componentes/DayTasksBento';
import { ProgressBento } from './Bento_Componentes/ProgressBento';
import { WorkLoadBento } from './Bento_Componentes/WorkLoadBento';



export function DashBoard() {
    return (
        <>

            <div className='  m-auto laptop:my-0 laptop:w-[75vw] w-[90vw] h-[90vh] mb-[20rem]'>
                <div className=' flex justify-between  m-auto mt-6' >
                    <h1 className='text-[clamp(1rem,_2.9vw,_3.75rem)] font-bold'>Calendario</h1>
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
                <div className=" w-full grid grid-cols-[repeat(1_,1fr)] grid-rows-[repeat(5_,1fr)]  gap-[1.5vw]  sm:grid-cols-[repeat(16_,1fr)] sm:gap-[1.5vw]">


                    <div className=" space-x-1 w-full h-full sm:bg-textWhite rounded-3xl sm:h-full col-span-1 sm:col-span-7 sm:row-span-3">
                        <div className='h-full'>
                            <Calendario />
                        </div>

                    </div>

                    <div className=" sm:bg-textWhite rounded-3xl sm:h-full sm:col-span-5 sm:row-span-3 ">
                        <div class="bg-white p-4 rounded-3xl  ">
                            <h2 class="'text-primary text-[clamp(1rem,_1.5vw,_1.7rem)] font-bold text-center' mb-4">Progreso de cursos</h2>
                            <div class="mb-2">
                                <p class="text-sm mb-1">Desarrollo de Aplicaciones Interactivas I</p>
                                <div class="bg-zinc-200 rounded-full h-2.5">
                                    <div class="bg-green-500 h-2.5 rounded-full w-[80%]"></div>
                                </div>
                            </div>
                            <div class="mb-2">
                                <p class="text-sm mb-1">Diseño Web</p>
                                <div class="bg-zinc-200 rounded-full h-2.5">
                                    <div class="bg-yellow-500 h-2.5 rounded-full w-[60%]"></div>
                                </div>
                            </div>
                            <div class="mb-4">
                                <p class="text-sm mb-1">Ingeniería de Aplicaciones</p>
                                <div class="bg-zinc-200 rounded-full h-2.5">
                                    <div class="bg-red-500 h-2.5 rounded-full w-[30%]"></div>
                                </div>
                            </div>
                            <button class="bg-primary text-white py-2 px-4 rounded-lg w-full hover:bg-purple-700 transition-colors">Ver más</button>
                        </div>
                    </div>

                    <div className="w-full h-full sm:bg-textWhite rounded-3xl sm:h-full sm:col-start-13 sm:col-span-4 sm:row-span-full">
                        <DayTasks />

                    </div>
                    <div className="w-full h-full sm:bg-textWhite rounded-3xl sm:h-full sm:row-start-4 sm:col-span-6 sm:row-span-full">
                        <ProgressBento progreso={100} />
                    </div>
                    <div className="w-full h-full sm:bg-textWhite rounded-3xl sm:h-full sm:row-start-4 sm:col-span-6 sm:row-span-full">
                        <WorkLoadBento tasks={[1, 2, 3, 4, 5, 6, 7]} />
                    </div>
                </div>
            </div>
        </>
    );
}