import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import { useLocation } from 'react-router-dom';
import ProductCard from '../Components/Cards/ProductCard';
const SingleBrand = () => {
    const location = useLocation();
    const currentBrand = location.state;
    console.log(currentBrand);
    const slider = (
        <AwesomeSlider animation="cubeAnimation" className="h-[600px] rounded-xl cover">
            {currentBrand.adsImages.map(ad => <div key={ad.indexOf()} data-src={ad} />)}
          {/* <div data-src="/path/to/image-0.png" />
          <div data-src="/path/to/image-1.png" />
          <div data-src="/path/to/image-2.jpg" /> */}
        </AwesomeSlider>
      );
    return (
        <div className="py-10 pb-40">
            <section className="bannerArea container mx-auto">
                {slider}
            </section>
            <section className='container mx-auto py-[120px] text-center'>
                <h2 className='primaryHeading'>Products</h2>
                <div className='gap-10 grid grid-cols-4 py-10'>
                {currentBrand.products.map(product => <ProductCard key={Date.now()+Math.random()} productData={product}></ProductCard>)}
                </div>
            </section>
        </div>
    );
};

export default SingleBrand;