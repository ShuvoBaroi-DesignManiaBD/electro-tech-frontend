
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";

const ErrorPage = () => {
    return (
        <>
        <div className="flex flex-col items-center pb-20">
            <Header></Header>
            <div className="container mx-auto flex flex-col justify-center items-center">
                <img src="https://i.ibb.co/JFxtydk/404-electro.webp" alt="404 error" className="sm:max-w-[600px] mx-auto" />
                <h2 className="primaryHeading text-center mb-5">Oops! No data found.</h2>
                <p className="text-center text-xl">Please try another search</p>
            </div>
        </div>
        <Footer></Footer>
        </>
    );
};

export default ErrorPage;