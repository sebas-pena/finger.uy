import Link from 'next/link'

const SIZES = {
  small: 'px-2 py-1',
  medium: 'px-4 py-1 text-base',
  large: 'px-5 py-2 text-lg'
}

const SimpleButton = ({ size = 'small', asLink, className, children, href, target }) => {
  const styles = `${SIZES[size]} rounded-md font-semibold text-white bg-blue-500 hover:bg-blue-600 duration-100`
  return (
    asLink
      ? <Link href={href} className={`${styles} ${className}`} target={target}>{children}</Link>
      : <button className={`${styles} ${className}`}>{children}</button>
  )
}

export default SimpleButton
