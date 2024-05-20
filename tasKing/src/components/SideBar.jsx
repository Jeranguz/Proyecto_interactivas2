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

const links = [
    {
        name: 'Dashboard',
        href: 'Dashboard'
    },

];


export function SideBar() {
    return (
        <div className="bg-primary w-[20%] h-[100vh] hidden laptop:block ">
            <div className='w-[84.15%] m-auto'>
                <div className="flex w-full mt-[2.75rem] items-center justify-between">
                    <img className='w-[9vw]' src={Logo} alt="" />
                    <a href="#">
                        <img className='w-[1.349rem] h-[1.349rem]' src={Settings} alt="settings" />
                    </a>
                </div>
                <div>
                    <form className='w-full mt-[1.938rem]' action="">
                        <div className='relative'>
                            <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
                                <img className='w-[1.591rem]' src={Lupa} alt="" />
                            </div>
                            <input className='block w-full p-[1.3rem] ps-14 text-lg rounded-2xl bg-secondary outline-none text-purple-500 hover:text-primary ' type="search" placeholder='Search' />
                        </div>
                    </form>
                </div>
                {options.map(option => (
                    <Link to={option.href} className='w-full flex items-center gap-4 bg-primary p-[1.3rem] rounded-2xl mt-5 hover:bg-white text-white hover:text-primary'>
                        <img className='w-[1.3vw] filter invert' src={Icono} alt="" style={{ transition: 'filter 0.3s ease' }} onMouseOver={() => this.style.filter = 'none'} onMouseOut={() => this.style.filter = ''} />
                        <p className='font-bree text-[clamp(.5rem,_1.2vw,_1.375rem)]'>{option.name}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
}