import "/styles/scss/nextjs-material-kit.scss?v=1.2.0";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "/public/scss/main.scss";
import "react-modal-video/scss/modal-video.scss";
import "react-datepicker/dist/react-datepicker.css";
import "react-toastify/dist/ReactToastify.css";

import { GoogleAnalytics, event } from "nextjs-google-analytics";

import AllContext from "../context/AllContext";
import App from "next/app";
import Head from "next/head";
import NextNProgress from "nextjs-progressbar";
import PageChange from "/components/PageChange/PageChange.js";
/*!

=========================================================
* NextJS Material Kit v1.2.1 based on Material Kit Free - v2.0.2 (Bootstrap 4.0.0 Final Edition) and Material Kit React v1.8.0
=========================================================

* Product Page: https://www.creative-tim.com/product/nextjs-material-kit
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/nextjs-material-kit/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import Router from "next/router";
import { ToastContainer } from "react-toastify";

export function reportWebVitals({ id, name, label, value }) {
  event(name, {
    category: label === "web-vital" ? "Web Vitals" : "Next.js custom metric",
    value: Math.round(name === "CLS" ? value * 1000 : value), // values must be integers
    label: id, // id unique to current page load
    nonInteraction: true, // avoids affecting bounce rate.
  });
}

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }
  render() {
    const { Component, pageProps } = this.props;

    return (
      <React.Fragment>
        <Head>
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1, shrink-to-fit=no'
          />
          <title>Malawi Sun Hotel</title>
        </Head>
        <GoogleAnalytics trackPageViews />

        <NextNProgress color='#007aff' height={10} />
        <AllContext>
          <Component {...pageProps} />
          <ToastContainer />
        </AllContext>
      </React.Fragment>
    );
  }
}
