import { Notification, Noti } from "./Notification"; 
import { data } from './noti_Componentes/NotiTable';

export function PaginaNotificaciones() {
    return (
        <div className=' m-auto laptop:my-0 laptop:w-[75vw] w-[90vw] md:mb-0 mb-[50rem]'>
            <div className="bg-white rounded-lg my-8">
                <Noti />
                <div className="bg-white rounded-lg  h-97 overflow-auto custom-scroll"> 
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
    );
}