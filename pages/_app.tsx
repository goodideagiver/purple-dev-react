import Footer from '../src/components/UI/Footer/Footer'
import NavTop from '../src/components/UI/navTop/NavTop'
import '../src/variables.css'
import { PostHogProvider } from 'posthog-js/react'
import '../src/index.css'
import '../src/assets/css/acrylic.css'
import { Content } from '../src/components/content/content'
import { ScrollToTopBtn } from '../src/components/UI/scrollToTopBtn/ScrollToTopBtn'
import Script from 'next/script'
import Head from 'next/head'

import { createContext, useEffect } from 'react'
import { Router, useRouter } from 'next/router'
import posthog from 'posthog-js'

export const GlobalContext = createContext({})

const Analitycs = () => (
  <>
    <Script
      strategy='lazyOnload'
      src={`https://www.googletagmanager.com/gtag/js?id=G-XV8Q7M8G5F`}
    />

    <Script id='g-script' strategy='lazyOnload'>
      {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-XV8Q7M8G5F', {
                    page_path: window.location.pathname,
                    });
                `}
    </Script>
  </>
)

type Props = {
  Component: React.ComponentType<any>
  pageProps: any
}

function MyApp({ Component, pageProps }: Props) {
  const router = useRouter()
  const isOnMainPage = router.pathname === '/'

  useEffect(() => {
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY as string, {
      api_host:
        process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://us.i.posthog.com',
      person_profiles: 'identified_only', // or 'always' to create profiles for anonymous users as well
      // Enable debug mode in development
      loaded: (posthog) => {
        if (process.env.NODE_ENV === 'development') posthog.debug()
      },
    })

    const handleRouteChange = () => posthog?.capture('$pageview')

    Router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [])

  return (
    <PostHogProvider client={posthog}>
      <Head>
        <link rel='shortcut icon' />
        <link rel='manifest' href='/manifest.json' />
      </Head>
      <Analitycs />
      <Content>
        <NavTop mainPage={isOnMainPage} />
        <Component {...pageProps} />
        <Footer />
        <ScrollToTopBtn />
      </Content>
    </PostHogProvider>
  )
}

export default MyApp
