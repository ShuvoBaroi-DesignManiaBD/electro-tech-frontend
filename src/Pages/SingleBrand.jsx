import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import { useLocation } from 'react-router-dom';
import ProductCard from '../Components/Cards/ProductCard';
import { getProductsOfBrand } from "../Hooks/useData"
import { useState } from 'react';
import { useEffect } from 'react';
import HeroInnerPages from '../Components/Hero/HeroInnerPages';
import { Spinner } from '@material-tailwind/react';
const SingleBrand = () => {
    const [products, setProducts] = useState([]);
    const location = useLocation();
    const currentBrand = location.state;
    // const products = getProductsOfBrand(currentBrand.name);
    console.log(currentBrand, products);
    const slider = (
        <AwesomeSlider animation="cubeAnimation" className="lg:h-[600px] rounded-xl cover">
            {currentBrand.adsImages.map(ad => <div key={ad.indexOf()} data-src={ad} />)}
            {/* <div data-src="/path/to/image-0.png" />
          <div data-src="/path/to/image-1.png" />
          <div data-src="/path/to/image-2.jpg" /> */}
        </AwesomeSlider>
    );

    useEffect(() => {
        const getProducts = async () => {
            const data = await getProductsOfBrand(currentBrand.name);
            // setProducts(data);
            data.length !== 0 ? setProducts(data) : setProducts(null);
        }
        getProducts()
    },[currentBrand.name])
    console.log(products);
    return (
        <>
        <HeroInnerPages>
        {currentBrand.name}
      </HeroInnerPages>
        <div className="md:py-10 lg:py-10">
            <section className="bannerArea container mx-auto">
                {slider}
            </section>
            <section className='container mx-auto pt-[120px] pb-20 text-center'>
                <h2 className='primaryHeading'>Products</h2>
                <div className='gap-10 grid md:grid-cols-2 lg:grid-cols-4 px-4 lg:px-0 pt-10'>
                    {/* {currentBrand.products.map(product => <ProductCard key={Date.now()+Math.random()} productData={product}></ProductCard>)} */}
                    {/* {products.length>0?products.map(product => <ProductCard key={product._id} productData={product} method={"update"}></ProductCard>):
                    <Spinner color="blue" className="h-8 w-8 col-span-4 mx-auto" /> || <p className='text-center textLg font-normal text-textColor col-span-4'>No products found. New products will add soon....</p>} */}
                    {products !== null ? (
                        products.length === 0 ? (
                            <Spinner color="blue" className="h-8 w-8 col-span-4 mx-auto" />
                        ) : (
                            products.map((product) => (
                                <ProductCard key={product._id} productData={product} method={"update"}></ProductCard>
                            ))
                        )
                    ) : (
                        <p className='text-center textLg font-normal text-textColor col-span-4'>No products found. New products will add soon....</p>
                    )}
                </div>
            </section>
        </div>
        </>
    );
};

export default SingleBrand;