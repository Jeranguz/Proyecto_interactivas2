import { SideBar } from "./SideBar";
import Profile from '../assets/imgs/profile.png';
import { Task } from "./Task_components/Task";
import { Info } from "./info";
import { Navbar } from "./Navbar";



export function PaginaTareas({ eventList, setEventList, title }) {
    return (
        // <div className='w-[90%] laptop:w-[77%]  m-auto mt-2 '>
        <div className='flex '>
                <SideBar />
                <Navbar />
                <div className=' mx-[5vw] laptop:mx-[2.5vw]  mt-[7vh] laptop:my-0 laptop:w-[74vw] w-[90vw] laptop:mb-0 mb-[25vh] '>
                    <Info Name={title} />
        <div className=' m-auto laptop:my-0 laptop:w-[75vw] w-[90vw] md:mb-0 mb-[50rem]'>
            {/* grid-rows-[13rem,13rem,20rem] */}
            <div className="grid laptop:grid-cols-[repeat(4_,1fr)] md:grid-cols-3 grid-cols-1 gap-[2vw] mt-8 h-[80vh] ">
                <div className="col-[1/5] bg-textWhite m-auto w-full h-full mt-0 rounded-3xl md:p-8 laptop:overflow-auto pt-4 ">
                    <div className="grid gap-x-[2vw] grid-cols-[repeat(auto-fit,minmax(300px,1fr))] place-items-center gap-y-[2vw]">
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
    </div>
    </div>

    )
}