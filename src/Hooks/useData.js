import { useState } from "react"

export const getProductsOfBrand = async (brand) => {
    // let products = [];
    const res = await fetch(`https://electro-tech-backend.vercel.app/brands/${brand}`);
    const data = await res.json();
    console.log(data);
    return data;
}

export const getProductById = async (id) => {
    // let products = [];
    const res = await fetch(`https://electro-tech-backend.vercel.app/products/${id}`);
    const data = await res.json();
    console.log(data);
    return data;
}

export const getCartItems = async (id) => {
    // let products = [];
    const res = await fetch(`https://electro-tech-backend.vercel.app/cartItems/${id}`);
    const data = await res.json();
    console.log(data.items);
    return data.items;
}