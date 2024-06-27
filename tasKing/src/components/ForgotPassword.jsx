import Logo from '../assets/imgs/logo-svg.png'
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function ForgotPassword() {
    const [isRegister, setIsRegister] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    const [loginError, setLoginError] = useState('');
    const [emailLogin, setEmailLogin] = useState('');
    const [passwordLogin, setPasswordLogin] = useState('');

    const submitForgot = (event) => {
        event.preventDefault();
        fetch('http://interactivas_backend.test/api/auth/resetpassword', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: emailLogin,
                password: passwordLogin
            }),
        })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    console.log(data)
                    window.location.href = 'http://localhost:5173/'
                } else {
                    setLoginError(data.errors)
                }
            })
            .catch(error => console.error('Error: ', error, ' ', data))
    }

    const handleClick = () => {
        setIsRegister(!isRegister);
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (

        <div className="relative items-start md:grid-cols-2 grid-rows-2 h-[90vh] w-[90vw] mx-[5vw] mt-[2.5vw] bg-white transition-colors duration-500 overflow-hidden">
            <form onSubmit={submitForgot} className="flex flex-col justify-center items-center space-y-4 sm:gap-y-[2vh] text-[2vw] md:text-base z-10 mt-8 md:mt-16 md:row-start-1">
                <h1 className="text-2xl md:text-4xl text-center text-primary font-bold">Tasking te espera</h1>
                <p className="text-sm md:text-base text-center text-gray-600">Ingresa tus datos para cambiar la contraseña</p>
                <input onChange={(e) => setEmailLogin(e.target.value)} type="email" placeholder="Email" className="p-2 w-[80vw] md:w-[30vw]" name='email' />
                <input onChange={(e) => setPasswordLogin(e.target.value)} type="password" placeholder="Password" className="p-2 w-[80vw] md:w-[30vw]" name='password' />
                <h1 className='text-red-600'>{loginError}</h1>
                <button type='submit' className="p-2 bg-primary text-white w-[80vw] md:w-[30vw] block text-center">Cambiar</button>
                <p className="text-sm md:text-base text-center text-gray-600"><a href="/" className="text-primary underline" onClick={handleClick}>Volver</a></p>
                <h1 className='text-red-600'>{loginError}</h1>

            </form>
        </div>
    );
}

export default ForgotPassword;