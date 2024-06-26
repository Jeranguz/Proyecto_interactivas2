import React from 'react'
import Profile from '../assets/imgs/profile.png';

export function Info({ Name, user }) {
    return (
        <>
            <div className=' flex justify-between  sm:mt-[2vh] laptop:mt-[1vh]' >
                <h1 className='text-[clamp(2rem,_4vw,_3.75rem)] font-bold'>{Name}</h1>
                <div className='laptop:flex items-center gap-4 hidden '>
                    <div className='text-end'>
                        <h2 className="font-bold">{user.name}</h2>
                        <p>{user.email}</p>
                    </div>
                    <a href='./AppProfile'>
                        <img className='w-[3rem] h-[3rem] object-cover rounded-full' src={'http://interactivas_backend.test/storage/images/users/'+user.profile_picture} alt="" />
                    </a>
                </div>
            </div>
            </>
            )
}
