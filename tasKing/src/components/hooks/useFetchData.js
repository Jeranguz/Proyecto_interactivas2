import { useEffect, useState } from 'react';

export const useFetchData = (setInfo) => {
    const [user, setUser] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const getInfo = async () => {
        try {
            //Fetch usuario
            const responseUser = await fetch('http://interactivas_backend.test/api/auth/resolvetoken', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    'Content-Type': 'application/json'
                },
            });
            const user = await responseUser.json();
            setUser(user);

            //Fetch eventos basandose en el usuario
            const responseEvents = await fetch('http://interactivas_backend.test/api/events/userevents/'+user.id);
            const events = await responseEvents.json();
            setInfo(events);
            setIsLoading(false)
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getInfo();
    }, []);

    return{
        user,
        isLoading
    }
}