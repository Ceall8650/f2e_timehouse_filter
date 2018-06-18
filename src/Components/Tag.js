import React, { Component } from 'react'
import styled from 'styled-components';
const Root = styled.span`
  border: 1px solid #9013FE;
  border-radius: 100px;
  color: #9013FE;
  padding: 5px 10px;
  :not(:last-child){
    margin-right: 10px;
  }
  span{
    margin-right: 10px;
  }
  svg{
    color: #9013FE;
  }
`

export default class Tag extends Component {
  render() {
    return (
      <Root>
        <span>{this.props.title}</span>
        <i className="far fa-times-circle"/>
      </Root>
    )
  }
}
