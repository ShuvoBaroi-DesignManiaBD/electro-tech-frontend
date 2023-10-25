import { Outlet } from "react-router-dom";
import { useAuth } from "../Hooks/useAuth";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import { Spinner } from "@material-tailwind/react";

const MainRoute = () => {
    const { loading } = useAuth();

    if (loading) {
        return (
            <div className="h-screen flex justify-center items-center gap-8">
                <Spinner color="blue" className="h-12 w-12" />
            </div>
        );
    } else {
        return <>
            <Header></Header>
            <Outlet className="min-h-screen"></Outlet>
            <Footer></Footer>
        </>
    }
};

export default MainRoute;