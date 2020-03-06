import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import SEO from "../components/seo"

import Layout from "../components/layout"
import { rhythm, scale } from "../utils/typography"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="About" />
        <div className='postContent' style={{ margin: '1vh 1vw',}}>
          <p style={{ margin: rhythm(1),}}> I use code, design and words to explore the <a href="https://kalli-retzepi.com/clickhere/">politics</a> of digital interfaces, the narrative of the <a href="https://kalli-retzepi.com/youtheuser/">user</a> and to imagine new <a href="https://kalli-retzepi.com/internetasacity/">metaphors for the Web</a>.</p>

          <p style={{ margin: rhythm(1),}}>I am currently part of the 20' Spring 1 cohort at the <a href="https://www.recurse.com">Recurse Center</a>, adjunct faculty at the School for Visual Arts in NYC and one of the co-founders of <a href="https://foreignobjects.net/" target="_blank"> FOREIGN OBJECTS </a>. Before that, I was a graduate student at the Media Lab at MIT.</p>
        </div>
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
  }
`
