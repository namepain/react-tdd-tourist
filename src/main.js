import React from 'react'
import ReactDOM from 'react-dom'

import hljs from 'highlight.js/lib/highlight'
import javascript from 'highlight.js/lib/languages/javascript'
import 'highlight.js/styles/github.css';

import App from './app'
import './common/global.less'

hljs.registerLanguage('javascript', javascript)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)