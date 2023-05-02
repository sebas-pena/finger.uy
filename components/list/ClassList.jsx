import Link from 'next/link'
import React from 'react'

const ClassList = ({ classes, selectedClass, edition }) => {
  return (
    <ul className="flex flex-col gap-2 w-full overflow-auto">
      {
        classes.map((classe, i) => (
          <li key={classe.id}>
            <Link
              href={`/openfing/watch/${edition}?class=${i}`}
              className={`block text-xs text-left px-4 py-3 ${selectedClass == i ? 'bg-blue-400 text-white cursor-default' : 'bg-mine-shaft-100 hover:bg-mine-shaft-200'}  duration-100 w-full`}
            >
              {`${i + 1} - `}{classe.title}
            </Link>
          </li>
        ))
      }
    </ul>
  )
}

export default ClassList
