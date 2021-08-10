import React, { ReactNode } from "react";
import Head from "next/head";

const Layout = ({ children, title, description }: { children?: ReactNode; title: string; description: string }) => (
  <>
    <Head>
      <title>{title}</title>

      <meta charSet="utf-8" />
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png?v=3" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=3" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=3" />
      <link rel="manifest" href="/site.webmanifest?v=3" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg?v=3" color="#da532c" />
      <link rel="shortcut icon" href="/favicon.ico?v=3" />
      <meta name="apple-mobile-web-app-title" content="chiya.dev" />
      <meta name="application-name" content="chiya.dev" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />

      <script async defer data-website-id="f555f542-14e4-47ec-9c64-615f0b8ff286" src="https://umami.chiya.dev/umami.js" />
    </Head>

    {children}
  </>
);

export default Layout;
