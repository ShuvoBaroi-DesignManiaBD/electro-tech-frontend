import { NavLink, useNavigate } from "react-router-dom";
import SocialLogin from "../Components/AuthElements/SocialLogin";
import { useAuth } from "../Hooks/useAuth";
import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

const Login = () => {
    const { signInWithEmail, user } = useAuth();
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        await signInWithEmail(email, password);
        // navigate("/");
    }
    const togglePass = () => {
        setShowPassword(!showPassword);
    }

    {
        if (user){
        return navigate("/") || <p className='text-center textLg font-normal text-textColor col-span-4'>
        Your cart is empty!
    </p>;
    } else {
        return (
            <>
            <section className="container px-4 md:px-0 pb-20 md:py-10 mx-auto flex flex-col md:flex-row justify-between">
                <img src="/images/login.webp" alt="login image" className="md:w-1/2" />
                <div className="w-full flex flex-col items-center justify-center mx-auto lg:py-0">
                    <div className="w-full bg-white rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="secondaryHeading text-gray-900">
                                Sign in to your account
                            </h1>
                            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block mb-2 text text-sm font-medium"
                                    >
                                        Your email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 placeholder-gray-400"
                                        placeholder="name@company.com"
                                        required
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="password"
                                        className="block mb-2 text text-sm font-medium"
                                    >
                                        Your password
                                    </label>
                                    <div className="relative">
                                        {showPassword ? <FiEye className="absolute bottom-3 right-3" onClick={togglePass}></FiEye> : <FiEyeOff className="absolute bottom-3 right-3" onClick={togglePass}></FiEyeOff>}
                                        <input
                                            type={showPassword ? 'text' : 'password'}
                                            name="password"
                                            minLength="6"
                                            id="password"
                                            placeholder="••••••••"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 placeholder-gray-400"
                                            required=""
                                        />
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input
                                                id="remember"
                                                aria-describedby="remember"
                                                type="checkbox"
                                                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 bg-gray-700 border-gray-600 focus:ring-primary-600 ring-offset-gray-800"
                                                required=""
                                            />
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label
                                                htmlFor="remember"
                                                className="text"
                                            >
                                                Remember me
                                            </label>
                                        </div>
                                    </div>
                                    <a
                                        href="#"
                                        className="text-sm font-medium text-primary-600 hover:underline text-primary-500"
                                    >
                                        Forgot password?
                                    </a>
                                </div>
                                <button
                                    type="submit"
                                    className="primaryBtn w-full"
                                >
                                    Sign in
                                </button>
                                {/* Social login */}
                                <SocialLogin></SocialLogin>
                                <p className="text">
                                    Don’t have an account yet?{" "}
                                    <NavLink
                                        to="/register"
                                        className="text-md font-bold text-primary"
                                    >
                                        Register
                                    </NavLink>
                                </p>
                            </form>
                        </div>
    
                    </div>
    
                </div>
            </section>
            </>
        )
    }}
        
    
    
};

export default Login;