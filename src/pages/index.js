import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import Image from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Kalli Retzepi" />

        {posts.map( ({node}) => {
          const title = node.frontmatter.title || node.fields.slug
          const tag = node.frontmatter.tag

          const imageName = `/landingpage/${node.frontmatter.imagePath}.gif`
          return (
            <div
            key={node.fields.slug}
            style={{
              // border: '1px solid',
              maxWidth: '18vw',
              maxHeight: '60vh',
              alignSelf: 'stretch',
              padding: rhythm(1),
              overflow: 'scroll',
              margin: '0 auto'
            }}>
              <Link to={node.fields.slug}
              style={{
                fontWeight: `300`,
                fontStyle: 'normal',
                display: 'block',
                textAlign: 'left',
                width: 'auto',
                marginBottom: rhythm(0.5),
                marginTop: rhythm(0.5),
                border: 'none',
                textDecoration: 'none',
                letterSpacing: '2px',
              }}>
                {title}
              </Link>

              <p style={{
                display: 'block',
                textAlign: 'left',
                width: 'auto',
              }}
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
              <img
                src={imageName}
                alt=""
                style={{
                  margin: '0 auto',
                  display: 'block',
                  width: 'auto',
                }}
              />
              <small style={{ fontStyle: 'italic'}}> {tag} </small>
            </div>
            )
          return (
            <div key={node.fields.slug}></div>
          )
        })}
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___index], order: ASC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            index
            tag
            imagePath
          }
        }
      }
    }
  }
`
