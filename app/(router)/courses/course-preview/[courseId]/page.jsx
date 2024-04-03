"use client";

import React from "react";
import { useEffect } from "react";

function CoursePreview({ params }) {
  useEffect(() => {
    console.log(params);
  }, []);
  return (

    <div>CoursePreview</div>

  )
  
}

export default CoursePreview;
