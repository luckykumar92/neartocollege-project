import React from "react";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ChevronRightCircle, MapPin } from "lucide-react";
import "./style.css";

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
      <div class="cards-container">
        <div class="card">
          <div class="card-media">
            <div class="discount">
              40% OFF<p>Up to &#x20b9;80 </p>
            </div>
            <div class="pro-discount">PRO extra 15% OFF</div>
            <div class="delivery-time">39 mins</div>
            <div class="bookmark"></div>
          </div>
          <div class="card-description">
            <div class="about-place">
              <div class="place">
                <p class="place-name">Pizza Hut</p>
                <p class="place-speciality">Italian, Fast Food, Beverages</p>
              </div>
              <div class="place-review">
                <p class="rating">4.6 &#x2605;</p>
                <p class="per-person"> &#x20b9; 200 per one</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ShopCard;
