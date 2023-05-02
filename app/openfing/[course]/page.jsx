import React from "react"
import EditionsList from "@/components/list/EditionsList"
import { getCourseByCode, getCoursesCodes } from "@/lib/courses"
export const dynamicParams = false

export async function generateStaticParams() {
  const hostPaths = getCoursesCodes().map((courseCode) => ({
    course: courseCode,
  }))
  return hostPaths
}

const PostPage = ({ params }) => {
  const { course } = params;
  const courseData = getCourseByCode(course)
  return (
    <main className="flex-1 flex flex-col items-center">
      <h2 className="text-3xl font-coolvetica font-semibold text-mine-shaft-900 mt-8">
        {courseData.name}
      </h2>
      <div className="flex-1 flex flex-col items-center max-w-full w-full">
        <p className="mb-4 text-mine-shaft-900 text-lg font-semibold">
          Ediciones:
        </p>
        <EditionsList course={courseData} />
      </div>
    </main>
  )
}

export default PostPage