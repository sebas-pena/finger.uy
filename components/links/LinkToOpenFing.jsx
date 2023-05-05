"use client"
import React from 'react'
import { useRouter } from 'next/navigation'

const STYLES = {
  navlink: "font-semibold px-2 py-1 hover:bg-gray-200 rounded-md duration-100",
  button: "py-1 px-3 rounded-md font-semibold text-white bg-blue-500 hover:bg-blue-600 duration-100",
}

const LinkToOpenfing = ({ type, children }) => {
  const router = useRouter()
  const handleClick = ({ }) => {
    fetch("https://open.fing.edu.uy/api/graphql", {
      "headers": {
        "content-type": "application/json",
      },
      "body": "{\"query\":\"query Courses {\\n  courses {\\n    ...CourseItemCourse\\n    __typename\\n  }\\n}\\n\\nfragment CourseItemCourse on Course {\\n  id\\n  code\\n  name\\n  eva\\n  iconUrl\\n  editions {\\n    id\\n    year\\n    courseClassLists {\\n      id\\n      code\\n      __typename\\n    }\\n    __typename\\n  }\\n}\",\"operationName\":\"Courses\",\"variables\":{}}",
      "method": "POST",
    })
      .then(res => {
        if (res.ok) {
          window.open("https://open.fing.edu.uy/", "_blank")
          router.push("/openfing/working")
        } else {
          router.push("/openfing")
        }
      })

  }
  return (
    <button onClick={handleClick} className={STYLES[type]}>
      {children}
    </button>
  )
}

export default LinkToOpenfing