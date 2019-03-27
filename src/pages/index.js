import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import "../styles/index.css";

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <div>
        <div className="index">
          <Helmet title={siteTitle} />
          {posts.map(({ node }) => {
            const title = get(node, 'frontmatter.title') || node.fields.slug
            const tag = get(node, 'frontmatter.tag') || node.fields.slug
            const isHidden = get(node, 'frontmatter.isHidden') || node.fields.slug
            const itemClass = (isHidden === 'yes') ? 'postThumbnail-hidden' : 'postThumbnail'
            // console.log(tag)
            return (
              <div className={itemClass} key={node.fields.slug}>
                <Link style={{ boxShadow: 'none' }} to={node.fields.slug}>
                  {title}
                </Link>
                <div className="tagThumbnail">{tag}</div>
              </div>
            )
          })}
        </div>
        <div className="about">
          <Link to="/about/">about Kalli</Link>
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
            isHidden
          }
        }
      }
    }
  }
`
