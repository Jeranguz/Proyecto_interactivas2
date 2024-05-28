import '../index.css';
import React, { useState, useEffect } from 'react';
import Settings from '../assets/imgs/settings-svgrepo-com 3.png';
import Menu from '../assets/imgs/Menu.png';

export function Noti() {
    const [isOpenLeft, setIsOpenLeft] = useState(false);
    const [isOpenRight, setIsOpenRight] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1050); // Detecta si la pantalla es móvil

    const toggleMenuLeft = () => {
        setIsOpenLeft(!isOpenLeft);
    };

    const toggleMenuRight = () => {
        setIsOpenRight(!isOpenRight);
    };

    const handleOutsideClick = () => {
        if (isOpenLeft) {
            setIsOpenLeft(false);
        }
        if (isOpenRight) {
            setIsOpenRight(false);
        }
    };

    const selectAll = () => {
        // Implementación de la función Seleccionar todo
    };

    const showRead = () => {
        // Implementación de la función Mostrar leídas
    };

    const showUnread = () => {
        // Implementación de la función Mostrar no leídas
    };

    const highLighted = () => {
        // Implementación de la función Mostar destacadas
    };

    const noHighLighted = () => {
        // Implementación de la función Mostrar no destacadas
    };

    // Función para manejar el cambio en el tamaño de la ventana
    const handleResize = () => {
        setIsMobile(window.innerWidth < 1050);
    };

    // Agregar un event listener para detectar cambios en el tamaño de la ventana
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return(
        <div className="grid">
            <div className="flex items-center justify-between mx-8 my-8">
                <div className="flex gap-4 items-center justify-center laptop:overflow-y-scroll">
                    {isMobile ? (
                        <div className="relative">
                            <button onClick={toggleMenuLeft} className="relative z-10"><img src={Menu} alt="" /></button>
                            {isOpenLeft && (
                                <div className="absolute top-0 left-0 mt-8 w-48 bg-white border border-gray-300 rounded-lg shadow-lg z-20">
                                    <button className="block w-full py-2 text-left px-4 hover:bg-gray-100" onClick={selectAll}>Todas</button>
                                    <button className="block w-full py-2 text-left px-4 hover:bg-gray-100" onClick={showRead}>Leídas</button>
                                    <button className="block w-full py-2 text-left px-4 hover:bg-gray-100" onClick={showUnread}>No leídas</button>
                                    <button className="block w-full py-2 text-left px-4 hover:bg-gray-100" onClick={highLighted}>Destacadas</button>
                                    <button className="block w-full py-2 text-left px-4 hover:bg-gray-100" onClick={noHighLighted}>No destacadas</button>
                                </div>
                            )}
                            <div onClick={handleOutsideClick} className={`fixed inset-0 ${isOpenLeft ? 'block' : 'hidden'}`} />
                        </div>
                    ) : (
                        <>
                            <button className="text-sm w-20 font-semibold rounded-lg bg-primary text-textWhite hover:opacity-50" onClick={selectAll}>Todas</button>
                            <button className="text-sm w-24 font-semibold rounded-lg bg-primary text-textWhite hover:opacity-50" onClick={showRead}>Leídas</button>
                            <button className="text-sm w-24 font-semibold rounded-lg bg-primary text-textWhite hover:opacity-50" onClick={showUnread}>No leídas</button>
                            <button className="text-sm w-28 font-semibold rounded-lg bg-primary text-textWhite hover:opacity-50" onClick={highLighted}>Destacadas</button>
                            <button className="text-sm w-32 font-semibold rounded-lg bg-primary text-textWhite hover:opacity-50" onClick={noHighLighted}>No destacadas</button>
                        </>
                    )}
                </div>
                <div className="flex gap-8 items-center justify-center">
                    <span className="text-sm font-semibold text-primary">Página</span>
                    <button className="text-sm font-semibold text-primary">{"<"}</button>
                    <button className="text-sm font-semibold text-primary">{">"}</button>
                    <div className="relative">
                        <button onClick={toggleMenuRight} className="relative z-10"><img src={Menu} alt="" /></button>
                        {isOpenRight && (
                            <div className="absolute top-0 right-0 mt-8 w-48 bg-white border border-gray-300 rounded-lg shadow-lg z-20">
                                <button className="block w-full py-2 text-left px-4 hover:bg-gray-100">Leídas Todas</button>
                                <button className="block w-full py-2 text-left px-4 hover:bg-gray-100">Eliminar Todas</button>
                                <button className="block w-full py-2 text-left px-4 hover:bg-gray-100">Destacar Todas</button>
                            </div>
                        )}
                        <div onClick={handleOutsideClick} className={`fixed inset-0 ${isOpenRight ? 'block' : 'hidden'}`} />
                    </div>
                    <button className="text-sm font-semibold text-primary"><img src={Settings}alt="" /></button>
                </div>
            </div>
        </div>
    );
}

