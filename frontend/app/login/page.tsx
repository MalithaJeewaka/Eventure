import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="h-screen">
      <div className="h-full w-full flex justify-between items-center">
        <div className="flex-1 relative h-full bg-slate-500">
          <Image
            src={"/images/1.jpg"}
            fill
            alt="login image"
            className="object-cover object-center"
          />
        </div>
        <div className="flex-1 h-full"></div>
      </div>
    </div>
  );
};

export default page;
