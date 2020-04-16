import App from 'next/app'
import React from 'react'
import Head from 'next/head'

// export default function MyApp({ Component, pageProps }) {
//     return (
//       <React.Fragment>
//         <Head />
//         <Component {...pageProps} />
//         {/* <Footer /> */}
//       </React.Fragment>
//     )
// }

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <>
        <Head />
        <Component {...pageProps} />
        {/* <Footer /> */}
      </>
    )
  }
}

export default MyApp
