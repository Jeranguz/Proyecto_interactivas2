import { Calendario } from "./Calendario";
import { SideBar } from "./SideBar";
import Profile from '../assets/imgs/profile.png';
import { Progress } from "./calendary_components/Progress";
import { WorkLoad } from "./calendary_components/WorkLoad";
import { DayTasks } from "./calendary_components/DayTasks";
import { useState } from 'react';
import { useDateClickHandler } from './hooks/useDateClickHandler';
import { Modal } from "./calendary_components/Modal";


export function PaginaCalendario({ eventList, setEventList }) {
    const [showModal, setShowModal] = useState(false);
    const handleDateClickAndSelect = useDateClickHandler(eventList, setEventList, setShowModal);
    const closeModal = () => {
        setShowModal(false);
    };


    return (
        <>
            {/* <div className='w-[90%] laptop:w-[77%]  m-auto mt-2 '> */}
            <div className=' m-auto laptop:my-0 laptop:w-[75vw] w-[90vw] md:mb-[17rem] mb-[37rem]'>


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
                {/* grid-rows-[13rem,13rem,20rem] */}
                <div className="grid laptop:grid-cols-[repeat(4_,1fr)] md:grid-cols-3 grid-cols-1 gap-[1.5rem] mt-8 h-[80vh] mb-12">
                    <Calendario eventList={eventList} dateManager={handleDateClickAndSelect} />
                    <Progress eventList={eventList} />
                    <WorkLoad tasks={eventList} />
                    <DayTasks tasks={eventList} eventList={eventList} />
                </div>
                {showModal && (
                    <Modal closeModal={closeModal} setEventList={setEventList} eventList={eventList} />
                )}
            </div>
        </>
    )
}