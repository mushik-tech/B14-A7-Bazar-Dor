"use client";
import { IProduct } from "@/types/product.types";
import { Breadcrumbs } from "@heroui/react";

const BreadCrumbSection = ({ product }: { product: IProduct }) => {
  return (
    <Breadcrumbs>
      <Breadcrumbs.Item href="/">
        <span className="text-lg ">হোম</span>
      </Breadcrumbs.Item>
      <Breadcrumbs.Item href={`/category/${product.category}`}>
        <span className="text-lg ">{product.categoryNameBn}</span>
      </Breadcrumbs.Item>
      <Breadcrumbs.Item href="#">
        <span className="text-lg">{product.nameBn}</span>
      </Breadcrumbs.Item>
    </Breadcrumbs>
  );
};

export default BreadCrumbSection;
