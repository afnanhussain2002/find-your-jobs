import { useEffect, useState } from "react";
import Category from "./category/Category";
import Title from "../../../components/Title";


const JobCategory = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('./data/categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])
    return (
        <div>
           <Title title={'Job Category List'} description={'Explore thousands of job opportunities with all the information you need. Its your future'}/>
           <div className="sm:flex-row flex justify-around mt-5">
            {
                categories.map(category => <Category key={category.id} category={category}></Category>)
            }
           </div>

            
        </div>
    );
};

export default JobCategory;