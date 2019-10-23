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

  handleClick = () => {
      this.setState(prevState => ({
        weirdLayout: !prevState.weirdLayout
      }));
    }

  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let navbar
    let activeColor = '#80A2BC'
    let wrapStatus = !this.state.weirdLayout ? 'wrap' : 'nowrap'
    let wrapText =  !this.state.weirdLayout ? '⚫️' : '🤔'

    navbar = (
      <div style={{
        margin: '0 auto',
      }}>
          <Link activeStyle={{ color: activeColor, fontWeight: '600' }} style={{margin: rhythm(1), borderBottom: '0'}} to={`/`}> projects </Link>
          {/*<Link activeStyle={{ color: activeColor }} style={{margin: rhythm(1)}} to={`/research/`}> research </Link>
          <Link activeStyle={{ color: activeColor }} style={{margin: rhythm(1)}} to={`/writing/`}> writing </Link>
          <Link activeStyle={{ color: activeColor }} style={{margin: rhythm(1)}} to={`/misc/`}> misc </Link> */}
          <Link activeStyle={{ color: activeColor, fontWeight: '600' }} style={{margin: rhythm(1), borderBottom: '0'}} to={`/about/`}>about </Link>
          <span  className={'layoutChange'} onClick={this.handleClick} style={{margin: rhythm(1), borderBottom: '0', display: 'none'}} > {wrapText} </span>
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
          flexWrap: wrapStatus,
          justifyItems: 'flex-end',
          alignItems: 'stretch',
          alignContent: 'baseline',
        }}>{children}</main>
      </div>
    )
  }
}

export default Layout
