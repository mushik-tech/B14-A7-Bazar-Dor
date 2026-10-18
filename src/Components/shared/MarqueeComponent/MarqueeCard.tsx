import { IMarquee } from "@/types/product.types";
import React from "react";

export interface MarqueeCardProps {
  item: IMarquee;
}

const MarqueeCard = ({ item }: MarqueeCardProps) => {
  return (
    <div className="flex border-l border-r border-separator px-4 py-2 space-x-2 text-sm font-semibold">
        <h1>{item.image}</h1>
      <h1>{item.nameBn}</h1>
      <p>
        {item.price}টাকা/
        {item.unit === "kg" ? "কেজি" : item.unit === "litre" ? "লিটার" : "ডজন"}
      </p>
      <div className={`${item.change.dir==="up"? "text-red-500": "text-green-500"} flex`}>
        <p>{item.change.dir === "up" ? "▲" : "▼"}</p>
        <p>{item.change.pct}%</p>
      </div>
    </div>
  );
};

export default MarqueeCard;
