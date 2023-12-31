import { useState } from "react";
import HeroInnerPages from "../Components/Hero/HeroInnerPages";
import { useAuth } from "../Hooks/useAuth";
import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const UpdateProduct = () => {
  const {user} = useAuth();
  const product = useLoaderData();
  // const [desValue, setDesValue] = useState('');
  // console.log(desValue);
  console.log(user, product);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const userId = user?.uid;
    const productName = form.productName.value;
    const price = form.price.value;
    const brand = form.brand.value;
    const rating = form.rating.value;
    const type = form.type.value;
    const image = form.image.value;
    const short_description = form.description.value;
    const data = {userId, productName, price, brand, rating, type, image, short_description};
    // console.log(desValue);
    fetch(`https://electro-tech-backend.vercel.app/update-product/${product._id}`,{
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(toast.success("Product updated successfully!"))
    // console.log(data);
  }
  return (
    <>
      <HeroInnerPages>
        {product.productName}
      </HeroInnerPages>
      <section className="bg-white">
        <div className="container py-8 px-4 mx-auto lg:py-16 lg:px-6 ">
          <section className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
              <h2 className="mb-4 secondaryHeading text-center font-bold text-gray-900 dark:text-white">
                Update {product.productName}
              </h2>
              <form onSubmit={handleSubmit}>
                <div className="grid gap-4 sm:grid-cols-3 sm:gap-6">
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Product Name
                    </label>
                    <input
                      type="text"
                      name="productName"
                      id="name"
                      defaultValue={product.productName}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Type product name"
                      required
                    />

                  </div>
                  <div className="w-full">
                    <label
                      htmlFor="price"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Price
                    </label>
                    <input
                      type="number"
                      name="price"
                      defaultValue={product.price}
                      id="price"
                      step=".01"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="$2999"
                      required
                    />
                  </div>
                  
                  <div>
                    <label
                      htmlFor="brand"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Brand
                    </label>
                    <select
                      name="brand"
                      id="Brand"
                      defaultValue={product.brand}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Select brand"
                      required
                    >
                      <option value="" disabled selected>Select brand</option>
                      <option value="Apple">Apple</option>
                      <option value="Samsung">Samsung</option>
                      <option value="Google">Google</option>
                      <option value="Xiomi">Xiomi</option>
                      <option value="Oppo">Oppo</option>
                      <option value="Walton">Walton</option>
                    </select>
                  </div>
                  <div>
                  <label
                      htmlFor="rating"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Rating
                    </label>
                    <input type="number" maxLength={1} min={0} max={5} step=".1"
                    name="rating"
                    defaultValue={product.rating}
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Type product name"
                    required
                    />
                  </div>
                  <div className="w-full col-span-2 md:col-span-1">
                    <label
                      htmlFor="type"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Type
                    </label>
                    <select
                      name="type"
                      defaultValue={product.type}
                      id="type"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      required
                    >
                      <option value="" disabled selected>Select type</option>
                      <option value="Phone">Phone</option>
                      <option value="Laptop">Laptop</option>
                      <option value="Tab">Tab</option>
                      <option value="TV">TV</option>
                      <option value="Headphone">Headphone</option>
                      <option value="Watch">Watch</option>
                      <option value="Camera">Camera</option>
                      <option value="Chromecast">Chromecast</option>
                    </select>
                  </div>
                  <div className="col-span-3 sm:col-span-2">
                    <label
                      htmlFor="item-weight"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Product thumbnail
                    </label>
                    <input
                      type="url"
                      name="image"
                      defaultValue={product.image}
                      id="image"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="ex. https://image.com"
                      required
                    />
                  </div>
                  <div className="col-span-3 ">
                    <label
                      htmlFor="description"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Short description
                    </label>
                    <textarea
                      name="description"
                      defaultValue={product.short_description}
                      // value={desValue}
                      // onChange={e =>setDesValue(e.target.value)}
                      id="description"
                      rows={8}
                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Your description here"
                      required
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="primaryBtn mt-5"
                >
                  Update product
                </button>
              </form>
            </div>
          </section>

        </div>
      </section>
      <ToastContainer></ToastContainer>
    </>
  );
};

export default UpdateProduct;