export const useEventClickHandler = (eventList, setEventList) => {
    const handleEventClick = (clickInfo) => {
        if (window.confirm("¿Estás seguro de que quieres eliminar este evento?")) {
            const updatedEvents = eventList.filter(event => event.id != clickInfo.event.id);
            setEventList(updatedEvents);
        }
    };

    return handleEventClick;
};