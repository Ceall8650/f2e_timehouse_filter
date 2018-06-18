import React, { Component } from 'react'
import styled from 'styled-components';
import Dropdown from 'components/Dropdown';
import Datepicker from 'components/Datepicker';
import Checkbox from '../../Components/Checkbox';

const Root = styled.aside`
  max-width: 300px;
  box-sizing:border-box;
  padding: 0px 20px;
  padding-bottom: 20px;
  background-color: #EBEBEB; 
`
const Section = styled.section`
`
const Title = styled.h3`
  margin: 20px 0px;
`
const Location = Section.extend``
const Date = Section.extend``
const Categories = Section.extend``
const dataList = [
  {title: 'All', checked: false},
  {title: 'Entertainment', checked: false},
  {title: 'Food', checked: false},
  {title: 'Learning', checked: false},
  {title: 'Outdoors', checked: false}
]

export default class Sidebar extends Component {
  render() {
    return (
      <Root>
        <Location>
          <Title>Location: </Title>
          <Dropdown />
        </Location>
        <Date>
          <Title>Date: </Title>
          <Datepicker title='From: '/>
          <Datepicker title='To: '/>
        </Date>
        <Categories>
          <Title>Categories: </Title>
          {
            dataList.map((item, key) => <Checkbox key={key} title={item.title} />)
          }
        </Categories>
      </Root>
    )
  }
}
