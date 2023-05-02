import React from 'react'
import CourseCard from '../cards/CourseCard'

const CourseList = ({ courses }) => {
  return (
    <ul className="list-none w-full px-4 flex flex-col gap-2">
      {
        courses.map((course) => {
          return (
            <li key={course.courseCode} >
              <CourseCard course={course} />
            </li>
          )
        })
      }
    </ul>
  )
}

export default CourseList
