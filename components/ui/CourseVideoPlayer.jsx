'use client'
import React from 'react'
import VideoPlayer from '../VideoPlayer'
import { useSearchParams } from 'next/navigation'
import ClassList from '../list/ClassList'

const CourseVideoPlayer = ({ classes, courseData, edition }) => {
  const searchParams = useSearchParams()
  const selectedClass = searchParams.get('class') || 0
  return (
    <main className="flex-1 flex flex-col md:flex-row md:justify-center m-auto w-full md:max-w-7xl">
      <div className="flex-1 md:max-h-[calc(100vh_-_64px)]">
        <VideoPlayer src={classes[selectedClass].videos} />
      </div>
      <aside className="md:max-w-xs flex flex-col md:max-h-[calc(100vh_-_64px)] md:overflow-y-auto">
        <h3 className="text-center p-2 text-md font-coolvetica font-semibold">{courseData.name}</h3>
        <ClassList selectedClass={selectedClass} classes={classes} edition={edition} />
      </aside>
    </main>
  )
}

export default CourseVideoPlayer