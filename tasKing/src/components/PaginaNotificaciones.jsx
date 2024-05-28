import { Notification, Noti } from "./Notification";
import { SideBar } from "./SideBar";
import Profile from '../assets/imgs/profile.png';
import { Info } from "./info";
import { Navbar } from "./Navbar";

export function PaginaNotificaciones() {
    return (
        <div className='flex '>
            <SideBar />
            <Navbar />
            <div className=' mx-[5vw] laptop:mx-[2vw]  mt-[7vh] laptop:my-0 laptop:w-[75vw] w-[90vw] laptop:mb-0 mb-[5vh] '>
                <Info Name="DashBoard" />
                <div className="bg-white rounded-lg mx-8 my-8">
                    <Noti />
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
        </div>

    );
}