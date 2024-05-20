import { Link } from 'react-router-dom'
import Photo from '../../assets/imgs/seminary.jpg'
import '../../index.css'
import { useSeparateDate } from '../hooks/useSeparateDate'

export function Task({ id, title, start, img }) {

    const { dia, mes, hora } = useSeparateDate(start)
    // console.log(day, month, hour)
    return (
        <div className="border-[0.5px] border-[border] w-80 rounded-3xl overflow-hidden">
            <div className='relative'>
                <img className='object-cover h-28 w-full' src={img} alt="" />
                <span className='absolute top-[5rem] left-4 bg-secondary px-4 grid items-center rounded-xl'>
                    <h3 className='text-textWhite text-center text-xl'>{dia}</h3>
                    <p className='text-textWhite'>{mes}</p>
                </span>
            </div>
            <div className='pt-8 ml-4'>
                <h2 className='font-bold text-lg mb-2'>{title}</h2>
                <p className='font-bold text-sm text-hourText'>Hora: {hora}</p>
            </div>
            <div className='px-6 mt-4 mb-8 flex justify-between'>
            <button className='py-3 px-6 text-sm bg-textWhite border-[3px] border-secondary rounded-xl transform transition hover:bg-primary hover:text-textWhite' href=''>Completada</button>

            <Link className='py-3 px-9 text-sm bg-textWhite border-[3px] border-secondary rounded-xl transform transition hover:bg-primary hover:text-textWhite' to="/Detalles">Ver mas</Link>
            </div>
            
        </div>
    )
}