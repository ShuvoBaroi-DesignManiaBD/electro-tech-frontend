
import { Link, useLoaderData } from "react-router-dom";
import BrandCard from "../Components/Cards/BrandCard";

const Home = () => {
    const brands = useLoaderData();
    // console.log(brands);
    return (
        <>
            {/* Hero section */}
            <section className="flex items-center md:py-5 bg-[url('https://i.ibb.co/M5h90r4/hero-bg.webp')] bg-cover h-[650px] bg-center">
                <div className="container flex flex-col-reverse md:flex-row md:items-center px-4 py-12 mx-auto gap-8 xl:gap-0">
                    <div className="w-full md:w-1/2 flex flex-col gap-5 justify-center text-center md:text-left items-center md:items-start lg:col-span-7" data-aos="fade-in" data-aos-duration="5000">
                        <h1 className="primaryHeading text-3xl lg:text-6xl font-extrabold leading-auto lg:leading-[70px]">
                            Welcome to <br />
                            <span className="text-primary">Electro Tech</span>
                        </h1>
                        <p className="max-w-xl md:text lg:text-lg md:font-normal font-normal text-textColor">
                        Explore a world of cutting-edge technology curated from leading brands like Apple, Samsung, Sony, Google, Intel, and more. Elevate your digital experience with the latest in smartphones, gadgets, and electronics. Quality you can trust, innovation that inspires—your journey into the future starts here.
                        </p>

                        <div className="flex justify-center md:justify-start gap-5 py-4">
                            <Link to="/products" className="primaryBtn">
                                View products
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            {/* Brands section */}
            <section className="py-20" id="brands" >
                <div className="container px-4 mx-auto lg:px-6 ">
                    <div className="mx-auto max-w-screen-md text-center md:text-left" data-aos="fade" data-aos-duration="3000">
                        <h2 className="mb-4 text-center text-4xl tracking-tight font-extrabold text-headingColor">
                            Featured Brands
                        </h2>
                        <p className="font-light text-center text-textColor lg:mb-16 text">
                        Experience excellence with our curated selection of top-tier brands. At <strong>Electro Tech</strong>, we take pride in offering products from industry leaders who set the standard for quality, innovation, and reliability. Explore the best from Apple, Samsung, Sony, Google, Intel, and more.
                        </p>
                    </div>
                    <div className="grid gap-8 mt-10 md:grid-cols-2 lg:grid-cols-3" data-aos="fade-up" data-aos-duration="5000">
                        {brands?.map(brand => <BrandCard key={brand._id} brand={brand}></BrandCard>)}
                    </div>
                </div>
            </section>
            {/* About us section */}
            <section className="bg-[#f5f9ff] py-16">
                <div className="container flex flex-col-reverse gap-4 lg:flex-row md:justify-between px-4 mx-auto">
                    <div className="flex flex-col justify-center items-center gap-4 text-center lg:text-left lg:items-start space-y-3 lg:col-span-7"
                    data-aos="fade" data-aos-duration="5000"
                    >
                        <h1 className="md:primaryHeading text-3xl text-center lg:text-left font-extrabold">
                            About <span className="text-primary">Electro Tech</span>
                        </h1>
                        <p className="text-center lg:text-left max-w-2xl text leading-7 font-normal text-textColor">
                        At <strong>Electro Tech</strong>, we are more than just a destination for electronics—we are a passion-driven team dedicated to bringing you the best in technology. With a commitment to quality and a love for innovation, we've curated a collection of top-notch products from renowned brands. Our journey is fueled by the desire to connect you with the latest advancements and make every interaction with technology a seamless delight. Join us as we redefine the future, one gadget at a time.
                        </p>

                        <div className="flex gap-5">
                            <Link to="/products" className="primaryBtn">
                                Products from top brands
                            </Link>
                        </div>
                    </div>
                    <div className="lg:mt-0 lg:col-span-5 flex justify-center">
                        <img
                            src="https://i.ibb.co/j4F5GKX/about-us-electro.webp"
                            alt="About Electro Tech"
                            data-aos="fade-up" data-aos-duration="5000"
                        />
                    </div>
                </div>
            </section>

        </>
    )
};

export default Home;