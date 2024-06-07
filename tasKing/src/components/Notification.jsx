import '../index.css';
import React, { useState, useEffect } from 'react';
import Settings from '../assets/imgs/settings-svgrepo-com 3.png';
import Menu from '../assets/imgs/Menu.png';

export function Noti() {
    const [isOpenLeft, setIsOpenLeft] = useState(false);
    const [isOpenRight, setIsOpenRight] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1050);

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

    const handleResize = () => {
        setIsMobile(window.innerWidth < 1050);
    };

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
                            <button className="text-sm w-20 py-1 font-semibold rounded-lg bg-primary text-textWhite hover:opacity-50" onClick={selectAll}>Todas</button>
                            <button className="text-sm w-24 py-1 font-semibold rounded-lg bg-primary text-textWhite hover:opacity-50" onClick={showRead}>Leídas</button>
                            <button className="text-sm w-24 py-1 font-semibold rounded-lg bg-primary text-textWhite hover:opacity-50" onClick={showUnread}>No leídas</button>
                            <button className="text-sm w-28 py-1 font-semibold rounded-lg bg-primary text-textWhite hover:opacity-50" onClick={highLighted}>Destacadas</button>
                            <button className="text-sm w-32 py-1 font-semibold rounded-lg bg-primary text-textWhite hover:opacity-50" onClick={noHighLighted}>No destacadas</button>
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
                                <button className="block w-full py-2 text-left px-4 hover:bg-gray-100">No leídas Todas</button>
                                <button className="block w-full py-2 text-left px-4 hover:bg-gray-100">Destacar Todas</button>
                                <button className="block w-full py-2 text-left px-4 hover:bg-gray-100">No destacar Todas</button>
                                <button className="block w-full py-2 text-left px-4 hover:bg-gray-100">Eliminar Todas</button>
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

export function Notification({ title, body, time}) {

    const [highlighted, setHighlighted] = useState(false);
    const [read, setRead] = useState(false);
    const [showOptions, setShowOptions] = useState(false);
    
    const toggleRead = () => {
        setRead(!read);
    };

    const toggleHighlighted = () => {
        setHighlighted(!highlighted);
    };

    const deleteNotification = () => {
        // Implementación de la función Eliminar notificación
    };

    return (
        <div className={`flex items-center justify-between py-6 px-6 border-b border-gray-200 ${highlighted ? 'bg-yellow-100' : ''} ${read ? 'bg-gray-100' : ''}`} onMouseEnter={() => setShowOptions(true)} onMouseLeave={() => setShowOptions(false)}>
            <div className="flex items-center w-1/4 gap-2">
                <input type="checkbox" className="h-5 w-5" />
                <p className="text-base font-semibold text-gray-800 truncate">{title}</p>
            </div>
            <div className="w-1/4 text-center">
                <p className="text-sm text-gray-600 truncate">{body}</p>
            </div>
            <div className="text-right w-1/4">
                <p className="text-xs text-gray-400 truncate">{time}</p>
            </div>
            <div className={`ml-4 ${showOptions ? 'block' : 'hidden'}`}>
                <button className={`text-gray-800 hover:text-primary ${highlighted ? 'text-yellow-500' : ''}`} onClick={toggleHighlighted}>
                    <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M11 9a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"/>
                        <path fill-rule="evenodd" d="M9.896 3.051a2.681 2.681 0 0 1 4.208 0c.147.186.38.282.615.255a2.681 2.681 0 0 1 2.976 2.975.681.681 0 0 0 .254.615 2.681 2.681 0 0 1 0 4.208.682.682 0 0 0-.254.615 2.681 2.681 0 0 1-2.976 2.976.681.681 0 0 0-.615.254 2.682 2.682 0 0 1-4.208 0 .681.681 0 0 0-.614-.255 2.681 2.681 0 0 1-2.976-2.975.681.681 0 0 0-.255-.615 2.681 2.681 0 0 1 0-4.208.681.681 0 0 0 .255-.615 2.681 2.681 0 0 1 2.976-2.975.681.681 0 0 0 .614-.255ZM12 6a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" clip-rule="evenodd"/>
                        <path d="M5.395 15.055 4.07 19a1 1 0 0 0 1.264 1.267l1.95-.65 1.144 1.707A1 1 0 0 0 10.2 21.1l1.12-3.18a4.641 4.641 0 0 1-2.515-1.208 4.667 4.667 0 0 1-3.411-1.656Zm7.269 2.867 1.12 3.177a1 1 0 0 0 1.773.224l1.144-1.707 1.95.65A1 1 0 0 0 19.915 19l-1.32-3.93a4.667 4.667 0 0 1-3.4 1.642 4.643 4.643 0 0 1-2.53 1.21Z"/>
                    </svg>
                </button>
                <button className="text-primary hover:opacity-50" onClick={deleteNotification}>
                    <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M8.586 2.586A2 2 0 0 1 10 2h4a2 2 0 0 1 2 2v2h3a1 1 0 1 1 0 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a1 1 0 0 1 0-2h3V4a2 2 0 0 1 .586-1.414ZM10 6h4V4h-4v2Zm1 4a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Zm4 0a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Z" clip-rule="evenodd"/>
                    </svg>
                </button>
                <button className={`text-gray-800 hover:text-primary ${read ? 'text-green-500' : ''}`} onClick={toggleRead}>
                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M13.293 6.707a1 1 0 0 0-1.414-1.414L10 8.586 7.707 6.293a1 1 0 1 0-1.414 1.414l3 3a1 1 0 0 0 1.414 0l5-5a1 1 0 0 0 0-1.414z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>
        </div>
    );
}