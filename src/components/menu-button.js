import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import { blue, white } from "../utils/colors"
import { transition } from "../utils/transition"

const Button = styled.button`
  display: block;
  padding: 0.5rem 0.25rem;
  border: 0;
  background-color: transparent;
  opacity: ${props => (props.active ? 0 : 1)};
  cursor: pointer;
  transition: opacity ${transition()};

  &:focus {
    outline: 0;
    background-color: ${blue};
  }
`

const Icon = styled.div`
  position: relative;
  width: 1.5rem;
  height: 1rem;
`

const Bar = styled.span`
  position: absolute;
  right: 0;
  left: 0;
  height: 4px;
  border-radius: 2px;
  background-color: ${blue};

  ${Button}:focus & {
    background-color: ${white};
  }
`

const Top = styled(Bar)`
  top: 0;
`

const Middle = styled(Bar)`
  top: 50%;
  transform: translateY(-50%);
`

const Bottom = styled(Bar)`
  bottom: 0;
`

const MenuButton = ({ active, ...other }) => {
  return (
    <Button active={active} {...other} aria-label="Open menu">
      <Icon>
        <Top />
        <Middle />
        <Bottom />
      </Icon>
    </Button>
  )
}

MenuButton.propTypes = {
  active: PropTypes.bool.isRequired,
}

export default MenuButton
