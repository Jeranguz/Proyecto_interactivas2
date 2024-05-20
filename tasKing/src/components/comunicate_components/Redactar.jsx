import '../../index.css';
import Profile from '../../assets/imgs/profile.png';
import Lupa from '../../assets/imgs/lupa.png'

export function Redactar() {
    return (
        <div className='w-[100%] h-[100%] flex border-l-4'>
            <div class=" w-full mx-auto p-4 bg-white dark:bg-zinc-800 rounded-r-3xl max-sm:rounded-3xl shadow-lg">
                <form className=' mt-4 ml-2 mr-2'>
                    <div class="mb-4 ">
                        <label for="from" class="block text-sm font-medium mb-4 text-zinc-700 ">De</label>
                        <input type="email" id="from" name="from" value="JUAN ANTONIO VARGAS ARIAS Juanvargas27@gmail.com" class="mt-1 block w-full px-3 py-2 border border-zinc-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" disabled/>
                    </div>
                    <div class="mb-4">
                        <label for="to" class="block text-sm font-medium text-zinc-700 mb-4">Destinatario</label>
                        <input type="email" id="to" name="to" class="mt-1 block w-full px-3 py-2 border border-zinc-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                    </div>
                    <div class="mb-4">
                        <label for="subject" class="block text-sm font-medium text-zinc-700 mb-4">Asunto</label>
                        <input type="text" id="subject" name="subject" class="mt-1 block w-full px-3 py-2 border border-zinc-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                    </div>
                    <div class="mb-6">
                        <label for="message" class="block text-sm font-medium text-zinc-700 mb-4">Mensaje</label>
                        <textarea id="message" name="message" rows="4" class="mt-1 h-[12rem] block w-full px-3 py-2 border border-zinc-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></textarea>
                    </div>
                    <div class="flex justify-between">
                        <button type="submit" class="inline-flex justify-center w-[15rem] max-sm:mr-6 py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">ENVIAR</button>
                        <button type="button" class="inline-flex justify-center w-[15rem]  py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">Cancelar</button>
                    </div>
                </form>
            </div>
        </div>
        
    );
}