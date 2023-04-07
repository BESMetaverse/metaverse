import React, { useState } from 'react'
// import { useRouter } from 'next/router'
import { ThemeProvider } from '@mui/material/styles'
import { MUITheme } from '@styles'
import { MainLoader } from '@molecules'
import { Header } from '@next/components/molecules/header'

export const MainLayout = ({
  children
}: {
  children: React.ReactNode
}): JSX.Element => {
  const [loading] = useState(false)
  // const router = useRouter()

  // const token = localStorage.getItem("token");
  // useEffect(() => {
  //   if (router?.asPath.startsWith("/app") && !token) {
  //     router?.push("/");
  //   } else if (!router?.asPath.startsWith("/app") && token) {
  //     router?.push("/app");
  //   } else {
  //     setLoading(false);
  //   }
  // }, [router, token]);

  if (loading) {
    return <MainLoader />
  }
  return (
    <ThemeProvider theme={MUITheme}>
      <Header />
      {children}
    </ThemeProvider>
  )
}
