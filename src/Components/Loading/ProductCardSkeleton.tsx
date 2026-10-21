import React from "react";

const ProductCardSkeleton = () => {
  return (
    <div className="animate-pulse overflow-hidden rounded-xl border border-[#DFE8DF] bg-[#FAFCFA] p-5">
      <div className="mb-4 flex items-center gap-3">
        <div className="h-12 w-12 rounded-xl bg-[#E4EBE4]" />

        <div className="flex-1 space-y-2">
          <div className="h-4 w-3/4 rounded bg-[#E4EBE4]" />
          <div className="h-3 w-1/2 rounded bg-[#E4EBE4]" />
        </div>
      </div>

      <div className="mb-3 h-4 w-1/3 rounded bg-[#E4EBE4]" />
      <div className="mb-5 h-7 w-1/2 rounded bg-[#E4EBE4]" />

      <div className="h-10 w-full rounded-lg bg-[#E4EBE4]" />
    </div>
  );
};

export default ProductCardSkeleton;
