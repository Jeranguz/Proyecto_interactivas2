
import { useState, useEffect } from "react";

export const useLocalStorage = () => {

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  const getData = async () => {
    try {
      const response = await fetch('http://interactivas_backend.test/api/auth/resolvetoken', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json'
        },
      });
      const data = await response.json();
      setData(data);
      setIsLoading(false);

      console.log(data)
    } catch (e) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return {
    data,
    isLoading

  }
}