import React from 'react'
import Profile from '../assets/imgs/profile.png';

export function Info({ Name }) {
    return (
        <>
            <div className=' flex justify-between  sm:mt-[2vh] laptop:mt-[1vh]' >
                <h1 className='text-[clamp(2rem,_4vw,_3.75rem)] font-bold'>{Name}</h1>
                <div className='laptop:flex items-center gap-4 hidden '>
                    <div className='text-end'>
                        <h2 className="font-bold">Jason</h2>
                        <p>Jason_morales@gmail.com</p>
                    </div>
                    <a href='./AppProfile'>
                        <img className='w-[2.688rem] h-[2.688rem]' src={Profile} alt="" />
                    </a>
                </div>
            </div>
            </>
            )
}
