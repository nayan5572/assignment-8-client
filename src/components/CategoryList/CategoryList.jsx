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
            <div className="grid grid-cols-4 gap-6">
                {
                    category.map(cate => <Cate key={cate.id} cate={cate}></Cate>)
                }
            </div>
        </div>
    );
};

export default CategoryList;