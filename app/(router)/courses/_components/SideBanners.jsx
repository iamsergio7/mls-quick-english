"use client";

import GlobalApi from "@/app/_utils/GlobalApi";
import { useEffect, useState } from "react";
import Image from "next/image";

function SideBanners() {
  const [sideBannerList, setSideBannerList] = useState([]);

  useEffect(() => {
    getSideBanners();
  }, []);

  const getSideBanners = () => {
    GlobalApi.getSideBanner().then((resp) => {
      console.log(resp);
      setSideBannerList(resp.sideBanners);
    });
  };

  return (
    <div>
      {sideBannerList.map((item, index) => (
        
        <div key={index}>
          <Image
            src={item.banner.url}
            alt="banner"
            width={500}
            height={300}
           
            onClick={() => window.open(item.url)}
            className="rounded-lg cursor-pointer"
          />
        </div>
      ))}
    </div>
  );
}
export default SideBanners;
