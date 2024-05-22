import { Progress } from "@/components/ui/progress";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function ProgressCourseItem({ course }) {
  const getTotalCompletedChapterPerc = (item) => {
    //(totalCompletedChapter/totalChapter)*100
    const perc =
      (item.completedChapter?.length / item?.courseList?.chapter?.length) * 100;
    return perc;
  };

  return (
    <Link href={"/course-preview/" + course?.courseList?.slug}>
      <div>
        <div className="border rounded-md hover:shadow-md hover:shadow-orange-300 cursor-pointer">
          {/* Renderizar la imagen del banner del curso */}
          <Image
            src={course.courseList?.banner?.url}
            alt="banner"
            width={500}
            height={150}
            className="round-t-xl"
          />

          {/* Sección con información adicional del curso */}
          <div className="flex flex-col gap-1 p-2">
            {/* Nombre del curso */}
            <h2 className="font-bold text-gray-500">
              {course.courseList?.name}
            </h2>
            <h2 className="text-[16px] text-gray-500 mt-3">
              {" "}
              {getTotalCompletedChapterPerc(course)}%{" "}
              <span className="float-right">
                {course.completedChapter?.length} /
                {course?.courseList?.chapter?.length} Chapters
              </span>
            </h2>
            <Progress
              value={getTotalCompletedChapterPerc(course)}
              className="h-[12px]"
            />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProgressCourseItem;
