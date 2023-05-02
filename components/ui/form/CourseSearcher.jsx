'use client'
import React, { useState, useEffect } from 'react'
import SearchInput from '@/components/inputs/SearchInput'
import CourseList from '@/components/list/CourseList'
import { normalizeString } from '@/lib/string'
import courses from '@/data/courses/index.json'

const CourseSearcher = () => {
  const [search, setSearch] = useState('')
  const [filteredCourses, setFilteredCourses] = useState([])

  const courseFilter = (course, searchTerms) => {
    const normalizedName = normalizeString(course.name)
    return (searchTerms.every((term) => {
      return (
        normalizedName.includes(term) ||
        course.courseCode.includes(search))
    }))
  }

  useEffect(() => {
    if (search === '') setFilteredCourses(courses)
    else {
      const searchTerms = normalizeString(search).split(' ')
      setFilteredCourses(courses.filter((course) => courseFilter(course, searchTerms)))
    }
  }, [search])
  return (
    <>
      <form className="mb-6 w-full max-w-[500px] mt-4">
        <SearchInput
          name="search"
          placeholder="Ej: Fundamentos de Bases de Datos"
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      <CourseList courses={filteredCourses} />
    </>
  )
}

export default CourseSearcher
