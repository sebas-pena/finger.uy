import React from "react"
import { getAllEditionsCodes, getCourseByEditionCode, getEditionByCode } from "@/lib/courses"
import CourseVideoPlayer from "@/components/ui/CourseVideoPlayer"

export const dynamicParams = false

export async function generateStaticParams() {
  const editionsCodes = await getAllEditionsCodes()
  const paths = [] 

  for (const edition of editionsCodes) {
    const { classes } = await getEditionByCode(edition)
    classes.map((classe, i) => {
      paths.push({
        edition,
        num: i.toString()
      })
    })
  }
  return paths
}

const PostPage = async ({ params }) => {
  const { edition, num } = params;
  const courseData = getCourseByEditionCode(edition)
  const { classes } = await getEditionByCode(edition)
  return (
    <CourseVideoPlayer courseData={courseData} num={num} classes={classes} edition={edition} />
  )
}

export default PostPage