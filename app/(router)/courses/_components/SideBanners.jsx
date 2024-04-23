"use client";

// Importar las dependencias necesarias
import GlobalApi from "@/app/_utils/GlobalApi";
import { useEffect, useState } from "react";
import Image from "next/image";

/**
* Componente funcional que renderiza banners laterales.
*
* @returns {JSX.Element} Elemento JSX que representa el componente.
*/
function SideBanners() {
 // Estado para almacenar la lista de banners laterales
 const [sideBannerList, setSideBannerList] = useState([]);

 // Efecto secundario que se ejecuta al montar el componente
 useEffect(() => {
   getSideBanners();
 }, []);

 /**
  * Función para obtener la lista de banners laterales.
  */
 const getSideBanners = () => {
   GlobalApi.getSideBanner().then((resp) => {
     console.log(resp);
     setSideBannerList(resp.sideBanners);
   });
 };

 return (
   <div>
     {/* Renderizar los banners laterales */}
     {sideBannerList.map((item, index) => (
       <div key={index}>
         <Image
           src={item.banner.url}
           alt="banner"
           width={500}
           height={300}
           onClick={() => window.open(item.url)}
           className="rounded-lg cursor-pointer"
         />
       </div>
     ))}
   </div>
 );
}

// Exportar el componente para que pueda ser utilizado en otros archivos
export default SideBanners;