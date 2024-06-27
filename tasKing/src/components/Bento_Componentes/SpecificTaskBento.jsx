export function SpecificTaskBento({ name, day, time }) {
    return (
        <div className='bg-primary text-textWhite py-[1vh] max-w-[85%] px-[1vw] rounded-2xl'>
            {/* Ajusta el ancho máximo del contenedor para permitir el truncamiento */}
            <div className="mx-[3vw] laptop:mx-0 w-[90%] max-w-[200px] laptop:max-w-[250px]"> 
                <h3 className='text-[1.8vh] laptop:text-[1vw] font-semibold truncate'>{name}</h3>
                <p className='font-bree text-[1vh] laptop:text-[.8vw]'>{day} {time}</p>
            </div>
        </div>
    )
}