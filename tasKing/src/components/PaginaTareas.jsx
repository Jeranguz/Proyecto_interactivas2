import { SideBar } from "./SideBar";
import Profile from '../assets/imgs/profile.png';
import { Task } from "./Task_components/Task";
import { Info } from "./info";
import { Navbar } from "./Navbar";



export function PaginaTareas({ eventList, setEventList, title, user }) {
    return (
        // <div className='w-[90%] laptop:w-[77%]  m-auto mt-2 '>
        <div className='flex '>
            <SideBar />
            <Navbar  user={user}/>
            <div className=' mx-[5vw] laptop:mx-[2.5vw]  mt-[7vh] laptop:my-0 laptop:w-[74vw] md:w-[88vw] w-[84vw] laptop:mb-0 sm:mb-[25vh]'>
                <Info Name={title} user={user}/>
                <div className=' m-auto laptop:my-0 laptop:w-[75vw] w-[90vw] md:mb-0 mb-[50rem]'>
                    {/* grid-rows-[13rem,13rem,20rem] */}
                    <div className="md:h-[80vh] bg-textWhite rounded-3xl pb-8 h-full">
                    <div className="flex flex-wrap gap-[2vw] mt-8 h-full m-auto sm:p-8 md:overflow-auto py-8 pb-8">
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

    )
}