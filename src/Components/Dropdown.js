import React, { Component } from 'react'

export default class Dropdown extends Component {
  render() {
    return (
      <select>
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </select>
    )
  }
}
