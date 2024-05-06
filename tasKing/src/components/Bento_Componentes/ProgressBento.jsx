import '../../index.css';
export function ProgressBento({ progreso }) {
    if (progreso == '00') {
        progreso = 0;
    }
    const barWidth = progreso + '%';
    return (
        <div className="w-full h-full bg-textWhite rounded-3xl flex flex-col justify-center items-center">
            <div className='h-[90%] w-[]'> 
                <h2 className='text-primary text-[clamp(1rem,_2vw,_3rem)] font-bold text-center'>Progreso semanal</h2>
                <div className="flex items-center mt-[5%] gap-[6%] ">
                    <h1 className="text-[clamp(1rem,_2vw,_2.25rem)]">{progreso + '%'}</h1>
                    <h2 className="text-[clamp(.9rem,_1vw,_1.6rem)]">De la semana <br />completado</h2>
                </div>
                <div className={`w-full h-[18%] bg-gray-200 rounded-full dark:bg-grayElements mt-2`}>
                    <div className={`h-[100%] bg-primary rounded-full dark:bg-primary`} style={{ width: BarProp }}></div>
                </div>
            </div>
        </div>
    )
}