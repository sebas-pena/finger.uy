import Link from 'next/link'
import React from 'react'

const SimpleLink = ({ href, children }) => {
  return (
    <Link href={href} className="">
      { children }
    </Link>
  )
}

export default SimpleLink
