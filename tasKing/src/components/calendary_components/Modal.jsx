import { useState } from 'react';
import placeHolder from '../../assets/imgs/placeholder-image.webp'
import { useFetchOptions } from '../hooks/useFetchOptions';


export function Modal({ closeModal, setEventList, eventList }) {
    const [image, setImage] = useState(placeHolder);
    const { tags, categories } = useFetchOptions();
    console.log('tags', tags)
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
                <div className="bg-white p-4 rounded-3xl shadow-lg grid md:w-[40rem] md:p-8 sm:h-auto overflow-auto h-[90%]">
                    <div className='relative'>
                        <h2 className="text-primary font-bold text-[clamp(1.5rem,_2vw,_2.25rem)] text-center">Agregar actividad</h2>
                        <button className='absolute top-1 right-0 font-bold' onClick={closeModal}>X</button>
                    </div>
                    
                    <form action="http://interactivas_backend.test/api/events/add" method='post' encType='multipart/form-data'>
                        <label htmlFor="title">Nombre</label>
                        <input type="text" placeholder="Nombre de la actividad" name='title' className="w-full p-2 my-2 border border-gray-300 rounded" />

                        <label htmlFor="description">Descripcion</label>
                        <input type="text" placeholder="Descripción" name='description' className="w-full p-2 my-2 border border-gray-300 rounded" />

                        <label htmlFor="start">Fecha de inicio</label>
                        <div className="grid grid-cols-2 gap-x-4">
                            <input type="date" name='start_date' className="w-full p-2 my-2 border border-gray-300 rounded" />
                            <input type="time" name='start_hour' className="w-full p-2 my-2 border border-gray-300 rounded" />
                        </div>

                        <label htmlFor="end">Fecha de fin</label>
                        <div className="grid grid-cols-2 gap-x-4">
                            <input type="date" name='end_date' className="w-full p-2 my-2 border border-gray-300 rounded" />
                            <input type="time" name='end_hour' className="w-full p-2 my-2 border border-gray-300 rounded" />
                        </div>

                        <input type="file" id="imageInput" name='image' onChange={handleImageChange} />

                        <div className='flex flex-col sm:flex-row gap-x-4 w-full'>
                            {image && <img src={image} alt="Preview" className="mt-2 w-auto max-h-[10rem] rounded object-cover" />}
                            <div className='w-full'>

                                <label htmlFor="tag">Etiqueta</label>
                                <select className="w-full p-2 my-2 border border-gray-300 rounded" name="tag">
                                    {tags.map(tag => (
                                        <option key={tag.id} value={tag.id}>{tag.name}</option>
                                    ))}
                                </select>

                                <label htmlFor="category">Categoria</label>
                                <select className="w-full p-2 my-2 border border-gray-300 rounded" name="category">
                                    {categories.map(category => (
                                        <option key={category.id} value={category.id}>{category.name}</option>
                                    ))}
                                </select>

                            </div>
                        </div>
                        <input type="hidden" name='user' value='1'/>
                        <input type="hidden" name='status' value='1'/>
                        <input type="hidden" name='course' value='1'/>
                        <button className="bg-primary text-white py-4 rounded-md mt-4 w-full" type='submit'>Guardar</button>
                    </form>
                </div>
            </div>
        </>
    )
}