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
              }}>

          <p style={{
            marginBottom: rhythm(1),
          }}>I use code, design and words to explore the politics of digital interfaces, the narrative of the user and to imagine new metaphors for the Web. I have degrees in engineering and in neuroscience, and I am a recent alum of the MIT Media Lab. During my time at the Lab I prototyped on a variety of software and hardware projects centered around questions of interfaces, decentralization and social networks.</p>

          <p style={{
            marginBottom: rhythm(1),
          }}>In the past I have worked as an interaction designer for Interactive Things, a Zurich-based studio that specializes in all sorts of web design and development as well as data visualization. Before that I helped build tools for medical imaging researchers and radiologists in training at MGH and Harvard Medical School, as well as develop an online learning platform on behalf of Harvard School of Engineering.</p>  

          <p style={{
            marginBottom: rhythm(1),
          }}>I am currently working as a web design and dev freelancer out of Brooklyn, NY, and I am also part of an artists collective called FOREIGN OBJECTS. Feel free to <a href="mailto:kalli.retzepi@gmail.com" target="_blank">get in touch</a> about work inquiries.</p>

          <h4 style={{
            marginTop: rhythm(2),
          }}>selected web-based work</h4>
          <ul style={{
                  listStyleType: 'none',
                  lineHeight: '22px'
                }}>
            <li><a href="https://kalli-retzepi.com/PROPS/" target="_blank">PROPS</a></li>
            <li><a href="https://kalli-retzepi.com/roadtoschool/" target="_blank">The road to school</a>, as part of <a href="https://www.interactivethings.com/" target="_blank">Interactive Things</a></li>
            <li><a href="https://kalli-retzepi.com/samtous/" target="_blank">samtous.wtf</a></li>
            <li><a href="https://www.interactivethings.com/work/explora/" target="_blank">Explora</a>, as part of <a href="https://www.interactivethings.com/" target="_blank">Interactive Things</a></li>
          </ul>

          <h4 style={{
            marginTop: rhythm(2),
          }}>talks / workshops / exhibits </h4>
          <ul style={{
                  listStyleType: 'none',
                  lineHeight: '22px'
                }}>
            <li><a href="https://kalli-retzepi.com/patentaesthetic/">Patent aesthetic</a> featured at zine for the first <a href="https://www.computermouseconference.net/">Computer Mouse Conference</a> at NYU ITP, 2019</li>            
            <li><a href="https://kalli-retzepi.com/clickhere/">clickHere</a>,  presentation for <a href="https://www.eventbrite.com/e/code-kitchen-lecture-series-kate-hollenbach-kalli-retzepi-tickets-78128479385">CODE KITCHEN</a> at Parsons AMT Design + Technology, 2019</li>
            <li>Invited reviewer for <a href="https://www.are.na/lucy-siyao-liu/cd-workshop-staging-practice-with-props">Staging Practice</a> by Matthew Bohne and Lucy Liu at the New School, 2019</li>
            <li><a href="https://kalli-retzepi.com/thesis/">Internet as an object</a>,  presented at <a href="https://radicalnetworks.org/participants/kalli-retzepi/"> RADICAL NETWORKS</a>, 2019</li>
            <li><a href="https://kalli-retzepi.com/youtheuser/">You the user</a>, essay for <a href="https://interfacecritique.net/journal-3">Interface Critique Journal 02</a>, upcoming in 2020</li>
            <li><a href="https://sap-thesis.mit.edu/thesis/kalli-retzepi">Internet as an object</a> part of the MIT School of Architecture and Planning <a href="https://sap-thesis.mit.edu/">Thesis Show</a>, 2019</li>
            <li>"An analog interface in a digital world", exhibit at the MIT ACT February School, 2019</li>
            <li>Panelist, <a href="http://www.gredits.org/interfacepolitics/en/">Interface Politics</a> Conference, 2018</li>
            <li>Assistant for <a href="https://extrapolationfactory.com/Sense-Objects">Sense objects</a> workshop by the Extrapolation Factory at Ginko Bioworks, 2018</li>
            <li><a href="https://internetas.city/">Internet as a city</a>, workshop at <a href="https://decentralizedweb.net/">Decentralized Web Summit</a>, 2018</li>
          </ul>


          <h4 style={{
            marginTop: rhythm(2),
          }}>online </h4>
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


          <h4 style={{
            marginTop: rhythm(2),
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
