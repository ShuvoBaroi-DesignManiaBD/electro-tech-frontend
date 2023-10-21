import { useState } from "react"

export const getProductsOfBrand = async (brand) => {
    // let products = [];
    const res = await fetch(`http://localhost:3000/brands/${brand}`);
    const data = await res.json();
    console.log(data);
    return data;
}
