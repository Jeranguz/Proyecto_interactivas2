import { useState, useEffect } from'react';

export const useFetchOptions = () => {
    const [tags, setTags] = useState([]);
    const [categories, setCategories] = useState([]);
    const [courses, setCourses] = useState([]);

    const getInfo = async () =>{
        try{
            const response1 = await fetch('http://interactivas_backend.test/api/tags/all');
            const tags = await response1.json();
            setTags(tags);

            const response2 = await fetch('http://interactivas_backend.test/api/categories/all');
            const categories = await response2.json();
            setCategories(categories);

            const response3 = await fetch('http://interactivas_backend.test/api/courses/all');
            const courses = await response3.json();
            setCourses(courses);
        }catch(err){
            console.log(err);
        }
    }

    useEffect(() => {
        getInfo();
      }, []);
    
      return {
        tags,
        categories,
        courses
      }
}