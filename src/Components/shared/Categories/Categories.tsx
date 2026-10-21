import React from "react";
import NavLinks from "../NavLinks";
import { ICategory } from "@/types/category.types";

const getCategories = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/categories",
  );
  const data = await res.json();
  return data;
};

const Categories = async () => {
  const categories: ICategory[] = await getCategories();

  return (
    <div className="py-4 px-6">
      <div className="max-w-6xl mx-auto flex flex-wrap gap-3 lg:gap-9">
        {categories.map((cat) => (
          <NavLinks href={cat.slug} key={cat.id}>
            {cat.icon} {cat.nameBn}
          </NavLinks>
        ))}
      </div>
    </div>
  );
};

export default Categories;
