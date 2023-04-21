import '../styles/globals.css'
import type { AppProps } from 'next/app'

import Footer from '../components/layout/Footer'
import Header from '../components/layout/Header'
import SideNavBar from '../components/layout/SideNavBar'
import Sidebar from '../components/layout/Sidebar';

export default function App({ Component, pageProps }: AppProps) {
  //return <Component {...pageProps} />
  //@ts-ignore
  if (Component.getLayout) {
    //@ts-ignore
    return Component.getLayout(<Component {...pageProps} />)
  }
  return (
    <>
      {/* <Head>
        <title>Codevolution</title>
        <meta name='description' content='Awesome YouTube channel' />
      </Head> */}
      {/* <Header /> */}
      <SideNavBar />
      {/* <Sidebar /> */}
      <Component {...pageProps} />
      {/* <Footer /> */}
    </>
  )
}
