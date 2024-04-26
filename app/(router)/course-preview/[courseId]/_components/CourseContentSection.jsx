// Importar las dependencias necesarias
import React from "react";
import { Lock, Play } from "lucide-react";
import { useState } from "react";

/**
 * Componente funcional que renderiza la sección de contenido del curso.
 *
 * @param {Object} props - Objeto con las propiedades del componente.
 * @param {Object} props.courseInfo - Objeto con la información del curso.
 * @param {boolean} props.isUserAlreadyEnrolled - Indica si el usuario ya está inscrito al curso.
 * @param {boolean} [props.watchMode=false] - Indica si el componente está en modo de visualización.
 * @param {Function} props.setActiveChapterIndex - Función para establecer el índice del capítulo activo.
 * @returns {JSX.Element} Elemento JSX que representa el componente.
 */
function CourseContentSection({
  courseInfo,
  isUserAlreadyEnrolled,
  watchMode = false,
  setActiveChapterIndex,
  completedChapter,
}) {
  // Estado para controlar el índice del capítulo activo
  const [activeIndex, setActiveIndex] = useState(0);

  /**
   * Función para marcar un capítulo como completado.
   */
  const checkIsChapterCompleted = (chapterId) => {
    return completedChapter.find((item) => item.chapterId == chapterId);
  };

  return (
    <div className="p-3 bg-white rounded-sm mt-3">
      {/* Título de la sección */}
      <h2 className="text-[22px] font-bold">Course Contents</h2>

      {/* Renderizar los capítulos del curso */}
      {courseInfo &&
        courseInfo.chapter &&
        courseInfo.chapter.map((item, index) => (
          <div key={index}>
            {" "}
            {/* Asignar una clave única a cada iteración */}
            <h2
              className={`p-2 text-[14px] flex justify-between items-center m-2 hover:bg-gray-200 hover:text-gray-500 border rounded-sm px-4 cursor-pointer ${
                activeIndex === index && "bg-orange-400 text-white"
              } ${
                isUserAlreadyEnrolled && "hover:bg-orange-400 hover:text-white"
              } ${
                watchMode &&
                checkIsChapterCompleted(item.id) &&
                "border-green-600 bg-green-400"
              }
              `}
              onClick={() => {
                watchMode && setActiveChapterIndex(index); // Establecer el índice del capítulo activo si está en modo de visualización
                watchMode && setActiveIndex(index); // Actualizar el estado del índice activo si está en modo de visualización
              }}
            >
              {/* Nombre del capítulo */}
              {index + 1}. {item.name}
              {/* Renderizar un ícono según el índice activo o si el usuario está inscrito */}
              {activeIndex === index || isUserAlreadyEnrolled ? (
                <Play className="h-4 w-4" />
              ) : (
                <Lock className="h-4 w-4" />
              )}
            </h2>
          </div>
        ))}
    </div>
  );
}

// Exportar el componente para que pueda ser utilizado en otros archivos
export default CourseContentSection;
