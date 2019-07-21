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
        <div>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug

          return (
            <div key={node.fields.slug}
            style={{
              marginBottom: rhythm(5),
            }}
            >

              <Image
                fixed={data.thumbnail.childImageSharp.fixed}
                alt=""
                style={{
                  marginBottom: 0,
                  width: '100%',
                }}
              />

              <Link to={node.fields.slug}
              style={{
                ...scale(0.1),
                fontWeight: `400`,
                display: 'block',
                textAlign: 'right',
                border: '1px dashed pink',
                width: 'auto',
              }}>
                {title} - project details
              </Link>
              <p style={{
                display: 'block',
                textAlign: 'left',
                border: '1px dashed cyan',
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
    thumbnail: file(absolutePath: { regex: "/1.jpg/" }) {
      childImageSharp {
        fixed(width: 500, height: 300) {
          ...GatsbyImageSharpFixed
        }
      }
    }
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
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
