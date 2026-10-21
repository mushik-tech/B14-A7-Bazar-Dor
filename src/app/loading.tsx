import ProductCardSkeleton from "@/Components/Loading/ProductCardSkeleton";
import React from "react";

const LoadingPage = () => {
  return (
    <main className="mx-auto mb-16 max-w-6xl px-4">
      {/* Banner skeleton */}
      <div className="mt-6 mb-10 animate-pulse rounded-2xl bg-[#E4EBE4] p-8 md:p-12">
        <div className="max-w-lg space-y-4 py-6">
          <div className="h-7 w-3/4 rounded-lg bg-white/70" />
          <div className="h-4 w-full rounded bg-white/70" />
          <div className="h-4 w-2/3 rounded bg-white/70" />
          <div className="h-11 w-36 rounded-lg bg-white/70" />
        </div>
      </div>

      <div className="space-y-10">
        {[1, 2, 3].map((section) => (
          <section key={section}>
            <div className="mb-5 h-7 w-48 animate-pulse rounded bg-[#E4EBE4]" />

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 6 }).map((_, index) => (
                <ProductCardSkeleton key={index} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
};

export default LoadingPage;
