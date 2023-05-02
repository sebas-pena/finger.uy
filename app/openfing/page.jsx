import React from 'react'
import courses from '../../data/courses/index.json'
import CourseSearcher from '@/components/ui/form/CourseSearcher';

const page = () => {
  return (
    <main className="flex-1 flex flex-col items-center">
      <h2 className="text-3xl font-coolvetica font-semibold text-mine-shaft-900 mt-8">
        ¿Qué curso estás buscando?
      </h2>
      
      <div className="flex-1 flex flex-col items-center max-w-full w-full">
        <CourseSearcher/>
      </div>
    </main>
  )
}

export default page;
