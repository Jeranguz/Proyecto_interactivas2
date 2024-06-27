import { Calendario } from './Calendario';
import { Notification, Noti } from "./Notification";
import Profile from '../assets/imgs/profile.png';
import { DayTasks } from './calendary_components/DayTasks';
import { Progress } from './calendary_components/Progress';
import { WorkLoad } from './calendary_components/WorkLoad';
import { DayTasksBento } from './Bento_Componentes/DayTasksBento';
import { Link } from 'react-router-dom';
import { Info } from './info';
import { useState } from 'react';
import { SideBar } from './SideBar';

import { Navbar } from './Navbar';


export function DashBoard({ eventList, user }) {

    console.log('dashboard usuarios: ', user)
    return (
        <>
            <div className='flex '>
                <SideBar />
                
                <Navbar user={user} />
                <div className=' mx-[5vw] laptop:mx-[2vw]  mt-[7vh] laptop:my-0 laptop:w-[75vw] w-[90vw] laptop:mb-0 mb-[5vh] '>
                    <Info Name="DashBoard" user={user} />

                    <div className=" h-[80vh] w-full grid grid-cols-[repeat(1_,1fr)] grid-rows-[repeat(5_,1fr)]  gap-[2vh] laptop:grid-cols-[repeat(16_,1fr)] laptop:gap-[1.5vw] laptop:mt-[2vw] mt-[1vh] ">
                        <div className=" laptop:h-full col-span-1 laptop:col-span-7 laptop:row-span-3">
                            <Calendario />
                        </div>

                        <div className="laptop:bg-textWhite rounded-3xl laptop:h-full laptop:col-span-5 laptop:row-span-3 ">
                            <div className="bg-white p-[2.5vw] rounded-3xl  ">
                                <h2 className="'text-primary text-[clamp(1rem,_1.5vw,_1.7rem)] font-bold text-center' mb-4">Progreso de cursos</h2>
                                <div className="mb-2">
                                    <p className="text-sm mb-1">Desarrollo de Aplicaciones Interactivas I</p>
                                    <div className="bg-zinc-200 rounded-full h-2.5">
                                        <div className="bg-green-500 h-2.5 rounded-full w-[80%]"></div>
                                    </div>
                                </div>
                                <div className="mb-2">
                                    <p className="text-sm mb-1">Diseño Web</p>
                                    <div className="bg-zinc-200 rounded-full h-2.5">
                                        <div className="bg-yellow-500 h-2.5 rounded-full w-[60%]"></div>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <p className="text-sm mb-1">Ingeniería de Aplicaciones</p>
                                    <div className="bg-zinc-200 rounded-full h-2.5">
                                        <div className="bg-red-500 h-2.5 rounded-full w-[30%]"></div>
                                    </div>
                                </div>
                                <button className="bg-primary text-white py-2 px-4 rounded-laptop w-full hover:bg-purple-700 transition-colors">
                                    <Link to="/DashBoard"></Link>
                                </button>
                            </div>
                        </div>

                        <div className="  laptop:bg-textWhite rounded-3xl laptop:h-full laptop:col-start-13 laptop:col-span-4 laptop:row-span-full">
                            <DayTasksBento eventList={eventList} isDashboard={true} />
                        </div>
                        <div className=" w-full h-full laptop:bg-textWhite rounded-3xl laptop:h-full laptop:row-start-4 laptop:col-span-6 laptop:row-span-full">
                            <Progress eventList={eventList} />
                        </div>
                        <div className=" hidden laptop:flex laptop:bg-textWhite rounded-3xl laptop:h-full laptop:row-start-4 laptop:col-span-6 laptop:row-span-full">
                            <WorkLoad tasks={eventList} />
                        </div>
                        <div className='flex laptop:hidden pb-[15vw]'></div>
                    </div>
                </div>
            </div>
        </>
    );
}