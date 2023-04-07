// import Link from 'next/link'
// import { useRouter } from 'next/router'

import { UserConfig } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { FC } from 'react'
import AllowMintPage from './allow-mint'

const Homepage: FC = () => {
  return <AllowMintPage />
}

// export const getServerSideProps = async ({ locale }) => ({
export const getStaticProps = async ({
  locale
}: {
  locale: string
}): Promise<{
  props: {
    _nextI18Next: {
      initialI18nStore: any
      initialLocale: string
      ns: string[]
      userConfig: UserConfig | null
    }
  }
}> => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'footer']))
  }
})

export default Homepage
