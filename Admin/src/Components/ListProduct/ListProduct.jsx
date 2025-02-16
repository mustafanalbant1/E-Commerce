import { useEffect, useState } from "react";
import cross_icon from "../../assets/Admin_Assets/cross_icon.png";

const ListProduct = () => {
  const [allProducts, setAllProducts] = useState([]);

  const fetchInfo = async () => {
    try {
      const response = await fetch("http://localhost:5001/allproducts");
      const data = await response.json();
      setAllProducts(data.products); // API'den gelen products array'ini set et
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const removeProduct = async (id) => {
    try {
      const response = await fetch("http://localhost:5001/removeproduct", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: id }),
      });
      const data = await response.json();
      if (data.success) {
        fetchInfo(); // Ürün silindikten sonra listeyi yenile
      }
    } catch (error) {
      console.error("Error removing product:", error);
    }
  };

  return (
    <div className="flex flex-col p-5 w-[80%]">
      <h1 className="flex items-center justify-center text-3xl font-bold mb-8">
        All Products
      </h1>
      <div className="grid grid-cols-6 gap-4 bg-white p-6 rounded-lg text-center font-semibold text-gray-600">
        <p>Products</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 mt-4 rounded-lg shadow-sm">
        <hr className="border-gray-200" />
        {allProducts.map((product, index) => (
          <div
            key={index}
            className="grid grid-cols-6 items-center gap-4 p-6 hover:bg-white transition-all duration-300 border-b border-gray-100"
          >
            <div className="flex justify-center">
              <img
                src={product.image}
                alt={product.name}
                className="w-[90px] h-[90px] object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex items-center justify-center">
              <p className="font-semibold text-gray-800 hover:text-indigo-600 transition-colors">
                {product.name}
              </p>
            </div>
            <div className="flex items-center justify-center">
              <p className="text-gray-500 font-medium line-through">
                ${product.old_price}
              </p>
            </div>
            <div className="flex items-center justify-center">
              <p className="text-indigo-600 font-bold">${product.new_price}</p>
            </div>
            <div className="flex items-center justify-center">
              <p className="capitalize text-gray-700 bg-gradient-to-r from-gray-100 to-gray-200 px-4 py-2 rounded-full font-medium shadow-sm">
                {product.category}
              </p>
            </div>
            <div className="flex items-center justify-center">
              <img
                onClick={() => removeProduct(product.id)}
                src={cross_icon}
                alt="cross_icon"
                className="w-[35px] h-[35px] cursor-pointer hover:scale-110 transition-all duration-300 hover:bg-red-50 rounded-full p-2"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListProduct;
