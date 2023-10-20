import { useLoaderData } from "react-router-dom";
import NewsCard from "./NewsCard";
import Footer from "../Footer/Footer";
import About from "../About/About";
import NewsLetter from "../NewsLetter/NewsLetter";



const Home = () => {
    // load the data of news
    const news = useLoaderData();
    // console.log(news)

    return (
        <div>
            <div data-aos="fade-left" className="mt-10">
                <div className="hero w-full min-h-[300px] md:min-h-[600px] " style={{ backgroundImage: 'url("./food.jpg")' }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-2xl md:text-5xl font-bold">Food & Beverage</h1>
                            <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi.</p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>

            <div data-aos="fade-up-right" className="mt-10">
                <h3 className="text-3xl font-semibold text-center mb-5">Services</h3>
                {/* news container */}
                <div className="md:col-span-2 grid lg:grid-cols-3 gap-5">

                    {
                        news.map(aNews => <NewsCard key={aNews.id}
                            news={aNews}
                        ></NewsCard>)
                    }

                </div >

            </div>
            <About></About>
            <NewsLetter></NewsLetter>
            <Footer></Footer>
        </div>

    );
};

export default Home;