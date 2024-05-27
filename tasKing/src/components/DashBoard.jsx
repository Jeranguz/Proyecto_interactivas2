import { Calendario } from './Calendario';
import { SideBar } from './SideBar';
import { Notification, Noti } from "./Notification";
import Profile from '../assets/imgs/profile.png';
import { DayTasks } from './calendary_components/DayTasks';
import { Progress } from './calendary_components/Progress';
import { WorkLoad } from './calendary_components/WorkLoad';
import { DayTasksBento } from './Bento_Componentes/DayTasksBento';

import { Navbar } from './Navbar';


export function DashBoard({ eventList, setEventList }) {

    return (
        <>

            <div className=" h-[80vh] w-full grid grid-cols-[repeat(1_,1fr)] grid-rows-[repeat(5_,1fr)]  gap-[1.5vw]  lg:grid-cols-[repeat(16_,1fr)] lg:gap-[1.5vw]">
                <div className=" space-x-1 w-full h-full sm:bg-textWhite rounded-3xl lg:h-full col-span-1 lg:col-span-7 lg:row-span-3">
                    <Calendario />

                </div>

                <div className="laptop:bg-textWhite rounded-3xl laptop:h-full laptop:col-span-5 laptop:row-span-3 ">
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

                <div className="w-full h-full  laptop:bg-textWhite rounded-3xl laptop:h-full laptop:col-start-13 laptop:col-span-4 laptop:row-span-full">
                    <DayTasksBento  eventList={eventList} isDashboard={true} />
                </div>
                <div className="w-full h-full laptop:bg-textWhite rounded-3xl laptop:h-full laptop:row-start-4 laptop:col-span-6 laptop:row-span-full">
                    <Progress eventList={eventList} />
                </div>
                <div className="w-full h-full laptop:bg-textWhite rounded-3xl laptop:h-full laptop:row-start-4 laptop:col-span-6 laptop:row-span-full">
                    <WorkLoad tasks={eventList} />
                </div>
            </div>
        </>
    );
}