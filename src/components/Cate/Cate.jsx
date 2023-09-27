import { Link } from "react-router-dom";

const Cate = ({ cate }) => {

    const { id, picture, title, category } = cate;

    const categorybgColor = cate.category_bg_color;
    const cartbgColor = cate.card_bg_color;
    const textColor = cate.text_bg_color;

    return (
        <Link to={`/proDetails/${id}`}>
            <div style={{ backgroundColor: cartbgColor }} className="card card-compact bg-base-100 shadow-xl">
                <figure><img className="w-full" src={picture} alt="Shoes" /></figure>
                <div className="mt-5 pl-4">
                    <button style={{ backgroundColor: categorybgColor, color: textColor }} className="py-1 px-3 rounded-lg">{title}</button>
                    <h2 style={{ color: textColor }} className='card-title'>{category}</h2>
                </div>
            </div>
        </Link>
    );
};

export default Cate;