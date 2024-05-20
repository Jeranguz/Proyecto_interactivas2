import { Notification, Noti } from "./Notification";
import { SideBar } from "./SideBar";
import Profile from '../assets/imgs/profile.png';

export function PaginaNotificaciones() {

  return (
      <div className="w-[77%] m-auto mt-2">
        <div className="mt-8">
          <div className="flex justify-end items-center mr-8 gap-4">
            <div className="text-end">
              <h2 className="font-semibold">Jason</h2>
              <p className="text-gray-500">Jason_morales@gmail.com</p>
            </div>
              <a href='./AppProfile'>
                <img className='w-[2.688rem] h-[2.688rem]'  src={Profile} alt="" />
              </a>
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