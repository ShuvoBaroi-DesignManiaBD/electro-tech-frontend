import HeroInnerPages from "../Components/Hero/HeroInnerPages";

const ProductDetails = () => {
    const currentBrand = location?.state;
    console.log(location, currentBrand);
    return (
        <>
            {/* <HeroInnerPages>
                {currentBrand.name}
            </HeroInnerPages> */}
            <div className="bg-[#F5F8FF]">
                <h2>this is product details page</h2>
            </div>
        </>


    );
};

export default ProductDetails;