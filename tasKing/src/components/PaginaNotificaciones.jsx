import { Notification } from "./Notification";
import { SideBar } from "./SideBar";
import Profile from '../assets/imgs/profile.png';
import { Progress } from "./calendary_components/Progress";
import { WorkLoad } from "./calendary_components/WorkLoad";
import { DayTasks } from "./calendary_components/DayTasks";
export function PaginaNotificaciones() {
    return (
        <>
            <div className='flex h-full'>
                <SideBar />
                <div className='w-[77%]  m-auto mt-2 '>
                    <div className=' flex justify-between  m-auto mt-8' >
                        <h1 className='text-6xl font-bold'>Notificaciones</h1>
                        <div className='flex items-center gap-4'>
                            <div className='text-end'>
                                <h2 className="font-bold">Jason</h2>
                                <p>Jason_morales@gmail.com</p>
                            </div>
                            <img className='w-[2.688rem] h-[2.688rem]' src={Profile} alt="" />
                        </div>

                    </div>
                    {/* grid-rows-[13rem,13rem,20rem] */}
                    <div className="grid grid-cols-[repeat(4_,1fr)] gap-4 mt-8 h-[80vh] ">
                        <Notification />
                        <Progress progreso={25} />
                        <WorkLoad />
                        <DayTasks/>
                    </div>
                </div>
            </div>
        </>
    )
}