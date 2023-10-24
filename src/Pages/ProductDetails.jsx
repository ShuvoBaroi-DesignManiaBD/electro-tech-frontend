import { useLoaderData, useLocation } from "react-router-dom";
import ReactStarsRating from 'react-awesome-stars-rating'
import HeroInnerPages from "../Components/Hero/HeroInnerPages";
import { useAuth } from "../Hooks/useAuth";
import { ToastContainer, toast } from "react-toastify";

const ProductDetails = () => {
    // const currentBrand = location?.state;
    const location = useLocation();
    const product = location.state;
    const {user} = useAuth();
    console.log(user);

    const handleAddToCart = () => {
        const id = user.uid;
        console.log(product);
        const data = {id, product};
        fetch(`https://electro-tech-backend.vercel.app/add-to-cart`,{
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(toast.success("Product added to cart!"));
    // console.log(data);
  }
    return (
        <>
            <HeroInnerPages>
                {product.productName}
            </HeroInnerPages>
            <div className="bg-[#F5F8FF] py-20" >
                <div className="flex justify-center gap-20 max-w-screen-lg p-10 py-20 rounded-xl mx-auto bg-white">
                    <img src={product.image} alt={product.productName}
                        className="w-[40%]"
                    />
                    <div className="flex flex-col justify-center items-start gap-4">
                        <h2 className="primaryHeading text-3xl">{product.productName}</h2>
                        <ReactStarsRating size="18" starGap="2px" value={product?.rating} className="flex" />
                        <p className="text font-bold">Product type:  <span className="text-sm px-4 py-1 bg-primary text-white rounded-sm">{product?.type}</span></p>
                        <p className="text mt-3">{product.short_description}</p>
                        <p className="secondaryHeading mt-3">${product.price}</p>
                        <button className="primaryBtn" onClick={handleAddToCart}>Add to cart</button>            
                    </div>
                    <ToastContainer />
                </div>
            </div>
        </>
    )
};

export default ProductDetails;