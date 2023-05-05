"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import SimpleButton from './SimpleButton'
const ClearOpenFingStatus = () => {
  const router = useRouter()
  const handleClick = () => {
    sessionStorage.removeItem("openfing-working")
    router.push("/openfing")
  }
  return (
    <SimpleButton onClick={handleClick}>
      Intentar Nuevamente
    </SimpleButton>
  )
}

export default ClearOpenFingStatus