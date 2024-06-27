import '../index.css';

import PaginaPrincipal from '../assets/imgs/principal.png'
import '../index.css';
import { useState } from 'react';

import CalendarioB from '../assets/imgs/CalendarioBlanco.png'
import CalendarioM from '../assets/imgs/CalendarioMorado.png'
import EventosB from '../assets/imgs/EventosBlanco.png'
import EventosM from '../assets/imgs/EventosMorado.png'
import DashBoardB from '../assets/imgs/DashBoardBlaco.png'
import DashBoardM from '../assets/imgs/DashBoardMorado.png'
import TareasB from '../assets/imgs/TareasBlanco.png'
import TareasM from '../assets/imgs/TareasMorado.png'
import Logo from '../assets/imgs/logo-svg.png'
import Settings from '../assets/imgs/settings.png'
import Lupa from '../assets/imgs/lupa.png'
import Icono from '../assets/imgs/icon.png'
import { Link, useNavigate } from 'react-router-dom';
import NotiB from '../assets/imgs/NotificacionBlanco.png'
import NotiM from '../assets/imgs/NotificacionMorado.png'

const options = [
    { 'id': 1, 'name': 'Dashboard', 'img': DashBoardB, 'imgHover': DashBoardM, 'href': '/Dashboard' },
    { 'id': 2, 'name': 'Calendario', 'img': CalendarioB, 'imgHover': CalendarioM, 'href': '/PaginaCalendario' },
    { 'id': 3, 'name': 'Comunicados', 'img': NotiB, 'imgHover': NotiM, 'href': '/PaginaComunicados' },
    { 'id': 4, 'name': 'Eventos', 'img': EventosB, 'imgHover': EventosM, 'href': '/eventos' },
    { 'id': 5, 'name': 'Tareas', 'img': TareasB, 'imgHover': TareasM, 'href': '/tareas' },
];
export function SideBar() {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();
    const handleSearch = (e) => {
        e.preventDefault();
        navigate('/Busqueda', { state: { search: searchTerm } });
    };

    return (
        <div className=" z-10 bg-primary w-full laptop:min-h-screen h-[10vw] flex bottom-0 fixed laptop:relative laptop:h-full laptop:w-[20vw] xl:left-0">
            <div className='p-[1.5vw] self-center'>
                <div className=" hidden laptop:block">
                    <img className='w-[12vw]' src={Logo} alt="" />
                    <a href="#">
                    </a>
                </div>
                <div className='hidden laptop:block'>
                    <form className='w-full mt-[3vw]' onSubmit={handleSearch}>
                        <div className='relative'>
                            <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
                                <img className='w-[4vw] sm:w-[2vw]' src={Lupa} alt="" />
                            </div>
                            <input
                                className='w-full p-[1.8vw] ps-14 text-laptop rounded-2xl bg-primary sm:bg-secondary outline-none text-purple-500 hover:text-primary'
                                type="search"
                                placeholder=''
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                    </form>
                </div>
                <div className=' mx-[2.5vw] laptop:mx-0 '>
                    <div className='  laptop:gap-0 flex  laptop:flex-col laptop:self-start '>
                        {options.map(option => {
                            const [isHovered, setIsHovered] = useState(false);
                            return (
                                <Link
                                    key={option.id}
                                    to={option.href}
                                    className=' w-[18vw] laptop:w-full flex flex-row  justify-center laptop:justify-start  bg-primary py-[1.6vw] rounded-2xl laptop:mt-7 hover:bg-white text-white hover:text-primary'
                                    onMouseEnter={() => setIsHovered(true)}
                                    onMouseLeave={() => setIsHovered(false)}
                                >
                                    <img
                                        className='laptop:mx-[1vw] self-center  w-[4vw] laptop:w-[1.5vw]'
                                        src={isHovered ? option.imgHover : option.img}
                                        alt=""
                                    />
                                    <p className='font-bree text-[clamp(.5rem,_1.2vw,_1.375rem)] hidden laptop:block'>{option.name}</p>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}