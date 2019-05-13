import React from 'react'
import Link from 'gatsby-link'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    let header, back
    if (location.pathname === '/') {
      header = (
        <div className="pageTitle">
        header
        </div>
      )
    } else {
      back = (
        <div className="back">
          <Link to={'/'}>
            back
          </Link>
        </div>
      )
    }
    return (
      <div>
        {children()}
        {back}
      </div>
    )
  }
}

Template.propTypes = {
  children: React.PropTypes.func,
  location: React.PropTypes.object,
  route: React.PropTypes.object,
}

export default Template
