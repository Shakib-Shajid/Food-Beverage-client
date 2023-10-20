

const About = () => {
    return (
        <section data-aos="fade-down-right" className="space-y-2 mb-2">
            <h2 className="text-3xl font-semibold text-center mb-5">About Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 md:gap-7">
                <div className="card w-80 mx-auto bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="text-2xl font-semibold text-center">Details</h2>
                        <p className="leading-7">In our food and beverage shop, it's all about the finer details. We understand that it's those subtle nuances that turn a simple meal or drink into an extraordinary experience. From the choice of the freshest ingredients to the precision in preparation. </p>
                    </div>
                </div>
                <div className="card w-80 mx-auto bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="text-2xl font-semibold text-center">Our Mission</h2>
                        <p className="leading-7">Our mission is to bring a taste of delight to your day. We aspire to provide more than just sustenance; we aim to create moments of joy and satisfaction. Our dedication to this mission drives us to innovate, improve.</p>
                    </div>
                </div>
                <div className="card w-80 mx-auto bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="text-2xl font-semibold text-center">Trust and Security</h2>
                        <p className="leading-7">Trust and security are the cornerstones of our establishment. We meticulously select our suppliers, ensuring quality and safety, and maintain the highest standards of hygiene and authenticity in our offerings. </p>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default About;