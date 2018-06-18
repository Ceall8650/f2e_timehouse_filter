import React, { Component } from 'react'
import styled from 'styled-components';
import InputText from 'components/InputText';

const Header = styled.header`
  background-color: #7828B4;
  height: 92px;
  color: white; 
  display: flex;
  align-items: center;
`

const HeaderTools = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`

const Logo = styled.h1`
  min-width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`
export default class Topbar extends Component {
  render() {
    return (
      <Header>
        <Logo>Have Fun</Logo>
        <HeaderTools>
          <InputText name="search" icon='search' placeholder='Explore your own activities' />
        </HeaderTools>
      </Header>
    )
  }
}

