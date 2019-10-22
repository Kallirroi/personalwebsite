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
          <Link activeStyle={{ color: activeColor }} style={{margin: rhythm(1)}} to={`/`}> projects </Link>
          {/*<Link activeStyle={{ color: activeColor }} style={{margin: rhythm(1)}} to={`/research/`}> research </Link>
          <Link activeStyle={{ color: activeColor }} style={{margin: rhythm(1)}} to={`/writing/`}> writing </Link>
          <Link activeStyle={{ color: activeColor }} style={{margin: rhythm(1)}} to={`/misc/`}> misc </Link> */}
          <Link activeStyle={{ color: activeColor }} style={{margin: rhythm(1)}} to={`/about/`}>about </Link>
      </div>
    )
    return (
      <div className='container'
        style={{
          margin: `0 auto`,
          maxWidth: rhythm(80),
          paddingTop: rhythm(3),
          paddingBottom: rhythm(3),
          paddingLeft: rhythm(1),
          paddingRight: rhythm(1),
        }}
      >
        <div className='navbar' style={{
          // border: '1px solid',
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'nowrap',
          marginBottom: rhythm(2)
        }}>{navbar}</div>

        <main className='main' style={{
          // border: '1px solid',
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          overflow: 'scroll',
          justifyContent: 'flex-start',
          alignItems: 'flex-start'
        }}>{children}</main>

      </div>
    )
  }
}

export default Layout
