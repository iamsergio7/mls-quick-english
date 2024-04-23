import Header from "./_components/Header"; // Importa el componente Header desde la ruta especificada.
import SideNav from "./_components/SideNav"; // Importa el componente SideNav desde la ruta especificada.

// Define un componente funcional llamado layout que recibe props.children
function layout({ children }) {
  return (
    <div>
      {/* Contenedor de la SideNav */}
      <div className="sm:w-64 sm:block fixed">
        <SideNav />
      </div>

      {/* Contenedor principal */}
      <div className="ml-64">
        <Header /> {/* Renderiza el componente Header */}
        {children} {/* Renderiza el contenido anidado */}
      </div>
    </div>
  );
}

export default layout; // Exporta el componente layout como el componente principal del archivo.