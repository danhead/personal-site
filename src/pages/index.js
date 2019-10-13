import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"
import BlogSummary from "../components/blog-summary"
import { H1, H2, Text } from "../components/type"
import Link from "../components/link"
import SEO from "../components/seo"
import { mdUp } from "../utils/breakpoint"

const Banner = styled.div`
  display: flex;
  align-items: center;
`
const Media = styled.div`
  display: none;
  width: 33%;
  margin-right: 1rem;
  border-radius: 50%;
  overflow: hidden;

  ${mdUp(`display: block;`)}
`
const Content = styled.div``

const Index = ({ data }) => {
  const post = data.allMarkdownRemark.edges[0].node

  return (
    <div>
      <SEO />
      <Banner>
        <Media>
          <Image fluid={data.dan.childImageSharp.fluid} alt="Me" />
        </Media>
        <Content>
          <H1>Hi, I'm Dan Head</H1>
          <Text>Experienced full stack web developer</Text>
          <Text>I create web sites and web applications.</Text>
          <Text>
            Find out more <Link to="/about">about me</Link>, take a look at some
            of my <Link to="/work">work</Link>,{" "}
            <Link to="/blog">read my blog</Link> or{" "}
            <Link to="/contact">contact me</Link>.
          </Text>
        </Content>
      </Banner>
      <H2>Latest post</H2>
      <BlogSummary node={post} />
    </div>
  )
}

export default Index

export const pageQuery = graphql`
  query {
    dan: file(absolutePath: { regex: "/dan.jpg/" }) {
      childImageSharp {
        fluid(maxWidth: 480) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 1
    ) {
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
