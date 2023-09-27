import { Chart } from "react-google-charts";
import { useLoaderData } from 'react-router-dom';
import { getStorageProductApplication } from '../../utility/utility';


const Statistics = () => {

    const picData = useLoaderData();
    const localData = getStorageProductApplication();

    const data2 = [
        ["Task", "Hours per Day"],
        ["Total Donation", picData.length],
        ["Your Donation", localData.length],
    ];

    const options = {
        title: "Total Donation",
    };

    return (
        <div className=''>
            <div>
                <Chart
                    chartType="PieChart"
                    data={data2}
                    options={options}
                    width={"100%"}
                    height={"400px"}
                />
            </div>
        </div>
    );
};

export default Statistics;