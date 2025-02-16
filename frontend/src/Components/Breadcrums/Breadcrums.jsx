import arrow_icon from "../assets/Frontend_Assets/breadcrum_arrow.png";

export const Breadcrums = ({ product }) => {
  console.log("product in breadcrums", product);
  if (!product) {
    return <div>Product not found</div>; // Ürün bulunamazsa mesaj göster
  }
  return (
    <div className="flex items-center gap-1 sm:gap-2 md:gap-3 lg:gap-4 text-sm sm:text-base md:text-lg lg:text-xl">
      Home <img src={arrow_icon} alt="" className="w-3 sm:w-3 md:w-3 lg:w-3" />
      Shop <img src={arrow_icon} alt="" className="w-3 sm:w-3 md:w-3 lg:w-3" />
      {product.category}{" "}
      <img src={arrow_icon} alt="" className="w-3 sm:w-3 md:w-3 lg:w-3" />
      {product.name}
    </div>
  );
};
