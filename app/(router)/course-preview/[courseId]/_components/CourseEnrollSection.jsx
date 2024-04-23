// Importar las dependencias necesarias
import { Button } from "@/components/ui/button";
import React, { useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import GlobalApi from "@/app/_utils/GlobalApi";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

/**
 * Componente funcional que renderiza la sección de inscripción al curso.
 *
 * @param {Object} props - Objeto con las propiedades del componente.
 * @param {Object} props.courseInfo - Objeto con la información del curso.
 * @param {boolean} props.isUserAlreadyEnrolled - Indica si el usuario ya está inscrito al curso.
 * @returns {JSX.Element} Elemento JSX que representa el componente.
 */
function CourseEnrollSection({ courseInfo, isUserAlreadyEnrolled }) {
  // Valor simulado para la membresía (se asume que el usuario tiene una membresía)
  const membership = true;

  // Obtener la información del usuario autenticado
  const { user } = useUser();
  const router = useRouter();

  // Efecto secundario que se ejecuta cuando el valor de `isUserAlreadyEnrolled` cambia
  useEffect(() => {
    console.log("isUserAlreadyEnrolled", isUserAlreadyEnrolled);
  }, [isUserAlreadyEnrolled]);

  // Función para inscribir al usuario en el curso
  const onEnrollCourse = () => {
    GlobalApi.enrollToCourse(
      courseInfo?.slug,
      user?.primaryEmailAddress?.emailAddress
    ).then((resp) => {
      console.log(resp);
      if (resp) {
        // Mostrar una notificación de éxito al inscribirse
        toast("User Enrolled Successfull", {
          description: "User Enrolled to this Course Successfully",
        });
        // Redirigir al usuario a la página de ver el curso
        router.push("/watch-course/" + resp.createUserEnrollCourse.id);
      }
    });
  };

  return (
    <div className="p-3 text-center rounded-sm bg-orange-400">
      {/* Título de la sección */}
      <h2 className="text-white text-[22px] font-bold">Enroll to the Course</h2>

      {/* Condiciones para renderizar diferentes opciones */}
      {user && (membership || courseInfo.free) && !isUserAlreadyEnrolled ? (
        // El usuario está autenticado, tiene una membresía o el curso es gratuito, y no está inscrito
        <div className="flex flex-col gap-3 mt-3">
          <h2 className="text-white font-light">
            Enroll Now to Start Learning and Building the project
          </h2>
          <Button
            className="mt-3 bg-white text-orange-400 hover:bg-white hover:text-primary"
            onClick={() => onEnrollCourse()}
          >
            Enroll Now
          </Button>
        </div>
      ) : !user ? (
        // El usuario no está autenticado
        <div className="flex flex-col gap-3 mt-3">
          <h2 className="text-white font-light">
            Enroll Now to Start Learning and Building the project
          </h2>
          <Link href={"/sign-in"}>
            <Button className="mt-3 bg-white text-orange-400 hover:bg-white hover:text-primary">
              Enroll Now
            </Button>
          </Link>
        </div>
      ) : (
        !isUserAlreadyEnrolled && (
          // El usuario está autenticado pero no tiene una membresía y no está inscrito
          <div className="flex flex-col gap-3 mt-3">
            <h2 className="text-white font-light">
              Buy Monthly Membership and Get Access to All Courses
            </h2>
            <Button className="mt-3 bg-white text-orange-400 hover:bg-white hover:text-primary">
              Buy Membership Just $2.99{" "}
            </Button>
          </div>
        )
      )}

      {/* Si el usuario ya está inscrito, mostrar la opción para continuar */}
      {isUserAlreadyEnrolled && (
        <div className="flex flex-col gap-3 mt-3">
          <h2 className="text-white font-light">
            Continue to Learn and Build the Career
          </h2>
          <Link href={"/watch-course/" + isUserAlreadyEnrolled}>
            <Button className="mt-3 bg-white text-orange-400 hover:bg-white hover:text-primary">
              Continue{" "}
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
}

// Exportar el componente para que pueda ser utilizado en otros archivos
export default CourseEnrollSection;
