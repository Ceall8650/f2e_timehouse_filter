import React, { Component } from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Root = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #fff;
`
const Icon = styled.label`
  display: ${props => !!props.showIcon ? 'inline' : 'none'};
  margin-right: 10px;
`

const Input = styled.input`
  background-color: transparent;
  color: #ffffff;
  &::placeholder{
    color: rgba(254, 254, 254, .5);
  }
`

export default class InputText extends Component {

  render() {
    return (
      <Root>
        <Icon htmlFor={this.props.name} showIcon={this.props.name}>
          <i className={`fas fa-${this.props.icon}`}></i>
        </Icon>
        <Input id={this.props.name} type="text" placeholder={this.props.placeholder}/>
      </Root>
    )
  }
}

InputText.propTypes = {
  name: PropTypes.string
}

InputText.defaultProps = {
  name: ''
}