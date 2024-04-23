/**
* Componente funcional que renderiza una lista de cursos.
*
* @returns {JSX.Element} Elemento JSX que representa el componente.
*/
import GlobalApi from "@/app/_utils/GlobalApi";
import React, { useEffect, useState } from "react";
import {
 Select,
 SelectContent,
 SelectItem,
 SelectTrigger,
 SelectValue,
} from "@/components/ui/select";
import CourseItem from "./CourseItem";
import Link from "next/link";

function CourseList() {
 // Estado para almacenar la lista de cursos
 const [courseList, setCourseList] = useState([]);

 // Efecto secundario que se ejecuta al montar el componente
 useEffect(() => {
   getAllCourses();
 }, []);

 /**
  * Función para obtener la lista completa de cursos.
  */
 const getAllCourses = () => {
   GlobalApi.getAllCourseList().then((resp) => {
     setCourseList(resp?.courseLists);
   });
 };

 return (
   <div className="p-5 bg-white rounded-lg mt-5">
     {/* Título y filtro */}
     <div className="flex items-center justify-between">
       <h2 className="text-[20px] font-bold text-orange-400">All Courses</h2>
       <Select>
         <SelectTrigger className="w-[180px]">
           <SelectValue placeholder="Filter" />
         </SelectTrigger>
         <SelectContent>
           <SelectItem value="light">All</SelectItem>
           <SelectItem value="dark">Paid</SelectItem>
           <SelectItem value="system">Free</SelectItem>
         </SelectContent>
       </Select>
     </div>

     {/* Mostrar la lista de cursos */}
     <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
       {courseList?.length > 0 ? (
         courseList.map((item, index) => (
           <Link key={index} href={"/course-preview/" + item.slug}>
             <div className="bg-white rounded-lg shadow-sm">
               <CourseItem course={item} />
             </div>
           </Link>
         ))
       ) : (
         // Renderizar elementos de carga si no hay cursos
         [1, 2, 3, 4, 5, 6, 7].map((item, index) => (
           <div
             key={index}
             className="w-full h-[240px] rounded-xl m-2 bg-slate-200 animate-pulse"
           ></div>
         ))
       )}
     </div>
   </div>
 );
}

// Exportar el componente para que pueda ser utilizado en otros archivos
export default CourseList;