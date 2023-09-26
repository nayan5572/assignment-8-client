import { useEffect, useState } from "react";
import Cate from "../Cate/Cate";


const CategoryList = () => {


    const [category, setCategory] = useState([]);

    useEffect(() => {
        fetch('donate.json')
            .then(res => res.json())
            .then(data => setCategory(data))
    }, []);


    return (
        <div>
            <h1>I am try it: {category.length}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {
                    category.map(cate => <Cate key={cate.id} cate={cate}></Cate>)
                }
            </div>

        </div>
    );
};

export default CategoryList;