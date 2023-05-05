import LinkToOpenfing from '@/components/openfing/LinkToOpenfing'
import Image from 'next/image'

export default function Home () {
  return (
    <main className="relative flex-1 flex flex-col items-center justify-center">
      <Image src="/imgs/background.png" width={745} height={190} className="absolute w-full opacity-10 bottom-0 select-none pointer-events-none" />
      <h2 className="mb-4 font-semibold text-2xl sm:text-3xl md:text-4xl text-center font-coolvetica">
        Aprende sin interrupciones,<br/>
        estudia sin limitaciones.
      </h2>
      <LinkToOpenfing type="button">
        Ver OpenFing
      </LinkToOpenfing>
    </main>
  )
}
