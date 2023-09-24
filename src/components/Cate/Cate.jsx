
const Cate = ({ cate }) => {


    const {picture, title, category, category_bg_color, card_bg_color, text_button_bg_color, Description} = cate;

    const categorybgColor = cate.category_bg_color;
    const cartbgColor = cate.card_bg_color;
    const textColor = cate.text_bg_color;

    return (
        <div style={{backgroundColor: cartbgColor}} className="card card-compact bg-base-100 shadow-xl">
            <figure><img className="w-full" src={picture} alt="Shoes" /></figure>
            <div className="card-body">
                <p style={{backgroundColor: categorybgColor, color: textColor}} className="">{title}</p>
                <h2 style={{color: textColor}} className='card-title'>{category}</h2>
            </div>
        </div>
    );
};

export default Cate;