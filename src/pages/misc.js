import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import SEO from "../components/seo"

import Layout from "../components/layout"
import { rhythm, scale } from "../utils/typography"

class Misc extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout
      location={this.props.location}
      title={siteTitle}
      >
        <SEO title="Misc" />
        <div style={{
                margin: `0 auto`,
                width: `70%`,
              }}>
        <p style={{
          marginBottom: rhythm(5)
        }}>Otherwise unclassifiable projects and interests are here.</p>
        {posts.map( ({node}) => {
          const title = node.frontmatter.title || node.fields.slug
          const tag = node.frontmatter.tag
          if (tag === 'misc') {
            return (
              <div
              key={node.fields.slug}
              style={{
                marginBottom: rhythm(2)
              }}>
                <Link  style={{
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
                }} to={node.fields.slug} > {title} </Link>
                <p dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
              </div>
            )
          }
          return (
            <div key={node.fields.slug}> </div>
          )

        })}
        </div>
      </Layout>
    )
  }
}

export default Misc

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
          }
        }
      }
    }
  }
`
