const React = require('react')

module.exports = ({ language, state, children }) => (
  <html lang='en'>
    <head>
      <meta charset='utf8' />
      <meta name='viewport' content='width=device-width,minimum-scale=1,initial-scale=1' />
      <title>{language.title}</title>
    </head>
    <body>
      <div id='app' dangerouslySetInnerHTML={{__html: children}} />
      <link rel='stylesheet' type='text/css' href='/resources/bundle.css' />
      <script id='globalState' dangerouslySetInnerHTML={{__html: state}} />
      <script src={'/resources/bundle.js'} />
    </body>
  </html>
)
