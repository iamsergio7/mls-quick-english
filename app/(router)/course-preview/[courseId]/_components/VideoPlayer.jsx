/**
* Componente funcional que renderiza un reproductor de video.
*
* @param {Object} props - Objeto con las propiedades del componente.
* @param {string} props.videoUrl - URL del video a reproducir.
* @param {string} [props.poster] - URL de la imagen del póster del video.
* @returns {JSX.Element} Elemento JSX que representa el componente.
*/
import React from "react";

function VideoPlayer({ videoUrl, poster }) {
 return (
   // Elemento de video con controles y estilos personalizados
   <video
     width={1000}
     height={250}
     controls
     key={videoUrl}
     className="rounded-sm"
     poster={poster}
   >
     {/* Fuente del video a reproducir */}
     <source src={videoUrl} type="video/mp4" />
   </video>
 );
}

// Exportar el componente para que pueda ser utilizado en otros archivos
export default VideoPlayer;