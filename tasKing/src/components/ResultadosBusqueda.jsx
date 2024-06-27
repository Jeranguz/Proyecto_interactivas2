import React, { useEffect, useState } from 'react';
import { SideBar } from "./SideBar";
import Profile from '../assets/imgs/profile.png'; // Assuming this is still needed elsewhere
import { Task } from "./Task_components/Task";
import { Info } from "./info";
import { Navbar } from "./Navbar";
import { useLocation } from 'react-router-dom';

export function ResultadosBusqueda({ eventList, setEventList, title, user }) {
    const location = useLocation();
    const searchTerm = location.state?.search;
    return (
        <div className='flex'>
            <SideBar />
            <Navbar user={user}/>
            <div className=' mx-[5vw] laptop:mx-[2.5vw]  mt-[7vh] laptop:my-0 laptop:w-[74vw] md:w-[88vw] w-[84vw] laptop:mb-0 sm:mb-[25vh]'>
                <Info Name={title} user={user} />
                <div className=' m-auto laptop:my-0 laptop:w-[75vw] w-[90vw] md:mb-0 mb-[50rem]'>
                    <div className="md:h-[80vh] bg-textWhite rounded-3xl pb-8 h-full">
                        <div className="flex flex-wrap gap-[2vw] mt-8 h-full m-auto sm:p-8 md:overflow-auto py-8 pb-8">
                            {eventList
                                .filter(evento => evento.title && searchTerm ? evento.title.toLowerCase().includes(searchTerm.toLowerCase()) : false) // Asegura que tanto evento.title como searchTerm estén definidos
                                .sort((a, b) => {
                                    const dateA = new Date(a.start);
                                    const dateB = new Date(b.start);
                                    return dateA - dateB;
                                })
                                .map(evento => (
                                    <Task key={evento.id} id={evento.id} title={evento.title} start={evento.start} img={evento.image} />
                                ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}