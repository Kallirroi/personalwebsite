import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"

class Layout extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      weirdLayout: false,
      layoutText: ''
    }
  }

  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let navbar
    let activeColor = '#80A2BC'

    navbar = (
      <div style={{
        margin: '0 auto',
      }}>
        <Link activeStyle={{ color: activeColor, fontWeight: '600' }} style={{margin: rhythm(1), borderBottom: '0'}} to={`/`}> about </Link>
        <Link activeStyle={{ color: activeColor, fontWeight: '600' }} style={{margin: rhythm(1), borderBottom: '0'}} to={`/projects/`}>projects </Link>
      </div>
    )
    return (
      <div className='container'
        style={{
          maxWidth: rhythm(90),
          overflow: 'scroll',
          margin: `0 auto`,
          paddingBottom: rhythm(3)
        }}
      >
        <div className='navbar' style={{
          // border: '1px solid',
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'nowrap',
          padding: rhythm(2)
        }}>{navbar}</div>

        <main className='main' style={{
          // border: '1px solid',
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyItems: 'flex-end',
          alignItems: 'stretch',
          alignContent: 'baseline',
        }}>{children}</main>
      </div>
    )
  }
}

export default Layout
