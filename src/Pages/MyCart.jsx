import { useEffect, useState } from "react";
import HeroInnerPages from "../Components/Hero/HeroInnerPages";
import { useAuth } from "../Hooks/useAuth";
import ProductCard from "../Components/Cards/ProductCard";
import { getCartItems } from "../Hooks/useData";

const MyCart = () => {
    const { user } = useAuth();
    const [cartItems, setcartItems] = useState([]);
    console.log(user.uid);

    useEffect(() => {
        const getProducts = async () => {
            const data = await getCartItems(user.uid);
            setcartItems(data);
            console.log(data);        
        }
        getProducts();
    }, [user.uid]);
    console.log(cartItems);
    return (
        <>
            <HeroInnerPages>
                My cart
            </HeroInnerPages>
            <section className='container mx-auto pt-[120px] pb-20 text-center'>
                <h2 className='primaryHeading'>Products</h2>
                <div className='gap-10 grid md:grid-cols-2 lg:grid-cols-4 px-4 lg:px-0 py-10'>
                    {/* {currentBrand.products.map(product => <ProductCard key={Date.now()+Math.random()} productData={product}></ProductCard>)} */}
                    {cartItems?.length > 0 ? cartItems.map(product => <ProductCard key={product._id} productData={product} method={"delete"}></ProductCard>) :
                        <p className='text-center textLg font-normal text-textColor col-span-4'>No products found. New products will add soon....</p>}
                </div>
            </section>
        </>
    );
};

export default MyCart;