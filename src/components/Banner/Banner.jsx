
const Banner = () => {
    return (
        <section>
            <div className="pt-16 pb-64">
                <h2 className="text-5xl font-bold text-center">I Grow By Helping People In Need</h2>
                <div className="form-control mt-10">
                    <div className="input-group flex justify-center">
                        <input type="text" placeholder="Search here...." className="input input-bordered w-[470px] h-[50px]" />
                        <button className="btn btn-square px-12 bg-[#FF444A] text-white font-semibold">
                            Search
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;