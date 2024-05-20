import { Notification } from './Notification';
import { SideBar } from './SideBar';
import Profile from '../assets/imgs/profile.png';
import { PaginaNotificaciones } from './PaginaNotificaciones';
import { DashBoard } from './DashBoard';
import { PaginaCalendario } from './PaginaCalendario';
import { AppProfile } from './AppProfile';
import { Link } from 'react-router-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { PaginaTareas } from './PaginaTareas';
import { PaginaDetalles } from './PaginaDetalles';
import { Comunicados } from './PaginaComunicados';
import { useState } from 'react';
import { useFetchData } from './hooks/useFetchData';




export function App() {

  const [eventList, setEventList] = useState([]);
  useFetchData('../../data.json', setEventList);
  console.log(eventList)

  return (
    <>
      <div className='flex h-full'>
        <Router>
          <SideBar />
          <Routes>
            <Route path='/DashBoard' element={<DashBoard />} />
            <Route path='/PaginaNotificaciones' element={<PaginaNotificaciones />} />
            <Route path='/PaginaCalendario' element={<PaginaCalendario eventList={eventList} setEventList={setEventList}/>} />
            <Route path='/PaginaComunicados' element={<Comunicados />} />
            <Route path='/AppProfile' element={<AppProfile />} />
            <Route path='/tareas' element={<PaginaTareas eventList={eventList} setEventList={setEventList} />} />
            <Route path='/Detalles' element={<PaginaDetalles />} />
            <Route path='/' element={<DashBoard />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}