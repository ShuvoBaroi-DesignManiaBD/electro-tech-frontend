
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Rating } from "@material-tailwind/react";
import ReactStarsRating from 'react-awesome-stars-rating'
import { getCartItems } from "../../Hooks/useData";
import { useAuth } from "../../Hooks/useAuth";

const ProductCard = (props) => {
    const {user} = useAuth();
    const productData = props.productData;
    console.log(productData);
    const navigate = useNavigate();
    // const path = productData?.productName?.toLowerCase().replaceAll(" ", "-");

    const handleDelete = () => {
        fetch(`http://localhost:3000/deleteProduct`, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(productData)
          })
          .then(res => res.json())
          .then(data => {
            console.log(data)
            const getProducts = async () => {
                const data = await getCartItems(user.uid);
                props.setcartItems(data);
                console.log(data);        
            }
            getProducts();
        })
          // console.log(data);

    }
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
                    {props.method === "update" && <button className="primaryBtn bg-textColor border-textColor hover:bg-primary hover:border-primary px-0 text-sm py-2 w-full" 
                    onClick={() => navigate(`/update-product/${productData._id}`, { state: productData })}
                    >Update</button>}
                    {props.method === "delete" && <button className="primaryBtn bg-red-900 border-red-900 hover:bg-red-700 hover:border-red-700 px-0 text-sm py-2 w-full" 
                    onClick={handleDelete}
                    >Delete</button>}
                </div>
            </div>
        </div>
    );
};

export default ProductCard;