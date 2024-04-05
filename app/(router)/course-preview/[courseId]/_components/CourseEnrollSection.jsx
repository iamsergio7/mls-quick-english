import { Button } from "@/components/ui/button";
import React, { useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import GlobalApi from "@/app/_utils/GlobalApi";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

function CourseEnrollSection({ courseInfo, isUserAlreadyEnrolled }) {
  const membership = true;
  const { user } = useUser();
  const router = useRouter();

  useEffect(() => {
    console.log("isUserAlreadyEnrolled", isUserAlreadyEnrolled);
  }, [isUserAlreadyEnrolled]);

  //Enroll to the Course
  const onEnrollCourse = () => {
    GlobalApi.enrollToCourse(
      courseInfo?.slug,
      user?.primaryEmailAddress?.emailAddress
    ).then((resp) => {
      console.log(resp);

      if (resp) {
        //Show Toast on Successfull Enroll

        toast("User Enrolled Successfull", {
          description: "User Enrolled to this Course Successfully",
        });

        //Redirect to Watch Course
        router.push("/watch-course/" + resp.createUserEnrollCourse.id);
      }
    });
  };

  return (
    <div className="p-3 text-center rounded-sm bg-orange-400 ">
      <h2 className="text-white text-[22px] font-bold">Enroll to the Course</h2>
      {/* User has Membership and Already Login */}
      {user && (membership || courseInfo.free) && !isUserAlreadyEnrolled ? (
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

      {/* Above Section User Does not have Membership or not Signup Login */}

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

export default CourseEnrollSection;
