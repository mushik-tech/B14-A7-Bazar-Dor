import { Button, Card, Chip } from "@heroui/react";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="my-8 px-4 md:px-0">
      <Card className="flex flex-col md:flex-row-reverse justify-around items-center bg-[#FAFCFA]">
        <div className="flex-1 rounded-2xl justify-end flex">
          <Image
            alt="Cherries"
            loading="eager"
            src={"/bazar-hero.png"}
            width={300}
            height={300}
          />
        </div>
        <div className="flex flex-1 flex-col gap-3 space-y-4">
          <Card.Header className="gap-1 space-y-4">
            <Chip
              color="success"
              className="text-xs md:text-sm bg-[#05893E10] font-semibold"
            >
              {new Date().toLocaleDateString("bn-BD", {
                dateStyle: "full",
              })}
            </Chip>
            <Card.Title className="pe-8 text-2xl font-semibold">
              আজকের বাজারের দাম এক নজরে
            </Card.Title>
            <Card.Description>
              চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
              বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
            </Card.Description>
          </Card.Header>
          <Card.Footer className="mt-auto flex w-full flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
            <Button className="w-full sm:w-auto bg-[#05893E] rounded-lg">
              সব পণ্য দেখুন
            </Button>
          </Card.Footer>
        </div>
      </Card>
    </div>
  );
};

export default Banner;
