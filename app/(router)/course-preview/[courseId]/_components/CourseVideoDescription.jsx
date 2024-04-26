// Importar las dependencias necesarias
import React from "react";
import VideoPlayer from "./VideoPlayer";
import Markdown from "react-markdown";
import { Button } from "@/components/ui/button";

/**
 * Componente funcional que renderiza la descripción del video del curso.
 *
 * @param {Object} props - Objeto con las propiedades del componente.
 * @param {Object} props.courseInfo - Objeto con la información del curso.
 * @param {number} props.activeChapterIndex - Índice del capítulo activo.
 * @param {boolean} [props.watchMode=false] - Indica si se está en modo de visualización.
 * @returns {JSX.Element} Elemento JSX que representa el componente.
 */
function CourseVideoDescription({
  courseInfo,
  activeChapterIndex,
  watchMode = false,
  setChapterCompleted
}) {
  // Obtener la URL del video del capítulo activo
  const videoUrl = courseInfo?.chapter?.[activeChapterIndex]?.video?.url;
  return (
    <div>
      {/* Renderizar el nombre del curso */}
      <h2 className="text-[20px] font-semibold">{courseInfo.name}</h2>

      {/* Renderizar el autor del curso */}
      <h2 className="text-gray-500 text-[14px] mb-3">{courseInfo.author}</h2>

      {/* Renderizar el reproductor de video o un mensaje si no hay video disponible */}
      {videoUrl ? (
        <VideoPlayer
          videoUrl={videoUrl}
          poster={!watchMode ? courseInfo?.banner?.url : null}
        />
      ) : (
        <p>Video no disponible.</p>
        // O manejar la ausencia del video de manera diferente
      )}

      {/* Renderizar el título de la descripción */}
      <h2 className="text-[17px] font-semibold mt-5">
        {watchMode ? (
          <span className="flex justify-between items-center">{courseInfo?.chapter?.[activeChapterIndex]?.name}
          <Button onClick={() => setChapterCompleted(courseInfo?.chapter?.[activeChapterIndex]?.id) }>
            Mark as complete
          </Button>
          </span>
          
        ) : (
          <span>Acerca de este curso</span>
        )}
      </h2>

      {/* Renderizar la descripción */}
      {watchMode ? (
        <Markdown className="text-[13px] font-light mt-2 leading-7">
          {courseInfo?.chapter?.[activeChapterIndex]?.shortDesc}
        </Markdown>
      ) : (
        <Markdown className="text-[13px] font-light mt-2 leading-7">
          {courseInfo.description}
        </Markdown>
      )}
    </div>
  );
}

// Exportar el componente para que pueda ser utilizado en otros archivos
export default CourseVideoDescription;
