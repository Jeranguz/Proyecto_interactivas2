import Logo from '../assets/imgs/logo-svg.png'
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


function SignInRegister() {
    const [isRegister, setIsRegister] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    const [loginError, setLoginError] = useState([]);
    const [registerError, setRegisterError] = useState([]);
    const [nameRegister, setNameRegister] = useState('');
    const [lastNameRegister, setLastNameRegister] = useState('');
    const [userNameRegister, setUserNameRegister] = useState('');
    const [emailRegister, setEmailRegister] = useState('');
    const [passwordRegister, setPasswordRegister] = useState('');
    const [emailLogin, setEmailLogin] = useState('');
    const [passwordLogin, setPasswordLogin] = useState('');


    const submitRegister = (event) => {
        event.preventDefault();
        fetch('http://interactivas_backend.test/api/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: nameRegister,
                lastname: lastNameRegister,
                username: userNameRegister,
                email: emailRegister,
                password: passwordRegister
            }),
        })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    localStorage.setItem('token', data.token)

                    window.location.href = 'http://localhost:5173/DashBoard'
                    console.log(data)
                } else {
                    setRegisterError(data.errors)
                    console.log(data)
                    console.log(registerError)
                }
            })
            .catch(error => console.error('Error: ', error))
    }

    const submitLogin = (event) => {
        event.preventDefault();
        fetch('http://interactivas_backend.test/api/auth/login', {
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
                    localStorage.setItem('token', data.token)
                    window.location.href = 'http://localhost:5173/DashBoard'
                    console.log(data)
                } else {
                    setLoginError(data.errors)
                }
            })
            .catch(error => console.error('Error: ', error, ' ', data))
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    localStorage.setItem('token', data.token)
                    window.location.href = 'http://localhost:5173/DashBoard'
                    console.log(data)
                } else {
                    setLoginError(data.errors)
                }
            })
            .catch(error => console.error('Error: ', error, ' ', data))
    }


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
            <div>
                <h1 className='text-red-600'>{loginError}</h1>
            </div>
            <form onSubmit={submitLogin} className="flex flex-col justify-start items-center space-y-4 sm:gap-y-[2vh] text-[2vw] md:text-base z-10 md:row-start-1 min-h-[50%] sm:h-full sm:mt-[20vh]">
                <h1 className="text-2xl md:text-4xl text-center text-primary font-bold">Bienvenido de vuelta a Tasking</h1>
                <p className="text-sm md:text-base text-center text-gray-600">Ingresa tus datos para iniciar sesión</p>
                <input onChange={(e) => setEmailLogin(e.target.value)} type="email" placeholder="Email" className="p-2 w-[80vw] md:w-[30vw]" name='email' />
                <input onChange={(e) => setPasswordLogin(e.target.value)} type="password" placeholder="Password" className="p-2 w-[80vw] md:w-[30vw]" name='password' />
                <button type='submit' className="p-2 bg-primary text-white w-[80vw] md:w-[30vw] block text-center">Login</button>
                <p className="text-sm md:text-base text-center text-gray-600">¿No tienes una cuenta? <a href="#" className="text-primary underline" onClick={handleClick}>Regístrate</a></p>
            </form>

            <form onSubmit={submitRegister} className="flex flex-col justify-start items-center space-y-4 sm:gap-y-[2vh] text-[2vw] md:text-base z-10  md:row-start-1 h-[50%] mt-[65%] sm:mt-[20vh] ">
                <h1 className="text-2xl md:text-4xl text-center text-primary font-bold">Crea tu propia aventura</h1>
                <p className="text-sm md:text-base text-center text-gray-600">Ingresa tus datos para registrarte</p>
                <div className="flex w-[80vw] md:w-[30vw] justify-between">
                    <input onChange={(e) => setNameRegister(e.target.value)} type="text" placeholder="Name" className="p-2 w-[48%]" name='name' />
                    <input onChange={(e) => setLastNameRegister(e.target.value)} type="text" placeholder="Last Name" className="p-2 w-[48%]" name='lastname' />
                </div>
                <div className="flex w-[80vw] md:w-[30vw] justify-between">
                    <input onChange={(e) => setUserNameRegister(e.target.value)} type="text" placeholder="UserName" className="p-2 w-[48%]" name='username' />
                    <input onChange={(e) => setEmailRegister(e.target.value)} type="email" placeholder="Email" className="p-2 w-[48%]" name='email' />
                </div>
                <input onChange={(e) => setPasswordRegister(e.target.value)} type="password" placeholder="Password" className="p-2 w-[80vw] md:w-[30vw]" name='password' />
                <button type='submit' className="p-2 bg-primary text-white w-[80vw] md:w-[30vw] block text-center">Register</button>
                <p className="text-sm md:text-base text-center text-gray-600">¿Ya tienes una cuenta? <a href="#" className="text-primary underline" onClick={handleClick}>Inicia sesión</a></p>
            </form>
        </div>
    );
}

export default SignInRegister;