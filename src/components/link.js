import React from "react"
import { Link as GatsbyLink } from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"

import { cyan, white } from "../utils/colors"

const getFontSize = size => {
  switch (size) {
    case "small":
      return "0.75rem"
    case "large":
      return "1.25rem"
    default:
      return ""
  }
}

const Element = styled.a`
  font-size: ${props => getFontSize(props.size)};
  color: ${props => (props.variant === "normal" ? cyan : white)};
  text-decoration: none;
  border-bottom: 2px solid
    ${props => (props.variant === "normal" ? cyan : white)};

  &:visited {
    color: ${props => (props.variant === "normal" ? cyan : white)};
  }

  &:focus {
    outline: 0;
    background-color: ${props => (props.variant === "normal" ? cyan : white)};
    color: ${props => (props.variant === "normal" ? white : cyan)};
    box-shadow: 0 0 0 2px
      ${props => (props.variant === "normal" ? cyan : white)};
  }
`
const Link = ({ children, to, href, variant, size, linkRef, ...other }) => {
  const url = to || href // Handle links created from Markdown
  const internal = /^\/(?!\/)/.test(url)

  if (internal) {
    return (
      <Element
        as={GatsbyLink}
        to={url}
        variant={variant}
        size={size}
        ref={linkRef}
        {...other}
      >
        {children}
      </Element>
    )
  }
  return (
    <Element href={url} variant={variant} size={size} ref={linkRef} {...other}>
      {children}
    </Element>
  )
}

Link.defaultProps = {
  variant: "normal",
  size: "medium",
}

Link.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string,
  href: PropTypes.string,
  variant: PropTypes.string,
  size: PropTypes.string,
}

export default Link
