import styled from "styled-components"

import { blue } from "../utils/colors"

export const H1 = styled.h1`
  margin: 0 0 1.25rem;
  font-size: 2rem;
  color: ${blue};
`

export const H2 = styled.h2`
  margin: 0 0 1.2rem;
  font-size: 1.5rem;
`

export const H3 = styled.h3`
  margin: 0 0 1.15rem;
  font-size: 1.4rem;
`

export const H4 = styled.h4`
  margin: 0 0 1.1rem;
  font-size: 1.3rem;
`

export const H5 = styled.h5`
  margin: 0 0 1.05rem;
  font-size: 1.2rem;
`

export const H6 = styled.h6`
  margin: 0 0 1rem;
  font-size: 1.1rem;
`
export const Text = styled.p`
  margin: 0 0 0.75rem;
`

export const TextSmall = styled.p`
  margin: 0 0 0.75rem;
`

export const List = styled.ul`
  margin: 0 0 0.75rem;
  padding: 0;
  list-style: none;
`

export const UnorderedList = styled.ul`
  margin: 0 0 0.75rem 1rem;
  padding: 0;
  list-style: square;
`

export const OrderedList = styled.ol`
  margin: 0 0 0.75rem 1rem;
  padding: 0;
  list-style: number;
`

export const ListItem = styled.li`
  margin-bottom: 0.75rem;
`

export const BlockQuote = styled.blockquote`
  margin: 0 0 1.5rem 1rem;
  padding: 0 1.5rem;
  border-left: 2px solid ${blue};
  font-style: italic;
`
