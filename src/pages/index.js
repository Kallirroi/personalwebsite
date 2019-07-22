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
        <div>

        {posts.map( ({node}) => {
          const title = node.frontmatter.title || node.fields.slug
          const imagePath = imagePaths[node.frontmatter.index-1].node.childImageSharp.fixed
          return (
            <div
            key={node.fields.slug}
            style={{
              paddingBottom: rhythm(10),
              width: '70%',
              margin: '0 auto',
              display: 'block',
              position: 'relative',
            }}>
              <Image
                fixed={imagePath}
                alt=""
                style={{
                  width: '100%',
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
                paddingRight: rhythm(0.1),
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
        </div>
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
            fixed(width: 450, height: 300) {
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
