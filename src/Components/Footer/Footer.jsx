import { NavLink, useNavigate } from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate();
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    return (
        <footer className="border-t bg-[#f2f7ff]">
            <div className="w-full container mx-auto p-4 md:pt-8">
                <div className="flex flex-col gap-5 items-center justify-between mx-auto py-4">
                    <img src="https://i.ibb.co/K5GvwL4/logo.webp" alt="logo" className="w-[250px] cursor-pointer mt-5" onClick={() => navigate("/")} />
                    <nav className="text-textColor space-x-10 my-5">
                        <NavLink to="/" className="font-medium">
                            Home
                        </NavLink>
                        <NavLink to="/products" className="font-medium">
                            Products
                        </NavLink>
                    </nav>
                    <div className="w-full">
                        <p className="text-[12px] mx-auto text-textColor text-center md:w-[40%]">
                            This is a test project created for demonstration purposes. Any resemblance to real products or entities is purely coincidental.
                        </p>
                    </div>
                </div>
                <hr className="my-3 sm:mx-auto md:my-4" />
                <span className="block text-sm text-headingColor text-center">
                    {currentYear}{" - "} Electro Tech. All Rights Reserved.
                </span>
            </div>
        </footer>

    );
};

export default Footer;