import React from "react";
import VideoPlayer from "./VideoPlayer";
import Markdown from "react-markdown";

function CourseVideoDescription({ courseInfo }) {
  // Asegurarse de que courseInfo.chapter y el video existan, de lo contrario establecer videoUrl como undefined o una URL predeterminada
  const videoUrl = courseInfo?.chapter?.[0]?.video?.url;

  return (
    <div>
      <h2 className="text-[20px] font-semibold">{courseInfo.name}</h2>
      <h2 className="text-gray-500 text-[14px] mb-3">{courseInfo.author}</h2>
      {/* Video Player */}
      {videoUrl ? (
        <VideoPlayer videoUrl={videoUrl} />
      ) : (
        <p>Video not available.</p> // O manejar la ausencia del video de manera diferente
      )}
      {/* Description */}
      <h2 className="text-[17px] font-semibold mt-5">About This Course</h2>

      <Markdown className="text-[13px] font-light mt-2 leading-7">
        {courseInfo.description}
      </Markdown>
    </div>
  );
}

export default CourseVideoDescription;
