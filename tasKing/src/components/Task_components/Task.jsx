import { Link } from 'react-router-dom'
import Photo from '../../assets/imgs/seminary.jpg'
import '../../index.css'
import { useSeparateDate } from '../hooks/useSeparateDate'

export function Task({ id, title, start, img }) {
    const eventid = id;
    const { dia, mes, hora } = useSeparateDate(start)
    // console.log(day, month, hour)
    return (
        <div className="border-[0.5px] h-72 w-[80%] laptop:w-[30%] rounded-3xl overflow-hidden m-auto md:m-0">
            <div className='relative'>
                <img className='object-cover h-28 w-full' src={'http://interactivas_backend.test/storage/images/'+img} alt="" />
                <span className='absolute top-[5rem] left-4 bg-secondary px-4 grid items-center rounded-xl'>
                    <h3 className='text-textWhite text-center text-xl'>{dia}</h3>
                    <p className='text-textWhite'>{mes}</p>
                </span>
            </div>
            <div className='pt-8 ml-4 w-[90%]' >
                <h2 className='font-bold text-lg mb-2 truncate'>{title}</h2>
                <p className='font-bold text-sm text-hourText'>Hora: {hora}</p>
            </div>
            <div className='px-6 mt-4 mb-8 flex gap-4 justify-between'>
            <button className='py-3 px-4 text-sm bg-textWhite border-[3px] w-full border-secondary rounded-xl transform transition hover:bg-primary hover:text-textWhite' href=''>Completada</button>

            <Link state={eventid} className='text-center py-3 px-7 text-sm w-full bg-textWhite border-[3px] border-secondary rounded-xl transform transition hover:bg-primary hover:text-textWhite' to="/Detalles">Ver mas</Link>
            </div>
            
        </div>
    )
}