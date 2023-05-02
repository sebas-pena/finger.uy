import React from "react"
import { getAllEditionsCodes, getCourseByEditionCode, getEditionByCode } from "@/lib/courses"
import CourseVideoPlayer from "@/components/ui/CourseVideoPlayer"

export const dynamicParams = false

export async function generateStaticParams() {
  const hostPaths = (await getAllEditionsCodes()).map((editionCode) => ({
    edition: editionCode,
  }))
  return hostPaths
}

const PostPage = async ({ params }) => {
  const { edition } = params;
  const courseData = getCourseByEditionCode(edition)
  const { classes } = await getEditionByCode(edition)
  return (
    <CourseVideoPlayer courseData={courseData} classes={classes} edition={edition} />
  )
}

export default PostPage