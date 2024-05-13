import { SideBar } from "./SideBar";
import Profile from '../assets/imgs/profile.png';
import { Task } from "./Task_components/Task";



export function PaginaTareas (){
    return(
        <div className='flex h-full'>
                <SideBar />
                <div className='w-[90%] laptop:w-[77%]  m-auto mt-2 '>
                    <div className=' flex justify-between  m-auto mt-6' >
                        <h1 className='text-[clamp(1rem,_2.9vw,_3.75rem)] font-bold'>Tareas</h1>
                        <div className='flex items-center gap-4'>
                            <div className='text-end'>
                                <h2 className="font-bold">Jason</h2>
                                <p>Jason_morales@gmail.com</p>
                            </div>
                            <img className='w-[2.688rem] h-[2.688rem]' src={Profile} alt="" />
                        </div>

                    </div>
                    {/* grid-rows-[13rem,13rem,20rem] */}
                    <div className="grid laptop:grid-cols-[repeat(4_,1fr)] md:grid-cols-3 grid-cols-1 gap-4 mt-8 h-[80vh] ">
                        <div className="col-[1/5] bg-textWhite m-auto w-full h-full mt-0 rounded-3xl md:p-8 overflow-scroll pt-4">
                            <div className="grid grid-cols-[repeat(auto-fit,minmax(316px,1fr))] place-items-center gap-y-8">
                                <Task />
                                <Task />
                                <Task />
                                <Task />
                                <Task />
                                <Task />
                                <Task />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}