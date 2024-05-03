import '../../index.css';

export function DayTasks() {
    return (
        <div className="bg-textWhite col-start-4 col-end-5 px-8 py-6 rounded-3xl w-full h-full row-span-1 h-30">
            <h2 className='text-primary text-[clamp(1rem,_1.5vw,_1.875rem)] font-bold text-center'>Pendientes de hoy</h2>
            <div>
                <div>
                    <img src="" alt="" />
                </div>
                <div className='grid gap-2 mt-2'>
                    <div className='bg-primary text-textWhite px-8 py-4 rounded-2xl'>
                        <h3 className='text-[clamp(.5rem,_.9vw,_1.125rem)] font-semibold truncate'>Tareas Lectura Seminario</h3>
                        <p className='font-bree text-[clamp(.2rem,_.8vw,_0.875rem)]'>Viernes 12pm</p>
                    </div>
                    <div className='bg-primary text-textWhite px-8 py-4 rounded-2xl'>
                        <h3 className='text-[clamp(.5rem,_.9vw,_1.125rem)] font-semibold truncate'>Tareas Lectura Seminario</h3>
                        <p className='font-bree text-[clamp(.2rem,_.8vw,_0.875rem)]'>Viernes 12pm</p>
                    </div>
                    <p className='text-center'>3 mas</p>
                </div>
            </div>
        </div>
    )
}