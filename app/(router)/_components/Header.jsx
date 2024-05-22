"use client"

// Importar las dependencias necesarias
import { Button } from "@/components/ui/button";
import { BellDot, Search, Menu } from "lucide-react";
import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";

/**
* Componente funcional que renderiza el encabezado de la aplicación.
* Incluye una barra de búsqueda, un icono de notificación y un botón de inicio de sesión/usuario.
*
* @returns {JSX.Element} Elemento JSX que representa el componente.
*/
function Header({ toggleSideNav }) {
  // Obtener la información del usuario autenticado
  const { user, isLoaded } = useUser();

  return (
    <div className="p-4 bg-white flex justify-between items-center">
      {/* Barra de búsqueda */}
      <div className="flex flex-1 gap-2 border p-2 rounded-md">
        <Search className="h-5 w-5" />
        <input
          type="text"
          placeholder="Search for courses"
          className="outline-none flex-1"
        />
      </div>

      {/* Botón de inicio de sesión/usuario y icono de notificación */}
      <div className="flex items-center gap-2">
        <BellDot className="text-gray-500" />
        {/* Renderizar el botón de usuario o el botón de inicio de sesión */}
        {isLoaded && user ? (
          <UserButton afterSignOutUrl='/courses' />
        ) : (
          <Link href={'/sign-in'}>
            <Button>Get Started</Button>
          </Link>
        )}
      </div>
      {/* Botón de menú para dispositivos móviles */}
      <button onClick={toggleSideNav} className="md:hidden ml-2 p-2 bg-gray-800 text-white rounded-md">
        <Menu />
      </button>
    </div>
  );
}

// Exportar el componente para que pueda ser utilizado en otros archivos
export default Header;
