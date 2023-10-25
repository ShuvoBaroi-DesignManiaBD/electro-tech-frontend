import { NavLink, useNavigate } from "react-router-dom";
import { useThemeMode } from "../../Hooks/useTheme";
import { useEffect } from "react";
import { useState } from "react";

const Footer = () => {
    const navigate = useNavigate();
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const [mode, setMode] = useState('light');
    const {theme} = useThemeMode();
    useEffect(() => {
        setMode(theme)
    }, [theme])
    
    return (
        <footer className="border-t bg-[#f2f7ff] dark:bg-gray-800">
            <div className="w-full container mx-auto p-4 md:pt-8">
                <div className="flex flex-col gap-5 items-center justify-between mx-auto py-4">
                    <img src={mode === 'light'? "https://i.ibb.co/K5GvwL4/logo.webp" : 'https://i.ibb.co/TWsN5hW/logo-dark.webp'} alt="logo" className="w-[250px] cursor-pointer mt-5" onClick={() => navigate("/")} />
                    <nav className="text-textColor space-x-10 my-5 dark:text-white">
                        <NavLink to="/" className="font-medium">
                            Home
                        </NavLink>
                        <NavLink to="/products" className="font-medium">
                            Products
                        </NavLink>
                    </nav>
                    <div className="w-full">
                        <p className="text-[12px] mx-auto text-textColor text-center md:w-[40%] dark:text-white">
                            This is a test project created for demonstration purposes. Any resemblance to real products or entities is purely coincidental.
                        </p>
                    </div>
                </div>
                <hr className="my-3 sm:mx-auto md:my-4" />
                <span className="block text-sm text-headingColor dark:text-white text-center">
                    {currentYear}{" - "} Electro Tech. All Rights Reserved.
                </span>
            </div>
        </footer>

    );
};

export default Footer;