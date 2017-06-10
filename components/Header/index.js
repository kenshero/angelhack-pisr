// Header.js
import Head from 'next/head'

const Header = ({isMatching=null}) => {
  return (
    <div>
      <Head>
        <title> PISR Angel Hack </title>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="stylesheet" href="/static/css/bulma.min.css" />
        <link rel="stylesheet" href="/static/css/bulma.min.css.map" />
        <link rel="stylesheet" href="/static/css/font-awesome.min.css" />
        <link href="https://fonts.googleapis.com/css?family=Roboto|Tangerine|Kanit" rel="stylesheet"/>
        {
          isMatching &&
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" />
        }
      </Head>
      <style global jsx>{`
        .kanit-font {
          font-family: 'Kanit', sans-serif;
        }
        .roboto-font {
          font-family: 'Roboto', sans-serif;
        }
      `}
      </style>
    </div>
  )
}

export default Header