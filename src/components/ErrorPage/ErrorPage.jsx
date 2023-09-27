import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="text-center mt-12">
            <h1 className="text-red-500 text-8xl mb-4">404</h1>
            <button className="btn bg-green-700 text-white hover:bg-red-400"><Link to="/">Go Back Home</Link></button>
        </div>
    );
};

export default ErrorPage;