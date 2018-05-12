import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import "../styles/index.css";

class BlogIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      style: {}
    }
    this.distort=this.distort.bind(this);
    this.stopDistort=this.stopDistort.bind(this);
  }

  componentWillMount() {
    this.distort(this.props);
    this.stopDistort(this.props);
  }

  distort(event) {
    this.setState({
      style: {transform: `skew(${event.pageX/10}deg)`}
    });
  }  

  stopDistort(event) {
    this.setState({
      style: {transform: `skew(0)`}
    });
  }

  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <div>
        <div className="index">
          <Helmet title={siteTitle} />
          {posts.map(({ node }) => {
            const title = get(node, 'frontmatter.title') || node.fields.slug;
            const tag = get(node, 'frontmatter.tag') || node.fields.slug;
            return (
              <div className="postThumbnail" onMouseEnter={this.distort} onMouseLeave={this.stopDistort} style={this.state.style} key={node.fields.slug}>
                <Link to={node.fields.slug}>
                  {title}
                </Link>
                <div className="tagThumbnail">{tag}</div>
              </div>
            )
          })}
        </div>
        <div className="about">
          <Link to="/about/">about</Link>
        </div>        
      </div>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
            tag
          }
        }
      }
    }
  }
`
