import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import React from "react";
import erp from "../../public/erp.webp";

const ProductCard = () => {
  const image1 = erp;
  const image2 =
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const image3 =
    "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <div className=" gap-4 md:px-8 flex-col  lg:flex-row hidden lg:flex ">
      <div className="  flex justify-between ">
        <DirectionAwareHover imageUrl={image1}>
          <p className="font-bold text-xl">Booking System</p>
          <p className="font-normal text-sm">Tech: Laravel | Next JS</p>
        </DirectionAwareHover>
      </div>
      <div className="  flex  justify-center">
        <DirectionAwareHover imageUrl={image2}>
          <p className="font-bold text-xl">Booking System</p>
          <p className="font-normal text-sm">Tech: Laravel | Next JS</p>
        </DirectionAwareHover>
      </div>
      <div className="  flex  justify-center">
        <DirectionAwareHover imageUrl={image3}>
          <p className="font-bold text-xl">Booking System</p>
          <p className="font-normal text-sm">Tech: Laravel | Next JS</p>
        </DirectionAwareHover>
      </div>
      <div className="  flex  justify-center">
        <DirectionAwareHover imageUrl={image1}>
          <p className="font-bold text-xl">Booking System</p>
          <p className="font-normal text-sm">Tech: Laravel | Next JS</p>
        </DirectionAwareHover>
      </div>
    </div>
  );
};

export default ProductCard;
