import { Html, Head, Main, NextScript } from 'next/document';
import emailjs from '@emailjs/browser';

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,300i,600,600i|family=Montserrat:700,900" />
        <link rel="shortcut icon" href="/favicon.png" />
        <script
          type="text/javascript"
          src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"
        ></script>
        <script type="text/javascript">
          (function(){emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY)})();
        </script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
