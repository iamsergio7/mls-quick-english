"use client";

// Importar las dependencias necesarias
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import CourseVideoDescription from "./_components/CourseVideoDescription";
import GlobalApi from "@/app/_utils/GlobalApi";
import CourseEnrollSection from "./_components/CourseEnrollSection";
import CourseContentSection from "./_components/CourseContentSection";
import { useUser } from "@clerk/nextjs";

/**
 * Componente funcional que renderiza una vista previa del curso.
 * Incluye la descripción del video, la sección de inscripción y el contenido del curso.
 *
 * @param {Object} props - Objeto con las propiedades del componente.
 * @param {Object} props.params - Objeto con los parámetros de la ruta.
 * @returns {JSX.Element} Elemento JSX que representa el componente.
 */
function CoursePreview({ params }) {
  // Obtener la información del usuario autenticado
  const { user } = useUser();

  // Estado para almacenar la información del curso
  const [courseInfo, setCourseInfo] = useState([]);

  // Estado para almacenar si el usuario ya está inscrito al curso
  const [isUserAlreadyEnrolled, setIsUserAlreadyEnrolled] = useState();

  // Obtener la ruta actual
  const path = usePathname();

  // Efecto secundario que se ejecuta cuando cambian los parámetros de la ruta
  useEffect(() => {
    params && getCourseInfoById();
  }, [params]);

  // Efecto secundario que se ejecuta cuando cambian la información del curso o el usuario
  useEffect(() => {
    courseInfo && user && checkUserEnrolledToCourse();
  }, [courseInfo, user]);

  /**
   * Función para obtener la información del curso por su ID.
   */
  const getCourseInfoById = () => {
    GlobalApi.getCourseById(params?.courseId).then((resp) => {
      console.log("Course Info", resp?.courseList);
      setCourseInfo(resp?.courseList);
    });
  };

  /**
   * Función para verificar si el usuario ya está inscrito al curso.
   */
  const checkUserEnrolledToCourse = () => {
    GlobalApi.checkUserEnrolledToCourse(
      courseInfo.slug,
      user.primaryEmailAddress.emailAddress
    ).then((resp) => {
      if (resp?.userEnrollCourses) {
        console.log("User Already Enrolled to this Course", resp);
        setIsUserAlreadyEnrolled(resp?.userEnrollCourses[0]?.id);
      }
    });
  };

  return (
    courseInfo && (
      <div className="grid grid-cols-1 md:grid-cols-3 p-5 gap-3">
        {/* Título, video y descripción */}
        <div className="col-span-2 bg-white p-3">
          <CourseVideoDescription courseInfo={courseInfo} 
            activeChapterIndex={0}
            
          />
          
        </div>

        {/* Sección de inscripción al curso y contenido del curso */}
        <div>
          <CourseEnrollSection
            courseInfo={courseInfo}
            isUserAlreadyEnrolled={isUserAlreadyEnrolled}
          />
          <CourseContentSection
            courseInfo={courseInfo}
            isUserAlreadyEnrolled={isUserAlreadyEnrolled}

          />
        </div>
      </div>
    )
  );
}

// Exportar el componente para que pueda ser utilizado en otros archivos
export default CoursePreview;
