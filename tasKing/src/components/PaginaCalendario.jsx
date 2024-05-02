import { Calendario } from "./Calendario";
import { SideBar } from "./SideBar";

export function PaginaCalendario() {
    return (
        <>
            <div className='flex'>
                <SideBar />
                <div className="grid grid-cols-[repeat(5_,1fr)] gap-4 w-[90%] m-auto mt-8 auto-rows-[minmax(70px_,auto)]">
                    <Calendario />
                </div>
            </div>
        </>
    )
}