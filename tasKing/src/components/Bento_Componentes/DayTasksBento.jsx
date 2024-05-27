import '../../index.css';
import { SpecificTaskBento } from './SpecificTaskBento';
import { useLoadDayTasks } from '../hooks/useLoadDayTasks';
import { useSeparateDate } from '../hooks/useSeparateDate';

export function DayTasksBento({ eventList, isDashboard }) {
    const { tasks, extra } = useLoadDayTasks(eventList, isDashboard);

    return (
        <div className="bg-textWhite px-[2vh] laptop:px-[1vw] py-[1vh] rounded-3xl ">
            <h2 className='text-primary text-[3vh] laptop:text-[2vw] font-bold text-center'>Pendientes</h2>
            <div className='w-full h-full'>
                <div className='grid gap-[1vh]  '>
                    
                        {tasks.map(task => {
                            const date = new Date(task.start);
                            const daysOfWeek = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
                            const dayOfWeek = daysOfWeek[date.getDay()];
                            const { dia, mes, hora } = useSeparateDate(task.start)
                            return (
                                <SpecificTaskBento key={task.id} name={task.title} day={dayOfWeek} time={hora} className='w-full h-auto' />
                            )
                        })}
                    <p className='text-center'>{extra} mas</p>
                </div>
            </div>
        </div>
    )
}