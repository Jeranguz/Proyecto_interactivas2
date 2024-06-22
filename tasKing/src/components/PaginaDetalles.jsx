// // import React, { useEffect, useState } from "react";
// // import { useParams } from "react-router-dom";
// import Profile from '../assets/imgs/profile.png';
// import Seminary from '../assets/imgs/Southern-Seminary.jpg';
// import { DetailButton } from './details_components/DetailButton';
// import { SideBar } from "./SideBar";
// import { Navbar } from "./Navbar";
// import { Info } from "./info";
// import { useLocation } from "react-router-dom";
// import { useFetchEvent } from './hooks/useFetchEvent';

// export function PaginaDetalles() {
//     const location = useLocation();
//     console.log(location.state);
//     const { info }  = useFetchEvent(location.state)
//     if (!info || info.length === 0) {
//         return <div>Cargando...</div>;
//         }
//     console.log(info[0].title);
//     return (
//         <>
//             <div className='flex '>
//                 <SideBar />
//                 <Navbar />
//                 <div className=' mx-[5vw] laptop:mx-[2.5vw]  mt-[7vh] laptop:my-0 laptop:w-[75vw] w-[90vw] sm:mb-0 mb-[55vh] '>


//                     <div className='sm:mb-0 mb-[10vh] mx-auto laptop:my-0 laptop:w-[75vw] w-[90vw] '>
//                     <Info Name="Detalles" />

//                         {/* grid-rows-[13rem,13rem,20rem] */}
//                         <div className="grid laptop:grid-cols-[repeat(4_,1fr)]  grid-cols-1 gap-4 mt-8 h-[75vh] laptop:h-[80vh] ">
//                             <div className="col-[1/5] bg-textWhite m-auto w-full h-full mt-0 rounded-3xl laptop:p-8 laptop:overflow-auto p-4">
//                                 <div>
//                                     <h1 className='font-medium text-primary text-[clamp(2rem,_2.5vw,_3rem)]'>{info[0].title}</h1>
//                                     <div className=' h-[17rem] md:h-[28rem] mt-8 rounded-t-[3rem] overflow-hidden'>

//                                         <img className='object-cover h-full w-full' src={info[0].image} alt="" />
//                                     </div>
//                                     <h2 className='font-medium text-primary text-[clamp(1.5rem,1.6vw_,_1.875rem)] mt-4'>Informacion</h2>
//                                     <ul className='md:flex gap-8 text-[clamp(.9rem,1.6vw_,_1rem)]'>
//                                         <li>Fecha y: 2 de septiembre del 2024</li>
//                                         <li>Categoria: {info[0].category} </li>
//                                         <li>Etiqueta: {info[0].tag} </li>
//                                         <li>Porcentaje: {info[0].percentage}%</li>
//                                     </ul>
//                                     <h2 className='font-medium text-primary text-[clamp(1.5rem,10vw_,_1.875rem)]  mt-8'>Description</h2>
//                                     <p className='mt-4 text-[clamp(.9rem,2vw_,_1.8rem)]'>{info[0].description}</p>
//                                     <div className='flex flex-col md:flex-row items-center mt-12 m-auto justify-center laptop:gap-8 gap-4 text-textWhite text-[clamp(1.1rem,1.3vw_,_1.5rem)]'>
//                                         <DetailButton text={'Marcar Completado'} />
//                                         <DetailButton text={'Editar'} />
//                                         <DetailButton text={'Eliminar'} />
//                                     </div>
//                                 </div>

//                             </div>


//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }
// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
import Profile from '../assets/imgs/profile.png';
import Seminary from '../assets/imgs/Southern-Seminary.jpg';
import { DetailButton } from './details_components/DetailButton';
import { SideBar } from "./SideBar";
import { Navbar } from "./Navbar";
import { Info } from "./info";
import { useLocation } from "react-router-dom";
import { useFetchEvent } from './hooks/useFetchEvent';
import { Loading } from './Loading';

export function PaginaDetalles({user}) {
    const location = useLocation();
    console.log('estate: ',location.state);
    const { data, isLoading }  = useFetchEvent(location.state)
    

    const showDetails =(event)=>{
        return(
            <div className="grid laptop:grid-cols-[repeat(4_,1fr)]  grid-cols-1 gap-4 mt-8 h-[75vh] laptop:h-[80vh] ">
                            <div className="col-[1/5] bg-textWhite m-auto w-full h-full mt-0 rounded-3xl laptop:p-8 laptop:overflow-auto p-4">
                                <div>
                                    <h1 className='font-medium text-primary text-[clamp(2rem,_2.5vw,_3rem)]'>{event[0].title}</h1>
                                    <div className=' h-[17rem] md:h-[28rem] mt-8 rounded-t-[3rem] overflow-hidden'>

                                        <img className='object-cover h-full w-full' src={event[0].image} alt="" />
                                    </div>
                                    <h2 className='font-medium text-primary text-[clamp(1.5rem,1.6vw_,_1.875rem)] mt-4'>Informacion</h2>
                                    <ul className='md:flex gap-8 text-[clamp(.9rem,1.6vw_,_1rem)]'>
                                        <li>Fecha y hora: {event[0].start}</li>
                                        <li>Categoria: {event[0].category} </li>
                                        <li>Etiqueta: {event[0].tag} </li>
                                        <li>Porcentaje: {event[0].percentage}%</li>
                                    </ul>
                                    <h2 className='font-medium text-primary text-[clamp(1.5rem,10vw_,_1.875rem)]  mt-8'>Description</h2>
                                    <p className='mt-4 text-[clamp(.9rem,2vw_,_1.8rem)]'>{event[0].description}</p>
                                    <div className='flex flex-col md:flex-row items-center mt-12 m-auto justify-center laptop:gap-8 gap-4 text-textWhite text-[clamp(1.1rem,1.3vw_,_1.5rem)]'>
                                        <DetailButton text={'Marcar Completado'} />
                                        <DetailButton text={'Editar'} />
                                        <DetailButton text={'Eliminar'} />
                                    </div>
                                </div>

                            </div>


                        </div>
        )
    }
    console.log(data)
    return (
        <>
            <div className='flex '>
                <SideBar />
                <Navbar />
                <div className=' mx-[5vw] laptop:mx-[2.5vw]  mt-[7vh] laptop:my-0 laptop:w-[74vw] w-[90vw] sm:mb-0 mb-[55vh] '>


                    <div className='sm:mb-0 mb-[10vh] mx-auto laptop:my-0 laptop:w-[75vw] w-[90vw] '>
                    <Info Name="Detalles" user={user}/>

                        {/* grid-rows-[13rem,13rem,20rem] */}
                        { isLoading ? <Loading/>:showDetails(data)}
                        
                    </div>
                </div>
            </div>
        </>
    )
}