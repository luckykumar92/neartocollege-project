import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import ShopCard from "./ShopCard";

const ShopLocations = () => {
  const [loading, setLoading] = useState(true);
  const [locationCardData, setLocationCardData] = useState({});
  useEffect(() => {
    axios
      .get("/api/v1/prints/shopslocation")
      .then((resData) => {
        setLocationCardData(resData.data.data);
      })
      .finally(() => setLoading(false));
  }, []);
  return !loading ? (
    <div className="bg-white">
      <div className="mx-auto max-w-3xl px-4 pb-16 sm:px-6 sm:pb-24 lg:max-w-7xl lg:px-8">
        <div className="py-4 md:py-12">
          <h2 className="text-black text-5xl font-extrabold uppercase text-center ">
            All Shop
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-x-1 gap-y-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-3">
          {locationCardData.map((shop) => (
            <ShopCard key={shop._id} shop={shop} />
          ))}
        </div>
      </div>
    </div>
  ) : (
    <h1>Loading</h1>
  );
};

export default ShopLocations;
