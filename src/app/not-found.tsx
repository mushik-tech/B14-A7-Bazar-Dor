import Link from "next/link";
import { Button } from "@heroui/react";

const NotFoundPage = () => {
  return (
    <main className="flex min-h-138 items-center justify-center bg-[#F0F5F0] px-4 py-16">
      <div className="w-full max-w-xl text-center">
        {/* Error Code */}
        <p className="mb-2 text-7xl font-extrabold tracking-tight text-[#008D45] sm:text-8xl">
          404
        </p>

        {/* Bengali Heading */}
        <h1 className="mb-3 text-2xl font-bold text-[#26352B] sm:text-3xl">
          দুঃখিত! পৃষ্ঠাটি খুঁজে পাওয়া যায়নি
        </h1>

        <p className="mx-auto mb-8 max-w-md text-sm leading-7 text-[#758078] sm:text-base">
          আপনি যে পৃষ্ঠাটি খুঁজছেন, সেটি হয়তো সরিয়ে ফেলা হয়েছে, ঠিকানা
          পরিবর্তন করা হয়েছে অথবা পৃষ্ঠাটি আর উপলব্ধ নেই।
        </p>

        {/* Action Card */}
        <div className="mx-auto max-w-md rounded-2xl border border-[#DFE8DF] bg-white p-5 shadow-sm sm:p-7">
          <p className="mb-5 text-sm text-[#68756B]">
            চিন্তার কিছু নেই! বাজার দর থেকে আপনার প্রয়োজনীয় তথ্য খুঁজে নিন।
          </p>

          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <Link href={"/"}>
              <Button className="h-11 bg-[#008D45] font-semibold text-white shadow-sm">
                হোম পেজে ফিরে যান
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NotFoundPage;
