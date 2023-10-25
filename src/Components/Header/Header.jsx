import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../Hooks/useAuth";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import {
    Navbar,
    IconButton,
    Collapse,
} from "@material-tailwind/react";
import DesktopNav from "./DesktopNav";
import MobileNavigation from "./MobileNavigation";
import {useThemeMode} from "../../Hooks/useTheme"

export function Header() {
    const [openNav, setOpenNav] = useState(false);
    // const [theme, setTheme] = useState('light');
    const navigate = useNavigate();
    const {changeTheme, theme} = useThemeMode();

    useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false)
        );
    }, []);

    // const changeTheme = () => {
    //     const html = document.documentElement;

    //     if (theme === 'light') {
    //         html.classList.remove('light');
    //         html.classList.add('dark', 'dark:bg-gray-900');
    //         setTheme('dark');
    //     } else {
    //         html.classList.remove('dark');
    //         html.classList.add('light');
    //         setTheme('light');
    //     }
    // }

    return (
        <header className="mx-auto w-full border-gray-200 dark:bg-gray-900  dark:border-gray-400 border-b">
            <div className="container mx-auto">
                <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none py-2 px-4 md:px-0 lg:py-4 shadow-none bg-transparent border-none dark:text-white">
                    <div className="flex items-center justify-between ">
                        <img src={theme === 'light'? "https://i.ibb.co/K5GvwL4/logo.webp" : 'https://i.ibb.co/TWsN5hW/logo-dark.webp'} alt="logo" className="w-[220px] cursor-pointer" onClick={() => navigate("/")} />
                        <div className="flex items-center gap-4">
                            <div className="mr-4 hidden lg:block">{
                            <>
                            <DesktopNav></DesktopNav>
                            </>
                            }</div>
                            {theme === 'light' ? <BsFillSunFill className="text-textColor cursor-pointer w-10 h-10 bg-gray-200 p-3 rounded-full" onClick={changeTheme}></BsFillSunFill>:
                            <BsFillMoonFill className="text-textColor cursor-pointer w-10 h-10 bg-gray-200 p-3 rounded-full" onClick={changeTheme}></BsFillMoonFill>
                            }
                            <IconButton
                                variant="text"
                                className="text-primary ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                                ripple={false}
                                onClick={() => setOpenNav(!openNav)}
                            >
                                {openNav ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        className="h-6 w-6 text-primary"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 text-primary"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </IconButton>
                            
                        </div>
                    </div>
                    <Collapse open={openNav}>
                        <div>
                        <MobileNavigation></MobileNavigation>
                        </div>
                    </Collapse>
                </Navbar>
            </div>
        </header>
    );
}
export default Header;