const DescriptionBox = () => {
  return (
    <div className="flex flex-col  p-8  ">
      <div className="flex  text-lg font-semibold">
        <div className="cursor-pointer hover:text-red-500 border border-gray-300  p-2">
          Description
        </div>
        <div className="cursor-pointer hover:text-red-500 border border-gray-300 p-2">
          Reviews (122)
        </div>
      </div>
      <div className="flex flex-col w-4/5 border border-gray-300 p-4">
        <div className="flex flex-col gap-4">
          <p className="text-gray-600 leading-relaxed rounded p-3">
            E-commerce is revolutionizing the way we shop, offering
            unprecedented convenience and access to a global marketplace. Our
            platform provides a seamless shopping experience with secure
            transactions and fast delivery. We carefully curate our product
            selection to ensure quality and value for our customers.
          </p>
          <p className="text-gray-600 leading-relaxed rounded p-3">
            Customer satisfaction is our top priority. We offer detailed product
            descriptions, high-quality images, and honest customer reviews to
            help you make informed purchasing decisions. Our responsive customer
            service team is always ready to assist you with any questions or
            concerns.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DescriptionBox;
