import { ShoppingCart } from "@gravity-ui/icons";

const Logo = () => {
  return (
    <div className="flex items-center gap-3">
      <div className="bg-[#05893E] p-2 md:p-3 rounded-xl">
        <ShoppingCart />
      </div>
      <div>
        <h1 className="md:text-lg font-bold">বাজার দর</h1>
        <p className="text-xs md:text-sm">
          {new Date().toLocaleDateString("bn-BD", {
            dateStyle: "full",
          })}
        </p>
      </div>
    </div>
  );
};

export default Logo;
