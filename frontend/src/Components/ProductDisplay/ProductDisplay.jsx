import star_icon from "../../Components/assets/Frontend_Assets/star_icon.png";
import { ShopContext } from "../../Context/ShopContext";
import { useContext } from "react";
const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);

  console.log("product in product display", product);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="flex flex-col lg:flex-row p-2 md:p-3 lg:p-4 gap-6 md:gap-8 lg:gap-12">
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        <div className="flex flex-row md:flex-col gap-2 md:gap-3 lg:gap-4">
          <img
            src={product.image}
            alt=""
            className="w-16 md:w-20 lg:w-24 h-20 md:h-24 lg:h-30 object-cover cursor-pointer"
          />
          <img
            src={product.image}
            alt=""
            className="w-16 md:w-20 lg:w-24 h-20 md:h-24 lg:h-30 object-cover cursor-pointer"
          />
          <img
            src={product.image}
            alt=""
            className="w-16 md:w-20 lg:w-24 h-20 md:h-24 lg:h-30 object-cover cursor-pointer"
          />
          <img
            src={product.image}
            alt=""
            className="w-16 md:w-20 lg:w-24 h-20 md:h-24 lg:h-30 object-cover cursor-pointer"
          />
        </div>
        <div className="flex-1">
          <img
            src={product.image}
            className="w-full h-[300px] md:h-[500px] lg:h-[700px] object-cover"
            alt=""
          />
        </div>
      </div>
      <div className="flex-1 p-2 md:p-3 lg:p-4">
        <div className="flex flex-col gap-3 md:gap-4 lg:gap-6">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold">
            {product.name}
          </h1>
          <div className="flex items-center gap-1 md:gap-1.5 lg:gap-2">
            <img
              src={star_icon}
              alt=""
              className="w-3 md:w-4 lg:w-5 h-3 md:h-4 lg:h-5"
            />
            <img
              src={star_icon}
              alt=""
              className="w-3 md:w-4 lg:w-5 h-3 md:h-4 lg:h-5"
            />
            <img
              src={star_icon}
              alt=""
              className="w-3 md:w-4 lg:w-5 h-3 md:h-4 lg:h-5"
            />
            <img
              src={star_icon}
              alt=""
              className="w-3 md:w-4 lg:w-5 h-3 md:h-4 lg:h-5"
            />
            <img
              src={star_icon}
              alt=""
              className="w-3 md:w-4 lg:w-5 h-3 md:h-4 lg:h-5"
            />
            <p className="text-sm md:text-base lg:text-lg text-gray-500">
              (120)
            </p>
          </div>
          <div className="flex flex-col gap-3 md:gap-4 lg:gap-6">
            <div className="text-lg md:text-xl lg:text-2xl font-bold text-red-500">
              ${product.new_price}
            </div>
            <div className="text-base md:text-lg lg:text-xl text-gray-500 line-through">
              ${product.old_price}
            </div>
            <div className="text-sm md:text-base lg:text-lg text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
            <div className="flex flex-col gap-2 md:gap-3 lg:gap-4">
              <h1 className="text-lg md:text-xl lg:text-2xl font-semibold">
                Select Size
              </h1>
              <div className="flex gap-2 md:gap-3 lg:gap-4">
                <div className="w-8 md:w-10 lg:w-12 h-8 md:h-10 lg:h-12 flex items-center justify-center border border-gray-300 rounded cursor-pointer hover:border-black text-sm md:text-base lg:text-lg">
                  S
                </div>
                <div className="w-8 md:w-10 lg:w-12 h-8 md:h-10 lg:h-12 flex items-center justify-center border border-gray-300 rounded cursor-pointer hover:border-black text-sm md:text-base lg:text-lg">
                  M
                </div>
                <div className="w-8 md:w-10 lg:w-12 h-8 md:h-10 lg:h-12 flex items-center justify-center border border-gray-300 rounded cursor-pointer hover:border-black text-sm md:text-base lg:text-lg">
                  L
                </div>
                <div className="w-8 md:w-10 lg:w-12 h-8 md:h-10 lg:h-12 flex items-center justify-center border border-gray-300 rounded cursor-pointer hover:border-black text-sm md:text-base lg:text-lg">
                  XL
                </div>
                <div className="w-8 md:w-10 lg:w-12 h-8 md:h-10 lg:h-12 flex items-center justify-center border border-gray-300 rounded cursor-pointer hover:border-black text-sm md:text-base lg:text-lg">
                  XXL
                </div>
              </div>
            </div>
            <button
              onClick={() => addToCart(product.id)}
              className="w-full md:w-1/2 lg:w-1/4 bg-red-500 text-white py-2 md:py-2.5 lg:py-3 px-4 md:px-5 lg:px-6 rounded-lg hover:bg-red-600 transition text-sm md:text-base lg:text-lg"
            >
              Add to Cart
            </button>
            <div className="flex flex-col gap-1 md:gap-1.5 lg:gap-2 text-sm md:text-base lg:text-lg text-gray-600">
              <p>
                <span className="font-semibold">Category: </span>
                Women,T-shirt,Crewneck
              </p>
              <p>
                <span className="font-semibold">Tags: </span>
                Modern,Latest
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
