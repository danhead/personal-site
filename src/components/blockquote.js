import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import { blue } from "../utils/colors"

const Container = styled.blockquote`
  margin: 0 0 1.5rem 1rem;
  padding: 0 1.5rem;
  border-left: 2px solid ${blue};
  font-style: italic;
`

/*
const BlockQuote = ({ children }) => {
  console.log(typeof children, children)
  return (
    <Container>
      {children.map((item, index) => {
        if (item.props && item.props.children) {
          return <Text key={index}>{item.props.children}</Text>
        }
        return null
      })}
    </Container>
  )
}
*/

const BlockQuote = ({ children }) => <Container>{children}</Container>

BlockQuote.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}

export default BlockQuote
