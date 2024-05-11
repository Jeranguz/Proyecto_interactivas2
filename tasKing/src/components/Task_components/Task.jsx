import Photo from '../../assets/imgs/seminary.jpg'
import '../../index.css'

export function Task() {
    return (
        <div className="border-[0.5px] border-[border] w-80 rounded-3xl overflow-hidden">
            <div className='relative'>
                <img className='object-cover h-28 w-full' src={Photo} alt="" />
                <span className='absolute top-[5rem] left-4 bg-secondary px-4 grid items-center rounded-xl'>
                    <h3 className='text-textWhite text-center text-xl'>12</h3>
                    <p className='text-textWhite'>Apr</p>
                </span>
            </div>
            <div className='pt-8 ml-4'>
                <h2 className='font-bold text-lg mb-2'>Seminario de realidad nacional</h2>
                <p className='font-bold text-sm text-hourText'>Hora: 2:00pm</p>
            </div>
            <div className='px-6 mt-4 mb-8 flex justify-between'>
            <a className='py-3 px-6 text-sm bg-textWhite border-[3px] border-secondary rounded-xl transform transition hover:bg-primary hover:text-textWhite' href="">Completada</a>

            <a className='py-3 px-9 text-sm bg-textWhite border-[3px] border-secondary rounded-xl transform transition hover:bg-primary hover:text-textWhite' href="">Ver mas</a>
            </div>
            
        </div>
    )
}