export function SpecificTask({name, day, time}) {
    return (
        <div className='bg-primary text-textWhite px-8 py-2 rounded-2xl'>
            <h3 className='text-[clamp(.9rem,_.9vw,_1.125rem)] font-semibold truncate'>{name}</h3>
            <p className='font-bree text-[clamp(.8rem,_.8vw,_0.875rem)]'>{day} {time}</p>
        </div>
    )
}