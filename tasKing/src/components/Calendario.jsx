import '../index.css';

import { useState, useEffect, useRef } from 'react';

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'


export function Calendario() {

    const [eventList, setEventList] = useState([]); // Agrega el estado para el nombre del evento

    const handleDateClickAndSelect = (arg) => {
        const title = window.prompt("Por favor, ingresa el nombre del evento:");
        const calendarApi = arg.view.calendar;

        if (title) {
            if (arg.start != arg.end) { // Manejar selección de rango
                const newEvent = {
                    id: eventList.length + 1,
                    title,
                    start: arg.startStr,
                    end: arg.endStr,
                }
                setEventList([...eventList, newEvent]);
                console.log("Hola mundo")
                
            } else { // Manejar clic en una fecha individual
                const newEvent = {id: eventList.length + 1, title, start: arg.dateStr };
                setEventList([...eventList, newEvent]);
            }
        }
        calendarApi.unselect(); // Limpiar la selección
    }
    console.log(eventList);
    //Para una sola fecha
    // const handleDateClick = (arg) => {
    //     const eventName = window.prompt("Por favor, ingresa el nombre del evento:");
    //     if (eventName) {
    //         const newEvent = { title: eventName, start: arg.dateStr };
    //         setEventList([...eventList, newEvent]);
    //     }
    // }

    // //Para varias fechas
    // const handleSelect = (selectInfo) => {
    //     const title = prompt('Please enter a new title for your event');
    //     const calendarApi = selectInfo.view.calendar;

    //     calendarApi.unselect(); // Limpiar la selección

    //     if (title) {
    //         calendarApi.addEvent({
    //             title,
    //             start: selectInfo.startStr,
    //             end: selectInfo.endStr,
    //             allDay: true
    //         });
    //     }
    // }

    //Para eliminar
    const handleEventClick = (clickInfo) => {
        if (window.confirm("¿Estás seguro de que quieres eliminar este evento?")) {
            const updatedEvents = eventList.filter(event => event.id != clickInfo.event.id);
            setEventList(updatedEvents); // Actualizar la lista de eventos eliminando el evento clickeado
        }
    }
    

    // const handleDateClick = (arg) => {
    //     const eventName = window.prompt("Por favor, ingresa el nombre del evento:");
    //     if (eventName) {
    //         alert(`Evento "${eventName}" creado en ${arg.dateStr}`);
    //         // Aquí puedes realizar cualquier acción adicional, como agregar el evento a tu lista de eventos
    //     }
    // }
    
    return (

        <>
            <div className=" bg-textWhite m-auto w-full h-[70vh] mt-0 rounded-3xl laptop:row-[1/4] laptop:col-start-1 laptop:col-end-4 md:col-[1/4] laptop:h-full">

                <FullCalendar
                    plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                    initialView='dayGridMonth'
                    // slotDuration='00:15:00'
                    headerToolbar={{
                        start: window.innerWidth <= 640 ? 'title' : 'timeGridDay,timeGridWeek,dayGridMonth',
                        center: window.innerWidth <= 640 ? '' : 'title',
                        end: 'today prev,next'
                    }}
                    height='100%'
                    selectable={true}
                    events={eventList}
                    eventContent={renderEventContent}
                    // dateClick={handleDateClickAndSelect}
                    select={handleDateClickAndSelect}
                    editable={true}
                    eventClick={handleEventClick}
                    nowIndicator={true}
                    dayMaxEvents={3}
                    fixedWeekCount={false}
                    
                />
            </div>
        </>
    )
}

function renderEventContent(eventInfo) {
    return (
      <>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </>
    )
  }