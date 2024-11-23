import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const LatestCollection = () => {
  const { products } = useContext(ShopContext);

  const [letestProduct, setLetestProduct] = useState([]);

  useEffect(() => {
    setLetestProduct(products.slice(0, 10));
  }, []);
  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1={"LETEST"} text2={"COLLECTIONS"}></Title>
        <p className="w-34 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste eveniet
          qui, tempore amet, ullam voluptatum sint, quos nesciunt illum delectus
          itaque est ex? Recusandae eos dignissimos aliquid ut illum. Neque.
        </p>
      </div>
      {/* Rendering Product */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 ga-y-6 ">
        {letestProduct.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            name={item.name}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default LatestCollection;
