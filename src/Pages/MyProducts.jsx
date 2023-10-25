import { Spinner } from "@material-tailwind/react";
import HeroInnerPages from "../Components/Hero/HeroInnerPages";
import { getProductsOfUser } from "../Hooks/useData";
import ProductCard from "../Components/Cards/ProductCard";
import { useEffect } from "react";
import { useState } from "react";
import { useAuth } from "../Hooks/useAuth";
import { ToastContainer, toast } from "react-toastify";

const MyProducts = () => {
    const [products, setProducts] = useState([]);
    const {user} = useAuth();
    const [showToast, setShowToast] = useState(false);
    useEffect(() => {
        const getProducts = async () => {
            const data = await getProductsOfUser(user.uid);
            data.length !== 0 ? setProducts(data) : setProducts(null);
            console.log(data);
        }
        getProducts();
    }, [user.uid]);
    {showToast? toast.success("Product removed from the cart"):''}
    return (
        <>
            <HeroInnerPages>
                My products
            </HeroInnerPages>
            <section className='container mx-auto pt-20 lg:pt-[120px] pb-20 text-center'>
                <h2 className='primaryHeading'>Products</h2>
                <div className='gap-10 grid md:grid-cols-2 lg:grid-cols-4 px-4 lg:px-0 py-10'>
                    {/* {currentBrand.products.map(product => <ProductCard key={Date.now()+Math.random()} productData={product}></ProductCard>)} */}
                    {products !== null ? (
                        products.length === 0 ? (
                            <Spinner color="blue" className="h-8 w-8 col-span-4 mx-auto" />
                        ) : (
                            products.map((product) => (
                                <ProductCard
                                    key={product._id}
                                    products={products}
                                    setProducts={setProducts}
                                    deleteFromProducts={true}
                                    productData={product}
                                    showToast={setShowToast}
                                ></ProductCard>
                            ))
                        )
                    ) : (
                        <p className='text-center textLg font-normal text-textColor col-span-4'>
                            You haven't added any product yet!
                        </p>
                    )}

                </div>
            </section>
            <ToastContainer />
        </>
    );
};

export default MyProducts;