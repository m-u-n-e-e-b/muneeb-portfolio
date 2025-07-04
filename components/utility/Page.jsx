import React from "react";
import Head from "next/head";
import Navbar from "../global/Navbar.jsx";
import MobileNavbar from "../global/MobileNavbar.jsx";
import Footer from "../global/Footer.jsx";

/**
 * @param {Object} props
 * @param {string} props.currentPage
 * @param {{ title?: string, desc: string }} props.meta
 * @param {JSX.Element | JSX.Element[]} props.children
 */
function Page({ currentPage, meta: { title, desc }, children }) {
  const pageTitle =
    currentPage === "Home"
      ? "Muneeb - Web Developer"
      : `${currentPage} - Muneeb.M`;

  return (
    <div
      className="w-full m-auto flex flex-col items-center justify-center min-h-screen opening-box-animate-paddin text-white overflow-hidden md:overflow-visible"
      style={{ maxWidth: "1200px" }}
    >
      <Head>
        <title>{pageTitle}</title>

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/static/favicon/logo_no_text.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/static/favicon/logo_no_text.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/static/favicon/logo_no_text.png"
        />
        <link rel="manifest" href="/static/favicon/site.webmanifest" />
        <meta name="title" content={pageTitle} />
        <meta name="description" content={desc} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={desc} />
        <meta
          property="og:image"
          content="https://braydentw.io/static/misc/og.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://braydentw.io/" />
        <meta property="twitter:title" content={pageTitle} />
        <meta property="twitter:description" content={desc} />

        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KC3CN7V');`,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                page_path: window.location.pathname,
              });
          `,
          }}
        />
      </Head>

      <noscript
        dangerouslySetInnerHTML={{
          __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KC3CN7V"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
        }}
      />

      <main className="p-5 w-full flex-1 text-center">
        <div className="hidden sm:block z-100">
          <Navbar currentPage={currentPage} />
        </div>
        <div className="-m-5 block sm:hidden z-100">
          <MobileNavbar />
        </div>
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Page;
