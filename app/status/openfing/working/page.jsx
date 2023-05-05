import ClearOpenFingStatus from '@/components/buttons/ClearOpenFingStatus'
import React from 'react'

const page = () => {
  return (
    <main className="flex flex-col items-center mx-auto max-w-md px-8">
      <div className="mt-10">
        <p className="font-coolvetica text-mine-shaft-900">Hey!</p>
        <p className="my-3 font-coolvetica text-mine-shaft-900">Solo queríamos informarte que OpenFing parece que está funcionando correctamente.</p>
        <p className="font-coolvetica text-mine-shaft-900">Nuestra intencion es brindar acceso cuando OpenFing está caído o no está disponible por alguna razón.</p>
        <p className="my-3 font-coolvetica text-mine-shaft-900">¡Gracias por visitarnos y suerte con los estudios!</p>
        <p className="font-coolvetica text-right text-mine-shaft-900">- Dev de Finger.UY</p>
      </div>
      <div className="flex gap-5 mt-5">
        <ClearOpenFingStatus />
        <a href="https://open.fing.edu.uy" target="_blank" rel="noopener noreferrer" className="px-4 py-1 text-white bg-mine-shaft-900 rounded-md hover:bg-mine-shaft-800">Ir a OpenFing</a>
      </div>
    </main>
  )
}

export default page