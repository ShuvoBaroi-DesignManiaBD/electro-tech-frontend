import { Link, NavLink, useNavigate } from "react-router-dom";

const BrandCard = ({brand}) => {
    console.log(brand, brand.brandThumbnail);
    const navigate = useNavigate();
    // const path = brand.name.toLowerCase().replaceAll(" ", "-");
    return (
        <div className={`flex flex-col items-stretch justify-between border-2 rounded-xl`} onClick={() => navigate(`brands/${brand.name}`, { state: brand })}>
            <img src={brand.brandThumbnail} alt="thumbnail" className="object-cover cover rounded-t-xl h-[200px]" />
            <div className="flex flex-col gap-3 justify-between items-start  h-full p-5">
                <h3 className="textLg">{brand.name}</h3>
            </div>
        </div>
    );
};

export default BrandCard;