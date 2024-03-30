import React from "react";
import Image from "next/image";

function CourseItem({ course }) {
  return (
    <div className="border rounded-xl hover:shadow-md hover:shadow-orange-300 cursor-pointer">
      <Image
        src={course?.banner?.url}
        alt="banner"
        width={500}
        height={150}
        className="round-t-xl"
      />
      <div className="flex flex-col gap-1 p-2">
        <h2 className="font-medium  text-gray-400"> {course.name}</h2>

        <div className="flex gap-2">
            <Image
                src="/chapter.png"
                alt="chapter"
                width={20}
                height={20}
            />
            <h2 className="text-[14px] text-gray-400">Chapters</h2>
        </div>



        <h2 className="text-[15px]">{course?.free ? "Free" : "Paid"}</h2>

      </div>
    </div>
  );
}

export default CourseItem;
