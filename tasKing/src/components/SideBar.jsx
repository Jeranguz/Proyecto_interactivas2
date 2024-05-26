import '../index.css';

import PaginaPrincipal from '../assets/imgs/principal.png'
import Notificaciones from '../assets/imgs/notificaciones.png'
import Calendario from '../assets/imgs/calendar.png'
import Comunicados from '../assets/imgs/comunicados.png'
import Eventos from '../assets/imgs/eventos.png'
import Tareas from '../assets/imgs/tareas.png'
import Logo from '../assets/imgs/logo-svg.png'
import Settings from '../assets/imgs/settings.png'
import Lupa from '../assets/imgs/lupa.png'
import Icono from '../assets/imgs/icon.png'
import { Link } from 'react-router-dom';

const options = [
    { 'name': 'Dashboard', 'img': PaginaPrincipal, 'href': '/Dashboard' },
    { 'name': 'Notificaciones', 'img': Notificaciones, 'href': '/Paginanotificaciones' },
    { 'name': 'Calendario', 'img': Calendario, 'href': '/PaginaCalendario' },
    { 'name': 'Comunicados', 'img': Comunicados, 'href': '/PaginaComunicados' },
    { 'name': 'Eventos', 'img': Eventos, 'href': '/eventos' },
    { 'name': 'Tareas', 'img': Tareas, 'href': '/tareas' },
];

export function SideBar() {
    return (
   
            <div className=" z-10 bg-primary w-full laptop:min-h-screen h-[10vw] flex bottom-0 fixed laptop:relative laptop:h-full laptop:w-[20vw] xl:left-0">
                <div className='p-[1.5vw] self-center'>
                    <div className=" hidden laptop:block">
                        <img className='w-[11vw]' src={Logo} alt="" />
                        <a href="#">
                        </a>
                    </div>
                    <div className='hidden laptop:block'>
                        <form className='w-full mt-[3vw]' action="">
                            <div className='relative'>
                                <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
                                    <img className='w-[4vw] sm:w-[2vw]' src={Lupa} alt="" />
                                </div>
                                <input className=' w-full p-[1.2vw]  ps-14 text-laptop rounded-2xl bg-primary sm:bg-secondary outline-none text-purple-500 hover:text-primary ' type="search" placeholder='Search' />
                            </div>
                        </form>
                    </div>
                    <div className='flex laptop:flex-col'>
                        {options.map(option => (
                            <Link to={option.href} className='w-[15vw] laptop:w-full flex flex-row  justify-center laptop:justify-start gap-[1.5vw] bg-primary p-[1.5vw] rounded-2xl laptop:mt-5 hover:bg-white text-white hover:text-primary'>
                                <img className='self-center w-[4vw] laptop:w-[1.5vw] filter invert' src={Icono} alt="" />
                                <p className='font-bree text-[clamp(.5rem,_1.2vw,_1.375rem)] hidden laptop:block'>{option.name}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
    );
}