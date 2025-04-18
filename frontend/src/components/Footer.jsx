import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img className="mb-5 w-32 " src={assets.logo} alt="" />
          <p className="w-full md:2/3 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga non
            asperiores iste omnis nihil quo amet perspiciatis .
          </p>
        </div>
        <div>
          <p className=" text-xl font-medium mb-5">COMPNY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div>
          <p>GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+91 5656565656</li>
            <li>kmradi2002@gmail.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2024@ forever.com - ALL Right Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
