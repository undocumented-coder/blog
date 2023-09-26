import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Security Blog</title>
        <meta property="og:title" content="Security Blog" key="title" />
      </Head>
      <body>
        <Main/>
        <NextScript />
      </body>
    </Html>
  )
}
