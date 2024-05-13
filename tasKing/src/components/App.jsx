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



export function App() {
  return (
    <>
      <div className='flex h-full'>
        <Router>
          <SideBar />
          <Routes>
            <Route path='/DashBoard' element={<DashBoard />} />
            <Route path='/PaginaNotificaciones' element={<PaginaNotificaciones />} />
            <Route path='/PaginaCalendario' element={<PaginaCalendario />} />
            <Route path='/AppProfile' element={<AppProfile />} />
            <Route path='/tareas' element={<PaginaTareas />} />
            <Route path='/' element={<DashBoard />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}