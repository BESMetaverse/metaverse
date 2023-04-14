import { WalletPage } from '@next/components/pages/wallet-page'
// import { GetServerSideProps } from 'next'
export default WalletPage

// export const getServerSideProps: GetServerSideProps<{
//   privateData?: string
// }> = async ({ req, res }) => {
//   const { token } = req.cookies

//   if (!token) {
//     return { props: {} }
//   } else {
//     res.writeHead(302, { Location: '/minting', query: 'redirect' })
//     res.end()
//     return { props: {} }
//   }
// }
