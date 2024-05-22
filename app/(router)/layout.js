"use client"

import { useState } from "react";
import Header from "./_components/Header"; // Importa el componente Header desde la ruta especificada.
import SideNav from "./_components/SideNav"; // Importa el componente SideNav desde la ruta especificada.

function Layout({ children }) {
  const [sideNavOpen, setSideNavOpen] = useState(false);

  const toggleSideNav = () => {
    setSideNavOpen(!sideNavOpen);
  };

  return (
    <div className="flex">
      {/* Contenedor de la SideNav */}
      <div
        className={`sm:w-64 sm:block fixed top-0 left-0 h-full z-40 transition-transform duration-300 transform ${
          sideNavOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        <SideNav />
      </div>

      {/* Contenedor principal */}
      <div className="flex-1 md:ml-64">
        <Header toggleSideNav={toggleSideNav} /> {/* Renderiza el componente Header */}
        <main className="p-4">{children}</main> {/* Renderiza el contenido anidado */}
      </div>
    </div>
  );
}

export default Layout; // Exporta el componente layout como el componente principal del archivo.
