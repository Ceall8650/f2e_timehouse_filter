import React, { Component } from 'react'
import styled from 'styled-components';

const Root = styled.div`
  display: flex;
  justify-content: space-between;
  :not(:last-child){
    margin-bottom: 10px;
  }
  input{
    flex: 1 4 80px;
    min-width: 20px;
    width: 16px;
    height: 16px;
    display: inline-flex;
    cursor: pointer;
  }
  label{
    display: inline-flex;
    min-width: 150px;
    flex: 4 1 150px;
    &:hover{
      cursor: pointer;
    }
  }
`
export default class Checkbox extends Component {
  render() {
    return (
      <Root>
        {/* <label></label> */}
        <input id={`appCb_${this.props.title}`} type='checkbox' />
        <label htmlFor={`appCb_${this.props.title}`}>{this.props.title}</label>
      </Root>
    )
  }
}
