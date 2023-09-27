const Applied = ({ product }) => {
    

    const categorybgColor = product.category_bg_color;
    const cartbgColor = product.card_bg_color;
    const textColor = product.text_bg_color;

    return (
        <div style={{backgroundColor: cartbgColor}} className="card my-5 card-side bg-base-100 shadow-xl">
            <figure><img className="h-full" src={product.picture} alt="Movie" /></figure>
            <div className="card-body">
                <p><span className="py-1 px-3 rounded" style={{color: textColor, backgroundColor: categorybgColor}}>{product.title}</span></p>
                <p className="text-2xl font-semibold">{product.category}</p>
                <p style={{color: textColor}}>{product.price}</p>
                <p><button style={{backgroundColor: textColor}} className="py-2 px-4 rounded text-white">View Details</button></p>
            </div>
        </div>
    );
};

export default Applied;