import Image from 'next/image'
export const HeadLogo = (): JSX.Element => {
  return (
    <Image
      src="/images/BesMetaverse.svg"
      width={60}
      height={57}
      alt="BesMetaverse Logo"
    />
  )
}
