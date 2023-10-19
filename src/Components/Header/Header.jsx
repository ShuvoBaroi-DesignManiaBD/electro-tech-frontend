import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../Hooks/useAuth";
import { useEffect, useState } from "react";
import {
    Navbar,
    IconButton,
    Collapse,
} from "@material-tailwind/react";
import DesktopNav from "./DesktopNav";
import MobileNavigation from "./MobileNavigation";

export function Header() {
    const [openNav, setOpenNav] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false)
        );
    }, []);

    return (
        <header className="mx-auto w-full border-gray-200 border-b">
            <div className="container mx-auto">
                <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none py-2 px-4 md:px-0 lg:py-4 shadow-none">
                    <div className="flex items-center justify-between text-primary">
                        <img src="https://i.ibb.co/K5GvwL4/logo.webp" alt="logo" className="w-[220px] cursor-pointer" onClick={() => navigate("/")} />
                        <div className="flex items-center gap-4">
                            <div className="mr-4 hidden lg:block">{<DesktopNav></DesktopNav>}</div>
                            <IconButton
                                variant="text"
                                className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                                ripple={false}
                                onClick={() => setOpenNav(!openNav)}
                            >
                                {openNav ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        className="h-6 w-6"
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
                                        className="h-6 w-6"
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