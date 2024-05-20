import { Notification, Noti } from "./Notification";
import { SideBar } from "./SideBar";
import Profile from '../assets/imgs/profile.png';

export function PaginaNotificaciones() {
    return (
        <div className='w-[75vw] h-[90vh] sm:w-[77vw] ml-[20vw] sm:ml-[21.5vw]  mt-2'>
            <div className=' flex justify-between  m-auto mt-6' >
                <h1 className='text-[clamp(1rem,_2.9vw,_3.75rem)] font-bold'>Notificaciones</h1>
                <div className='flex items-center gap-4'>
                    <div className='text-end'>
                        <h2 className="font-bold">Jason</h2>
                        <p>Jason_morales@gmail.com</p>
                    </div>
                    <img className='w-[2.688rem] h-[2.688rem]' src={Profile} alt="" />
                </div>
            </div>
            <div className="bg-white rounded-lg mx-8 my-8">
                <Noti/>
                <Notification
                    title="Nuevo mensaje"
                    body="¡Hola! ¿Cómo estás?"
                    time="Hace 5 minutos"
                />
                <Notification
                    title="Nuevo mensaje"
                    body="¡Hola! ¿Cómo estás?"
                    time="Hace 5 minutos"
                />
                <Notification
                    title="Nuevo mensaje"
                    body="¡Hola! ¿Cómo estás?"
                    time="Hace 5 minutos"
                />
                <Notification
                    title="Nuevo mensaje"
                    body="¡Hola! ¿Cómo estás?"
                    time="Hace 5 minutos"
                />
                <Notification
                    title="Nuevo mensaje"
                    body="¡Hola! ¿Cómo estás?"
                    time="Hace 5 minutos"
                />
                <Notification
                    title="Nuevo mensaje"
                    body="¡Hola! ¿Cómo estás?"
                    time="Hace 5 minutos"
                />
                <Notification
                    title="Nuevo mensaje"
                    body="¡Hola! ¿Cómo estás?"
                    time="Hace 5 minutos"
                />
            </div>
        </div>
    );
}