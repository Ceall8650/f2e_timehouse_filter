import React, { Component } from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Section = styled.section`
  width: 100%;
  display: flex;
  box-sizing: border-box;
  :not(:last-child){
    margin-bottom: 20px;
  }
`
const Image = styled.img`
  width: 220px;
  height: 220px;
`

const Content = styled.div`
  width: 100%;
  max-width: calc(100% - 220px);
  height: 220px;
  box-sizing: border-box;
  background-color: #fff;
  padding: 20px;
`
const Title = styled.h3`
  font-size: 24px;
  color: #9013FE;
  line-height: 36px;
  margin-bottom: 20px;
`
const Desc = styled.div`
  min-height: 80px;
  font-size: 16px;
  color: #000000;
  line-height: 24px;
  margin-bottom: 20px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
const Author = styled.div`
  ont-size: 16px;
  font-weight: 700;
`
const Tag = styled.div`
  background: #D7D7D7;
  border-radius: 100px;
  font-size: 16px;
  color: #FFFFFF;
  text-align: center;
`
const Footer = styled.div`
  display: flex;
  .title{
    color: #000;
  }
`
const Zone = styled.span`
  font-size: 16px;
  color: #9B9B9B;
  margin-right: 10px;
`
const Opentime = styled.span`
  font-size: 16px;
  color: #9B9B9B;
`

export default class Article extends Component {
  constructor (props) {
    super(props)
    this.state = {
      item: this.props.item
    }
  }
  
  render() {
    return (
      <Section>
        <Image src={`${this.state.item.Picture1}`}/>
        <Content>
          <Title>{this.state.item.Name}</Title>
          <Desc>{this.state.item.Description}</Desc>
          <div>
            <Author>{this.state.item.author}</Author>
            <Tag>{this.state.item.tag}</Tag>
          </div>
          <Footer>
            <Zone>
              <span className='title'>
                <i className="fas fa-map-marker-alt"/>地點: 
              </span>
              {this.state.item.Zone}
            </Zone>
            <Opentime>
              <span className='title'>
                <i className="far fa-calendar-alt"></i>開放時間: 
              </span>
              {this.state.item.Opentime}
            </Opentime>
          </Footer>
        </Content>
      </Section>
    )
  }
}

Article.propTypes = {
  Opentime: PropTypes.string,
  file: PropTypes.object,
  comment: PropTypes.string
}

Article.defaultProps = {
  Opentime: '',
  file: {},
  comment: ''
}