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
          <div><Link activeStyle={{ color: '#00d3e2' }} style={{
            lineHeight: '20px',
            borderBottom: '0'
          }} to={`/`}> selected projects </Link></div>
          <div><Link activeStyle={{ color: '#00d3e2' }} style={{
            lineHeight: '20px',
            borderBottom: '0'
          }} to={`/research/`}> research </Link></div>
          <div><Link activeStyle={{ color: '#00d3e2' }} style={{
            lineHeight: '20px',
            borderBottom: '0'
          }} to={`/misc/`}> misc </Link></div>
          <div><Link activeStyle={{ color: '#00d3e2' }} style={{
            lineHeight: '20px',
            borderBottom: '0'
          }} to={`/about/`}>about </Link></div>
      </div>
    )
    return (
      <div
        style={{
          margin: `0 auto`,
          display: 'block',
          position: 'relative',
          maxWidth: rhythm(50),
        }}
      >
        <div style={{
          display: 'inline-block',
          float: 'left',
          marginTop: rhythm(10),
          width: rhythm(10),
          letterSpacing: '2px',
          position: 'fixed',
          top: 0,
        }}>{navbar}</div>

        <main style={{
          display: 'inline-block',
          marginTop: rhythm(10),
          marginLeft: rhythm(10),
          marginBottom: rhythm(10),
          width: rhythm(35),
        }}>{children}</main>

      </div>
    )
  }
}

export default Layout
