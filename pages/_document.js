import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import JssProvider from 'react-jss/lib/JssProvider';
import Router from 'next/router';
import getContext from '../styles/getContext';


class MyDocument extends Document {
  render() {
    return (
      <html lang="en" dir="ltr">
        <Head>
          <title>Second Wind Nation</title>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content={
              'user-scalable=0, initial-scale=1, ' +
              'minimum-scale=1, width=device-width, height=device-height'
            }
          />
          <link rel='shortcut icon' type='image/x-icon' href='/static/favicon.ico' />
          <link rel="manifest" href="/static/manifest.json" />
          <meta name="theme-color" content={this.props.stylesContext.theme.palette.primary[500]} />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
          />
          <script dangerouslySetInnerHTML={{__html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TPW822P');` }} />
        </Head>
        <body>
          <noscript dangerouslySetInnerHTML={{__html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TPW822P"
height="0" width="0" style="display:none;visibility:hidden"></iframe>` }} />
          <script dangerouslySetInnerHTML={{ __html: `(function(w, d){
            var id='embedly-platform', n = 'script'; if (!d.getElementById(id)){w.embedly = w.embedly || function() { (w.embedly.q = w.embedly.q || []).push(arguments); };
            var e = d.createElement(n); e.id = id; e.async=1; e.src = ('https:' === document.location.protocol ? 'https' : 'http') + '://cdn.embedly.com/widgets/platform.js'; var s = d.getElementsByTagName(n)[0];s.parentNode.insertBefore(e, s);}
          })(window, document);` }}
          />
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

MyDocument.getInitialProps = (ctx) => {
  // Resolution order
  //
  // On the server:
  // 1. page.getInitialProps
  // 2. document.getInitialProps
  // 3. page.render
  // 4. document.render
  //
  // On the server with error:
  // 2. document.getInitialProps
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. page.getInitialProps
  // 3. page.render

  // Get the context to collected side effects.
  Router.onAppUpdated = function (nextRoute) {
    location.href = nextRoute;
  };
  const context = getContext();
  const page = ctx.renderPage(Component => props => (
    <JssProvider registry={context.sheetsRegistry} jss={context.jss}>
      <Component {...props} />
    </JssProvider>
  ));

  return {
    ...page,
    stylesContext: context,
    styles: (
      <style
        id="jss-server-side"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: context.sheetsRegistry.toString() }}
      />
    ),
  };
};

export default MyDocument;
