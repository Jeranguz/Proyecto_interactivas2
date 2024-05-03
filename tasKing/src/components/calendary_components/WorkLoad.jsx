import '../../index.css';
export function WorkLoad() {
    return (
        <div className=' bg-textWhite col-start-4 col-end-5 px-8 py-5 rounded-3xl w-full row-span-1'>
            <h2 className='text-primary text-[clamp(1rem,_1.5vw,_1.875rem)] font-bold text-center'>Carga semanal</h2>
            <div className="relative flex aspect-[2] w-[70%] m-auto items-center justify-center overflow-hidden rounded-t-full bg-green-500">
                <div className="absolute top-0 aspect-square w-full rotate-[calc(72deg-45deg)] bg-gradient-to-tr from-transparent from-50% to-grayElements to-50% transition-transform duration-500"></div>
                <div className="absolute top-1/4 flex aspect-square w-3/4 justify-center rounded-full bg-white"></div>
                <div className="absolute bottom-0 w-full truncate text-center text-[20vmax] leading-none">
                    <h1 className="text-[clamp(.5rem,_1.7vw,_2rem)] font-medium">Bajo 😂</h1>
                </div>
            </div>
        </div>
    )
}