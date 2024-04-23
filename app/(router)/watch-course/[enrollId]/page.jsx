"use client"; // Esta línea indica que este archivo es un componente de React en el lado del cliente para la nueva arquitectura de React Server Components.
import GlobalApi from "@/app/_utils/GlobalApi"; // Importa un módulo personalizado llamado GlobalApi desde la ruta especificada.
import React, { useEffect, useState } from "react"; // Importa la librería principal de React y los hooks useEffect y useState.
import { useUser } from "@clerk/nextjs"; // Importa el hook useUser desde la librería @clerk/nextjs, probablemente para manejar la autenticación de usuarios.
import CourseVideoDescription from "../../course-preview/[courseId]/_components/CourseVideoDescription"; // Importa el componente CourseVideoDescription desde la ruta especificada.
import CourseContentSection from "../../course-preview/[courseId]/_components/CourseContentSection"; // Importa el componente CourseContentSection desde la ruta especificada.

// Define un componente funcional llamado WatchCourse que recibe props.params
function WatchCourse({ params }) {
  const { user } = useUser(); // Obtiene el objeto user del hook useUser
  const [courseInfo, setCourseInfo] = useState([]); // Define un estado courseInfo y su función actualizadora setCourseInfo con un valor inicial de []
  const [activeChapterIndex, setActiveChapterIndex] = useState(0); // Define un estado activeChapterIndex y su función actualizadora setActiveChapterIndex con un valor inicial de 0

  useEffect(() => {
    params && user && getUserEnrolledCourseDetail(); // Ejecuta la función getUserEnrolledCourseDetail solo cuando params y user existen
  }, [params && user]); // El arreglo de dependencias asegura que el efecto se ejecute solo cuando params o user cambian

  const getUserEnrolledCourseDetail = () => {
    GlobalApi.getUserEnrolledCourseDetails(
      params.enrollId,
      user.primaryEmailAddress.emailAddress
    ).then((resp) => {
      setCourseInfo(resp.userEnrollCourses[0].courseList); // Actualiza el estado courseInfo con los datos obtenidos de la API
    });
  };

  return (
    courseInfo.name && ( // Renderiza el contenido solo si courseInfo.name existe
      <div className="grid grid-cols-1 md:grid-cols-3 p-5 gap-3">
        {/* Título, Video, Descripción */}
        <div className="col-span-2 bg-white p-3">
          <CourseVideoDescription
            courseInfo={courseInfo}
            activeChapterIndex={activeChapterIndex}
            watchMode={true}
          />
        </div>
        {/* Contenido del curso */}
        <div>
          <CourseContentSection
            courseInfo={courseInfo}
            isUserAlreadyEnrolled={true}
            watchMode={true}
            setActiveChapterIndex={(index) => setActiveChapterIndex(index)}
            // setActiveChapterIndex={(index) => console.log(index)}
          />
        </div>
      </div>
    )
  );
}

export default WatchCourse; // Exporta el componente WatchCourse como el componente principal del archivo.