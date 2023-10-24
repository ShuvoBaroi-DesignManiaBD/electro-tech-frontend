import { Outlet } from "react-router-dom";
import { useAuth } from "../Hooks/useAuth";
import Login from "../Pages/Login";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

const PrivateRoute = ({children}) => {

    const { user } = useAuth();
    if (user) {
        // return children
        return (
            <>
                <Outlet></Outlet>
                {children}
            </>
        );
    }

    return <Login></Login>
};

export default PrivateRoute;