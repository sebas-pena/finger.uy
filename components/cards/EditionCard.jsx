import Link from 'next/link'
import React from 'react'

const EditionCard = ({ edition, year, courseCode }) => {
  return (
    <Link
      href={`/openfing/watch/${edition.code}`}
      className="block px-5 py-3 rounded-xl bg-mine-shaft-50 hover:bg-mine-shaft-100 duration-100"
    >
      <p className="font-semibold text-mine-shaft-900">
        {edition.name}
      </p>
      <p className="text-sm text-mine-shaft-900">
        Año {year}
      </p>
    </Link>
  )
}

export default EditionCard
