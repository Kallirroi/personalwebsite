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
          maxWidth: rhythm(50),
        }}
      >
        <navbar style={{
          border: '1px solid pink',
          display: 'inline-block',
          float: 'left',
          width: rhythm(15),
        }}>{navbar}</navbar>
        <main style={{
          border: '1px solid blue',
          display: 'inlineblock',
          float: 'right',
          width: rhythm(34),
        }}>{children}</main>
      </div>
    )
  }
}

export default Layout
