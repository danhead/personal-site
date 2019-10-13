import React, { useEffect, useRef } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import PropTypes from "prop-types"
import styled from "styled-components"

import { transition } from "../utils/transition"
import { white, cyan, darkGrey } from "../utils/colors"

import Link from "./link"

const Container = styled.nav`
  background-color: ${darkGrey};
  height: 100%;
  padding: 10px;
  overflow-x: hidden;
  overflow-y: auto;
`

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  text-align: center;
`

const ListItem = styled.li`
  margin-bottom: 10px;
  transform: translate3d(0, ${props => (props.active ? "0" : "100vh")}, 0);
  transition: transform ${transition()};
  transition-delay: ${props => props.delay};
`

const Head = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  opacity: ${props => (props.active ? 1 : 0)};
  transition: opacity ${transition({ delay: "medium" })};
`

const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  border: 0;
  background-color: transparent;
  width: 32px;
  height: 32px;

  &:focus {
    outline: 0;
    background-color: ${white};
  }

  &:before,
  &:after {
    content: "";
    position: absolute;
    width: 16px;
    height: 3px;
    border-radius: 2px;
    background-color: white;
  }

  &:focus:before,
  &:focus:after {
    background-color: ${cyan};
  }

  &:before {
    transform: translate(-50%, -50%) rotate(45deg);
  }

  &:after {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
`
const query = graphql`
  query NavQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 96, height: 96) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        nav {
          title
          to
        }
      }
    }
  }
`

const Nav = ({ active, onClose }) => {
  const data = useStaticQuery(query)
  const { nav } = data.site.siteMetadata
  const first = useRef(null)
  const last = useRef(null)

  const handleKeyDownFirst = e => {
    if (e.keyCode === 9 && e.shiftKey) {
      e.preventDefault()
      last.current.focus()
    }
  }

  const handleKeyDownLast = e => {
    if (e.keyCode === 9 && !e.shiftKey) {
      e.preventDefault()
      first.current.focus()
    }
  }

  useEffect(() => {
    console.log(first, last)
  })

  return (
    <Container>
      <Head active={active}>
        <Image
          fixed={data.avatar.childImageSharp.fixed}
          alt={data.site.siteMetadata.author}
          imgStyle={{
            borderRadius: `50%`,
          }}
        />
        <CloseButton
          ref={first}
          aria-label="Close menu"
          onClick={() => onClose()}
          onKeyDown={handleKeyDownFirst}
        />
      </Head>
      <List>
        {nav.map((item, index) => {
          const props = {
            variant: "dark",
            size: "large",
            to: item.to,
            onClick: () => onClose(),
          }
          if (nav.length === index + 1) {
            props.linkRef = last
            props.onKeyDown = handleKeyDownLast
          }
          return (
            <ListItem
              key={index}
              active={active}
              delay={active ? `${(parseInt(index) + 1) * 0.05}s` : "0.3s"}
            >
              <Link {...props}>{item.title}</Link>
            </ListItem>
          )
        })}
      </List>
    </Container>
  )
}

Nav.propTypes = {
  active: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
}

export default Nav
