import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import { blue } from "../utils/colors"

import { H1, Text } from "./type"

const Container = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
  border-bottom: 4px solid ${blue};
`

const Content = styled.div`
  margin: 0 0 1rem;
`

const Header = ({ heading, subheading, children }) => (
  <Container>
    <H1>{heading}</H1>
    {subheading ? <Text>{subheading}</Text> : null}
    {children ? <Content>{children}</Content> : null}
  </Container>
)

Header.propTypes = {
  heading: PropTypes.string.isRequired,
  subheading: PropTypes.string,
  children: PropTypes.node,
}

export default Header
