import React from 'react'
import EditionCard from '../cards/EditionCard'

const EditionsList = ({ course }) => {
  return (
    <ul className="list-none w-full max-w-2xl mx-auto gap-4 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
      {
        Object.keys(course.editions).reverse().map((year) => {
          return course.editions[year].map((edition) => {
            return (
              <li key={edition.code} >
                <EditionCard edition={edition} year={year} />
              </li>
            )
          })
        })
      }
    </ul>)
}

export default EditionsList
