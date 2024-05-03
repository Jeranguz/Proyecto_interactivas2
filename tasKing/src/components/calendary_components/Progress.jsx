import '../../index.css';
export function Progress({ progreso }) {
    if (progreso == '00') {
        progreso = 0;
    }
    const barWidth = progreso + '%';
    return (
        <div className="bg-textWhite col-start-4 col-end-5 px-8 py-5 rounded-3xl row-span-1 grid justify-center items-center">
            <h2 className='text-primary text-[clamp(1rem,_1.5vw,_1.875rem)] font-bold text-center'>Progreso semanal</h2>
            <div className="flex items-center mt-2 gap-4 px-4">
                <h1 className="text-[clamp(1rem,_2vw,_2.25rem)]">{progreso + '%'}</h1>
                <h2 className="text-[clamp(.7rem,_1vw,_1.5rem)]">De la semana completado</h2>
            </div>
            <div className={`w-full h-6 bg-gray-200 rounded-full dark:bg-grayElements mt-2`}>
                <div className={`h-6 bg-primary rounded-full dark:bg-primary`} style={{ width: barWidth }}></div>
            </div>
        </div>
    )
}