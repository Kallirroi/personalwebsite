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
    const imagePaths = data.thumbnails.edges
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Kalli Retzepi" />
        {posts.map( ({node}) => {
          const title = node.frontmatter.title || node.fields.slug
          const imagePath = imagePaths[0].node.childImageSharp.fixed
          return (
            <div
            key={node.fields.slug}
            style={{
              paddingBottom: rhythm(10),
              margin: '0 auto',
              display: 'block',
              position: 'relative',
            }}>
              <Image
                fixed={imagePath}
                alt=""
                style={{
                  margin: '0 auto',
                  display: 'block',
                  width: 'auto',
                  backgroundPosition: 'center center'
                }}
              />

              <Link to={node.fields.slug}
              style={{
                fontWeight: `200`,
                fontStyle: 'italic',
                display: 'block',
                textAlign: 'right',
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
            </div>
          )
        })}
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    thumbnails: allFile(filter: { absolutePath: { regex: "/thumbnails/" } }) {
      edges {
        node {
          childImageSharp {
            fixed(width: 500, height: 350) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
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
          }
        }
      }
    }
  }
`
