import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import Image from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"

class Projects extends React.Component {

    render() {
      const { data } = this.props
      const siteTitle = data.site.siteMetadata.title
      const posts = data.allMarkdownRemark.edges

      return (
        <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Kalli Retzepi" />
        <div style={{margin: '0 0 0 3vw'}}>
          {posts.map( ({node}) => {
            const title = node.frontmatter.title || node.fields.slug
            const tag = node.frontmatter.tag
            const imageName = node.frontmatter.imagePath === null ? '/landingpage/filler.gif' : `/landingpage/${node.frontmatter.imagePath}.gif`
            
            return (
              <div
              className='post'
              key={node.fields.slug}
              style={{
                // border: '1px solid',
                margin: '0 auto',
                marginBottom: rhythm(1),
              }}>
                <Link to={node.fields.slug}
                  style={{
                    display: 'inline-block',
                    textAlign: 'left',
                    width: 'auto',
                    marginBottom: rhythm(0.3),
                    borderBottom: '1px solid',
                  }}>
                  {title}
                </Link>
                <p style={{
                  display: 'block',
                  textAlign: 'left',
                  height: 'auto',
                  marginBottom: rhythm(0.3),
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
                    width: '100%',
                    display: 'none'
                  }}
                />
                <small style={{
                  fontStyle: 'normal',
                  display: 'block',
                  position: 'relative',
                  color: '#aaa',
                }}> {} </small>
              </div>
              )
            return (
              <div key={node.fields.slug}></div>
            )
          })}
        </div>
    </Layout>
      )
    }
}

export default Projects

export const pageQuery = graphql `
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