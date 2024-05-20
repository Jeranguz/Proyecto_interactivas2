import '../index.css';
import Profile from '../assets/imgs/profile.png';
import Settings from '../assets/imgs/settings.png'

export function Perfil() {
    return (

        <div>

            {/*Div que divide las secciones en 2 columnas*/}
            <div class="grid laptop:grid-cols-[repeat(2_,1fr)] grid-cols-1 gap-4 mt-4 h-[80vh] max-sm:grid-cols-[repeat(1_,1fr)] ">

                {/*Div que contiene las secciones de Datos del Perfil, Cursos Matriculados, Progresos de cursos y el editar datos*/}
                <div>
                    
                    {/* Div que divide en dos columnas los datos del perfil y los cursos matriculados */}
                    <div className='laptop:w-[46rem] grid grid-cols-2 max-sm:grid-cols-1 min-[720px]:flex justify-items-center justify-center'>

                        {/* Datos del usuario */}
                        <div class='rounded-lg overflow-hidden shadow-lg bg-white p-4 relative h-[13.5rem] mb-[1rem]'>
                            <div class='flex items-center space-x-4 mt-[2rem]'>
                                <div class='relative'>
                                    <img class='w-[105%] h-[100%] rounded-full border-2 border-purple-500 max-sm:w-[105%] max-sm:ml-0 max-xl:w-[50%] max-xl:ml-[2rem] max-lg:w-[70%]' src={Profile} alt=''/>
                                    <div class='absolute -bottom-1 -right-1 bg-purple-500 p-2 rounded-full max-xl:mr-[6rem] max-lg:mr-0 max-sm:-right-1'>
                                        <button className='w-[1.5rem]'> <img src={Settings} alt='' />
                                        </button>
                                    </div>
                                </div>
                                <div>
                                    <h2 class='text-lg font-semibold'>Jason Morales</h2>
                                    <p class='text-zinc-600'>Jason_morales@gmail.com</p>
                                    <p class='text-zinc-600'>2 de Marzo de 1990</p>
                                    <p class='text-zinc-600'>Costa Rica</p>
                                </div>
                            </div>
                        </div>

                        {/* Cursos Matriculados */}
                        <div class='col-span-1 bg-white p-4 rounded-lg shadow-md mb-[1rem] ml-4 w-[96%] max-sm:w-[100%] max-sm:ml-0'>
                            <h3 class='font-bold text-lg mb-4'>Cursos matriculados</h3>
                            <p className='mb-[0.5rem]'>Desarrollo de Aplicaciones Interactivas I</p>
                            <p className='mb-[0.5rem]'>Diseño Web</p>
                            <p className='mb-[0.5rem]'>Ingeniería de Aplicaciones</p>
                            <p className='mb-[0.5rem]'>Ingeniería de Aplicaciones</p>
                        </div>



                    </div>

                    
                    {/* Progreso de Cursos */}
                    <div class='bg-white p-4 rounded-lg shadow-md w-[100%]'>
                            <h2 class='font-semibold mb-4 text-[clamp(1rem,_2.5vw,_2rem)]' >Progreso de cursos</h2>
                            <div class='mb-2'>
                                <p class='text-lg mb-1'>Desarrollo de Aplicaciones Interactivas I</p>
                                <div class='bg-zinc-200 rounded-full h-4'>
                                    <div class='bg-green-600 h-4 rounded-full w-[80%]'></div>
                                </div>
                            </div>
                            <div class='mb-2'>
                                <p class='text-lg mb-1'>Diseño Web</p>
                                <div class='bg-zinc-200 rounded-full h-4'>
                                    <div class='bg-yellow-400 h-4 rounded-full w-[60%]'></div>
                                </div>
                            </div>
                            <div class='mb-4'>
                                <p class='text-lg mb-1'>Ingeniería de Aplicaciones</p>
                                <div class='bg-zinc-200 rounded-full h-4'>
                                    <div class='bg-red-600 h-4 rounded-full w-[30%]'></div>
                                </div>
                            </div>
                            <div class='mb-2'>
                                <p class='text-lg mb-1'>Desarrollo de Aplicaciones Interactivas I</p>
                                <div class='bg-zinc-200 rounded-full h-4'>
                                    <div class='bg-green-600 h-4 rounded-full w-[80%]'></div>
                                </div>
                            </div>
                            <button class='bg-primary text-white py-2 px-4 rounded-lg w-[18rem] hover:bg-purple-900 transition-colors mt-[1rem]'>Ver más</button>
                    </div>

                    {/* Editar Datos*/}
                    <div class='max-w-4xl mx-auto p-5 bg-white shadow-md hidden rounded-lg w-[100%]'>
                        <div class='grid grid-cols-2 gap-4'>
                            <div>
                            <label for='username' class='block text-lg mb-2'>Nombre de Usuario</label>
                            
                            <input type='text' id='username' name='username' placeholder='Nombre de Usuario' class='shadow appearance-none border rounded w-full py-2 px-3 text-zinc-700 leading-tight focus:outline-none focus:shadow-outline'/>
                            
                            <label for='firstname' class='block text-lg mb-2 mt-4'>Nombre</label>
                            <input type='text' id='firstname' name='firstname' placeholder='Nombre' class='shadow appearance-none border rounded w-full py-2 px-3 text-zinc-700 leading-tight focus:outline-none focus:shadow-outline'/>

                            <label for='lastname' class='block text-lg mb-2 mt-4'>Apellidos</label>
                            <input type='text' id='lastname' name='lastname' placeholder='Apellidos' class='shadow appearance-none border rounded w-full py-2 px-3 text-zinc-700 leading-tight focus:outline-none focus:shadow-outline'/>

                            <label for='nationality' class='block text-lg mb-2 mt-4'>Nacionalidad</label>
                            <input type='text' id='nationality' name='nationality' placeholder='Nacionalidad' class='shadow appearance-none border rounded w-full py-2 px-3 text-zinc-700 leading-tight focus:outline-none focus:shadow-outline'/>
                            </div>

                            <div>
                            <label for='age' class='block text-lg mb-2'>Edad</label>
                            <input type='text' id='age' name='age' placeholder='Edad' class='shadow appearance-none border rounded w-full py-2 px-3 text-zinc-700 leading-tight focus:outline-none focus:shadow-outline'/>

                            <label for='sleep' class='block text-lg mb-2 mt-4'>Horas de Sueño</label>
                            <input type='text' id='sleep' name='sleep' placeholder='Horas de Sueño' class='shadow appearance-none border rounded w-full py-2 px-3 text-zinc-700 leading-tight focus:outline-none focus:shadow-outline'/>

                            <label for='physical' class='block text-lg mb-2 mt-4'>Actividad Física Semanal</label>
                            <input type='text' id='physical' name='physical' placeholder='Actividad Física Semanal' class='shadow appearance-none border rounded w-full py-2 px-3 text-zinc-700 leading-tight focus:outline-none focus:shadow-outline'/>

                            <label for='diseases' class='block text-lg mb-2 mt-4'>Enfermedades</label>
                            <input type='text' id='diseases' name='diseases' placeholder='Enfermedades' class='shadow appearance-none border rounded w-full py-2 px-3 text-zinc-700 leading-tight focus:outline-none focus:shadow-outline'/>
                            </div>
                        </div>

                        <div class='flex justify-between mt-8'>
                            <button class='bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline w-[15rem] max-[500px]:w-[7rem]' type='button'>Cancelar</button>
                            <button class='bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline w-[15rem] max-[500px]:w-[7rem]' type='button'>Guardar</button>
                        </div>
                    </div>
            

                </div>
                

                {/* Proximas tareas */}
                <div class='bg-black shadow-md p-4 rounded-lg w-[100%] h-[100%]'>
                    <h2 class='text-xl font-semibold mb-4 mt-[0.2rem] text-white'>Próximos Eventos</h2>
                    <div class='space-y-4 mb-[1.1rem]'>
                        <div class='bg-primary shadow-lg rounded-lg p-4'>
                            <h3 class='text-lg font-normal text-white'>Diseño Web</h3>
                            <a href="#"><p class='text-white text-sm'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </a>
                        </div>
                        <div class='bg-primary shadow-lg rounded-lg p-4'>
                            <h3 class='text-lg font-normal text-white'>Diseño Web</h3>
                            <a href="#"><p class='text-white text-sm'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </a>
                        </div>
                        <div class='bg-primary shadow-lg rounded-lg p-4'>
                            <h3 class='text-lg font-normal text-white'>Diseño Web</h3>
                            <a href="#"><p class='text-white text-sm'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </a>
                        </div>
                        <div class='bg-primary shadow-lg rounded-lg p-4'>
                            <h3 class='text-lg font-normal text-white'>Diseño Web</h3>
                            <a href="#"><p class='text-white text-sm'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </a>
                        </div>
                        <div class='bg-primary shadow-lg rounded-lg p-4'>
                            <h3 class='text-lg font-normal text-white'>Diseño Web</h3>
                            <a href="#"><p class='text-white text-sm'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </a>
                        </div>
                    </div>

                </div> 
            </div>

            
        </div>
    );
}
