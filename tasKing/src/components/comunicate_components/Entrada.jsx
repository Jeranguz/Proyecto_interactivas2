import '../../index.css';
import Profile from '../../assets/imgs/profile.png';
import Lupa from '../../assets/imgs/lupa.png'
import React, { useState, useEffect } from 'react';

export function Entrada({user}) {
    return (
        
        <div>
            {/* Seccion de correos */}
            <div class='  overflow-hidden w-3/3 h-[80vh] flex border-l-4 max-sm:grid max-md:grid laptop:grid-cols-[repeat(2_,1fr)] grid-cols-1   max-[600px]:grid-cols-[repeat(1_,1fr)]'>
                <div class='bg-white p-4 w-[55%] max-sm:w-[100%] max-sm:mb-4 max-sm:rounded-3xl max-md:w-[100%] max-md:mb-4 max-md:rounded-3xl max-lg:w-[63%] max-lg:rounded-l-3xl max-xl:w-[65%] max-2xl:w-[56%]'>
                    <div class='flex items-center bg-primary p-2 rounded-md'>
                    <img className='w-[1.4rem] mr-2' src={Lupa} alt='' />
                        <input class='bg-transparent text-white placeholder-white flex-1 outline-none' type='text' placeholder='Buscar'/>
                    </div>
                    <div class='mt-4 space-y-2 overflow-y-scroll h-full'>
                        
                        <a href='#' class='flex items-left justify-normal border-b hover:bg-zinc-200'>
                            <img class='rounded-full w-[20%] p-[0.5rem]' src={'http://interactivas_backend.test/storage/images/users/'+user.profile_picture} alt='User Icon'/>
                            <div className='grid'>
                                <p class='text-zinc-400 text-xs mt-3'>{user.email}</p>
                                <p class='text-zinc-800 text-[clamp(0.6rem,_0.7rem,_1.2rem)] dark:text-zinc-200 mb-3'>{user.name} ha enviado</p>
                            </div>
                        </a>

                        <a href='#' class='flex items-left justify-normal border-b hover:bg-zinc-200'>
                            <img class='rounded-full w-[20%] p-[0.5rem]' src={'http://interactivas_backend.test/storage/images/users/'+user.profile_picture} alt='User Icon'/>
                            <div className='grid'>
                                <p class='text-zinc-400 text-xs mt-3'>{user.email}</p>
                                <p class='text-zinc-800 text-[clamp(0.6rem,_0.7rem,_1.2rem)] dark:text-zinc-200 mb-3'>{user.name} ha enviado</p>
                            </div>
                        </a>

                        <a href='#' class='flex items-left justify-normal border-b hover:bg-zinc-200'>
                            <img class='rounded-full w-[20%] p-[0.5rem]' src={'http://interactivas_backend.test/storage/images/users/'+user.profile_picture} alt='User Icon'/>
                            <div className='grid'>
                                <p class='text-zinc-400 text-xs mt-3'>{user.email}</p>
                                <p class='text-zinc-800 text-[clamp(0.6rem,_0.7rem,_1.2rem)] dark:text-zinc-200 mb-3'>{user.name} ha enviado</p>
                            </div>
                        </a>

                        <a href='#' class='flex items-left justify-normal border-b hover:bg-zinc-200'>
                            <img class='rounded-full w-[20%] p-[0.5rem]' src={'http://interactivas_backend.test/storage/images/users/'+user.profile_picture} alt='User Icon'/>
                            <div className='grid'>
                                <p class='text-zinc-400 text-xs mt-3'>{user.email}</p>
                                <p class='text-zinc-800 text-[clamp(0.6rem,_0.7rem,_1.2rem)] dark:text-zinc-200 mb-3'>{user.name} ha enviado</p>
                            </div>
                        </a>

                        <a href='#' class='flex items-left justify-normal border-b hover:bg-zinc-200'>
                            <img class='rounded-full w-[20%] p-[0.5rem]' src={'http://interactivas_backend.test/storage/images/users/'+user.profile_picture} alt='User Icon'/>
                            <div className='grid'>
                                <p class='text-zinc-400 text-xs mt-3'>{user.email}</p>
                                <p class='text-zinc-800 text-[clamp(0.6rem,_0.7rem,_1.2rem)] dark:text-zinc-200 mb-3'>{user.name} ha enviado</p>
                            </div>
                        </a>

                        <a href='#' class='flex items-left justify-normal border-b hover:bg-zinc-200'>
                            <img class='rounded-full w-[20%] p-[0.5rem]' src={'http://interactivas_backend.test/storage/images/users/'+user.profile_picture} alt='User Icon'/>
                            <div className='grid'>
                                <p class='text-zinc-400 text-xs mt-3'>{user.email}</p>
                                <p class='text-zinc-800 text-[clamp(0.6rem,_0.7rem,_1.2rem)] dark:text-zinc-200 mb-3'>{user.name} ha enviado</p>
                            </div>
                        </a>

                        <a href='#' class='flex items-left justify-normal border-b hover:bg-zinc-200'>
                            <img class='rounded-full w-[20%] p-[0.5rem]' src={'http://interactivas_backend.test/storage/images/users/'+user.profile_picture} alt='User Icon'/>
                            <div className='grid'>
                                <p class='text-zinc-400 text-xs mt-3'>{user.email}</p>
                                <p class='text-zinc-800 text-[clamp(0.6rem,_0.7rem,_1.2rem)] dark:text-zinc-200 mb-3'>{user.name} ha enviado</p>
                            </div>
                        </a>

                        <a href='#' class='flex items-left justify-normal border-b hover:bg-zinc-200'>
                            <img class='rounded-full w-[20%] p-[0.5rem]' src={'http://interactivas_backend.test/storage/images/users/'+user.profile_picture} alt='User Icon'/>
                            <div className='grid'>
                                <p class='text-zinc-400 text-xs mt-3'>{user.email}</p>
                                <p class='text-zinc-800 text-[clamp(0.6rem,_0.7rem,_1.2rem)] dark:text-zinc-200 mb-3'>{user.name} ha enviado</p>
                            </div>
                        </a>

                        <a href='#' class='flex items-left justify-normal border-b hover:bg-zinc-200'>
                            <img class='rounded-full w-[20%] p-[0.5rem]' src={'http://interactivas_backend.test/storage/images/users/'+user.profile_picture} alt='User Icon'/>
                            <div className='grid'>
                                <p class='text-zinc-400 text-xs mt-3'>{user.email}</p>
                                <p class='text-zinc-800 text-[clamp(0.6rem,_0.7rem,_1.2rem)] dark:text-zinc-200 mb-3'>{user.name} ha enviado</p>
                            </div>
                        </a>

                        <a href='#' class='flex items-left justify-normal border-b hover:bg-zinc-200'>
                            <img class='rounded-full w-[20%] p-[0.5rem]' src={'http://interactivas_backend.test/storage/images/users/'+user.profile_picture} alt='User Icon'/>
                            <div className='grid'>
                                <p class='text-zinc-400 text-xs mt-3'>{user.email}</p>
                                <p class='text-zinc-800 text-[clamp(0.6rem,_0.7rem,_1.2rem)] dark:text-zinc-200 mb-3'>{user.name} ha enviado</p>
                            </div>
                        </a>

                    </div>
                </div>

                {/* Seccion de mensaje */}
                <div class='w-3/4 bg-white p-5 border-l-4 rounded-r-3xl max-sm:w-[100%] max-sm:rounded-3xl'>
                    <div class='border-b pb-5 mb-5'>
                        <h1 class='font-bold text-[clamp(0.9rem,_1rem,_1.25rem)] text-zinc-900'>
                        {user.name} {user.lastname} ha enviado un correo de información para solicitar una beca en la Universidad de Costa Rica.</h1>
                        <div className='flex mt-4'>
                            <img class='rounded-full w-[12%] max-sm:w-[25%] max-lg:w-[20%] max-xl:w-[20%] max-2xl:w-[19%]' src={'http://interactivas_backend.test/storage/images/users/'+user.profile_picture} alt='User Icon'  />
                            <p class='text-[clamp(0.5rem,_0.8rem,_1rem)] text-zinc-600 dark:text-zinc-400 p-4'>De {user.name} {user.lastname}. el 24/04/2024 18:04</p>
                        </div>
                        
                    </div>
                    <div class='text-zinc-900 leading-relaxed'>
                        <p className='text-[clamp(0.5rem,_0.8rem,_1rem)]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>
            </div>
        </div>

    );
}