// import { useEffect, useState } from "react";

// export const useFetchEvent = (id) => {
//   const [data, setData] = useState([]);
//   console.log('ejecute la funcion')
//   const getData = async () => {
//     console.log('entre a getData')
//     try {
//       const response = await fetch("http://interactivas_backend.test/api/events/detail/" + id);
//       const data = await response.json();
//       setData(data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     console.log('Entre a useEffect')
//     getData();
//   }, []);

//   return {
//     data
//   };
// };
import { useEffect, useState } from "react";

export const useFetchEvent = (id) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    console.log('getData')
    try {
      const response = await fetch("http://interactivas_backend.test/api/events/detail/"+id);
      const data = await response.json();
      setData(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log('useEffect')
    getData();
  }, []);

  return {
    data,
    isLoading
  };
};