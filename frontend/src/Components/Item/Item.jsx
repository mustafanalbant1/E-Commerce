import { Link } from "react-router-dom";

const Item = (props) => {
  console.log("props in item", props);
  return (
    <div className="w-[250px] md:w-[300px] lg:w-[350px] transition duration-600 transform hover:scale-105">
      <Link to={`/product/${props.id}`}>
        <img
          src={props.image}
          onClick={() => window.scrollTo(0, 0)}
          alt=""
          className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover rounded-lg"
        />
      </Link>
      <p className="mt-2 mb-2 ml-0 mr-0 text-sm md:text-base lg:text-lg">
        {props.name}
      </p>
      <div className="flex gap-3 md:gap-4 lg:gap-5">
        <div className="text-[#374151] text-[14px] md:text-[16px] lg:text-[18px] font-semibold">
          ${props.new_price}
        </div>
        <div className="text-[#8c8c8c] text-[14px] md:text-[16px] lg:text-[18px] font-medium line-through">
          ${props.old_price}
        </div>
      </div>
    </div>
  );
};

export default Item;
