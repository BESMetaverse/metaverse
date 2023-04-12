// import Link from 'next/link'
// import { useRouter } from 'next/router'

import { FC } from 'react'
import { SelectPlanet } from '@next/components/organisms/SelectPlanet'

const Homepage: FC = () => {
  return <SelectPlanet />
}

// export const getServerSideProps = async ({ locale }) => ({
// export const getStaticProps = async ({
//   locale
// }: {
//   locale: string
// }): Promise<{
//   props: {
//     _nextI18Next: {
//       initialI18nStore: any
//       initialLocale: string
//       ns: string[]
//       userConfig: UserConfig | null
//     }
//   }
// }> => ({
//   props: {
//     ...(await serverSideTranslations(locale, ['common', 'footer']))
//   }
// })

export default Homepage
