import '../index.css';

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'


export function Calendario() {
    return (

        <>
            <div className="col-start-1 col-end-4 bg-textWhite m-auto w-full h-full mt-0 rounded-3xl row-[1/4]">

                <FullCalendar
                    plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                    initialView='dayGridMonth'
                    headerToolbar={{
                        start: 'timeGridDay,timeGridWeek,dayGridMonth',
                        center: 'title',
                        end: 'today,prev,next'
                    }}
                    height='100%'
                    selecteable={true}
                />
            </div>
        </>
    )
}