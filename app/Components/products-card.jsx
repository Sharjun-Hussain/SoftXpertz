import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import React from "react";

const ProductCard = () => {
  const image1 =
    "https://images.unsplash.com/photo-1663765970236-f2acfde22237?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const image2 =
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const image3 =
    "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <div className="flex gap-3 md:px-8 overflow-x-scroll">
      <div className="h-[40rem]  flex  md:justify-center ">
        <DirectionAwareHover imageUrl={image1}>
          <p className="font-bold text-xl">Booking System</p>
          <p className="font-normal text-sm">Tech: Laravel | Next JS</p>
        </DirectionAwareHover>
      </div>
      <div className="h-[40rem]  flex  justify-center">
        <DirectionAwareHover imageUrl={image2}>
          <p className="font-bold text-xl">Booking System</p>
          <p className="font-normal text-sm">Tech: Laravel | Next JS</p>
        </DirectionAwareHover>
      </div>
      <div className="h-[40rem]  flex  justify-center">
        <DirectionAwareHover imageUrl={image3}>
          <p className="font-bold text-xl">Booking System</p>
          <p className="font-normal text-sm">Tech: Laravel | Next JS</p>
        </DirectionAwareHover>
      </div>
      <div className="h-[40rem]  flex  justify-center">
        <DirectionAwareHover imageUrl={image1}>
          <p className="font-bold text-xl">Booking System</p>
          <p className="font-normal text-sm">Tech: Laravel | Next JS</p>
        </DirectionAwareHover>
      </div>
    </div>
  );
};

export default ProductCard;
