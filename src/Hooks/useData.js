

export const getProductsOfBrand = async (brand) => {
    const res = await fetch(`https://electro-tech-backend.vercel.app/brands/${brand}`);
    const data = await res.json();
    console.log(data);
    return data;
}

export const getAllProducts= async () => {
    const res = await fetch(`https://electro-tech-backend.vercel.app/products`);
    const data = await res.json();
    console.log(data);
    return data;
}


export const getProductsOfUser = async (id) => {
    const res = await fetch(`https://electro-tech-backend.vercel.app/products/user/${id}`);
    const data = await res.json();
    console.log(data);
    return data;
}

export const getProductById = async (id) => {
    const res = await fetch(`https://electro-tech-backend.vercel.app/products/${id}`);
    const data = await res.json();
    console.log(data);
    return data;
}

export const getCartItems = async (id) => {
    const res = await fetch(`https://electro-tech-backend.vercel.app/cartItems/${id}`);
    const data = await res.json();
    console.log(data.items);
    return data.items;
}