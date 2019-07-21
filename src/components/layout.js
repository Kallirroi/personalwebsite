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
          <p><Link to={`/`}> selected projects </Link></p>
          <p><Link to="/about/">about Kalli</Link></p>
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
          border: '1px solid pink',
          display: 'inline-block',
          float: 'left',
          width: rhythm(10),
        }}>{navbar}</div>

        <main style={{
          border: '1px solid blue',
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
