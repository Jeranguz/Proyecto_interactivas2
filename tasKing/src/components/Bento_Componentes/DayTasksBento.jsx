export function DayTasksBento() {
    const tasks = [
        { title: 'Tareas Lectura Seminario', deadline: 'Viernes 12pm' },
        { title: 'Tareas Lectura Seminario', deadline: 'Viernes 12pm' },
        { title: 'Tareas Lectura Seminario', deadline: 'Viernes 12pm' },
        // ... add more tasks as needed
    ];

    return (
        <div className="bg-textWhite col-start-4 col-end-5 px-8 py-6 rounded-3xl  row-span-1 h-30 ">
            <h2 className='text-primary text-[clamp(1rem,_1.5vw,_1.7rem)] font-bold text-center'>Pendientes de hoy</h2>
            <div>
                <div>
                    <img src="" alt="" />
                </div>
                <div className='grid gap-[6%] mt-2 w-full m-auto'>
                    {tasks.map((task, index) => (
                        <div key={index} className='bg-primary text-textWhite px-[10%] py-[8%] rounded-2xl w-full'>
                            <h3 className='text-[clamp(.3rem,_.6vw,_1rem)] font-semibold truncate'>{task.title}</h3>
                            <p className='font-bree text-[clamp(.1rem,_.5vw,_0.75rem)]'>{task.deadline}</p>
                        </div>
                    ))}

                    <p className='text-center'>3 mas</p>
                </div>
            </div>
        </div>
    );
}