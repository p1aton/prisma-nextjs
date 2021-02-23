import React, { useMemo } from 'react'
import NextApp, { AppContext } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import { ThemeProvider } from 'styled-components'
import theme from 'src/theme'
import { useApollo, initializeApollo } from 'src/lib/apolloClient'
import {
  NextPageContextCustom,
  AppProps,
  MainApp,
  AppInitialPropsCustom,
} from './interfaces'
import { NextSeo, NextSeoProps } from 'next-seo'
import Page404 from '../_Error/404'
import ErrorPage from '../_Error'
import { GlobalStyle } from 'src/theme/GlobalStyle'
import MenuHeader from 'src/components/MenuHeader'
import { useRouter } from 'next/dist/client/router'
import { AppStyled } from './styles'
import Footer from 'src/components/Footer'
// import { FireBaseContext } from 'src/components/context/firebaseContext'
// import {database} from 'src/service/firebase'

const withWs = true

const App: MainApp<AppProps> = ({ Component, pageProps }) => {
  const apolloClient = useApollo(pageProps.initialApolloState, true)

  const router = useRouter()

  const { statusCode } = pageProps

  // const isHomePage = useMemo(() => router.pathname === '/', [router.pathname])
  const isPadding = useMemo(() => router.pathname === '/' || router.pathname === '/game/board', [router.pathname])

  // const isPadding = location.pathname === '/'|| location.pathname==='/game/board';

  const content = useMemo(() => {
    const meta: NextSeoProps = {}

    let content = null

    /**
     * If got error code, show error page instead
     */
    if (statusCode && statusCode !== 200) {
      switch (statusCode) {
        case 404:
          meta.noindex = true
          meta.nofollow = true

          content = <Page404 {...pageProps} />

          break

        default:
          content = <ErrorPage statusCode={statusCode} {...pageProps} />
      }
    } else {
      /**
       * If OK, show page Component
       */
       return <Component {...pageProps} />
      // content = <FireBaseContext.Provider value={{database}}>
      // <Component {...pageProps} />
      // </FireBaseContext.Provider>
    }

    return (
      <>
        <NextSeo {...meta} />
        <MenuHeader bgActive={!isPadding} />
        <AppStyled isHomePage={isPadding}>{content}</AppStyled>
        <Footer />
      </>
    )
  }, [statusCode, isPadding, pageProps])

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <ApolloProvider client={apolloClient}>{content}</ApolloProvider>
      </ThemeProvider>
    </>
  )
}

/**
 * This method calls both of back and front side.
 * Usefull for check access or/and data.
 * Add getInitialProps to page Component
 * and return {statusCode: 404} or {statusCode: 403} for example.
 */
App.getInitialProps = async (appContext: AppContext) => {
  /**
   * Initialize apollo-client and path into page props for collect
   * all data in cache.
   */
  const apolloClient = initializeApollo({
    withWs,
    appContext,
  })

  /**
   * Передаваемый далее в страницу контекст
   */
  const newAppContext = {
    ...appContext,
    ctx: {
      ...appContext.ctx,
      apolloClient,
    } as NextPageContextCustom,
  }

  /**
   * Call final _App.getInitialProps, _Document.getInitialProps() and page.getInitialProps()
   */
  const appProps = await NextApp.getInitialProps(newAppContext)

  const { pageProps, ...otherProps } = appProps

  const newProps: AppInitialPropsCustom = {
    ...otherProps,
    pageProps: {
      ...pageProps,
      initialApolloState: apolloClient.cache.extract(),
    },
  }

  /**
   * Got server statusCode
   */
  const { statusCode } = newProps.pageProps

  /**
   * If server-side, add response http code
   */
  if (statusCode && statusCode !== 200 && newAppContext.ctx.res) {
    newAppContext.ctx.res.statusCode = statusCode
  }

  return newProps
}

export default App
