import React from 'react'
import Profile from '../assets/imgs/profile.png';

export function Info({Name}) {
    return (
        <>
            <div className=' flex justify-between  m-auto mt-6' >
                <h1 className='text-[4vh] lg:text-[clamp(1rem,_2.9vw,_3.75rem)] font-bold'>{Name}</h1>
                <div className='laptop:flex items-center gap-4 hidden'>
                    <div className='text-end'>
                        <h2 className='font-bold'>Jason</h2>
                        <p className='text-[clamp(0.5rem,_0.8rem,_1.1rem)]'>Jason_morales@gmail.com</p>
                    </div>
                    <a href='./AppProfile'>
                        <img className='w-[2.688rem] h-[2.688rem]' src={Profile} alt="" />
                    </a>
                </div>
            </div>
        </>
    )
}
