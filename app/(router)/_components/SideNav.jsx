"use client"

// Importar las dependencias necesarias
import { BadgeIcon, BookOpen, GraduationCap, LayoutDashboard, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useUser } from "@clerk/nextjs";

/**
* Componente funcional que renderiza la barra lateral de navegación.
* Incluye un menú con enlaces a diferentes secciones de la aplicación.
*
* @returns {JSX.Element} Elemento JSX que representa el componente.
*/
function SideNav() {
 // Obtener la información del usuario autenticado
 const { user } = useUser();

 // Definir los elementos del menú
 const menu = [
   { id: 4, name: "Dashboard", icon: LayoutDashboard, path: "/dashboard", auth: user },
   { id: 1, name: "Grades", icon: BookOpen, path: "/courses", auth: true },
   { id: 2, name: "Your Profile", icon: BadgeIcon, path: "/membership", auth: true },
   { id: 3, name: "Be Instructor", icon: GraduationCap, path: "/instructor", auth: true },
   { id: 5, name: "Notifications", icon: Mail, path: "/newsletter", auth: true },
 ];

 // Obtener la ruta actual
 const path = usePathname();

 // Efecto secundario que se ejecuta al montar el componente
 useEffect(() => {
   console.log("path", path);
 }, []);

 return (
   <div className="p-5 bg-orange-400 shadow-sm border h-screen">
     {/* Renderizar el logotipo */}
     <Image src="/logo.png" alt="logo" width={170} height={80} />
     <hr className="mt-7"></hr>

     {/* Renderizar el menú */}
     <div className="mt-5">
       {menu.map((item, index) =>
         item.auth && (
           <Link key={item.id} href={item.path}>
             <div
               className={`group flex gap-3 mt-2 p-3 text-[18px] items-center text-white cursor-pointer hover:bg-orange-500 hover:text-white rounded-md transition-all ease-in-out duration-200 ${
                 path.includes(item.path) && 'bg-orange-500 text-white'
               }`}
             >
               <item.icon className="group-hover:animate-bounce" />
               <h2>{item.name}</h2>
             </div>
           </Link>
         )
       )}
     </div>
   </div>
 );
}

// Exportar el componente para que pueda ser utilizado en otros archivos
export default SideNav;