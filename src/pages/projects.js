import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import Image from "gatsby-image"
import Tooltip from 'react-tooltip-lite';

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

        <div style={{margin: '0 0 3vh 3vw', width: '40vw'}}>

          <p>During my time at the Media Lab I prototyped on a variety of software and hardware projects centered around questions of <a href="https://kalli-retzepi.com/thesis/">interfaces</a>, <a href="https://kalli-retzepi.com/medrec/">decentralization</a> and networks. Before that, I worked as an interaction <a href="https://www.interactivethings.com/work/explora/" target="_blank">designer</a> and <a href="https://kalli-retzepi.com/roadtoschool/" target="_blank">developer</a> for <a href="https://www.interactivethings.com/" target="_blank">Interactive Things</a>, a Zurich-based web design, development and data visualization studio. Before that I built tools for <a href="https://www.martinos.org/">medical imaging researchers</a> and radiologists at Massachussets General Hospital and Harvard Medical School. Recent freelance involves iterating on the design of an online learning platform on behalf of <a href="https://vcg.seas.harvard.edu/">Visual Computing Group at Harvard</a>, helping the MIT Center for Advanced Urbanism develop an <a href='http://lcau.mit.edu/project/atlas-lighting'>interactive atlas</a> that explores how lighting in US metro areas relates to social public good, and designing/building the website for a friend's <a href="https://kalli-retzepi.com/PROPS/" target="_blank">online publication</a>.</p>
          <p>You can find more information about past projects below.</p>
        </div>  

        <div style={{ margin: '0 0 0 3vw'}}>
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
                margin: '0',
                paddingBottom: rhythm(1),
                }}>
                <Tooltip
                    content={(
                      <img src={imageName} alt={imageName} 
                       style={{
                        width: '35vw'
                      }}/>
                    )}
                    direction="right-end"
                    forceDirection={true}
                    arrow={false}
                  >
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
                </Tooltip>
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