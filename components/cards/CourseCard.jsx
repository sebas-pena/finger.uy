import Link from 'next/link'
import React from 'react'

const CourseCard = ({ course }) => {
  const editions = Object.keys(course.editions)
  return (
    <Link
      href={`/openfing/${course.courseCode}`}
      className="w-full max-w-2xl mx-auto h-full flex flex-col px-5 py-3 rounded-md text-md bg-mine-shaft-50 hover:bg-mine-shaft-100 duration-100"
    >
      <p className="font-semibold text-mine-shaft-900">
        {course.name}
      </p>
      <p className="text-sm">
        Ediciones:
        {
          editions.map((edition, index) => {
            return (
              <span key={edition}>
                {` ${edition} ${index < editions.length - 1 ? '•' : ''}`}
              </span>
            )
          })
        }
      </p>
    </Link>
  )
}

export default CourseCard
