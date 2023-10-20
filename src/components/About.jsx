
const About = () => {
    return (
        <section data-aos="fade-down-right" className="space-y-2">
            <h2 className="text-3xl font-semibold text-center mb-5">About Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 md:gap-7">
                <div className="card w-80 mx-auto bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="text-2xl font-semibold text-center">Details</h2>
                        <p className="leading-7">A career fairs management company is an organization that specializes in organizing and managing career fairs. They provide a platform for employers and job seekers to connect and interact with each other. </p>
                    </div>
                </div>
                <div className="card w-80 mx-auto bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="text-2xl font-semibold text-center">Our Mission</h2>
                        <p className="leading-7">Their mission is to help job seekers find employment opportunities and assist employers in finding qualified candidates. The company places a high emphasis on trust and security by ensuring that all.</p>
                    </div>
                </div>
                <div className="card w-80 mx-auto bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="text-2xl font-semibold text-center">Trust and Security</h2>
                        <p className="leading-7">Their goal is to create a positive experience for both employers and job seekers by providing a professional and organized environment.They aim to make the job search process easier for job seekers by providing them.</p>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default About;