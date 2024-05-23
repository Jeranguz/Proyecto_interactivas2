// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
import Profile from '../assets/imgs/profile.png';
import Seminary from '../assets/imgs/Southern-Seminary.jpg';
import { DetailButton } from './details_components/DetailButton';
import { SideBar } from "./SideBar";


export function PaginaDetalles() {
    //   const { id } = useParams();
    //   const [tarea, setTarea] = useState({ title: "", description: "" });

    //   const obtenerTareaPorId = async (id) => {
    //     try {
    //       const response = await fetch(`http://localhost:5173/tareas/${id}`);
    //       if (!response.ok) {
    //         throw new Error("Error al obtener la tarea");
    //       }
    //       const data = await response.json();
    //       return data;
    //     } catch (error) {
    //       console.error("Error al obtener la tarea:", error);
    //     }
    //   };

    //   useEffect(() => {
    //     const obtenerTarea = async () => {
    //       const tareaObtenida = await obtenerTareaPorId(id);
    //       setTarea(tareaObtenida);
    //     };
    //     obtenerTarea();
    //   }, [id]);

    //   return (
    //     <div>
    //       <h1>tarea</h1>
    //     </div>
    //   );
    return (
        <>
           
           <div className='m-[1.5rem]'>

                    <div className=' flex justify-between  m-auto mt-6' >
                        <h1 className='text-[clamp(1rem,_2.9vw,_3.75rem)] font-bold'>Detalles</h1>
                        <div className='flex items-center gap-4'>
                            <div className='text-end'>
                                <h2 className="font-bold">Jason</h2>
                                <p>Jason_morales@gmail.com</p>
                            </div>
                            <a href='./AppProfile'>
                                <img className='w-[2.688rem] h-[2.688rem]'  src={Profile} alt="" />
                            </a>
                        </div>

                    </div>
                    {/* grid-rows-[13rem,13rem,20rem] */}
                    <div className="grid laptop:grid-cols-[repeat(4_,1fr)] md:grid-cols-3 grid-cols-1 gap-4 mt-8 h-[80vh] ">
                        <div className="col-[1/5] bg-textWhite m-auto w-full h-full mt-0 rounded-3xl md:p-8 overflow-auto p-4">
                            <div>
                                <h1 className='font-medium text-primary text-[clamp(2rem,_2.5vw,_3rem)]'>Seminario de realidad nacional</h1>
                                {/* <div className='grid grid-cols-[repeat(auto-fit,minmax(440px,1fr))] items-center'>

                                    <div className='h-[22rem] w-[40rem] mt-8 rounded-[3rem] overflow-hidden'>
                                        <img className='object-cover h-full w-full' src={Seminary} alt="" />
                                    </div>
                                    <div>
                                    <h2 className='font-medium text-primary text-3xl'>Informacion</h2>
                                <ul className='grid gap-8 text-xl mt-4'>
                                    <li>Fecha: 2 de septiembre del 2024</li>
                                    <li>Categoria: Curso </li>
                                    <li>Etiqueta: Tarea </li>
                                    <li>Hora: 2 p.m</li>
                                    <li>Porcentaje: 15%</li>
                                </ul>
                                    </div>
                                </div> */}
                                <div className=' h-[17rem] md:h-[28rem] mt-8 rounded-t-[3rem] overflow-hidden'>
                                    
                                    <img className='object-cover h-full w-full' src={Seminary} alt="" />
                                </div>
                                <h2 className='font-medium text-primary text-[clamp(1.5rem,1.6vw_,_1.875rem)] mt-4'>Informacion</h2>
                                <ul className='md:flex gap-8 text-[clamp(.9rem,1.1vw_,_1.25rem)]'>
                                    <li>Fecha: 2 de septiembre del 2024</li>
                                    <li>Categoria: Curso </li>
                                    <li>Etiqueta: Tarea </li>
                                    <li>Hora: 2 p.m</li>
                                    <li>Porcentaje: 15%</li>
                                </ul>
                                <h2 className='font-medium text-primary text-[clamp(1.5rem,1.6vw_,_1.875rem)]  mt-4'>Description</h2>
                                <p className='text-[clamp(.9rem,1.1vw_,_1.25rem)]'>Lorem ipsum dolor sit amet consectetur. Fusce in feugiat faucibus turpis purus ultrices. Adipiscing sagittis auctor commodo donec ut egestas nec sit amet. Est purus consectetur nibh neque augue turpis pellentesque tellus. Tellus neque laoreet urna facilisis sit sit sed rhugue or</p>
                                <div className='flex flex-col md:flex-row items-center mt-6 m-auto justify-center gap-8 text-textWhite text-[clamp(1.1rem,1.3vw_,_1.5rem)]'>
                                    <DetailButton text={'Marcar Completado'}/>
                                    <DetailButton text={'Editar'}/>
                                    <DetailButton text={'Eliminar'}/>
                                </div>
                            </div>

                        </div>


                    </div>
                </div>
        </>
    )
}