import '../index.css';
import Profile from '../assets/imgs/profile.png';

export function Perfil() {
    return (
        <div class="flex min-h-screen mt-[2rem] gap-4">
            <div class="grid grid-cols-1 gap-4 w-[100%] h-[100%]">
                <div class="col-span-1 bg-white p-5 rounded-lg shadow-md">
                    <div class="flex items-center space-x-4 mb-5">
                        <img src={Profile} alt="profile picture" class="rounded-full w-[30%]" />
                        <div>
                            <h2 class="font-bold text-lg">Jason Morales</h2>
                            <p>jason.morales@example.com</p>
                            <p>24 Marzo 1990</p>

                        </div>
                    </div>

                    <div>
                        <button class="bg-primary text-white px-3 py-1 rounded mt-2 w-[80%] ml-[2rem] mb-[1rem] mr-[2rem]">Editar datos</button>
                        <label class="block mb-1 font-semibold">Nombre de Usuario</label>
                        <input type="text" placeholder="Nombre de Usuario" class="w-full mb-4 p-2 border rounded" />
                        <label class="block mb-1 font-semibold">Nombre</label>
                        <input type="text" placeholder="Nombre" class="w-full mb-4 p-2 border rounded" />
                        <label class="block mb-1 font-semibold">Apellidos</label>
                        <input type="text" placeholder="Apellidos" class="w-full mb-4 p-2 border rounded" />
                        <label class="block mb-1 font-semibold">Nacionalidad</label>
                        <input type="text" placeholder="Nacionalidad" class="w-full p-2 border rounded" />
                    </div>
                </div>
            </div>

            <div className='w-[94%]'>
                <div class="col-span-1 bg-white p-5 rounded-lg shadow-md mb-[5.2rem]">
                    <h3 class="font-bold text-lg mb-4">Cursos matriculados</h3>
                    <p className='mb-[0.5rem]'>Desarrollo de Aplicaciones Interactivas I</p>
                    <p className='mb-[0.5rem]'>Diseño Web</p>
                    <p className='mb-[0.5rem]'>Ingeniería de Aplicaciones</p>
                    <p className='mb-[0.5rem]'>Ingeniería de Aplicaciones</p>
                </div>

                <div class="bg-white p-4 rounded-lg shadow-md ">
                    <h2 class="font-semibold mb-4 text-[clamp(1rem,_2.5vw,_2rem)]" >Progreso de cursos</h2>
                    <div class="mb-2">
                        <p class="text-sm mb-1">Desarrollo de Aplicaciones Interactivas I</p>
                        <div class="bg-zinc-200 rounded-full h-2.5">
                            <div class="bg-green-500 h-2.5 rounded-full w-[80%]"></div>
                        </div>
                    </div>
                    <div class="mb-2">
                        <p class="text-sm mb-1">Diseño Web</p>
                        <div class="bg-zinc-200 rounded-full h-2.5">
                            <div class="bg-yellow-500 h-2.5 rounded-full w-[60%]"></div>
                        </div>
                    </div>
                    <div class="mb-4">
                        <p class="text-sm mb-1">Ingeniería de Aplicaciones</p>
                        <div class="bg-zinc-200 rounded-full h-2.5">
                            <div class="bg-red-500 h-2.5 rounded-full w-[30%]"></div>
                        </div>
                    </div>
                    <button class="bg-purple-600 text-white py-2 px-4 rounded-lg w-full hover:bg-purple-700 transition-colors">Ver más</button>
                </div>
            </div>



            <div class="bg-white shadow-md p-4 rounded-lg w-[85%] h-[100%]">
                <h2 class="text-xl font-semibold mb-4 mt-[0.2rem]">Próximos Eventos</h2>
                <div class="space-y-4 mb-[1.1rem]">
                    <div class="bg-primary shadow-lg rounded-lg p-4">
                        <h3 class="text-lg font-normal text-white">Diseño Web</h3>
                        <p class="text-white text-sm">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div class="bg-primary shadow-lg rounded-lg p-4">
                        <h3 class="text-lg font-normal text-white">Diseño Web</h3>
                        <p class="text-white text-sm">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div class="bg-primary shadow-lg rounded-lg p-4">
                        <h3 class="text-lg font-normal text-white">Diseño Web</h3>
                        <p class="text-white text-sm">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div class="bg-primary shadow-lg rounded-lg p-4">
                        <h3 class="text-lg font-normal text-white">Diseño Web</h3>
                        <p class="text-white text-sm">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div class="bg-primary shadow-lg rounded-lg p-4">
                        <h3 class="text-lg font-normal text-white">Diseño Web</h3>
                        <p class="text-white text-sm">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>

            </div>
        </div>
    );
}
