import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let navbar
    let activeColor = '#63D7BF'
    navbar = (
      <div>
          <div><Link activeStyle={{ color: activeColor}} style={{
            lineHeight: '20px',
            borderBottom: '0'
          }} to={`/`}> projects </Link></div>
          <div><Link activeStyle={{ color: activeColor }} style={{
            lineHeight: '20px',
            borderBottom: '0'
          }} to={`/research/`}> research </Link></div>
          <div><Link activeStyle={{ color: activeColor }} style={{
            lineHeight: '20px',
            borderBottom: '0'
          }} to={`/writing/`}> writing </Link></div>
          <div><Link activeStyle={{ color: activeColor }} style={{
            lineHeight: '20px',
            borderBottom: '0'
          }} to={`/misc/`}> misc </Link></div>
          <div><Link activeStyle={{ color: activeColor }} style={{
            lineHeight: '20px',
            borderBottom: '0'
          }} to={`/about/`}>about </Link></div>
      </div>
    )
    return (
      <div className='container'
        style={{
          margin: `0 auto`,
          position: 'relative',
          maxWidth: rhythm(50),
          display: 'flex',
          flexDirection: 'row',
          marginTop: rhythm(10),
          marginBottom: rhythm(10),
        }}
      >
        <div className='navbar' style={{
          display: 'inline-block',
          width: rhythm(8),
          paddingLeft: rhythm(3),
          letterSpacing: '2px',
          position: 'fixed',
          top: rhythm(10),
        }}>{navbar}</div>

        <main className='main' style={{
          display: 'inline-block',
          marginLeft: rhythm(8),
          width: rhythm(35),
        }}>{children}</main>

      </div>
    )
  }
}

export default Layout
