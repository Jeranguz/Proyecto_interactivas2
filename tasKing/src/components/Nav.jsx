import '../index.css';
import Logo from '../assets/imgs/logo.png';
import Profile from '../assets/imgs/profile.png';
export function Nav() {
    return (
        <nav className="bg-primary flex justify-between h-[4.688rem] p-4 gap-4">
            <h1 className='flex items-center gap-2 text-[clamp(1.5rem,_2.2vw,_1.875rem)] text-neutral-50 font-bold'><img className="h-11" src={Logo} alt="logo"/>TasKing</h1>
            <input className="bg-elements rounded-full w-[54.5%] flex items-center pl-8" placeholder="Buscar" type="text"/>
            <a className="flex gap-4 items-center" href="#">
                <p className="text-elements text-xl font-bold">Jason</p>
                <img className="w-12" src={Profile} alt="Profile picture"/>
            </a>
        </nav>
    );
}