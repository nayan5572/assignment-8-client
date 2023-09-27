import { useLoaderData, useParams } from "react-router-dom";
import Swal from 'sweetalert2/dist/sweetalert2.js';

import 'sweetalert2/src/sweetalert2.scss';
import { saveProductApplication } from "../../utility/utility";

const ProductDetails = () => {

    const dataData = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const item = dataData.find(item => item.id === idInt);

    // css style tailwindCss
    const textColor = item.text_bg_color;

   
    const handleSweetAlert = ()=>{
        saveProductApplication(idInt);
        Swal.fire({
            title: 'Successfully Added!',
            icon: 'success',
            confirmButtonText: 'Ok'
          });
    }

    return (
        <div className="">
            <div className="relative">
                <img src={item.picture} alt="Image" className="w-[1320px] h-[700px] mx-auto" />
                <div className="absolute inset-x-0 bottom-0 bg-black opacity-50 h-36 w-[1320px] mx-auto"></div>
                <div className="absolute bottom-0 left-28 right-0 py-9">
                    <button onClick={handleSweetAlert} style={{backgroundColor: textColor}} className="rounded-lg ml-9 py-4 px-6 text-white">Donate ${item.price}</button>
                </div>
            </div>
            <h2 className="text-4xl font-bold mt-14">{item.category}</h2>
            <p className="mt-6">{item.description}</p>
        </div>
    );
};

export default ProductDetails;


{/* // <div>
        //     <h2>Data: {dataData.length}</h2>
        //     <div>
        //         <img className="w-[1320px] h-[550px]" src={item.picture} alt="" />
        //         <button className="btn">{item.price}</button>
        //     </div>
        // </div> */}