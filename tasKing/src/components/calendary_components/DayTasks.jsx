import '../../index.css';
import { SpecificTask } from './SpecificTask';
import { useLoadDayTasks } from '../hooks/useLoadDayTasks';
import { useSeparateDate } from '../hooks/useSeparateDate';

export function DayTasks({ eventList }) {
    const {tasks, extra} = useLoadDayTasks(eventList);
    
    return (
        <div className="bg-textWhite px-8 py-5 rounded-3xl w-full ">
            <h2 className='text-primary text-[clamp(1.3rem,_1.3vw,_1.875rem)] font-bold text-center'>Pendientes</h2>
            <div>
                <div>
                    <img src="" alt="" />
                </div>
                <div className='grid gap-2 mt-2'>
                    {tasks.map(task => {
                        const date = new Date(task.start);
                        const daysOfWeek = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
                        const dayOfWeek = daysOfWeek[date.getDay()];
                        const {dia, mes, hora } = useSeparateDate(task.start)
                        return (
                            <SpecificTask key={task.id} name={task.title} day={dayOfWeek} time={hora} />
                        )
                    })}
                    <p className='text-center'>{extra} mas</p>
                </div>
            </div>
        </div>
    )
}