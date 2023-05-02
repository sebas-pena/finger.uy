import React from 'react'
import Link from 'next/link'

const NavLink = ({ href, children }) => {
  return (
    <Link href={href} className="font-semibold px-2 py-1 hover:bg-gray-200 rounded-md duration-100">
      { children }
    </Link>
  )
}

export default NavLink
