import React from "react";
import Image from "next/image";

function WelcomeBanner() {
  return (
    <div className="flex gap-5 items-center bg-white rounded-xl p-5">
      <div>
        <h2 className="font-bold text-[29px] text-gray-500">Welcome to <span className="text-orange-400">Quick English</span> </h2>
        <h2 className="text-gray-500">Learn from the best teachers in the world</h2>
      </div>
    </div>
  );
}

export default WelcomeBanner;
