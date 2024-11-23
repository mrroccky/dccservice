import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Primary Meta Tags */}
        <meta name="description" content="DCC Services offers Vidarbha's No.1 HR solution with professional services tailored to your needs." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />

        {/* Favicon */}
        <link rel="icon" href="/icon.ico" />

        {/* Preload Fonts (Optional for better performance) */}
        <link rel="preload" href="/fonts/inter.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />

        {/* Global Styles (if any) */}
        <style>{`body { margin: 0; font-family: Arial, sans-serif; }`}</style>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
