import Navbar from "./Navbar";
import { Notification, Noti } from "./Notification";
import { Info } from './info';
import { SideBar } from './SideBar';
import { data } from './noti_Componentes/NotiTable';

export function PaginaNotificaciones() {
    return (
        <div className='flex '>
            <SideBar />
            <Navbar />
            <div className=' mx-[5vw] laptop:mx-[2vw]  mt-[7vh] laptop:my-0 laptop:w-[75vw] w-[90vw] laptop:mb-0 mb-[5vh] sm:mb-[13vh] '>
                <Info Name="Notificaciones" />
                <div className="bg-white rounded-lg my-8">
                    <Noti />
                    <div className="bg-white rounded-lg  h-[70vh] overflow-auto custom-scroll">
                        {data.map((notification) => (
                            <Notification
                                key={notification.id}
                                title={notification.title}
                                body={notification.body}
                                time={notification.time}
                            />
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}