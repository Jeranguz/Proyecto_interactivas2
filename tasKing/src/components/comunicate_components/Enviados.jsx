import '../../index.css';
import Profile from '../../assets/imgs/profile.png';
import Lupa from '../../assets/imgs/lupa.png'

export function Enviados() {
    return (
        
        <div>
            <div class="w-3/3 flex border-l-4 ">
                <div class="bg-white dark:bg-zinc-800 p-4 w-[45%]">
                    <div class="flex items-center bg-primary p-2 rounded-md">
                    <img className='w-[1.4rem] mr-2' src={Lupa} alt="" />
                        <input class="bg-transparent text-white placeholder-white flex-1 outline-none" type="text" placeholder="Buscar"  />
                    </div>
                    <div class="mt-4 space-y-2">
                        
                        <a href='#' class="flex items-left justify-normal border-b hover:bg-zinc-200">
                            <img class="rounded-full w-[20%] p-[0.5rem]" src={Profile} alt="User Icon"  />
                            <div className='grid'>
                                <p class="text-zinc-400 text-xs mt-3">juan@example.com</p>
                                <p class="text-zinc-800 text-[clamp(0.6rem,_0.8rem,_1.2rem)] dark:text-zinc-200 mb-3">Juan Antonio Vargas Arias ha enviado</p>
                            </div>
                        </a>

                        <a href='#' class="flex items-left justify-normal border-b hover:bg-zinc-200">
                            <img class="rounded-full w-[20%] p-[0.5rem]" src={Profile} alt="User Icon"  />
                            <div className='grid'>
                                <p class="text-zinc-400 text-xs mt-3">juan@example.com</p>
                                <p class="text-zinc-800 text-[clamp(0.6rem,_0.8rem,_1.2rem)] dark:text-zinc-200 mb-3">Juan Antonio Vargas Arias ha enviado</p>
                            </div>
                        </a>

                        <a href='#' class="flex items-left justify-normal border-b hover:bg-zinc-200">
                            <img class="rounded-full w-[20%] p-[0.5rem]" src={Profile} alt="User Icon"  />
                            <div className='grid'>
                                <p class="text-zinc-400 text-xs mt-3">juan@example.com</p>
                                <p class="text-zinc-800 text-[clamp(0.6rem,_0.8rem,_1.2rem)] dark:text-zinc-200 mb-3">Juan Antonio Vargas Arias ha enviado</p>
                            </div>
                        </a>

                        <a href='#' class="flex items-left justify-normal border-b hover:bg-zinc-200">
                            <img class="rounded-full w-[20%] p-[0.5rem]" src={Profile} alt="User Icon"  />
                            <div className='grid'>
                                <p class="text-zinc-400 text-xs mt-3">juan@example.com</p>
                                <p class="text-zinc-800 text-[clamp(0.6rem,_0.8rem,_1.2rem)] dark:text-zinc-200 mb-3">Juan Antonio Vargas Arias ha enviado</p>
                            </div>
                        </a>

                        <a href='#' class="flex items-left justify-normal border-b hover:bg-zinc-200">
                            <img class="rounded-full w-[20%] p-[0.5rem]" src={Profile} alt="User Icon"  />
                            <div className='grid'>
                                <p class="text-zinc-400 text-xs mt-3">juan@example.com</p>
                                <p class="text-zinc-800 text-[clamp(0.6rem,_0.8rem,_1.2rem)] dark:text-zinc-200 mb-3">Juan Antonio Vargas Arias ha enviado</p>
                            </div>
                        </a>

                        <a href='#' class="flex items-left justify-normal border-b hover:bg-zinc-200">
                            <img class="rounded-full w-[20%] p-[0.5rem]" src={Profile} alt="User Icon"  />
                            <div className='grid'>
                                <p class="text-zinc-400 text-xs mt-3">juan@example.com</p>
                                <p class="text-zinc-800 text-[clamp(0.6rem,_0.8rem,_1.2rem)] dark:text-zinc-200 mb-3">Juan Antonio Vargas Arias ha enviado</p>
                            </div>
                        </a>

                        <a href='#' class="flex items-left justify-normal border-b hover:bg-zinc-200">
                            <img class="rounded-full w-[20%] p-[0.5rem]" src={Profile} alt="User Icon"  />
                            <div className='grid'>
                                <p class="text-zinc-400 text-xs mt-3">juan@example.com</p>
                                <p class="text-zinc-800 text-[clamp(0.6rem,_0.8rem,_1.2rem)] dark:text-zinc-200 mb-3">Juan Antonio Vargas Arias ha enviado</p>
                            </div>
                        </a>

                        <a href='#' class="flex items-left justify-normal border-b hover:bg-zinc-200">
                            <img class="rounded-full w-[20%] p-[0.5rem]" src={Profile} alt="User Icon"  />
                            <div className='grid'>
                                <p class="text-zinc-400 text-xs mt-3">juan@example.com</p>
                                <p class="text-zinc-800 text-[clamp(0.6rem,_0.8rem,_1.2rem)] dark:text-zinc-200 mb-3">Juan Antonio Vargas Arias ha enviado</p>
                            </div>
                        </a>

                    </div>
                </div>

                <div class="w-3/4 bg-white dark:bg-zinc-900 p-5 border-l-4 rounded-r-3xl">
                    <div class="border-b pb-5 mb-5">
                        <h1 class="font-bold text-xl text-zinc-900 dark:text-white">
                        Juan Antonio Vargas Arias ha enviado un correo de información para solicitar una beca en
                        la Universidad de Costa Rica.
                        </h1>
                        <div className='flex mt-4'>
                            <img class="rounded-full w-[12%]" src={Profile} alt="User Icon"  />
                            <p class="text-sm text-zinc-600 dark:text-zinc-400 p-4">De Juan Antonio Vargas Arias. el 24/04/2024 18:04</p>
                        </div>
                        
                    </div>
                    <div class="text-zinc-900 dark:text-white leading-relaxed">
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                </div>
            </div>
        </div>

    );
}