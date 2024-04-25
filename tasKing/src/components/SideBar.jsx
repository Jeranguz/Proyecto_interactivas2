import '../index.css';

const options = [
    {'name': 'Pagina Principal', 'img': '"../assets/imgs/principal.png"'},
    {'name': 'Notificaciones', 'img': '"../assets/imgs/notificaciones.png"'},
    {'name': 'Calendario', 'img': '"../assets/imgs/calendario.png"'},
    {'name': 'Comunicados', 'img': '"../assets/imgs/comunicados.png"'},
    {'name': 'Eventos', 'img': '"../assets/imgs/eventos.png"'},
    {'name': 'Tareas', 'img': '"../assets/imgs/tareas.png"'},
];
export function SideBar (){
    return(
        <div className="bg-elements col-start-1 col-end-2 m-auto border-solid border-2 border-borderColor p-4 rounded-2xl w-full">
        <div className="flex items-center gap-2">
                <h1 id="hour" className="text-[clamp(1rem,_2vw_,2.25rem)]">00:00</h1>
                <div>
                    <h2 id="day" className="text-[clamp(.5rem,_1vw,_1.125rem)]">aaaaaaa</h2>
                    <h2 id="date" className="text-[clamp(.5rem,_1vw,_1.125rem)]">00/00/0000</h2>
                </div>
            </div>
            <div>
                {options.map(option =>{
                    console.log(option.img)
                    return (
                        <a className="flex items-center gap-4 mt-4" href="#">
                        <img className="w-[2vw]" src='../assets/imgs/profile.png' alt="img"/>
                        <h2 className="text-[clamp(.5rem,_1vw,_1.125rem)]">{option.name}</h2>
                    </a>
                    )
                })}
            </div>
    </div>
    );
}