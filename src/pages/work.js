import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"
import Header from "../components/header"
import Link from "../components/link"
import { H2, Text } from "../components/type"
import SEO from "../components/seo"

import { mdUp } from "../utils/breakpoint"
import { blue, white } from "../utils/colors"

const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${white};
  border: 4px solid ${blue};

  ${props =>
    props.reverse
      ? mdUp(`flex-direction: row-reverse;`)
      : mdUp(`flex-direction: row;`)}
`

const Media = styled.div`
  width: 100%;
`

const Content = styled.div`
  padding: 0.5rem;
`
const query = graphql`
  query WorkQuery {
    windycoys: file(absolutePath: { regex: "/windycoys.png/" }) {
      childImageSharp {
        fluid(maxWidth: 960) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
const Work = () => {
  const data = useStaticQuery(query)

  return (
    <div>
      <SEO title="My work" />
      <Header heading="My work" subheading="Some of my previous works" />
      <Card>
        <Media>
          <Image fluid={data.windycoys.childImageSharp.fluid} alt="windycoys" />
        </Media>
        <Content>
          <H2>
            <Link to="https://windycoys.com">Windycoys.com</Link>
          </H2>
          <Text>
            Bespoke Wordpress theme for Spurs Blogger and friend{" "}
            <Link to="https://twitter.com/windycoys">Chris Miller</Link>.
          </Text>
        </Content>
      </Card>
    </div>
  )
}

export default Work
