import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStorageProductApplication } from "../../utility/utility";
import Applied from "../Applied/Applied";


const Donation = () => {
    const donation = useLoaderData();

    const [item, setItem] = useState([]);

    // see all button click work
    const [dataLength, setDataLength] = useState(4);

    useEffect(() => {
        const storeItems = getStorageProductApplication();
        if (donation.length > 0) {
            const appliedItem = [];
            for (const id of storeItems) {
                const items = donation.find(items => items.id === id);
                if (items) {
                    appliedItem.push(items);
                }
            }
            setItem(appliedItem);
        }
    }, [donation]);

    return (
        <div>
            <h2>This is Donation: {item.length}</h2>
            <div className="grid grid-cols-2 gap-x-5">
                {
                    item.slice(0, dataLength).map(product => <Applied key={product.id} product={product}></Applied>)
                }
            </div>
            <div className="mt-10 mb-4 text-center">
                <div className={dataLength === item.length && 'hidden'}>
                    <button onClick={() => setDataLength(dataLength.length)} className="bg-[#009444] py-4 px-7 rounded-lg font-semibold text-white">See All</button>
                </div>
            </div>
        </div>
    );
};

export default Donation;