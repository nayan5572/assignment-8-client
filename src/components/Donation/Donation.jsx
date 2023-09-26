import { useEffect, useState } from "react";
import { useLoaderData} from "react-router-dom";
import { getStorageProductApplication } from "../../utility/utility";


const Donation = () => {
    const donation = useLoaderData();

    const [item, setItem] = useState([]);

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
        </div>
    );
};

export default Donation;