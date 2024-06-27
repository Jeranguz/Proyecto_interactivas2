import React, { useState, useEffect } from 'react';
import '../index.css';
import Profile from '../assets/imgs/profile.png';
import Settings from '../assets/imgs/settings.png'
import { Link } from 'react-router-dom'
import { useDateWeekRange } from './hooks/useGetWeekRange';
import { useGetEventsPercetaje } from './hooks/useGetEventsPercetaje';

export function Perfil({ id, user, eventList }) {
    const [showEdit, setShowEdit] = useState(false);
    // const [events, setEvents] = useState([]);
    const { firstDay, lastDay } = useDateWeekRange();
    const porcentajeCompletados = useGetEventsPercetaje(eventList, firstDay, lastDay);
    console.log(porcentajeCompletados);
    const barWidth = porcentajeCompletados + '%';

    const toggleEditSection = () => {
        setShowEdit(prevState => !prevState);
    };

     // Fetch events from backend
    //  useEffect(() => {
    //     fetch("http://interactivas_backend.test/api/events/all")
    //         .then(response => response.json())
    //         .then(data => setEvents(data))
    //         .catch(error => console.error('Error fetching events:', error));
    // }, []);

    return (
        <div>
            <div className="m-auto grid laptop:grid-cols-[repeat(2_,1fr)] grid-cols-1 gap-4 mt-4 h-[80vh] max-sm:grid-cols-[repeat(1_,1fr)] mb-[11vh] sm:mb-0 ">
                <div>
                    <div className=' laptop:w-[46rem] grid grid-cols-2 max-sm:grid-cols-1 min-[720px]:flex justify-items-center justify-center'>
                        <div className='rounded-lg overflow-hidden shadow-lg bg-white p-4 relative h-[13.5rem] mb-[1rem]'>
                            <div className='flex items-center space-x-4 mt-[1rem]'>
                                <div className='relative'>
                                    <img className='w-48 h-40 rounded-full object-cover shadow-md border-2 border-purple-500 max-xl:w-[50%] max-xl:ml-[2rem] max-lg:w-[70%]' src={'http://interactivas_backend.test/storage/images/users/'+user.profile_picture} alt='' />
                                    <div className='absolute -bottom-1 -right-1 bg-purple-500 p-2 rounded-full max-xl:mr-[6rem] max-lg:mr-0 max-sm:-right-1'>
                                        <button className='w-[1.5rem]' onClick={toggleEditSection}>
                                            <img src={Settings} alt='' />
                                        </button>
                                    </div>
                                </div>
                                <div>
                                    <h2 className='text-lg font-semibold'>{user.name}</h2>
                                    <p className='text-zinc-600'>{user.email}</p>
                                    <p className='text-zinc-600'>{user.age}</p>
                                    <p className='text-zinc-600'>{user.nacionality}</p>
                                </div>
                            </div>
                        </div>

                        <div className='col-span-1 bg-white p-4 rounded-lg shadow-md mb-[1rem] ml-4 w-[70%] max-sm:w-[100%] max-sm:ml-0'>
                            <h3 className='font-bold text-lg mb-4'>Cursos matriculados</h3>
                            {user.courses && user.courses.map((course) => (
                            <p key={course.id} className='mb-[0.5rem] text-[clamp(0.7rem,_0.9rem,_1.2rem)]'>{course.name}</p>))}
                        </div>
                    </div>

                    {/* Progreso de Cursos */}
                    <div className={`bg-white p-4 rounded-lg shadow-md w-[100%] ${showEdit ? 'hidden' : ''}`}>
                        <h2 className='font-semibold mb-4 text-[clamp(1rem,_2.5vw,_2rem)]'>Progreso de cursos</h2>
                        {user.courses && user.courses.length > 0 && (
                            <div className='mb-2'>
                                <p className='text-[clamp(0.8rem,_1rem,_1.3rem)] mb-1'>{user.courses[0].name}</p>
                                <div className='bg-zinc-400 rounded-full h-4'>
                                    <div className='bg-green-600 h-4 rounded-full w-[80%]' style={{ width: barWidth }}></div>
                                </div>
                            </div>
                        )}
                        {user.courses && user.courses.length > 1 && (
                            <div>
                                {user.courses.slice(1).map((course) => (
                                    <div key={course.id} className='mb-2'>
                                        <p className='text-[clamp(0.8rem,_1rem,_1.3rem)] mb-1'>{course.name}</p>
                                        {/* Aquí puedes ajustar el estilo de progreso para los cursos restantes */}
                                        <div className='bg-zinc-400 rounded-full h-4'>
                                            <div className='bg-green-600 h-4 rounded-full w-[60%]' style={{ width: barWidth }}></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                        <button className='bg-primary text-white py-2 px-4 rounded-lg w-[18rem] hover:bg-purple-900 transition-colors mt-[1rem]'>Ver más</button>
                    </div>

                    {/* Editar Datos */}
                    <div className={`max-w-4xl mx-auto p-5 bg-white shadow-md rounded-lg w-[100%] ${showEdit ? '' : 'hidden'}`}>
                        <div className='grid grid-cols-2 gap-4 '>
                            <div>
                                <label htmlFor='username' className='block text-[clamp(0.7rem,_0.9rem,_1.2rem)] mb-2'>Nombre de Usuario</label>
                                <input type='text' id='username' name='username' placeholder='Nombre de Usuario' className='shadow appearance-none border rounded w-full py-2 px-3 text-zinc-700 leading-tight focus:outline-none focus:shadow-outline' />
                                <label htmlFor='firstname' className='block text-[clamp(0.7rem,_0.9rem,_1.2rem)] mb-2 mt-4'>Nombre</label>
                                <input type='text' id='firstname' name='firstname' placeholder='Nombre' className='shadow appearance-none border rounded w-full py-2 px-3 text-zinc-700 leading-tight focus:outline-none focus:shadow-outline' />
                                <label htmlFor='lastname' className='block text-[clamp(0.7rem,_0.9rem,_1.2rem)] mb-2 mt-4'>Apellidos</label>
                                <input type='text' id='lastname' name='lastname' placeholder='Apellidos' className='shadow appearance-none border rounded w-full py-2 px-3 text-zinc-700 leading-tight focus:outline-none focus:shadow-outline' />
                                <label htmlFor='nationality' className='block text-[clamp(0.7rem,_0.9rem,_1.2rem)] mb-2 mt-4'>Nacionalidad</label>
                                <input type='text' id='nationality' name='nationality' placeholder='Nacionalidad' className='shadow appearance-none border rounded w-full py-2 px-3 text-zinc-700 leading-tight focus:outline-none focus:shadow-outline' />
                            </div>
                            <div>
                                <label htmlFor='age' className='block text-[clamp(0.7rem,_0.9rem,_1.2rem)] mb-2'>Edad</label>
                                <input type='text' id='age' name='age' placeholder='Edad' className='shadow appearance-none border rounded w-full py-2 px-3 text-zinc-700 leading-tight focus:outline-none focus:shadow-outline' />
                                <label htmlFor='sleep' className='block text-[clamp(0.7rem,_0.9rem,_1.2rem)] mb-2 mt-4'>Horas de Sueño</label>
                                <input type='text' id='sleep' name='sleep' placeholder='Horas de Sueño' className='shadow appearance-none border rounded w-full py-2 px-3 text-zinc-700 leading-tight focus:outline-none focus:shadow-outline' />
                                <label htmlFor='physical' className='block text-[clamp(0.7rem,_0.9rem,_1.2rem)] mb-2 mt-4'>Actividad Semanal</label>
                                <input type='text' id='physical' name='physical' placeholder='Actividad Física Semanal' className='shadow appearance-none border rounded w-full py-2 px-3 text-zinc-700 leading-tight focus:outline-none focus:shadow-outline' />
                                <label htmlFor='diseases' className='block text-[clamp(0.7rem,_0.9rem,_1.2rem)] mb-2 mt-4'>Enfermedades</label>
                                <input type='text' id='diseases' name='diseases' placeholder='Enfermedades' className='shadow appearance-none border rounded w-full py-2 px-3 text-zinc-700 leading-tight focus:outline-none focus:shadow-outline' />
                            </div>
                        </div>
                        <div className='flex justify-between mt-8'>
                            <button className='bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline w-[15rem] max-[500px]:w-[7rem]' type='button' onClick={toggleEditSection}>Cancelar</button>
                            <button className='bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline w-[15rem] max-[500px]:w-[7rem]' type='button'>Guardar</button>
                        </div>
                    </div>
                </div>
                

                
                    <div className='bg-black  shadow-md p-4 rounded-lg laptop:overflow-y-scroll'>
                        <h2 className='text-xl font-semibold mt-[0.2rem] text-white over '>Próximos Eventos</h2>
                        <div className='space-y-4 mb-[3rem] laptop:max-h-[70vh] '>
                        {eventList.map(event => (
                                <Link to={'/Detalles'} state={event.id}><div key={event.id} className='bg-primary shadow-lg rounded-lg p-4 mr-2 mb-4'>
                                    <h3 className='text-lg font-normal text-white'>{event.title}</h3>
                                    <p className='text-white text-sm'>{event.description}</p>
                                </div></Link>
                            ))}
                        </div>
                    </div>
                
                
            </div>
        </div>
    );
}
