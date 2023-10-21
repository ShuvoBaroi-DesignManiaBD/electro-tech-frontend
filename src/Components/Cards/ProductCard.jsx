// import { Link, NavLink, useNavigate } from "react-router-dom";
// import { Rating } from "@material-tailwind/react";
// import ReactStarsRating from 'react-awesome-stars-rating'

// const ProductCard = ({ productData }) => {
//     console.log(productData, productData?.rating);
//     const navigate = useNavigate();
//     // const path = brand.name.toLowerCase().replaceAll(" ", "-");
//     return (
//         <div className={`flex flex-col items-stretch justify-between border-2 rounded-xl`} onClick={() => navigate(`brands/${productData.name}`, { state: productData })}>
//             <div className="relative">
//                 <img src={productData?.image} alt="thumbnail" className="w-full p-8 bg-gray-100 cover rounded-t-xl h-[200px] md:h-[300px]" />
//                 <p className="absolute p-2 bg-secondary text-white rounded-tl-lg bottom-0 right-0">{productData?.brand}</p>
//             </div>
//             <div className="p-5 flex flex-col justify-start gap-2">
//                 <h3 className="textLg text-start">{productData?.name}</h3>
//                 <ReactStarsRating size="18" starGap="2px" value={productData?.rating} className="flex"/>
//                 <div className="flex gap-3 justify-between text-sm font-medium items-start  h-full py-3">
//                     <p className="px-2 py-1 bg-primaryLight rounded-sm">{productData?.type}</p>
//                     <p>$ {productData?.price}</p>
//                 </div>
//                 <div className="flex gap-5 ">
//                     <button className="primaryBtn px-0 text-sm py-2 w-full">View details</button>
//                     <button className="primaryBtn bg-textColor border-textColor hover:bg-primary hover:border-primary px-0 text-sm py-2 w-full">Update</button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ProductCard;
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Rating } from "@material-tailwind/react";
import ReactStarsRating from 'react-awesome-stars-rating'

const ProductCard = ({ productData }) => {
    console.log(productData, productData?.rating, productData?._id);
    const navigate = useNavigate();
    const path = productData.productName.toLowerCase().replaceAll(" ", "-");
    return (
        <div className={`flex flex-col items-stretch justify-between border-2 rounded-xl`}>
            <div className="relative">
                <img src={productData?.image} alt="thumbnail" className="w-full p-8 bg-gray-100 cover rounded-t-xl h-[200px] md:h-[300px]" />
                <p className="absolute p-2 bg-secondary text-white rounded-tl-lg bottom-0 right-0">{productData?.brand}</p>
            </div>
            <div className="p-5 flex flex-col justify-start gap-2">
                <h3 className="text font-bold text-start">{productData?.productName}</h3>
                <ReactStarsRating size="18" starGap="2px" value={productData?.rating} className="flex"/>
                <div className="flex gap-3 justify-between text-sm font-medium items-start  h-full py-3">
                    <p className="px-2 py-1 bg-primaryLight rounded-sm">{productData?.type}</p>
                    <p>$ {productData?.price}</p>
                </div>
                <div className="flex gap-5 ">
                    <button className="primaryBtn px-0 text-sm py-2 w-full" onClick={() => navigate(`/products/${productData._id}`, { state: productData })}>View details</button>
                    <button className="primaryBtn bg-textColor border-textColor hover:bg-primary hover:border-primary px-0 text-sm py-2 w-full" 
                    onClick={() => navigate(`/update-product/${productData._id}`, { state: productData })}
                    >Update</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;