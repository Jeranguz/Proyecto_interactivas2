
import Profile from '../assets/imgs/profile.png';
import Logo from '../assets/imgs/logo-svg.png'
import ComunicadoB from '../assets/imgs/NotificacionesBlanco.png'
import { Link, useNavigate } from 'react-router-dom';
import React, { useState, useEffect, } from 'react';


export function Navbar({ user }) {
    const [lastScrollTop, setLastScrollTop] = useState(0);
    const [isVisible, setIsVisible] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            const st = window.pageYOffset || document.documentElement.scrollTop;
            if (st > lastScrollTop) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
            setLastScrollTop(st <= 0 ? 0 : st);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollTop]);

    const handleSearch = (e) => {
        e.preventDefault();
        navigate('/Busqueda', { state: { search: searchTerm } });
    };

    return (
        <div className={`fixed top-0 z-50 laptop:hidden bg-primary flex w-full h-[10vw] transition-all duration-200 ease-in-out ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-full'}`}>
            <div className='flex justify-between items-center m-[5vw] gap-[3vw]'>
                <img src={Logo} alt="Logo" className='w-[25vw]' />

                <div className='flex justify-center items-center'>
                    <form
                        className='bg-white w-[45vw] h-[7vw] p-[.5vw] rounded-2xl box-border'
                        onSubmit={handleSearch}
                    >
                        <input
                            type='text'
                            placeholder='Buscar'
                            className='w-[90%] mx-[5%] h-full text-gray-300'
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </form>
                    </div>
                    <Link to='/PaginaNotificaciones' className='flex'>
                        <img className='self-center w-[5vw] laptop:w-[1.5vw]' src={ComunicadoB} alt="" />
                        <p className='font-bree text-[clamp(.5rem,_1.2vw,_1.375rem)] hidden laptop:block'>Comunicado</p>
                    </Link>

                    <a href='./AppProfile'>
                        <img className='w-[7vw]' src={'http://interactivas_backend.test/storage/images/users/' + user.profile_picture} alt="" />
                    </a>
                </div>
            </div>
        );
    };

export default Navbar;