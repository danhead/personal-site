import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Header from "../components/header"
import Link from "../components/link"
import { H2, H3, Text, List, ListItem } from "../components/type"
import { Columns, Column } from "../components/columns"
import Image from "../components/image"
import SEO from "../components/seo"

const query = graphql`
  query AboutQuery {
    file(absolutePath: { regex: "/dan-and-hana.jpg/" }) {
      childImageSharp {
        fixed(width: 320, height: 240) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
const About = () => {
  const data = useStaticQuery(query)

  return (
    <div>
      <SEO title="About me" />
      <Header
        heading="About me"
        subheading="Experienced Full Stack Web Developer"
      />
      <H2>A little about me</H2>
      <Text>
        I live in Brentwood, Essex and am currently employed full time as a Lead
        Front-end Developer at Barclays in Canary Wharf.
      </Text>
      <Image
        align="right"
        fixed={data.file.childImageSharp.fixed}
        alt="Me with my wife, Hana"
      />
      <Text>
        I've been building web sites since 2008, ranging from small personal
        projects, to large scale brochureware websites and web applications for
        large corporations.
      </Text>
      <Text>
        I specialise in JavaScript, primarily using ES2015+ and React. I'm also
        super passionate about writing modular CSS that scales from small,
        bespoke applications, to large component libraries designed for use
        across many sites.
      </Text>
      <Text>
        I have experience with Node.js and WordPress theme development. I use{" "}
        <Link to="https://circleci.com">CircleCI</Link> for continuous
        integration and{" "}
        <Link to="https://m.do.co/c/72112f5e365c">Digital Ocean</Link> to run my
        Docker nodes.
      </Text>
      <Text>
        This site is built using{" "}
        <Link to="https://www.gatsbyjs.org">Gatsby</Link>
        and hosted using <Link to="https://zeit.co">Zeit</Link>. The source code
        is available on{" "}
        <Link to="https://github.com/danhead/personal-site">Github</Link>.
      </Text>
      <H2>My Skillset</H2>
      <Columns>
        <Column>
          <H3>Core</H3>
          <List>
            <ListItem>HTML</ListItem>
            <ListItem>CSS</ListItem>
            <ListItem>JavaScript</ListItem>
            <ListItem>Node.js</ListItem>
            <ListItem>GraphQL</ListItem>
            <ListItem>MongoDB</ListItem>
            <ListItem>PHP</ListItem>
            <ListItem>MySQL</ListItem>
          </List>
        </Column>
        <Column>
          <H3>Frameworks</H3>
          <List>
            <ListItem>Angular</ListItem>
            <ListItem>React.js</ListItem>
            <ListItem>jQuery</ListItem>
            <ListItem>Grunt + Gulp</ListItem>
            <ListItem>Sass + PostCSS</ListItem>
            <ListItem>Express</ListItem>
          </List>
        </Column>
        <Column>
          <H3>Services</H3>
          <List>
            <ListItem>Google Maps</ListItem>
            <ListItem>Google Analytics</ListItem>
            <ListItem>Facebook</ListItem>
            <ListItem>Twitter</ListItem>
            <ListItem>CircleCI</ListItem>
            <ListItem>Sentry.io</ListItem>
            <ListItem>oAuth</ListItem>
          </List>
        </Column>
      </Columns>
    </div>
  )
}

export default About
