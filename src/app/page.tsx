import Banner from "@/Components/Homepage/Banner";
import ProductCard from "@/Components/Homepage/ProductCard";
import { IProduct } from "@/types/product.types";

const getAllProduct = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/products",
  );
  const data = await res.json();
  return data;
};

export default async function Home() {
  const products: IProduct[] = await getAllProduct();

  // console.log(products);

  const highPriceProducts = products
    .filter((product) => product.change.dir === "up")
    .sort((a, b) => b.change.pct - a.change.pct)
    .slice(0, 6);

  const lowPriceProducts = products
    .filter((product) => product.change.dir === "down")
    .sort((a, b) => a.change.pct - b.change.pct)
    .slice(0, 6);

  return (
    <div className="max-w-6xl mx-auto mb-16">
      <Banner />

      <div className="px-4 md:px-0">
        {/* High Price */}
        <div className="mb-12">
          <h1 className="text-xl font-bold">
            <span className="text-green-500 mr-2">▲</span>আজ দাম বেড়েছে
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
            {highPriceProducts.map((product) => (
              <ProductCard key={product.id} product={product}></ProductCard>
            ))}
          </div>
        </div>
        {/* Low Price */}
        <div className="mb-12">
          <h1 className="text-xl font-bold">
            <span className=" text-red-500 mr-2">▼</span>আজ দাম কমেছে
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
            {lowPriceProducts.map((product) => (
              <ProductCard key={product.id} product={product}></ProductCard>
            ))}
          </div>
        </div>

        {/* All Price Product */}
        <div>
          <h1 className="text-xl font-bold my-4">সব পণ্য</h1>
          <p className="text-gray-500">
            মোট {products.length.toLocaleString("bn-BD")}টি পণ্য দেখানো হচ্ছে
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
            {products.map((product) => (
              <ProductCard key={product.id} product={product}></ProductCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
