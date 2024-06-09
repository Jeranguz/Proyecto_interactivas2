import { useState, useEffect } from'react';

export const useFetchOptions = () => {
    const [tags, setTags] = useState([]);
    const [categories, setCategories] = useState([]);

    const getInfo = async () =>{
        try{
            const response1 = await fetch('http://interactivas_backend.test/api/tags/all');
            const tags = await response1.json();
            setTags(tags);

            const response2 = await fetch('http://interactivas_backend.test/api/categories/all');
            const categories = await response2.json();
            setCategories(categories);
        }catch(err){
            console.log(err);
        }
    }

    useEffect(() => {
        getInfo();
      }, []);
    
      return {
        tags,
        categories
      }
}