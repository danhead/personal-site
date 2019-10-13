import React from "react"
import styled from "styled-components"

import { TextSmall } from "./type"
import Link from "./link"

import { blue, white } from "../utils/colors"

const Container = styled.footer`
  margin: 1rem 0 0;
  padding: 1rem 0;
  background-color: ${blue};
  text-align: center;
  color: ${white};
`

const Footer = () => (
  <Container>
    <TextSmall>
      © {new Date().getFullYear()}, Built with
      {` `}
      <Link variant="dark" to="https://www.gatsbyjs.org">
        Gatsby
      </Link>
    </TextSmall>
  </Container>
)

export default Footer
