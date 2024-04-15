import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Store, MapPin } from "lucide-react";

const ShopCard = ({ shop }) => {
  const navigate = useNavigate();
  const handleClick = async () => {
    try {
      const shopData = await axios.get(
        `/api/v1/prints/shopdata?id=${shop._id}`
      );
      // console.log(shopData.data.data);
      if (shopData) {
        return navigate(`/printnow?id=${shop._id}`);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Link onClick={handleClick}>
      <div className="bg-[#f5f5f5] inline-block w-full rounded-lg max-w-96 min-w-80 font-['Lato']">
        <div
          className="bg-center bg-cover h-[200px] rounded-t-lg relative"
          style={{
            backgroundImage: `url(${shop.shopImage})`,
          }}
        >
          <div className="text-xs bg-[#3582ec] absolute bottom-[21%] py-[2px] pr-1 pl-5 rounded-r max-w-[60px] left-0 text-[#fff] font-bold">
            10% OFF<p className="font-[400]">Up to &#x20b9;100 </p>
          </div>
          {/* <div className="text-xs bg-[#e83940] absolute bottom-[6%] py-1 px-1 max-w-[110px] left-0 text-[#fff]">
            PRO extra 15% OFF
          </div> */}
          {/* <div className="absolute bg-[#f5f5f5] max-w-[60px] py-[3px] px-[6px] text-xs right-[3%]  bottom-[6%] rounded">
            39 mins
          </div> */}
          <div className="bookmark"></div>
        </div>
        <div className="p-2">
          <div className="flex justify-between items-center">
            <div className="">
              <span className="flex flex-row pb-[10px] text-black">
                <Store className="" />
                <p className="ml-1 font-[600]">{shop.shopName}</p>
              </span>
              <span className="flex flex-row pb-[10px] text-black text-md">
                <MapPin className="" />
                <p className="ml-1">{shop.shopLocation}</p>
              </span>

              {/* <p className="text-xs text-gray-500">Italian, Fast Food, Beverages</p> */}
            </div>
            <div className="">
              <p className="text-xs rounded bg-[#0a6d0acc] text-[#fff] font-[700] text-center py-1 px-0 mb-1 ml-7">
                {shop.ratings} &#x2605;
              </p>
              <p className="text-xs text-gray-500">
                &#x20b9; {shop.perPageCost} per page
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ShopCard;
