import React from "react"
import { Link, graphql } from "gatsby"
import Image from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const tag = post.frontmatter.tag
    let imagePath
    if (tag === 'project') {
      const imagePaths = this.props.data.thumbnails.edges
      const index = post.frontmatter.index
      imagePath = imagePaths[index].node.childImageSharp.fluid
    }

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <Image
          fluid={ tag==='project' ? imagePath : 'gatsby-icon.png'}
          alt=""
          style={{
            margin: '0 auto',
            display: 'inline-block',
            position: 'absolute',
            left: 0,
            top: 0,
            zIndex: '-1',
            width: '100%',
          }} />
        <div style={{
            margin: `0 auto`,
            width: `70%`,
            position: 'relative',
            display: 'block'
          }}
          dangerouslySetInnerHTML={{ __html: post.html }} />
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    thumbnails: allFile(filter: { absolutePath: { regex: "/thumbnails/" } }) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 500, maxHeight: 340, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        index
        tag
      }
    }
  }
`
