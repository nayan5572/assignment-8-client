import { useLoaderData, useParams } from "react-router-dom";

const ProductDetails = () => {

    const dataData = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const item = dataData.find(item => item.id === idInt);

    return (
        <div className="">
            <div className="relative">
                <img src={item.picture} alt="Image" className="w-full h-auto" />
                <div className="absolute inset-x-0 bottom-0 bg-black opacity-50 h-36"></div>
                <div className="absolute bottom-0 left-0 right-0 py-9">
                    <button className="rounded-lg ml-9 py-4 px-6 bg-[#FF444A] text-white">Donate ${item.price}</button>
                </div>
            </div>
            <h2 className="text-4xl font-bold">{item.category}</h2>
            <p>{item.description}</p>
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