import React, { useState } from "react"
import PropTypes from "prop-types"
import styled, { createGlobalStyle } from "styled-components"

import { transition } from "../utils/transition"

import Nav from "../components/nav"
import MenuButton from "../components/menu-button"
import Footer from "../components/footer"
import Label from "../components/label"

import background from "../../content/assets/background.svg"
import { blue, cream } from "../utils/colors"

const navWidth = "250px"

const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 16px;
    line-height: 1.5;
    background-color: ${blue};

    @media (min-width: 480px) {
      font-size: calc(16px + (20 - 16) * (100vw - 480px) / (960 - 480));
    }

    @media (min-width: 960px) {
      font-size: 20px;
    }
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    font-family: "Lato", sans-serif;
    margin: 0;
    background-color: ${cream};
    background-image: url(${background});
    border-top: 4px solid ${blue};
    overflow: hidden;
  }
`

const Main = styled.main`
  overflow-x: hidden;
`

const MenuButtonContainer = styled.div`
  position: absolute;
  z-index: 9;
  margin: 0.5rem 0 0 0.5rem;
  transform: translate3d(
    ${props => (props.active ? "0" : `${navWidth}`)},
    0,
    0
  );
  transition: transform ${transition()};
`

const NavContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: ${navWidth};
  z-index: 10;
  visibility: ${props => (props.active ? "visible" : "hidden")};
  transform: translate3d(
    ${props => (props.active ? "0" : `-${navWidth}`)},
    0,
    0
  );
  transition: transform ${transition()},
    visibility ${transition({ timing: "linear", delay: "medium" })};
`

const ContentContainer = styled.div`
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  opacity: ${props => (props.active ? 1 : 0.4)};
  transition: opacity ${transition()};
`

const Content = styled.div`
  max-width: 48rem;
  margin: 0 auto;
  padding: 1rem 3rem 0;
  transform: translate3d(${props => (props.active ? "0" : navWidth)}, 0, 0);
  transition: transform ${transition()};
`

const Article = styled.article`
  min-height: 100vh;
`

const Layout = ({ title, children }) => {
  const [menuActive, setMenuActive] = useState(false)

  return (
    <Main>
      <GlobalStyles />
      <MenuButtonContainer active={!menuActive}>
        <MenuButton
          onClick={() => setMenuActive(!menuActive)}
          active={menuActive}
        />
      </MenuButtonContainer>
      <NavContainer active={menuActive}>
        <Nav active={menuActive} onClose={() => setMenuActive(false)} />
      </NavContainer>
      <ContentContainer active={!menuActive}>
        <Content active={!menuActive} onClick={() => setMenuActive(false)}>
          <Article>{children}</Article>
        </Content>
        <Footer />
      </ContentContainer>
      <Label>BETA</Label>
    </Main>
  )
}

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default Layout
