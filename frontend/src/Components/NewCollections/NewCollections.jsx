import Item from "../Item/Item";
import { useEffect, useState } from "react";
const NewCollections = () => {
  const [new_coolection, setNewCollection] = useState([]);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/newcollections`)
      .then((res) => res.json())
      .then((data) => setNewCollection(data));
  }, []);
  return (
    <div className="flex flex-col items-center gap-2 sm:gap-3 min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] lg:min-h-[90vh] mb-[50px] sm:mb-[70px] md:mb-[85px] lg:mb-[100px]">
      <h1 className="text-[#171717] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold">
        NEW COLLECTIONS
      </h1>
      <hr className="w-[100px] sm:w-[125px] md:w-[150px] lg:w-[175px] xl:w-[200px] h-1 sm:h-1.25 md:h-1.5 lg:h-1.75 xl:h-2 rounded-xl bg-[#252525]" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-3 md:gap-4 lg:gap-6 xl:gap-8 mt-4 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-12">
        {new_coolection.map((item, i) => {
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

export default NewCollections;
