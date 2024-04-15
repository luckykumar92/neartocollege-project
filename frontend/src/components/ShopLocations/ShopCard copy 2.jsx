import React from "react";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ChevronRightCircle, MapPin } from "lucide-react";
// import "./style.css";

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
      <div class="bg-[#f5f5f5] inline-block w-full rounded-lg max-w-96 min-w-80 font-['Lato']">
        <div
          class="bg-center bg-cover h-[200px] rounded-t-lg relative"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1615719413546-198b25453f85?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYzMDQwMjkwNA&ixlib=rb-1.2.1&q=85)`,
          }}
        >
          <div class="text-xs bg-[#3582ec] absolute bottom-[21%] py-[2px] pr-1 pl-5 rounded-r max-w-[60px] left-0 text-[#fff] font-bold">
            10% OFF<p className="font-[400]">Up to &#x20b9;100 </p>
          </div>
          {/* <div class="text-xs bg-[#e83940] absolute bottom-[6%] py-1 px-1 max-w-[110px] left-0 text-[#fff]">
            PRO extra 15% OFF
          </div> */}
          {/* <div class="absolute bg-[#f5f5f5] max-w-[60px] py-[3px] px-[6px] text-xs right-[3%]  bottom-[6%] rounded">
            39 mins
          </div> */}
          <div class="bookmark"></div>
        </div>
        <div class="p-2">
          <div class="flex justify-between items-center">
            <div class="">
              <p class="font-[600] pb-[10px] text-black">Pizza Hut</p>
              <p class="text-xs text-gray-500">Italian, Fast Food, Beverages</p>
            </div>
            <div class="">
              <p class="text-xs rounded bg-[#0a6d0acc] text-[#fff] font-[700] text-center py-1 px-0 mb-1 ml-7">
                4.6 &#x2605;
              </p>
              <p class="text-xs text-gray-500">&#x20b9; 200 per one</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ShopCard;
