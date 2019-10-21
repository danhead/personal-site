import React from "react"
import styled from "styled-components"

import { black, blue, white } from "../utils/colors"

const Container = styled.div`
  position: fixed;
  top: 4px;
  right: -20px;
  width: 74px;
  padding: 0.1rem;
  font-size: 0.6rem;
  font-weight: 700;
  text-align: center;
  user-select: none;
  background-color: ${blue};
  border: 2px solid ${black};
  color: ${white};
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.6);
  transform: rotate(45deg);
`

const Label = ({ children }) => <Container>{children}</Container>

export default Label
