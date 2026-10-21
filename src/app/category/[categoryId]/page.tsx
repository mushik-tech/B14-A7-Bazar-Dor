import CategoryItemList from "@/Components/Category/CategoryItemList";
import { IProduct } from "@/types/product.types";
import { Card } from "@heroui/react";
import { notFound } from "next/navigation";

const getProductsByCategory = async (id: string) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/bazardor/products?category=${id}`,
  );

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const data = await res.json();
  return data;
};

const CategoryPage = async ({
  params,
}: {
  params: Promise<{ categoryId: string }>;
}) => {
  const { categoryId } = await params;

  const products: IProduct[] = await getProductsByCategory(categoryId);

  if (!products || products.length === 0) {
    return notFound();
  }

  return (
    <div className="max-w-6xl mx-auto">
      <Card className="rounded-xl border bg-[#FAFCFA] mt-8">
        <Card.Header>
          <Card.Title className="flex gap-3">
            <div className="p-3 bg-[#F0F5F0] rounded-xl">
              <p className="text-2xl">{products[0].image}</p>
            </div>
            <div>
              <p className="text-xl font-bold">{products[0].categoryNameBn}</p>
              <p className="text-gray-500">
                {products.length.toLocaleString("bn-BD")}টি পণ্যের আজকের দাম ও
                পরিবর্তন
              </p>
            </div>
          </Card.Title>
        </Card.Header>
      </Card>
      <CategoryItemList products={products}></CategoryItemList>
    </div>
  );
};

export default CategoryPage;
