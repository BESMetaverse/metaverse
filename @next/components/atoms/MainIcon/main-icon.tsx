import Image from 'next/image'
export const MainIcon = (): JSX.Element => {
  return (
    <Image
      src="/images/wallet-icon.svg"
      width={78}
      height={77.07}
      alt="Wallet Icon"
      style={{
        margin: '0 0 2rem'
      }}
    />
  )
}
