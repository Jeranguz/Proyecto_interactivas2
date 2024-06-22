import { Link } from 'react-router-dom'

export function SpecificTask({ id, name, day, time }) {
    return (
        <Link to={'/Detalles'} state={id}>
        <div className='bg-primary text-textWhite laptop:px-8 pl-4 py-4 rounded-2xl'>
            <h3 className='text-[clamp(.9rem,_.9vw,_1.125rem)] laptop:w-auto w-[90%] font-semibold truncate'>{name}</h3>
            <p className='font-bree text-[clamp(.8rem,_.8vw,_0.875rem)]'>{day} {time}</p>
        </div>
        </Link>
    )
}