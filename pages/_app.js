import App from 'next/app';
import React from 'react';
import Router from 'next/router';
import Head from "next/head";
import Footer from '../components/Footer'

export default function MyApp({ Component, pageProps }) {
    return (
      <React.Fragment>
        <Head />
        <Component {...pageProps} />
        {/* <Footer /> */}
      </React.Fragment>
    );
}


