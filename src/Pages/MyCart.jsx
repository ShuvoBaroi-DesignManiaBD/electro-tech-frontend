import { useEffect, useState } from "react";
import HeroInnerPages from "../Components/Hero/HeroInnerPages";
import { useAuth } from "../Hooks/useAuth";
import ProductCard from "../Components/Cards/ProductCard";
import { getCartItems } from "../Hooks/useData";
import { Spinner } from "@material-tailwind/react";
import { ToastContainer, toast } from "react-toastify";

const MyCart = () => {
    const { user } = useAuth();
    const [cartItems, setcartItems] = useState([]);
    const [showToast, setShowToast] = useState(false);
    console.log(user.uid);

    useEffect(() => {
        const getProducts = async () => {
            const data = await getCartItems(user.uid);
            data.length !== 0 ? setcartItems(data) : setcartItems(null);
            console.log(data);
        }
        getProducts();
    }, [user.uid]);
    {showToast? toast.success("Product removed from the cart"):''}
    console.log(cartItems);
    return (
        <>
            <HeroInnerPages>
                My cart
            </HeroInnerPages>
            <section className='min-h-[70vh] container mx-auto pt-20 lg:pt-[120px] pb-20 text-center'>
                <h2 className='primaryHeading'>Products</h2>
                <div className='gap-10 grid md:grid-cols-2 lg:grid-cols-4 px-4 lg:px-0 py-10'>
                    {/* {currentBrand.products.map(product => <ProductCard key={Date.now()+Math.random()} productData={product}></ProductCard>)} */}
                    {cartItems !== null ? (
                        cartItems.length === 0 ? (
                            // <Spinner color="blue" className="h-8 w-8 col-span-4 mx-auto" />
                            <p className='text-center textLg font-normal text-textColor col-span-4'>
                            Your cart is empty!
                        </p>
                        ) : (
                            cartItems.map((product) => (
                                <ProductCard
                                    key={product._id}
                                    cartItems={cartItems}
                                    setcartItems={setcartItems}
                                    productData={product}
                                    method={"delete"}
                                    showToast={setShowToast}
                                ></ProductCard>
                            ))
                        )
                    ) : (
                        <p className='text-center textLg font-normal text-textColor col-span-4'>
                            Your cart is empty!
                        </p>
                    )}

                </div>
            </section>
            <ToastContainer></ToastContainer>
        </>
    );
};

export default MyCart;