import Logo from '../assets/imgs/logo-svg.png'
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
 
function SignInRegister() {
    const [isRegister, setIsRegister] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
 
    const handleClick = () => {
        setIsRegister(!isRegister);
    };
 
    const handleSignIn = () => {
        onSignIn();
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
    <div className="relative grid items-start md:grid-cols-2 grid-rows-2 h-[90vh] w-[90vw] mx-[5vw] mt-[2.5vw] bg-white transition-colors duration-500 overflow-hidden">
        <div className={`absolute top-0 left-0 md:h-full h-1/2 md:w-1/2 w-full bg-primary z-50 transition-all duration-500 ${isRegister ? (isMobile ? 'top-1/2' : 'left-1/2') : 'top-0 left-0'}`}>
            <div className="flex flex-col justify-center items-center h-full space-y-4">
                <img src={Logo} className="w-[50vw] md:w-[20vw] h-auto" alt="Logo" />
                <h1 className="text-[2vw] md:text-base text-white">Domina tus tareas con maestría.</h1>
                <h1 className="text-[2vw] md:text-base">{isRegister ? 'No te has registrado?' : 'Ya tienes una cuenta?'}</h1>
            </div>
        </div>
 
        <form className="flex flex-col justify-center items-center space-y-4 sm:gap-y-[2vh] text-[2vw] md:text-base z-10 mt-8 md:mt-16">
            <h1 className="text-2xl md:text-4xl text-center text-primary font-bold">Bienvenido de vuelta a Tasking</h1>
            <p className="text-sm md:text-base text-center text-gray-600">Ingresa tus datos para iniciar sesión</p>
            <input type="email" placeholder="Email" className="p-2 w-[80vw] md:w-[30vw]" />
            <input type="password" placeholder="Password" className="p-2 w-[80vw] md:w-[30vw]" />
            <Link to="/DashBoard" className="p-2 bg-primary text-white w-[80vw] md:w-[30vw] block text-center">Register</Link>
            <p className="text-sm md:text-base text-center text-gray-600">¿No tienes una cuenta? <a href="#" className="text-primary underline" onClick={handleClick}>Regístrate</a></p>
        </form>
 
        <form className="flex flex-col justify-center items-center space-y-4 sm:gap-y-[2vh] text-[2vw] md:text-base z-10 mt-8">
            <h1 className="text-2xl md:text-4xl text-center text-primary font-bold">Crea tu propia aventura</h1>
            <p className="text-sm md:text-base text-center text-gray-600">Ingresa tus datos para registrarte</p>
            <input type="text" placeholder="Name" className="p-2 w-[80vw] md:w-[30vw]" />
            <input type="email" placeholder="Email" className="p-2 w-[80vw] md:w-[30vw]" />
            <input type="password" placeholder="Password" className="p-2 w-[80vw] md:w-[30vw]" />
            <Link to="/DashBoard" className="p-2 bg-primary text-white w-[80vw] md:w-[30vw] block text-center">Sign In</Link>
            <p className="text-sm md:text-base text-center text-gray-600">¿Ya tienes una cuenta? <a href="#" className="text-primary underline" onClick={handleClick}>Inicia sesión</a></p>
        </form>
    </div>
);
}
 
export default SignInRegister;