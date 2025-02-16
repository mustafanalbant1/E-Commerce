import dropdown_icon from "../Components/assets/Frontend_Assets/dropdown_icon.png";
import Item from "../Components/Item/Item";
import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";

const ShopCategory = (props) => {
  const { category, banner } = props;
  const { all_product } = useContext(ShopContext);

  console.log("all_products", all_product);

  return (
    <div className="shop-category">
      <img src={banner} alt="" className="block w-[82%] my-[30px] mx-auto" />
      <div className="flex my-0 mx-[170px] justify-between items-center">
        <p className="font-medium text-[16px]">
          <span className="font-semibold ">Showing 1-12</span> out of 36
          products
        </p>
        <div className="py-[10px] px-[20px] border border-[#888] rounded-[40px]">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="my-[20px] mx-4 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-20 2xl:mx-24 3xl:mx-28 4xl:mx-[170px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-4 4xl:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-6 xl:gap-7 2xl:gap-7 3xl:gap-8 4xl:gap-8">
        {all_product &&
          all_product.map((item, i) => {
            if (category === item.category) {
              return (
                <Item
                  key={i}
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  new_price={item.new_price}
                  old_price={item.old_price}
                />
              );
            } else {
              return null;
            }
          })}
      </div>
      <div className="flex justify-center items-center  w-[233px] h-[69px] rounded-[75px] bg-[#ededed] text-[#787878] font-medium text-[18px] mx-auto my-[150px]">
        Explore More
      </div>
    </div>
  );
};

export default ShopCategory;
