import { useCallback } from 'react';


export const useDateClickHandler = (eventList, setEventList, setShowModal) => {
    const handleDateClickAndSelect = useCallback((arg) => {
        setShowModal(true);
        // const title = window.prompt("Por favor, ingresa el nombre del evento:");
        // const calendarApi = arg.view.calendar;

        // if (title) {
        //     if (arg.start != arg.end) { // Manejar selección de rango
        //         const newEvent = {
        //             id: eventList.length + 1,
        //             title,
        //             start: arg.startStr,
        //             end: arg.endStr,
        //         };
        //         setEventList([...eventList, newEvent]);
        //     } else { // Manejar clic en una fecha individual
        //         const newEvent = { id: eventList.length + 1, title, start: arg.dateStr };
        //         setEventList([...eventList, newEvent]);
        //     }
        // }
        // calendarApi.unselect(); // Limpiar la selección
    }, [eventList, setEventList]);

    return handleDateClickAndSelect;
}