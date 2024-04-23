"use client"; // Esta línea indica que este archivo es un componente de React en el lado del cliente para la nueva arquitectura de React Server Components.
import React from "react"; // Importa la librería principal de React.
import CourseList from "./_components/CourseList"; // Importa el componente CourseList desde la ruta especificada.
import WelcomeBanner from "./_components/WelcomeBanner"; // Importa el componente WelcomeBanner desde la ruta especificada.
import SideBanners from "./_components/SideBanners"; // Importa el componente SideBanners desde la ruta especificada.

// Define un componente funcional llamado Courses
function Courses() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 p-5 gap-5">
      {/* Contenedor izquierdo */}
      <div className="col-span-3">
        {/* Renderiza el componente WelcomeBanner */}
        <WelcomeBanner />
        {/* Renderiza el componente CourseList */}
        <CourseList />
      </div>

      {/* Contenedor derecho */}
      <div className="p-5 bg-white rounded-xl">
        {/* Renderiza el componente SideBanners */}
        <SideBanners />
      </div>
    </div>
  );
}

export default Courses; // Exporta el componente Courses como el componente principal del archivo.