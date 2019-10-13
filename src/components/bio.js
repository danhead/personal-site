import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"
import Image from "gatsby-image"

const Container = styled.div`
  display: flex;
  align-items: center;
`

const Content = styled.div`
  margin-left: 10px;
`

const Text = styled.p`
  margin: 0;
  font-size: 0.8rem;
`

const SubText = styled(Text)`
  font-size: 0.75rem;
`

const Bio = ({ readingTime }) => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  const { author } = data.site.siteMetadata
  return (
    <Container>
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <Content>
        <Text>
          Written by <strong>{author}</strong>
        </Text>
        {readingTime ? <SubText>{readingTime}</SubText> : null}
      </Content>
    </Container>
  )
}

Bio.propTypes = {
  readingTime: PropTypes.string,
}

export default Bio
