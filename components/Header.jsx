import Link from 'next/link'
import Logo from './Logo'
import SimpleButton from './buttons/SimpleButton'
import NavLink from './links/NavLink'

const LINKS = [
  {
    href: '/openfing',
    text: 'OpenFing'
  }
]

const Header = () => {
  return (
    <header className="flex items-center w-full h-16 bg-[#F5F5F5] ">
      <div className="flex items-end justify-between max-w-7xl pr-2 sm:pl-3 sm:pr-4 md:pl-12 md:pr-14 w-full mx-auto">
        <Link href="/" className='flex'>
          <Logo height={30} width={30} />
          <h1 className="font-coolvetica font-semibold text-3xl ml-[-2px] text-mine-shaft-900">inger.uy</h1>
        </Link>
        <nav>
          <ul className="inline-flex gap-4 list-none">
            {
              LINKS.map(({ href, text }) => (
                <li>
                  <NavLink href={href} key={href}>
                    {text}
                  </NavLink>
                </li>
              ))
            }
            <li>
              <SimpleButton
                asLink
                href="https://eva.fing.edu.uy/"
                target="_blank"
              >
                Eva
              </SimpleButton>
            </li>
            <li>
              <SimpleButton
                asLink
                href="https://github.com/sebas-pena/finger.uy"
                target="_blank"
              >
                Contribuir
              </SimpleButton>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
