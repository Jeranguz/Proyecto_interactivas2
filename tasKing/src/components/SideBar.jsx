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

const options = [
    { 'name': 'Dashboard', 'img': PaginaPrincipal },
    { 'name': 'Notificaciones', 'img': Notificaciones },
    { 'name': 'Calendario', 'img': Calendario },
    { 'name': 'Comunicados', 'img': Comunicados },
    { 'name': 'Eventos', 'img': Eventos },
    { 'name': 'Tareas', 'img': Tareas },
];

export function SideBar() {
    return (
        <div className="bg-primary w-[20%] h-[100vh] hidden laptop:block">
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
                            <input className='block w-full p-[1.3rem] ps-14 text-lg rounded-2xl bg-secondary outline-none text-textWhite' type="search" placeholder='Search' />
                        </div>
                    </form>
                </div>
                {options.map(option => {
                    return (
                        <a className='w-full flex items-center gap-4 bg-textWhite p-[1.3rem] rounded-2xl mt-5' href='#'>
                            <img className='w-[1.3vw]' src={Icono} alt="" />
                            <p className='font-bree text-[clamp(.5rem,_1.2vw,_1.375rem)]'>{option.name}</p>
                        </a>
                    );
                })}
            </div>

        </div>
    );
}