import styled from "styled-components"

import { mdUp } from "../utils/breakpoint"

export const Columns = styled.div`
  ${mdUp(`
    display: flex;
  `)}
`

export const Column = styled.div`
  text-align: center;
  ${mdUp(`
    flex-basis: 100%;
  `)}
`
