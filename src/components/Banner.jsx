
const Banner = () => {
    return (
        <div className="mt-6" data-aos="fade-down-right">
            <div className="hero w-full min-h-[300px] md:min-h-[600px] " style={{ backgroundImage: 'url("./food.jpg")' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-2xl md:text-5xl font-bold">Food House</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi.</p>
                        {/* <button className="btn btn-primary">Get Started</button> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;