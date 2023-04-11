import Image from 'next/image'
import Link from 'next/link'
export const HeadLogo = (): JSX.Element => {
  return (
    <Link href="/">
      <Image
        src="/images/BesMetaverse.svg"
        width={60}
        height={57}
        alt="BesMetaverse Logo"
      />
    </Link>
  )
}
