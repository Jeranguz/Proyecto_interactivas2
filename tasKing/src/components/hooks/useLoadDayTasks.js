import { SpecificTask } from "../calendary_components/SpecificTask";

export const useLoadDayTasks = (eventList, isDashboard) => {
    console.log(isDashboard);
    if (isDashboard && eventList.length > 8) {
        let extra = eventList.length - 8;
        console.log("8");
        return { tasks: eventList.slice(0, 8), extra };
    } else if (window.innerHeight < 800 || window.innerWidth < 1300) {
        let extra = eventList.length == 0 ? - 2 : 0;
        return { tasks: eventList.slice(0, 2), extra };
    } else if (window.innerHeight > 800) {
        let extra = eventList.length == 0 ? - 3 : 0;
        console.log(extra);
        return { tasks: eventList.slice(0, 3), extra };
    }
    return null;
};