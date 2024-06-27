import React, { useState, useEffect, useRef } from 'react';
import '../index.css';
import Profile from '../assets/imgs/profile.png';
import Settings from '../assets/imgs/settings.png'
import { Link } from 'react-router-dom'
import { useDateWeekRange } from './hooks/useGetWeekRange';
import { useGetEventsPercetaje } from './hooks/useGetEventsPercetaje';

export function Perfil({ id, user, eventList }) {
    const [showEdit, setShowEdit] = useState(false);

    const fileInputRef = useRef(null);
    const [preview, setPreview] = React.useState('');

    const handleImageClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result);
            };
            reader.readAsDataURL(file);
            // Aquí puedes añadir la lógica para enviar el archivo al servidor
        }
    };

    const [updateError, setUpdateError] = useState('');
    const [updateSuccess, setUpdateSuccess] = useState('');



    const updateProfile = (event) => {
        setUpdateError('')
        event.preventDefault();
        const profileChanges = new FormData(event.target);
        console.log(profileChanges)
        fetch('http://interactivas_backend.test/api/users/update', {
            method: 'POST',

            body: profileChanges,
        })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    setUpdateSuccess(data.success)
                    window.location.href = 'http://localhost:5173/AppProfile'

                } else {
                    setUpdateError(data.errors)
                    console.log(data)
                    // console.log(registerError)
                }
            })
            .catch(error => console.error('Error: ', error))
    }
    // const [events, setEvents] = useState([]);
    const { firstDay, lastDay } = useDateWeekRange();
    const porcentajeCompletados = useGetEventsPercetaje(eventList, firstDay, lastDay);
    console.log(porcentajeCompletados);
    const barWidth = porcentajeCompletados + '%';

    const toggleEditSection = () => {
        setShowEdit(prevState => !prevState);
    };

    useEffect(() => {
        let timer;
        if (updateSuccess) {
            timer = setTimeout(() => {
                setUpdateSuccess('');
            }, 5000);
        }
        return () => clearTimeout(timer); // Limpieza en caso de que el componente se desmonte o updateSuccess cambie
    }, [updateSuccess]);

    // Fetch events from backend
    //  useEffect(() => {
    //     fetch("http://interactivas_backend.test/api/events/all")
    //         .then(response => response.json())
    //         .then(data => setEvents(data))
    //         .catch(error => console.error('Error fetching events:', error));
    // }, []);

    return (
        <form onSubmit={updateProfile}>
            <div className="m-auto grid laptop:grid-cols-[repeat(2_,1fr)] grid-cols-1 gap-4 mt-4 h-[80vh] max-sm:grid-cols-[repeat(1_,1fr)] mb-[11vh] sm:mb-0 ">
                <div>
                    <div className=' laptop:w-[46rem] grid grid-cols-2 max-sm:grid-cols-1 min-[720px]:flex justify-items-center justify-center'>
                        <div className='rounded-lg overflow-hidden shadow-lg bg-white p-4 relative h-[13.5rem] mb-[1rem]'>
                            <div className='flex items-center space-x-4 mt-[1rem]'>
                                <div className='relative'>
                                    <div>
                                        <img
                                            className='w-48 h-40 rounded-full object-cover shadow-md border-2 border-purple-500 max-xl:w-[50%] max-xl:ml-[2rem] max-lg:w-[70%] cursor-pointer'
                                            src={preview || 'http://interactivas_backend.test/storage/images/users/' + user.profile_picture}
                                            alt=''
                                            
                                        />
                                        <input
                                            type='file'
                                            ref={fileInputRef}
                                            style={{ display: 'none' }}
                                            onChange={handleFileChange}
                                            name='profile_picture'
                                        />
                                        <div
                                            className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 rounded-full cursor-pointer" onClick={handleImageClick}>
                                            <span className="text-white text-lg">Cambiar</span>
                                        </div>
                                    </div>
                                    <div className='absolute -bottom-1 -right-1 bg-purple-500 p-2 rounded-full max-xl:mr-[6rem] max-lg:mr-0 max-sm:-right-1'>
                                        <button type='button' className='w-[1.5rem]' onClick={toggleEditSection}>
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
                        {updateSuccess && <h1 className="text-green-500">{updateSuccess}</h1>}
                        <div className='grid grid-cols-2 gap-4'>
                            <div>
                                <label htmlFor='username' className='block text-[clamp(0.7rem,_0.9rem,_1.2rem)] mb-2'>Nombre de Usuario</label>
                                <input type='text' id='username' name='username' placeholder='Nombre de Usuario' className='shadow appearance-none border rounded w-full py-2 px-3 text-zinc-700 leading-tight focus:outline-none focus:shadow-outline' defaultValue={user.username} />
                                {updateError.username && <h1 className="text-red-500">{updateError.username}</h1>}
                                <label htmlFor='name' className='block text-[clamp(0.7rem,_0.9rem,_1.2rem)] mb-2 mt-4'>Nombre</label>
                                <input type='text' id='name' name='name' placeholder='Nombre' className='shadow appearance-none border rounded w-full py-2 px-3 text-zinc-700 leading-tight focus:outline-none focus:shadow-outline' defaultValue={user.name} />
                                {updateError.name && <h1 className="text-red-500">{updateError.name}</h1>}

                                <label htmlFor='lastname' className='block text-[clamp(0.7rem,_0.9rem,_1.2rem)] mb-2 mt-4'>Apellidos</label>
                                <input type='text' id='lastname' name='lastname' placeholder='Apellidos' className='shadow appearance-none border rounded w-full py-2 px-3 text-zinc-700 leading-tight focus:outline-none focus:shadow-outline' defaultValue={user.lastname} />
                                {updateError.lastname && <h1 className="text-red-500">{updateError.lastname}</h1>}

                                <label htmlFor='nacionality' className='block text-[clamp(0.7rem,_0.9rem,_1.2rem)] mb-2 mt-4'>Nacionalidad</label>
                                <input type='text' id='nacionality' name='nacionality' placeholder='Nacionalidad' className='shadow appearance-none border rounded w-full py-2 px-3 text-zinc-700 leading-tight focus:outline-none focus:shadow-outline' defaultValue={user.nacionality} />
                                {updateError.nacionality && <h1 className="text-red-500">{updateError.nacionality}</h1>}

                            </div>
                            <div>
                                <label htmlFor='age' className='block text-[clamp(0.7rem,_0.9rem,_1.2rem)] mb-2'>Edad</label>
                                <input type='number' id='age' name='age' placeholder='Edad' className='shadow appearance-none border rounded w-full py-2 px-3 text-zinc-700 leading-tight focus:outline-none focus:shadow-outline' defaultValue={user.age} />
                                {updateError.age && <h1 className="text-red-500">{updateError.age}</h1>}

                                <label htmlFor='hours_sleep' className='block text-[clamp(0.7rem,_0.9rem,_1.2rem)] mb-2 mt-4'>Horas de Sueño</label>
                                <input type='number' id='hours_sleep' name='hours_sleep' placeholder='Horas de Sueño' className='shadow appearance-none border rounded w-full py-2 px-3 text-zinc-700 leading-tight focus:outline-none focus:shadow-outline' defaultValue={user.hours_sleep} />
                                {updateError.hours_sleep && <h1 className="text-red-500">{updateError.hours_sleep}</h1>}

                                <label htmlFor='semanal_activity' className='block text-[clamp(0.7rem,_0.9rem,_1.2rem)] mb-2 mt-4'>Horas Actividad Semanal</label>
                                <input type='number' id='semanal_activity' name='semanal_activity' placeholder='Actividad Física Semanal' className='shadow appearance-none border rounded w-full py-2 px-3 text-zinc-700 leading-tight focus:outline-none focus:shadow-outline' defaultValue={user.semanal_activity} />
                                {updateError.semanal_activity && <h1 className="text-red-500">{updateError.semanal_activity}</h1>}

                                <label htmlFor='email' className='block text-[clamp(0.7rem,_0.9rem,_1.2rem)] mb-2 mt-4'>Email</label>
                                <input type='email' id='email' name='email' placeholder='Correo' className='shadow appearance-none border rounded w-full py-2 px-3 text-zinc-700 leading-tight focus:outline-none focus:shadow-outline' defaultValue={user.email} />
                                {updateError.email && <h1 className="text-red-500">{updateError.email}</h1>}

                            </div>
                            <input type="hidden" defaultValue={user.id} name='id' />
                            <input type="hidden" defaultValue={user.profile_picture} name='old_image' />
                            <div className='flex justify-between mt-8'>
                                <button className='bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline w-[15rem] max-[500px]:w-[7rem]' type='button' onClick={toggleEditSection}>Cancelar</button>
                                <button className='bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline w-[15rem] max-[500px]:w-[7rem]' type='submit'>Guardar</button>
                            </div>
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
        </form>
    );
}
