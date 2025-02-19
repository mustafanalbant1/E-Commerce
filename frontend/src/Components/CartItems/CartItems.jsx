import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../assets/Frontend_Assets/cart_cross_icon.png";

const CartItems = () => {
  const { cartItems, removeFromCart, getTotalCartAmount } =
    useContext(ShopContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/allproducts`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Cart Products:", data);
        setProducts(data.products || []);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  if (!products.length) {
    return <div className="text-center py-8">Loading products...</div>;
  }

  const hasItemsInCart = Object.values(cartItems).some(
    (quantity) => quantity > 0
  );
  if (!hasItemsInCart) {
    return <div className="text-center py-8">Your cart is empty</div>;
  }

  return (
    <div className="mx-4 sm:mx-8 md:mx-12 lg:mx-[100px] my-8 sm:my-12 md:my-16 lg:my-[100px]">
      <div className="hidden md:grid grid-cols-[0.5fr_2fr_1fr_1fr_1fr_1fr] items-center gap-4 md:gap-6 lg:gap-[75px] py-3 md:py-4 lg:py-5 text-[#454545] text-sm md:text-base lg:text-lg font-semibold">
        <p className="text-left">Product</p>
        <p className="text-left">Title</p>
        <p className="text-left">Price</p>
        <p className="text-left">Quantity</p>
        <p className="text-left">Total</p>
        <p className="text-left">Remove</p>
      </div>
      <hr className="border-gray-200 mb-4" />
      {products &&
        products?.map((item) => {
          if (cartItems[item.id] > 0) {
            return (
              <div key={item.id}>
                <div className="grid grid-cols-1 md:grid-cols-[0.5fr_2fr_1fr_1fr_1fr_1fr] items-center gap-4 md:gap-6 lg:gap-[75px] py-3 md:py-4 lg:py-5 text-[#454545] text-sm md:text-base lg:text-lg font-semibold">
                  <div className="col-span-1 md:col-span-2 flex flex-col md:flex-row items-center md:items-start gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 md:w-24 md:h-24 object-cover rounded-lg"
                    />
                    <p className="font-medium break-words w-full md:w-80 text-center md:text-left">
                      {item.name}
                    </p>
                  </div>
                  <p className="text-gray-700 text-center md:text-left">
                    ${item.new_price}
                  </p>
                  <div className="flex items-center justify-center md:justify-start">
                    <span className="px-3 md:px-4 py-1 md:py-2 border border-gray-300 rounded-md">
                      {cartItems[item.id]}
                    </span>
                  </div>
                  <p className="font-semibold text-center md:text-left">
                    ${item.new_price * cartItems[item.id]}
                  </p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="flex items-center justify-center md:justify-start"
                  >
                    <img
                      src={remove_icon}
                      alt="Remove"
                      className="w-4 h-4 md:w-5 md:h-5 hover:opacity-75 transition-opacity"
                    />
                  </button>
                </div>
                <hr className="border-gray-200 md:hidden my-4" />
              </div>
            );
          }
          return null;
        })}
      <div className="mt-8 md:mt-12 flex flex-col md:flex-row justify-between gap-6 md:gap-8">
        <div className="w-full md:w-1/2">
          <div className="bg-gray-50 p-4 md:p-6 rounded-lg shadow-sm">
            <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">
              Cart Total
            </h2>
            <div className="space-y-3 md:space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600 text-sm md:text-base">
                  Subtotal
                </span>
                <span className="font-semibold text-sm md:text-base">
                  ${getTotalCartAmount()}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600 text-sm md:text-base">
                  Shipping
                </span>
                <span className="text-green-600 font-medium text-sm md:text-base">
                  Free
                </span>
              </div>
              <hr className="border-gray-200" />
              <div className="flex justify-between items-center">
                <span className="text-gray-600 text-sm md:text-base">
                  Total
                </span>
                <span className="font-bold text-lg md:text-xl">
                  ${getTotalCartAmount()}
                </span>
              </div>
            </div>
            <button className="w-full bg-black text-white font-medium py-2 md:py-3 rounded-lg mt-4 md:mt-6 text-sm md:text-base hover:bg-gray-800 transition-colors duration-200">
              Proceed to Checkout
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/3">
          <div className="bg-white p-4 md:p-6 rounded-lg">
            <h3 className="text-gray-600 mb-3 md:mb-4 font-medium text-sm md:text-base">
              Have a coupon code?
            </h3>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Enter coupon code"
                className="flex-1 px-3 md:px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent text-sm md:text-base"
              />
              <button className="px-4 md:px-6 py-2 bg-black text-white font-medium rounded-lg hover:bg-gray-800 transition-colors duration-200 text-sm md:text-base">
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
