import React from "react"
import { Link } from "gatsby"

import { rhythm } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`

    return (
      <div className='container'
        style={{
          maxWidth: rhythm(90),
          overflow: 'scroll',
          margin: `0 auto`,
          paddingBottom: rhythm(3)
        }}
      >
        <main className='main' style={{
          border: '1px solid',
        }}>{children}</main>
      </div>
    )
  }
}

export default Layout
