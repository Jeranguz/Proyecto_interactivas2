import { SideBar } from "./SideBar";
import Profile from '../assets/imgs/profile.png';
import { Task } from "./Task_components/Task";



export function PaginaTareas({ eventList, setEventList, title }) {
    return (
        // <div className='w-[90%] laptop:w-[77%]  m-auto mt-2 '>
        <div className=' m-auto laptop:my-0 laptop:w-[75vw] w-[90vw] md:mb-0 mb-[50rem]'>

            <div className=' flex justify-between  m-auto mt-6' >
                <h1 className='text-[clamp(1rem,_2.9vw,_3.75rem)] font-bold'>{title}</h1>
                <div className='flex items-center gap-4'>
                    <div className='text-end'>
                        <h2 className="font-bold">Jason</h2>
                        <p>Jason_morales@gmail.com</p>
                    </div>
                    <a href='./AppProfile'>
                        <img className='w-[2.688rem] h-[2.688rem]' src={Profile} alt="" />
                    </a>
                </div>

            </div>
            {/* grid-rows-[13rem,13rem,20rem] */}
            <div className="grid laptop:grid-cols-[repeat(4_,1fr)] md:grid-cols-3 grid-cols-1 gap-4 mt-8 h-[80vh] ">
                <div className="col-[1/5] bg-textWhite m-auto w-full h-full mt-0 rounded-3xl md:p-8 laptop:overflow-auto pt-4 ">
                    <div className="grid grid-cols-[repeat(auto-fit,minmax(316px,1fr))] place-items-center gap-y-8">
                        {eventList.sort((a, b) => {
                            // Convertir las fechas de inicio a objetos Date para poder compararlas
                            const dateA = new Date(a.start);
                            const dateB = new Date(b.start);
                            // Comparar las fechas y retornar el resultado de la comparación
                            return dateA - dateB;
                        })
                            .filter(evento => evento.status)
                            .map(evento => (
                                <Task key={evento.id} id={evento.id} title={evento.title} start={evento.start} img={evento.image} />
                            ))}

                    </div>
                </div>
            </div>
        </div>

    )
}