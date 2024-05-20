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
        <div className="bg-primary w-[15vw] sm:w-[20vw] h-[100vh] block laptop:block fixed">
            <div className='w-[84.15%] m-auto'>
                <div className="flex w-full mt-[2.75rem] items-center justify-between">
                    <img className='w-[12vw]' src={Logo} alt="" />
                    <a href="#">
                        <img className='w-[2rem] h-[2rem] hidden laptop:block' src={Settings} alt="settings" />
                    </a>
                </div>
                <div className='hidden sm:block'>
                    <form className='w-full mt-[3vw]' action="">
                        <div className='relative'>
                            <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
                                <img className='w-[4vw] sm:w-[2vw]' src={Lupa} alt="" />
                            </div>
                            <input className=' w-full p-[1.8vw]  ps-14 text-lg rounded-2xl bg-primary sm:bg-secondary outline-none text-purple-500 hover:text-primary ' type="search" placeholder='Search' />
                        </div>
                    </form>
                </div>
                {options.map(option => (
                    <Link to={option.href} className='w-full flex sm:flex-row sm:items-start items-center justify-center sm:justify-start gap-4 bg-primary p-[2vh] sm:p-[1.5vw] rounded-2xl mt-5 hover:bg-white text-white hover:text-primary'>
    <img className='self-center w-[4vw] sm:w-[1.5vw] filter invert' src={Icono} alt="" style={{ transition: 'filter 0.3s ease' }} onMouseOver={() => this.style.filter = 'none'} onMouseOut={() => this.style.filter = ''} />
    <p className='font-bree text-[clamp(.5rem,_1.2vw,_1.375rem)] hidden laptop:block'>{option.name}</p>
</Link>
                ))}
            </div>
        </div>
    );
}