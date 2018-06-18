import React, { Component } from 'react'
import styled from 'styled-components';

const Root = styled.div`
  display: flex;
  justify-content: space-between;
  :not(:last-child){
    margin-bottom: 20px;
  }
  span{
    flex: 1 4 80px;
    display: inline-flex;
    align-items: center;
  }
  input{
    min-width: 150px;
    flex: 4 1 150px;
  }
`
export default class Datepicker extends Component {
  render() {
    return (
      <Root>
        <span>{this.props.title}</span>
        <input type='date' />
      </Root>
    )
  }
}
