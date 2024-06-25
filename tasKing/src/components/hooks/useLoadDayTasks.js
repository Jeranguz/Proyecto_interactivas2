import { SpecificTask } from "../calendary_components/SpecificTask";

export const useLoadDayTasks = (eventList, isDashboard) => {
    console.log(isDashboard);
    if (isDashboard) {
        let extra = eventList.length - 8;
        console.log("8");
        return { tasks: eventList.slice(0, 8), extra };
    } else if (window.innerHeight < 800 || window.innerWidth < 1300) {
        let extra = eventList.length == 0 ? 0 : eventList.length - 2;
        return { tasks: eventList.slice(0, 2), extra };
    } else if (window.innerHeight > 800) {
        let extra = eventList.length == 0 ? 0 : eventList.length - 3;
        console.log(extra);
        return { tasks: eventList.slice(0, 3), extra };
    }
    return null;
};