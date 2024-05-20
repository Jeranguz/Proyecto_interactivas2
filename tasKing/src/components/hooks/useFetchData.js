import { useState, useEffect } from'react';

export const useFetchData = (url, setInfo) => {
    const getInfo = async () =>{
        try{
            const response = await fetch(url);
            const info = await response.json();
            setInfo(info);
            console.log(Array.isArray(info));
            console.log(info);
        }catch(err){
            console.log(err);
        }
    }

    useEffect(() => {
        getInfo();
      }, []);
}