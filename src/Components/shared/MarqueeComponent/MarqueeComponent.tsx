import { IProduct } from "@/types/product.types";
import React from "react";
import MarqueeCard from "./MarqueeCard";
import Marquee from "react-fast-marquee";

const getMarqueeItems = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/products",
  );
  const data = await res.json();
  return data;
};

const MarqueeComponent = async () => {
  const items: IProduct[] = await getMarqueeItems();

  const itemData = items.map((item) => {
    return {
      id: item.id,
      nameBn: item.nameBn,
      image: item.image,
      price: item.today,
      unit: item.unit,
      change: item.change,
    };
  });

  console.log(itemData);

  return (
    <div className="border-b border-separator">
      <Marquee speed={120}>
        {itemData.map((item) => (
          <MarqueeCard key={item.id} item={item}></MarqueeCard>
        ))}
      </Marquee>
    </div>
  );
};

export default MarqueeComponent;
