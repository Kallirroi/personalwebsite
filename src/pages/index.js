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
      <Layout
      location={this.props.location}
      title={siteTitle}
      >
        <SEO title="About" />
        <div
        className='postContent'
        style={{
                // margin: `0 auto`,
                margin: '0 0 0 3vw',
                width: `32vw`,
              }}>
          <p>Kalli Retzepi is a graduate of the MIT Media Lab. She uses technology, design and images in order to explore the politics of digital interfaces, the narrative of the user and to imagine new metaphors for the Web. CV and portfolio available upon request.</p>

          <h4 style={{
            marginTop: rhythm(1),
          }}>contact</h4>
          <ul style={{
                  listStyleType: 'none',
                  lineHeight: '22px'
                }}>
          <li><a href="mailto:kalli.retzepi@gmail.com" target="_blank">email</a></li>
          <li><a href="https://www.are.na/kalli-retzepi/index" target="_blank">are.na</a></li>
          <li><a href="https://twitter.com/kallirroi" target="_blank">twitter</a></li>
          <li><a href="https://www.instagram.com/kallirroi/" target="_blank">instagram</a></li>
          </ul>

          <h4 style={{
            marginTop: rhythm(1),
          }}>workshops / talks / exhibits</h4>
          <ul style={{
                  listStyleType: 'none',
                  lineHeight: '22px'
                }}>
          <li>__"clickHere",  presentation for <a href="https://www.eventbrite.com/e/code-kitchen-lecture-series-kate-hollenbach-kalli-retzepi-tickets-78128479385">CODE KITCHEN</a> lecture series at Parsons AMT Design + Technology, 2019</li>
          <li>__Invited reviewer for <a href="https://www.are.na/lucy-siyao-liu/cd-workshop-staging-practice-with-props">Staging Practice</a> workshop by Matthew Bohne and Lucy Liu at the New School, 2019</li>
          <li>__"Internet as an object",  <a href="https://radicalnetworks.org/participants/kalli-retzepi/">Talk at RADICAL NETWORKS</a>, 2019</li>
          <li>__"You the users",  <a href="https://interfacecritique.net/journal-3">Interface Critique Journal 02</a>, 2019</li>
          <li>__"<a href="https://sap-thesis.mit.edu/thesis/kalli-retzepi">Internet as an object</a>" part of the MIT School of Architecture and Planning <a href="https://sap-thesis.mit.edu/">Thesis Show</a>, 2019</li>
          <li>__"An analog interface in a digital world", personal photography exhibit at the MIT ACT February School, 2019</li>
          <li>__Panelist, <a href="http://www.gredits.org/interfacepolitics/en/">Interface Politics</a> Conference, 2018</li>
          <li>__“Sense objects”, Ginko Bioworks <a href="https://extrapolationfactory.com/Sense-Objects">workshop</a>, 2018</li>
          <li>__“Internet as a city”, workshop at <a href="https://decentralizedweb.net/">Decentralized Web Summit</a>, 2018</li>
          </ul>


          <h4 style={{
            marginTop: rhythm(1),
          }}>online features </h4>
          <ul style={{
                  listStyleType: 'none',
                  lineHeight: '22px'
                }}>
          <li><a href="https://walkerart.org/magazine/soundboard-reenvisioning-internet-gary-zhexi-zhang">clickhere</a> - Reinvisioning the Internet, by Gary Zhexi Zhang</li>
          <li><a href="http://www.internetactu.net/2019/01/14/retro-design-de-lattention-cest-complique/">the quiet spaces</a> - Rétro-design de l’attention, by Hubert Guillaud</li>
          <li><a href="https://news.sky.com/story/in-the-future-youll-mine-cryptocurrency-by-dancing-11374514"> proof of dance </a> - on Sky News</li>
          <li><a href="https://www.instagram.com/ifyouleavestagram/">If You Leave</a> film photography collective, 2017 Showcase</li>
          <li><a href="https://www.artupon.com/kalli-retzepi/">ArtUpon</a> feature</li>
          <li><a href="https://velveteyes.net/features/kalli-retzepi/">VelvetEyes</a> feature</li>
          <li><a href="http://www.c41magazine.it/kalli-retzepi-goes-find-light/">C41</a> Magazine feature</li>
          </ul>
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
