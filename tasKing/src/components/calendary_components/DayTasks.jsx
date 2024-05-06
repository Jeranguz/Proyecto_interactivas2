import '../../index.css';

export function DayTasks() {
    return (
        <div className="bg-textWhite px-8 py-5 rounded-3xl w-full">
            <h2 className='text-primary text-[clamp(1.3rem,_1.3vw,_1.875rem)] font-bold text-center'>Pendientes de hoy</h2>
            <div>
                <div>
                    <img src="" alt="" />
                </div>
                <div className='grid gap-2 mt-2'>
                    <div className='bg-primary text-textWhite px-8 py-2 rounded-2xl'>
                        <h3 className='text-[clamp(.9rem,_.9vw,_1.125rem)] font-semibold truncate'>Tareas Lectura Seminario</h3>
                        <p className='font-bree text-[clamp(.8rem,_.8vw,_0.875rem)]'>Viernes 12pm</p>
                    </div>
                    <div className='bg-primary text-textWhite px-8 py-2 rounded-2xl'>
                        <h3 className='text-[clamp(.9rem,_.9vw,_1.125rem)] font-semibold truncate'>Tareas Lectura Seminario</h3>
                        <p className='font-bree text-[clamp(.8rem,_.8vw,_0.875rem)]'>Viernes 12pm</p>
                    </div>
                    <p className='text-center'>3 mas</p>
                </div>
            </div>
        </div>
    )
}