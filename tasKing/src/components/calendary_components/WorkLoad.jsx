import { useTaskProgress } from '../hooks/useTaskProgress';
import '../../index.css';
export function WorkLoad({ tasks }) {

    const { barWidth, loadText, loadColor } = useTaskProgress(tasks);

    return (
        <div className=' bg-textWhite  px-8 py-5 rounded-3xl w-full grid items-center'>
            <h2 className='text-primary text-[clamp(1.3rem,_1.3vw,_1.875rem)] font-bold text-center'>Carga semanal</h2>
            <div className={`relative flex aspect-[2] laptop:w-[70%] w-[90%] m-auto items-center justify-center overflow-hidden rounded-t-full ${loadColor} mt-2`}>
                <div className={`absolute top-0 aspect-square w-full bg-gradient-to-tr from-transparent from-50% to-grayElements to-50% rotate-[${barWidth}] transition-transform duration-500`} style={{ rotate: barWidth }}></div>
                <div className="absolute top-1/4 flex aspect-square w-3/4 justify-center rounded-full bg-white"></div>
                <div className="absolute bottom-0 w-full truncate text-center text-[20vmax] leading-none">
                    <h1 className="text-[clamp(1.2rem,_1.7vw,_2rem)] font-medium">{loadText}</h1>
                </div>
            </div>
        </div>
    )
}