export function Notification({ title, body, time }) {

    const [highlighted] = useState(false);
    const [read, setRead] = useState(false);
    const [showOptions, setShowOptions] = useState(false);
    
    const toggleRead = () => {
        setRead(!read);
    };

    const archive = () => {
        // Implementación de la función de archivar
    };

    const deleteNotification = () => {
        // Implementación de la función de borrar
    };

    const postpone = () => {
        // Implementación de la función de posponer
    };

    return (
        <div
            className={` laptop:h-[80%]  flex items-center py-4 px-8 border-b border-gray-200 ${highlighted ? 'bg-yellow-100' : ''} ${read ? 'bg-gray-100' : ''}`}
            onMouseEnter={() => setShowOptions(true)}
            onMouseLeave={() => setShowOptions(false)}
        >
            <div className="flex-shrink-0">
                <input type="checkbox" className="h-5 w-5" />
            </div>
            <div className="ml-4 flex-1">
                <div className="flex justify-between">
                    <p className="text-base font-semibold text-gray-800">{title}</p>
                    <div className="flex gap-2 items-center"></div>
                </div>
                <p className="text-sm text-gray-600">{body}</p>
                <p className="text-xs text-gray-400">{time}</p>
            </div>
            <div className={`ml-4 ${showOptions ? 'block' : 'hidden'}`}>
                <button className="text-gray-500 hover:text-gray-800" onClick={archive}>
                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M3 5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5zm5 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0-4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0-4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm4 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0-4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0-4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" clipRule="evenodd" />
                    </svg>
                </button>
                <button className="text-gray-500 hover:text-gray-800" onClick={deleteNotification}>
                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5 3a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2h3a1 1 0 0 1 0 2h-.586l-1.707 14.465A2 2 0 0 1 13.707 20H6.293a2 2 0 0 1-1.707-3.535L4.586 5H4a1 1 0 0 1 0-2h1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1H10V3z" clipRule="evenodd" />
                    </svg>
                </button>
                <button
                    className={`text-gray-500 hover:text-gray-800 ${read ? 'text-green-500' : ''}`}
                    onClick={toggleRead}
                >
                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M13.293 6.707a1 1 0 0 0-1.414-1.414L10 8.586 7.707 6.293a1 1 0 1 0-1.414 1.414l3 3a1 1 0 0 0 1.414 0l5-5a1 1 0 0 0 0-1.414z" clipRule="evenodd" />
                    </svg>
                </button>
                <button className="text-gray-500 hover:text-gray-800" onClick={postpone}>
                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12 9a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm2 2a2 2 0 1 0-4 0 2 2 0 0 0 4 0zm2-8a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v7H2a1 1 0 0 0 0 2h1v2a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-2h1a1 1 0 0 0 0-2h-1V3zm-2 14H5v-2h10v2zm0-4H5V6h10v7zm-2-6a1 1 0 1 0-2 0 1 1 0 0 0 2 0z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>
        </div>
    );
}