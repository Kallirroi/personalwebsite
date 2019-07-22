import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let navbar

    navbar = (
      <div>
          <p><Link to={`/`}> projects </Link></p>
          <p><Link to={`/about/`}>about </Link></p>
      </div>
    )
    return (
      <div
        style={{
          margin: `0 auto`,
          maxWidth: rhythm(50),
        }}
      >
        <div style={{
          display: 'inline-block',
          float: 'left',
          marginTop: rhythm(10),
          width: rhythm(10),
          letterSpacing: '2px',
          fontSize: '16px',
          lineHeight: '22px',
          position: 'fixed',
        }}>{navbar}</div>

        <main style={{
          display: 'inline-block',
          marginTop: rhythm(10),
          marginLeft: rhythm(10),
          width: rhythm(35),
        }}>{children}</main>

      </div>
    )
  }
}

export default Layout
