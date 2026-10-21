import BreadCrumbSection from "@/Components/ProductDetails/BreadCrumbSection";
import { IProduct } from "@/types/product.types";
import { Card, Table } from "@heroui/react";
import { notFound } from "next/navigation";
import React from "react";

const getProductDetails = async (id: number) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/bazardor/products/${id}`,
  );

  // if (!res.ok) {
  //   throw new Error("Failed to fetch products");
  // }

  const data = await res.json();
  return data;
};

const ProductDetails = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  const { productId } = await params;

  const product: IProduct = await getProductDetails(Number(productId));

  if (!product || product.error) {
    return notFound();
  }

  const isIncrease = product.yesterday - product.today;

  const price = Math.abs(product.yesterday - product.today);

  const markets = product.markets;

  const lowestPrice = Math.min(...markets.map((item) => Number(item.min)));
  const highestPrice = Math.min(...markets.map((item) => Number(item.max)));
  const avgPrice = (highestPrice + lowestPrice) / 2;

  return (
    <div className="max-w-6xl mx-auto my-10">
      <BreadCrumbSection product={product}></BreadCrumbSection>

      <div>
        <Card className="rounded-xl border bg-[#FAFCFA] mt-8 lg:px-8">
          <Card.Header>
            <Card.Title className="flex justify-between gap-3">
              <div className="flex flex-col md:flex-row md:items-center gap-3">
                <div className="p-3 w-15 md:w-19 text-center bg-[#F0F5F0] rounded-xl flex justify-between items-center">
                  <p className="text-2xl md:text-4xl">{product.image}</p>
                </div>
                <div>
                  <p className="text-lg lg:text-2xl font-bold">
                    {product.nameBn}
                  </p>

                  <p className="space-x-1 text-gray-500">
                    <span className="mr-1">প্রতি</span>
                    <span>
                      {product.unit === "kg"
                        ? "কেজি"
                        : product.unit === "litre"
                          ? "লিটার"
                          : product.unit === "dozen"
                            ? "ডজন"
                            : "পিস"}
                    </span>
                    •<span className="ml-1">{product.categoryNameBn}</span>
                  </p>
                  <p className="text-gray-500">
                    গতকালের তুলনায় আজ দাম{" "}
                    <span className="text-black">
                      {isIncrease < 0 ? "বেড়েছে" : "কমেছে"}
                    </span>{" "}
                    ·
                    <span className="ml-1">
                      {price.toLocaleString("bn-BD")}
                    </span>
                    টাকা
                  </p>
                </div>
              </div>

              <div className="bg-[#F0F5F0] p-5 rounded-2xl text-center">
                <h3 className="text-sm md:text-[15px]">আজকের দাম</h3>
                <h1 className="text-2xl font-bold">
                  {product.today.toLocaleString("bn-BD")}
                </h1>
                <p>
                  টাকা/
                  {product.unit === "kg"
                    ? "কেজি"
                    : product.unit === "litre"
                      ? "লিটার"
                      : "ডজন"}
                </p>

                <div
                  className={`${product.change.dir === "up" ? "text-green-500" : product.change.dir === "down" ? "text-red-700" : "text-gray-500"} flex items-center justify-center gap-1 text-[16px] font-bold`}
                >
                  <p>
                    {product.change.dir === "up"
                      ? "▲"
                      : product.change.dir === "down"
                        ? "▼"
                        : "—"}
                  </p>
                  <p>{product.change.pct.toLocaleString("bn-BD")}%</p>
                </div>
              </div>
            </Card.Title>
          </Card.Header>
        </Card>
      </div>

      <div>
        <Card className="rounded-xl border bg-[#FAFCFA] mt-6 lg:px-8">
          <div className="mt-4">
            <h1 className="font-bold text-lg">দামের সারসংক্ষেপ</h1>

            <div className="flex flex-col md:flex-row gap-3 my-6">
              <div className="rounded-xl border flex-1 p-4">
                <p>সর্বনিম্ন দাম</p>
                <h1 className="font-bold text-green-600">
                  <span className="text-2xl mr-2">
                    {lowestPrice.toLocaleString("bn-BD")}
                  </span>
                  টাকা
                </h1>
                <p>সবচেয়ে কম দামের বাজার</p>
              </div>
              <div className="rounded-xl border flex-1 p-4">
                <p>সর্বাধিক দাম</p>
                <h1 className="font-bold text-red-700">
                  <span className="text-2xl mr-2">
                    {highestPrice.toLocaleString("bn-BD")}
                  </span>
                  টাকা
                </h1>
                <p>সবচেয়ে বেশি দামের বাজার</p>
              </div>
              <div className="rounded-xl border flex-1 p-4">
                <p>গড় দাম</p>
                <h1 className="font-bold text-green-600">
                  <span className="text-2xl mr-2">
                    {avgPrice.toLocaleString("bn-BD")}
                  </span>
                  টাকা
                </h1>
                <p>প্রতি কেজি-এর হিসাবে</p>
              </div>
            </div>
          </div>

          <div>
            <h1 className="font-bold text-lg mb-4">বাজারভিত্তিক আজকের দাম</h1>

            <Table>
              <Table.ScrollContainer>
                <Table.Content aria-label="Team members" className="min-w-150">
                  <Table.Header>
                    <Table.Column isRowHeader className={"text-[14px]"}>
                      বাজার
                    </Table.Column>
                    <Table.Column className={"text-[14px]"}>বিভাগ</Table.Column>
                    <Table.Column className={"text-[14px]"}>
                      সর্বনিম্ন
                    </Table.Column>
                    <Table.Column className={"text-[14px]"}>
                      সর্বাধিক
                    </Table.Column>
                    <Table.Column className={"text-[14px]"}>গড়</Table.Column>
                  </Table.Header>
                  <Table.Body>
                    {markets.map((market, ind) => (
                      <Table.Row key={ind}>
                        <Table.Cell>{market.market}</Table.Cell>
                        <Table.Cell>{market.division}</Table.Cell>
                        <Table.Cell>
                          {market.min.toLocaleString("bn-BD")} <span>টাকা</span>
                        </Table.Cell>
                        <Table.Cell>
                          {market.max.toLocaleString("bn-BD")} <span>টাকা</span>
                        </Table.Cell>
                        <Table.Cell className={"font-bold"}>
                          {((market.max + market.min) / 2).toLocaleString(
                            "bn-BD",
                          )}{" "}
                          <span>টাকা</span>{" "}
                        </Table.Cell>
                      </Table.Row>
                    ))}
                  </Table.Body>
                </Table.Content>
              </Table.ScrollContainer>
            </Table>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ProductDetails;
