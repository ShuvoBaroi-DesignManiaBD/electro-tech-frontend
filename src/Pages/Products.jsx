import { Spinner } from "@material-tailwind/react";
import HeroInnerPages from "../Components/Hero/HeroInnerPages";
import { getAllProducts } from "../Hooks/useData";
import ProductCard from "../Components/Cards/ProductCard";
import { useEffect } from "react";
import { useState } from "react";

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const getProducts = async () => {
            const data = await getAllProducts();
            data.length !== 0 ? setProducts(data) : setProducts(null);
            console.log(data);
        }
        getProducts();
    }, []);
    return (
        <>
            <HeroInnerPages>
                My cart
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
                    
                                    productData={product}
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
        </>
    );
};

export default Products;