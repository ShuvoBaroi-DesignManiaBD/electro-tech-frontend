import { Link } from "react-router-dom";

const HeroInnerPages = ({children}) => {
    return (
        <div className="bg-primaryLight from-primary py-10 md:p1-20">
            <div className="container flex gap-3 justify-start items-center mx-auto px-4 md:px-0">
            <Link to="/" className="underline">Home</Link> / <h2 className="textLg font-bold">{children}</h2>
            </div>
        </div>
    );
};

export default HeroInnerPages;