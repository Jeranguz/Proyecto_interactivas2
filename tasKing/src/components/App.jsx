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
import { Navbar } from './Navbar';
import { Info } from './info';
import SignInRegister from './SignInRegister';
import { useLocalStorage } from './hooks/useLocalStorage';
import { ResultadosBusqueda } from './ResultadosBusqueda';
import { Loading } from './Loading';






export function App() {
  const [Name, setName] = useState('Dashboard');
  const [login, setLogin] = useState(false);
  const [eventList, setEventList] = useState([]);
  // const {data, isLoading} = useLocalStorage();
  
  const {user, isLoading} = useFetchData(setEventList);
  console.log('eventos', eventList)

  return (
    <>
      <div className='flex '>
        <Router>
        
          <Routes>
          <Route path='/' element={<SignInRegister/>} />

            <Route path='/DashBoard' element={<DashBoard eventList={eventList} user={user} />} />
            <Route path='/PaginaNotificaciones' element={<PaginaNotificaciones user={user} />} />
            <Route path='/PaginaCalendario' element={<PaginaCalendario eventList={eventList} setEventList={setEventList} user={user} />} />
            <Route path='/PaginaComunicados' element={<Comunicados user={user}/>}  />
            <Route path='/AppProfile' element={<AppProfile user={user} />} />
            <Route path='/Tareas' element={<PaginaTareas eventList={eventList} setEventList={setEventList} title={'Tareas'} user={user} />} />
            <Route path='/eventos' element={<PaginaTareas eventList={eventList} setEventList={setEventList} title={'Eventos'} user={user} />} />
            <Route path='/Detalles' element={<PaginaDetalles user={user}/>} />
            <Route path='/Busqueda' element={<ResultadosBusqueda eventList={eventList} setEventList={setEventList} title={'Eventos'} user={user} />} />
            <Route path='/' element={<SignInRegister />} />

          </Routes>

        </Router>
      </div>


      
    </>
  );
}