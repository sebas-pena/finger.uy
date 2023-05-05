"use client"
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Spinner from '@/components/icons/Spinner'
const layout = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()
  useEffect(() => {
    const isWorking = sessionStorage.getItem("openfing-working")
    if (isWorking === "true") {
      setIsLoading(false)
      router.push("/status/openfing//working")
    } else if (isWorking === "false") {
      setIsLoading(false)
    } else {
      fetch("https://open.fing.edu.uy/api/graphql", {
      "headers": {
        "content-type": "application/json",
      },
      "body": "{\"query\":\"query Courses {\\n  courses {\\n    ...CourseItemCourse\\n    __typename\\n  }\\n}\\n\\nfragment CourseItemCourse on Course {\\n  id\\n  code\\n  name\\n  eva\\n  iconUrl\\n  editions {\\n    id\\n    year\\n    courseClassLists {\\n      id\\n      code\\n      __typename\\n    }\\n    __typename\\n  }\\n}\",\"operationName\":\"Courses\",\"variables\":{}}",
      "method": "POST",
    })
      .then(res => {
        sessionStorage.setItem("openfing-working", String(res.ok))
        if (res.ok) {
          router.push("/status/openfing/working")
        } else {
          setIsLoading(false)
        }
      })
    }
  }, [])
  return (
    isLoading
      ? <div className="flex flex-1 flex-col items-center justify-center h-screen" >
        <Spinner width={50} height={50} fill="#3b82f6" />
      </div >
      : children
  )
}

export default layout