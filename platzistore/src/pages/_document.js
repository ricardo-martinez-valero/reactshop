import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        {/* <title>React Shop</title> */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-WKVWRK86TQ"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
           <script>
             window.dataLayer = window.dataLayer || [];
             function gtag(){dataLayer.push(arguments);}
             gtag('js', new Date());
           
             gtag('config', 'G-WKVWRK86TQ');
           </script>`,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
