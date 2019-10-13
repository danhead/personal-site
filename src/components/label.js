import React from "react"
import styled from "styled-components"

import { blue, white } from "../utils/colors"

const Container = styled.div`
  position: fixed;
  top: 8px;
  right: -16px;
  width: 66px;
  font-size: 0.6rem;
  font-weight: 700;
  text-align: center;
  user-select: none;
  background-color: ${blue};
  color: ${white};
  padding: 0.1rem;
  transform: rotate(45deg);
`

const Label = ({ children }) => <Container>{children}</Container>

export default Label
