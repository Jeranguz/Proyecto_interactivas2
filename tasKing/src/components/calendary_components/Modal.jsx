import { useState } from 'react';
import placeHolder from '../../assets/imgs/placeholder-image.webp'


export function Modal({ closeModal, setEventList, eventList }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [startDate, setStartDate] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endDate, setEndDate] = useState('');
    const [endTime, setEndTime] = useState('');
    const [image, setImage] = useState(placeHolder);
    const handleImageChange = (e) => {
        const selectedImage = e.target.files[0];
        setImage(URL.createObjectURL(selectedImage));
        console.log(image)
    }
    const handleSave = () => {
        const newEvent = {
            id: eventList.length + 1,
            title,
            description,
            start: `${startDate}T${startTime}`,
            end: `${endDate}T${endTime}`,
            image,
            status: true
        };
        setEventList([...eventList, newEvent]);
        closeModal();
    };
    return (
        <>
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50" ></div>
            <div className="fixed inset-0 flex items-center justify-center z-50 ">
                <div className="bg-white p-4 rounded-3xl shadow-lg grid md:w-[40rem] md:p-8">
                    <h2 className="text-primary font-bold text-4xl text-center">Agregar actividad</h2>
                    <input type="text" placeholder="Nombre de la actividad" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full p-2 my-2 border border-gray-300 rounded" />
                    <input type="text" placeholder="Descripción" value={description} onChange={(e) => setDescription(e.target.value)} className="w-full p-2 my-2 border border-gray-300 rounded" />
                    <label htmlFor="">Fecha de inicio</label>
                    <div className="grid grid-cols-2 gap-x-4">
                    <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} className="w-full p-2 my-2 border border-gray-300 rounded" />
                                    <input type="time" value={startTime} onChange={(e) => setStartTime(e.target.value)} className="w-full p-2 my-2 border border-gray-300 rounded" />
                                </div>
                                <div className="grid grid-cols-2 gap-x-4">
                                    <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} className="w-full p-2 my-2 border border-gray-300 rounded" />
                                    <input type="time" value={endTime} onChange={(e) => setEndTime(e.target.value)} className="w-full p-2 my-2 border border-gray-300 rounded" />
                    </div>
                    <input type="file" id="imageInput" onChange={handleImageChange}  />
                    {image && <img src={image} alt="Preview" className="mt-2 w-full max-h-[15rem] rounded object-cover" />}
                    <button className="bg-primary text-white py-4 rounded-md mt-4" onClick={handleSave}>Cerrar</button>
                </div>
            </div>
        </>
    )
}