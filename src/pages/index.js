import React from "react"
import {graphql} from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Groups from '../components/groups'
import { FaTwitterSquare, FaFacebookSquare, FaInstagram, FaBlog, FaDiscourse, FaTelegramPlane, FaEnvelope } from 'react-icons/fa'
import styled from 'styled-components'

import RiotLogo from '../images/icon-riot.svg'

const MediaLink = styled.a`
  vertical-align:top;
`

const Channels = styled.span`
  vertical-align:top;
`

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Mozilla India" />
    <section className="section">
        <div className="container has-text-centered">
            <h1 className="title">
                Mozilla India
            </h1>
            <p className="subtitle">Home to the largest Mozilla community</p>
        </div>
    </section>
    <section className="section">
            <div className="container">
                <div className="notification is-link has-text-centered">We’re building a better Internet</div>
                <div className="tile is-ancestor is-vertical">
                    <div className="tile is-parent">
                        <div className="tile is-child box">
                            <p className="title">Mission</p>
                            <p className="subtitle">Our mission is to ensure the Internet is a global public resource, open and accessible to all. An Internet that truly puts people first, where individuals can shape their own experience and are empowered, safe and independent.</p>
                            <p>At Mozilla, we’re a global community of technologists, thinkers and builders working together to keep the Internet alive and accessible, so people worldwide can be informed contributors and creators of the Web. We believe this act of human collaboration across an open platform is essential to individual growth and our collective future.</p><br/>
                            <p>Read the <a href="https://mozilla.org/about/manifesto/">Mozilla Manifesto</a> to learn even more about the values and principles that guide the pursuit of our mission.</p>
                        </div>
                    </div>
                </div>
                <div className="tile is-ancestor">
                    <div className="tile is-parent">
                        <div className="tile is-child box">
                            <p className="title">Communication channels</p>
                            <ul className="iconed-list">
                                <li>
                                    <span className="icon">
                                        <FaDiscourse size="fa-2x" color="#000"/>
                                    </span>
                                    <Channels><a href="https://discourse.mozilla.org/c/india"> Discourse</a> - for important topics</Channels>
                                </li>
                                <li>
                                    <span className="icon">
                                        <FaEnvelope size="fa-2x" />
                                    </span>
                                    <Channels><a href="https://lists.mozilla.org/listinfo/community-india"> Mailing List</a> - for restricted visibility</Channels>
                                </li>
                                <li>
                                    <span className="icon">
                                        <FaTelegramPlane size="fa-2x" color="#0088cc"/>
                                    </span>
                                    <Channels><a href="https://t.me/MozillaIN"> Telegram</a> - for instant messaging</Channels>
                                </li>
                                <li>
                                    <span className="icon">
                                        <img src={RiotLogo} alt="Matrix Icon" />
                                    </span>
                                    <Channels><a href="https://matrix.to/#/!OkcrSgHxzzzLELqtai:matrix.org">Matrix</a> - for instant messaging</Channels>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="tile is-parent">
                        <div className="tile is-child box">
                            <p className="title">Social Media</p>
                            <ul className="iconed-list">
                                <li>
                                    <span className="icon">
                                        <FaTwitterSquare size="fa-2x" color="#1da1f2" />
                                    </span>
                                    <MediaLink href="https://twitter.com/MozillaIN"> @MozillaIN</MediaLink>
                                </li>
                                <li>
                                    <span className="icon">
                                        <FaFacebookSquare size="fa-2x" color="#1da1f2"/>
                                    </span>
                                    <MediaLink href="https://facebook.com/mozillaindia"> mozillaindia</MediaLink>
                                </li>
                                <li>
                                    <span className="icon">
                                        <FaBlog size="fa-2x" color="rgb(242, 119, 29)"/>
                                    </span>
                                    <MediaLink href="https://blog.mozillaindia.org"> blog</MediaLink>
                                </li>
                                <li>
                                    <span className="icon">
                                        <FaInstagram size="fa-2x"/>
                                    </span>
                                    <MediaLink href="https://www.instagram.com/mozillain/"> mozillaindia</MediaLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="tile is-ancestor is-vertical">
                    <div className="tile is-parent">
                        <div className="tile is-child box">
                            <p className="title has-text-centered">How do I contribute?</p>
                            <p className="subtitle has-text-centered">There is no single answer. But read on to learn about multiple ways to be a part of a vibrant community of lovers of the open web.</p>
                            <p>The first step towards being a Mozillian and contributing to Mozilla is to know what Mozilla is. You have already read our mission above. Make sure you read the <a href="https://mozilla.org/about/manifesto/">manifesto</a> as well. Mozillians live by our manifesto.</p>
                            <br/>
                            <p>If all this sounds interesting to you, and you want to call yourself a Mozillian, sign up on the <a href="https://mozillians.org">mozillians</a> website and create your mozillians profile.</p>
                            <br/>
                            <p>Now you may want to find other contributors near you to work together. You can attend an <a href="https://www.mozilla.org/contribute/events/">upcoming event</a>, join our communication channels, follow our social media accounts, and join many of the various sub-communities which are listed below according to your interesting</p>
                            <br/>
                            <p>Find impactful and easy ways to contribute to Mozilla in the <a href="https://activate.mozilla.community/">Activate Mozilla</a> community website.</p>
                            <br/>
                            <p>Would you rather just sit at a convenient place, read resources, and figure out on your own which projects to contribute to and how? Visit <a href="https://wiki.mozilla.org/Contribute"> Contribute Wiki</a> and <a href="https://whatcanidoformozilla.org/">What Can I Do For Mozilla</a>. Multiple projects are listed down at these places where you can start contributing straightaway.</p>
                            <br/>
                            <p>If at any moment you find yourself stuck and unable to move forward, drop a message in any one of our communication channels and someone will surely reply. We are a bunch of friendly folks who are mindful of being inclusive in our communications and we are bound to <a href="https://www.mozilla.org/about/governance/policies/participation/">our community participation guidelines</a> which ensures that you will be treated respectfully, no matter who you are.</p>
                        </div>
                    </div>
                </div>
                {/* Regional Groups */}
                <Groups data={data.regionalGroups} name="Regional Groups" />
                {/* Functional Groups */}
                <Groups data={data.functionalGroups} name="Functional Groups" />
                {/* Campus Clubs */}
                <Groups data={data.campusClubs} name="Campus Clubs" description={["A Mozilla University &amp; College Club is a group of students with a passion for technology who meet regularly to advance this mission by building and innovating on open source projects that keep the web open.To learn more about Campus Clubs, you can visit the ",<a href='https://campus.mozilla.community/'>Mozilla Campus Club Website</a>]} />
            </div>
    </section>
  </Layout>
)

export const query = graphql`
  query IndexQuery {
    regionalGroups: allRegionalgroupsJson {
      edges {
        node {
          name
          website
          twitter
          telegram
          instagram
          facebook
          GitHub
        }
      }
    }
    functionalGroups: allFunctionalgroupsJson {
      edges {
        node {
          name
          telegram
          GitHub
        }
      }
    }
    campusClubs: allCampusclubsJson {
      edges {
        node {
          name
          twitter
          instagram
          facebook
          website
        }
      }
    }
  }
`

export default IndexPage
