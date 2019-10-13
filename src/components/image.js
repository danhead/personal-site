import React from "react"
import GatsbyImage from "gatsby-image"
import styled from "styled-components"
import PropTypes from "prop-types"

import { mdUp } from "../utils/breakpoint"

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 0.5rem 0;

  ${props =>
    props.align === "left"
      ? mdUp(`
    float: left;
    padding: 0 1rem 1rem 0;
  `)
      : null}

  ${props =>
    props.align === "right"
      ? mdUp(`
    float: right;
    padding: 0 0 1rem 1rem;
  `)
      : null}
`

const Image = ({ fixed, alt, align }) => (
  <Container align={align}>
    <GatsbyImage fixed={fixed} alt={alt} />
  </Container>
)

Image.propTypes = {
  fixed: PropTypes.node.isRequired,
  alt: PropTypes.string.isRequired,
  align: PropTypes.string,
}

export default Image
