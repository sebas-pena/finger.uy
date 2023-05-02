import Image from 'next/image'
import React from 'react'

const Logo = ({ height = 15, width = 15 }) => {
  return (
    <Image src="/svgs/icon.svg" height={height} width={width} alt=""/>
  )
}

export default Logo
