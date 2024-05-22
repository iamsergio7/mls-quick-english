import Image from "next/image";
import React from "react";

function WelcomeBannerDashboard({ user}) {
  return (
    <div className="bg-gray-100 rounded-sm p-5 flex gap-5 items-center">
      
      <div>
        <h2 className="text-[32px] font-bold text-gray-500">
          Welcome to your dashboard, 
          <span className="font-bold text-orange-400">{" "+user?.fullName}</span>
        </h2>
        <h2 className="text-[16px] font-light text-slate-500">
          Lets Begin Learning
        </h2>
      </div>
    </div>
  );
}

export default WelcomeBannerDashboard;
