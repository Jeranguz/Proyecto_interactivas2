import { Calendario } from './Calendario';
import { Perfil } from './Perfil';
import { SideBar } from './SideBar';
import Profile from '../assets/imgs/profile.png';
import { Info } from './info';
import { Navbar } from './Navbar';
import { Link } from 'react-router-dom';

export function AppProfile({user}) {
  const logout = async () => {
    try {
      const response = await fetch('http://interactivas_backend.test/api/auth/logout', {
        method: 'POST', // Asegúrate de que el método HTTP coincida con el configurado en tus rutas de Laravel
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`, // Reemplaza ${token} con el token de acceso del usuario
        },
      });
  
      if (!response.ok) {
        throw new Error('Error al cerrar sesión');
      }
  
      const data = await response.json();
      console.log(data.message);
      localStorage.removeItem('token');
      window.location.href = 'http://localhost:5173/'
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };
  return (
    <>
      <div className='flex '>
        <SideBar />
        <Navbar />
        <div className='mx-[5vw] laptop:mx-[2.5vw] m-auto  mt-[7vh] laptop:my-0 laptop:w-[75vw] w-[90vw] laptop:mb-0 mb-[25vh] '>
         
          <div className=' m-auto laptop:my-0 laptop:w-[75vw] w-[90vw] md:mb-[17rem] mb-[37rem] '>
            <Info Name="Perfil" user={user}/>
    <button onClick={logout}>Cerrar sesion</button>
              <Perfil />
          </div>
        </div>
      </div>
        </>
        );
}