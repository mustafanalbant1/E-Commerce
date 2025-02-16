import data_product from "../assets/Frontend_Assets/data";
import Item from "../Item/Item";

const RelatedProducts = () => {
  return (
    <div className="flex flex-col items-center gap-3 min-h-[90vh] mb-[100px]">
      <h1 className="text-[#171717] text-3xl md:text-4xl lg:text-5xl font-semibold">
        Related Products
      </h1>
      <hr className="w-[150px] md:w-[175px] lg:w-[200px] h-1.5 md:h-1.75 lg:h-2 rounded-xl bg-[#252525]" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 mt-8 md:mt-10 lg:mt-12">
        {data_product.map((item, i) => {
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
        })}
      </div>
    </div>
  );
};

export default RelatedProducts;
