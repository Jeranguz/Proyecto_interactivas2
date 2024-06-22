import { Calendario } from "./Calendario";
import { SideBar } from "./SideBar";
import Profile from '../assets/imgs/profile.png';
import { Progress } from "./calendary_components/Progress";
import { WorkLoad } from "./calendary_components/WorkLoad";
import { DayTasks } from "./calendary_components/DayTasks";
import { useState } from 'react';
import { useDateClickHandler } from './hooks/useDateClickHandler';
import { Modal } from "./calendary_components/Modal";
import { Info } from "./info";
import { Navbar } from "./Navbar";



export function PaginaCalendario({ eventList, setEventList, user }) {
    const [showModal, setShowModal] = useState(false);
    const handleDateClickAndSelect = useDateClickHandler(eventList, setEventList, setShowModal);
    const closeModal = () => {
        setShowModal(false);
    };


    return (
        <>
            {/* <div className='w-[90%] laptop:w-[77%]  m-auto mt-2 '> */}

            {/* grid-rows-[13rem,13rem,20rem] */}
            <div className='flex '>
                <SideBar />
                <Navbar />
                <div className=' mx-[5vw] laptop:mx-[2.5vw]  mt-[7vh] laptop:my-0 laptop:w-[74vw] w-[90vw] laptop:mb-0 mb-[25vh] '>
                    <Info Name="Calendario" user={user}/>
                    <div className="grid laptop:grid-cols-[repeat(4_,1fr)] md:grid-cols-3 grid-cols-1 gap-[1.5rem]  h-[80vh] ">
                        <Calendario eventList={eventList} dateManager={handleDateClickAndSelect} />
                        <Progress eventList={eventList} />
                        <WorkLoad tasks={eventList} />
                        <DayTasks tasks={eventList} eventList={eventList} isDashboard={false} />
                    </div>
                </div>
            </div>
            {showModal && (
                <Modal closeModal={closeModal} setEventList={setEventList} eventList={eventList} />
            )}
        </>
    )
}