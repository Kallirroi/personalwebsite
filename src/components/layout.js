import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let navbar

    navbar = (
      <aside>
          <div><Link to={`/`}
          style={{
            fontWeight: '400',
          }}> selected projects </Link></div>
          <div><Link to={`/about/`}
          style={{
            fontWeight: '400',
          }}>about Kalli</Link></div>
      </aside>
    )
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          marginTop: rhythm(2),
          maxWidth: rhythm(50),
        }}
      >
        <div style={{
          border: '1px dotted pink',
          display: 'inline-block',
          float: 'left',
          width: rhythm(10),
        }}>{navbar}</div>

        <main style={{
          display: 'inline-block',
          float: 'right',
          width: rhythm(40),
          height: '98vh',
          overflow: 'scroll',
          paddingRight: rhythm(0.5)
        }}>{children}</main>

      </div>
    )
  }
}

export default Layout
