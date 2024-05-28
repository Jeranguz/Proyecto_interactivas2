import '../../index.css';
import { useDateWeekRange } from '../hooks/useGetWeekRange';
import { useGetEventsPercetaje } from '../hooks/useGetEventsPercetaje';
export function Progress({ eventList }) {
    const { firstDay, lastDay } = useDateWeekRange();
    const porcentajeCompletados = useGetEventsPercetaje(eventList, firstDay, lastDay);
    console.log(porcentajeCompletados);
    const barWidth = porcentajeCompletados + '%';
    return (
        <div className="bg-textWhite px-8 py-5 rounded-3xl grid items-center">
            <h2 className='text-primary text-[clamp(1.3rem,_1.3vw,_1.875rem)] font-bold text-center'>Progreso semanal</h2>
            <div className="flex items-center justify-center m-auto mt-2 laptop:gap-4 laptop:px-4">
                <h1 className="text-[clamp(1.7rem,_2vw,_2.25rem)]">{porcentajeCompletados + '%'}</h1>
                <h2 className="text-[clamp(1.1rem,_1vw,_1.5rem)] text-center">De la semana <br/>completado</h2>
            </div>
            <div className={`w-full h-6 bg-gray-200 rounded-full dark:bg-grayElements mt-2`}>
                <div className={`h-6 bg-primary rounded-full dark:bg-primary`} style={{ width: barWidth }}></div>
            </div>
        </div>
    )
}