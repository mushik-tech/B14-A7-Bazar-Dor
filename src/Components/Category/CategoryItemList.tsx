"use client";

import { IProduct } from "@/types/product.types";
import { Card, Label, ListBox, Select } from "@heroui/react";
import ProductCard from "../Homepage/ProductCard";
import { useState } from "react";

const CategoryItemList = ({ products }: { products: IProduct[] }) => {
  const [sorting, setSorting] = useState<string>("normal");

  const handleFiltering = (value: React.Key | null) => {
    setSorting(String(value));
  };

  const sortedProducts = (productData: IProduct[]) => {
    const productsCopy = [...productData];

    if (sorting === "normal") {
      productsCopy;
    } else if (sorting === "increase") {
      productsCopy.sort((a, b) => Number(a.today) - Number(b.today));
    } else if (sorting === "decrease") {
      productsCopy.sort((a, b) => Number(b.today) - Number(a.today));
    }
    return productsCopy;
  };

  const filteredProducts = sortedProducts(products);


  return (
    <>
      <Card className="rounded-xl border bg-[#FAFCFA] mt-8 flex flex-row px-8 justify-between">
        <div></div>
        <div></div>
        <Select
          className="flex flex-row items-center gap-3"
          placeholder="Select one"
          onChange={handleFiltering}
          defaultValue={"normal"}
        >
          <Label className="text-gray-500">সাজান</Label>
          <div>
            <Select.Trigger
              className={
                "border-2 rounded-lg shadow-none border-[#1D271F20] w-40"
              }
            >
              <Select.Value />
              <Select.Indicator />
            </Select.Trigger>
            <Select.Popover className="rounded-md">
              <ListBox>
                <ListBox.Item id="normal" textValue="normal">
                  ডিফল্ট
                  <ListBox.ItemIndicator />
                </ListBox.Item>
                <ListBox.Item id="increase" textValue="increase">
                  দাম: কম থেকে বেশি
                  <ListBox.ItemIndicator />
                </ListBox.Item>
                <ListBox.Item id="decrease" textValue="decrease">
                  দাম: বেশি থেকে কম
                  <ListBox.ItemIndicator />
                </ListBox.Item>
              </ListBox>
            </Select.Popover>
          </div>
        </Select>
      </Card>
      <div>
        <h1 className="text-gray-500 my-6">
          মোট {filteredProducts.length.toLocaleString("bn-BD")}টি পণ্য দেখানো হচ্ছে
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product}></ProductCard>
          ))}
        </div>
      </div>
    </>
  );
};

export default CategoryItemList;
