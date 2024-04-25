import '../index.css';

import PaginaPrincipal from '../assets/imgs/principal.png'
import Notificaciones from '../assets/imgs/notificaciones.png'
import Calendario from '../assets/imgs/calendar.png'
import Comunicados from '../assets/imgs/comunicados.png'
import Eventos from '../assets/imgs/eventos.png'
import Tareas from '../assets/imgs/tareas.png'

const options = [
    { 'name': 'Pagina Principal', 'img': PaginaPrincipal },
    { 'name': 'Notificaciones', 'img': Notificaciones },
    { 'name': 'Calendario', 'img': Calendario },
    { 'name': 'Comunicados', 'img': Comunicados },
    { 'name': 'Eventos', 'img': Eventos },
    { 'name': 'Tareas', 'img': Tareas },
];

const cursos = [
    { name: 'Diseño de aplicaciones interactivas', sigla: 'TM5100' },
    { name: 'Diseño de aplicaciones interactivas', sigla: 'TM5200' },
    { name: 'Diseño de aplicaciones interactivas', sigla: 'TM5300' },
    { name: 'Diseño de aplicaciones interactivas', sigla: 'TM5400' },
    { name: 'Diseño de aplicaciones interactivas', sigla: 'TM5500' },
    { name: 'Diseño de aplicaciones interactivas', sigla: 'TM5600' },
];
export function SideBar() {
    return (
        <div className="bg-elements col-start-1 col-end-2 m-auto border-solid border-2 border-borderColor p-4 rounded-2xl w-full">
            <div className="flex items-center gap-2">
                <h1 id="hour" className="text-[clamp(1rem,_2vw_,2.25rem)]">00:00</h1>
                <div className='w-[0.100rem] h-8 bg-textSecondary'></div>
                <div>
                    <h2 id="day" className="text-[clamp(.5rem,_1vw,_1.125rem)]">aaaaaaa</h2>
                    <h2 id="date" className="text-[clamp(.5rem,_1vw,_1.125rem)]">00/00/0000</h2>
                </div>
            </div>
            <div className='w-full h-[0.100rem] bg-textSecondary mt-4'></div>
            <div>
                {options.map(option => {
                    console.log(option.img)
                    return (
                        <a className="flex items-center gap-4 mt-4" href="#">
                            <img className="w-[2vw]" src={option.img} alt="img" />
                            <h2 className="text-[clamp(.7rem,_1.2vw,_1.125rem)]">{option.name}</h2>
                        </a>
                    )
                })}
            </div>
            <div className='w-full h-[0.100rem] bg-textSecondary mt-4'></div>
            <div>
                <div className="flex items-center gap-4 mt-4">
                    <h1 className="text-[clamp(1rem,2vw,2.25rem)] text-primary">100%</h1>
                    <div>
                        <h2 className="text-[clamp(.5rem,_1vw,_1.125rem)] text-textSecondary">De la semana completado</h2>
                    </div>
                </div>
                <div className="w-full bg-zinc-200 dark:bg-textSecondary rounded-full h-2.5 mt-4">
                    <div className="bg-primary h-2.5 rounded-full w-[70%]"></div>
                </div>
            </div>
            <div className='w-full h-[0.100rem] bg-textSecondary mt-4'></div>
            <div className='mt-4'>
                <h2 className='text-[clamp(.7rem,_1.5vw,_1.5rem)] font-medium'>Cursos Activos</h2>
                {cursos.map(curso => {
                    return (
                        <p className='text-textSecondary text-[clamp(.5rem,_1vw,_1.2rem)] hover:text-primary'>{curso.sigla}</p>
                    )
                })}
            </div>
            <div className='w-full h-[0.100rem] bg-textSecondary mt-4'></div>
            
            <div className='mt-4'>
                <div className="relative flex aspect-[2] items-center justify-center overflow-hidden rounded-t-full bg-green-500">
                    <div className="absolute top-0 aspect-square w-full rotate-[calc(72deg-45deg)] bg-gradient-to-tr from-transparent from-50% to-gray-400 to-50% transition-transform duration-500"></div>
                    <div className="absolute top-1/4 flex aspect-square w-3/4 justify-center rounded-full bg-white"></div>
                    <div className="absolute bottom-0 w-full truncate text-center text-[20vmax] leading-none">
                        <h1 className="text-[clamp(.5rem,_2vw,_2rem)] font-medium">Bajo</h1>
                    </div>
                </div>
            </div>
            <div className='w-full h-[0.100rem] bg-textSecondary mt-4'></div>
            <div className='flex justify-center mt-4 '>
                <button className='text-[clamp(.7rem,_1vw,_1.25rem)] py-4 px-10 bg-[#e43535b9] rounded-xl text-white'>Cerrar Sesion</button>
            </div>

        </div>
    );
}