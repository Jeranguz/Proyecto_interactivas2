import { SpecificTask } from "../calendary_components/SpecificTask";

export const useLoadDayTasks = ( eventList ) => {
    if (window.innerHeight > 800) {
        let extra = eventList.length - 3;
        console.log(extra);
        return {tasks:eventList.slice(0, 3), extra};
    }else if (window.innerHeight < 800) {
        let extra = eventList.length - 2;
        return {tasks:eventList.slice(0, 2), extra};
    }
    return null;
};