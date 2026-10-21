import { IProduct } from "@/types/product.types";
import { Card, Chip } from "@heroui/react";
import Link from "next/link";

export interface ProductCardProps {
  product: IProduct;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link href={`/product/${product.id}`}>
      <Card className="rounded-xl border bg-[#FAFCFA]">
        <Card.Header>
          <Card.Title className="flex gap-3">
            <div className="p-3 bg-[#F0F5F0] rounded-xl">
              <p className="text-2xl">{product.image}</p>
            </div>
            <div>
              <p className="text-xl font-bold">{product.nameBn}</p>
              <p>
                <span className="mr-1">প্রতি</span>
                {product.unit === "kg"
                  ? "কেজি"
                  : product.unit === "litre"
                    ? "লিটার"
                    : product.unit === "dozen"
                      ? "ডজন"
                      : "পিস"}
              </p>
            </div>
          </Card.Title>
        </Card.Header>
        <Card.Footer className="flex justify-between">
          <div>
            <p className="text-sm">আজকের দাম</p>
            <h1>
              <span className="font-bold text-xl mr-2">
                {product.today.toLocaleString("bn-BD")}
              </span>
              টাকা
            </h1>
          </div>
          <Chip
            className={`${product.change.dir === "up" ? "text-green-500" : product.change.dir === "down" ? "text-red-500" : "text-gray-500"} flex gap-1 text-[14px] font-bold`}
          >
            <p>
              {product.change.dir === "up"
                ? "▲"
                : product.change.dir === "down"
                  ? "▼"
                  : "—"}
            </p>
            <p>{product.change.pct.toLocaleString("bn-BD")}%</p>
          </Chip>
        </Card.Footer>
      </Card>
    </Link>
  );
};

export default ProductCard;
