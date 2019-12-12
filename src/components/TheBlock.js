
import React, { useRef, useEffect } from 'react';
import { Typography } from 'antd'
import hljs from 'highlight.js/lib/highlight'
import prettier from 'prettier/standalone'
import prettierBabel from 'prettier/parser-babylon'

const { Title } = Typography

export default function TheBlock({ title, code, children }) {
    const jsRef = useRef(null)

    useEffect(() => {
      hljs.highlightBlock(jsRef.current)
    }, [])

    const parseJS = c => prettier.format(c, {
      parser: "babel",
      plugins: [prettierBabel],
      singleQuote: true
    })

    return (
        <div style={{ marginBottom: 20 }}>
        <Title level={4} copyable style={{ color: '#337ab7' }}>{ title }</Title>
        <div className="flex__lr">
          <pre>
            <code className="javascript" ref={jsRef}>
              {
                  typeof code === 'string'
                    ? parseJS(code)
                    : code.map(c => parseJS(c)).join('\r\n')
              }
            </code>
          </pre>
          <div>
            {
                children
            }
          </div>
        </div>
      </div>
    )
}
