import '../../index.css';
export function WorkLoad({ tasks }) {

    let finalPercentaje = 0;
    if (tasks.length >= 8) {
        finalPercentaje = 135;
    } else {
        let percentaje = (tasks.length / 8);
        let diference = 135 - (-45);
        let difPercetaje = diference * percentaje
        finalPercentaje = -45 + difPercetaje;
    }
    let barWidth = finalPercentaje+"deg";
    let loadText = "";
    let loadColor = "";

    if (finalPercentaje <= 15) {
        loadText = "Bajo 😂";
        loadColor = "bg-green-500";
    } else if (finalPercentaje >= 15 && finalPercentaje <= 75) {
        loadText = "Medio 😐";
        loadColor = "bg-yellow-500";
    } else if (finalPercentaje >= 75) {
        loadText = "Alto 💀";
        loadColor = "bg-red-500";
    }
    console.log(tasks.length, finalPercentaje, barWidth)

    return (
        <div className=' bg-textWhite  px-8 py-5 rounded-3xl w-full grid items-center'>
            <h2 className='text-primary text-[clamp(1.3rem,_1.3vw,_1.875rem)] font-bold text-center'>Carga semanal</h2>
            <div className={`relative flex aspect-[2] w-[70%] m-auto items-center justify-center overflow-hidden rounded-t-full ${loadColor} mt-2`}>
                <div className={`absolute top-0 aspect-square w-full bg-gradient-to-tr from-transparent from-50% to-grayElements to-50% rotate-[${barWidth}] transition-transform duration-500`} style={{ rotate: barWidth }}></div>
                <div className="absolute top-1/4 flex aspect-square w-3/4 justify-center rounded-full bg-white"></div>
                <div className="absolute bottom-0 w-full truncate text-center text-[20vmax] leading-none">
                    <h1 className="text-[clamp(1.2rem,_1.7vw,_2rem)] font-medium">{loadText}</h1>
                </div>
            </div>
        </div>
    )
}