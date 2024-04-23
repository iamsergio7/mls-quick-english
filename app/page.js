"use client"; // Esta línea indica que este archivo es un componente de React en el lado del cliente para la nueva arquitectura de React Server Components.
import Image from "next/image"; // Importa el componente Image de Next.js, aunque no se utiliza en este archivo.
import { UserButton, useUser } from "@clerk/nextjs"; // Importa el componente UserButton y el hook useUser desde la librería @clerk/nextjs, probablemente para manejar la autenticación de usuarios.
import { useRouter } from "next/navigation"; // Importa el hook useRouter de Next.js para navegar entre rutas.
import { useEffect } from "react"; // Importa el hook useEffect de React.

// Define un componente funcional llamado Home
export default function Home() {
  const router = useRouter(); // Obtiene una instancia del enrutador de Next.js
  const { user, isLoaded } = useUser(); // Obtiene el objeto user y el estado isLoaded del hook useUser

  useEffect(() => {
    // Este efecto se ejecuta cada vez que el valor de user cambia
    if (user) {
      // Si el usuario está autenticado, navega a la ruta "/dashboard"
      router.push("/dashboard");
    } else {
      // Si el usuario no está autenticado y isLoaded es true, navega a la ruta "/courses"
      isLoaded && router.push("/courses");
    }
  }, [user]); // El arreglo de dependencias asegura que el efecto se ejecute solo cuando user cambia

  return (
    <div className="h-screen">
      <UserButton /> {/* Renderiza el componente UserButton de @clerk/nextjs */}
    </div>
  );
}