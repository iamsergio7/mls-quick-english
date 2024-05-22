/**
* Componente funcional que renderiza un elemento de curso.
*
* @param {Object} props - Objeto con las propiedades del componente.
* @param {Object} props.course - Objeto con la información del curso.
* @param {string} props.course.name - Nombre del curso.
* @param {Object} props.course.banner - Objeto con la información del banner del curso.
* @param {string} props.course.banner.url - URL de la imagen del banner del curso.
* @param {boolean} props.course.free - Indica si el curso es gratuito o de pago.
* @returns {JSX.Element} Elemento JSX que representa el componente.
*/
import React from "react";
import Image from "next/image";

function CourseItem({ course }) {
 return (
   // Elemento contenedor con estilos aplicados
   <div className="border rounded-md hover:shadow-md hover:shadow-orange-300 cursor-pointer">
     {/* Renderizar la imagen del banner del curso */}
     <Image
       src={course?.banner?.url}
       alt="banner"
       width={500}
       height={150}
       className="round-t-xl"
     />

     {/* Sección con información adicional del curso */}
     <div className="flex flex-col gap-1 p-2">
       {/* Nombre del curso */}
       <h2 className="font-medium text-gray-400">{course.name}</h2>

       {/* Cantidad de capítulos */}
       <div className="flex gap-2">
         <Image src="/chapter.png" alt="chapter" width={20} height={20} />
         <h2 className="text-[14px] text-gray-400">Chapters</h2>
       </div>

       {/* Indicar si el curso es gratuito o de pago */}
       <h2 className="text-[15px]">{course?.free ? "Free" : "Paid"}</h2>
     </div>
   </div>
 );
}

// Exportar el componente para que pueda ser utilizado en otros archivos
export default CourseItem;