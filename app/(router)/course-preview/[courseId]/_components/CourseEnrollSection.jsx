import { Button } from "@/components/ui/button";
import React from "react";

function CourseEnrollSection() {
  const membership = false;

  return (
    <div className="p-3 text-center rounded-sm bg-orange-400 ">
      <h2 className="text-white text-[22px] font-bold">Enroll to the Course</h2>

      {/* User has Membership and Already Login */}

      {membership ? (
        <div className="flex flex-col gap-3 mt-3">
          <h2 className="text-white font-light">
            Enroll Now to Start Learning and Building the project
          </h2>
          <Button className="mt-3 bg-white text-orange-400 hover:bg-white hover:text-primary">
            Enroll Now
          </Button>
        </div>
      ) : (
        <div className="flex flex-col gap-3 mt-3">
          <h2 className="text-white font-light">
            Buy Monthly Membership and Get Access to All Courses
          </h2>
          <Button className="mt-3 bg-white text-orange-400 hover:bg-white hover:text-primary">
            Buy Membership Just $2.99{" "}
          </Button>
        </div>
      )}
      {/* Above Section User Does not have Membership or not Signup Login */}
    </div>
  );
}

export default CourseEnrollSection;
