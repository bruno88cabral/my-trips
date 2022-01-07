import { AppProps } from 'next/app'
import Head from 'next/head'
import GlobalStyles from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Boilerplate</title>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="./public/image/boilerplate.png" />
        <meta name="theme-color" content="#06092B" />
        <meta
          name="boilerplate"
          content="boilerplate avançado para criar novo projetos com dependencias padronizadas"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
