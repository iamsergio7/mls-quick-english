import React from "react";
import { Lock,Play } from "lucide-react";

function CourseContentSection({ courseInfo }) {
  const [activeIndex, setActiveIndex] = React.useState(0);

  return (
    <div className="p-3 bg-white rounded-sm mt-3">
      <h2 className="text-[22px] font-bold">Course Contents</h2>
      {courseInfo &&
        courseInfo.chapter &&
        courseInfo.chapter.map((item, index) => (
          <div key={index}>
            {" "}
            {/* Añade una key única para cada iteración */}
            <h2
              className={`p-2 text-[14px] flex justify-between items-center m-2 hover:bg-gray-200 hover:text-gray-500 border rounded-sm px-4 cursor-pointer ${
                activeIndex == index && "bg-primary text-white"
              }`}
            >
              {index + 1}. {item.name}
              {activeIndex == index ? (
                <Play
                  className="h-4 w-4"
                  onClick={() => setActiveIndex(null)}
                />
              ) : (
                <Lock className="h-4 w-4" />
              )}
            </h2>
          </div>
        ))}
    </div>
  );
}

export default CourseContentSection;
