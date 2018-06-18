import React, { Component } from 'react'
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Article from 'components/Article';
import Tag from 'components/Tag';

const Root = styled.main` 
  width: calc(100% - 300px);
  box-sizing: border-box;
  padding: 40px;
`
const Title = styled.div`
  line-height: 28px;
  font-size: 24px;
`
const Count = styled.span`
  color: #9013FE;
  font-weight:700;
  margin: 0px 5px;
`
const TagList = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`

export default class Main extends Component {
  constructor (props) {
    super(props)
    this.state = {
      dataList: this.props.dataList
    }
  }
  
  render() {
    return (
      <Root>
        <Title> 
          Showing<Count>{this.state.dataList.length}</Count> result by...
        </Title>
        <TagList>
          <Tag title='Koahsung' />
          <Tag title='Entertainment' />
        </TagList>
        <div>
          {this.state.dataList.map((item, key)=> <Article key={key} item={item} />)}
        </div>
      </Root>
    )
  }
}

Main.propTypes = {
  dataList: PropTypes.Array
}

Main.defaultProps = {
  dataList: [
    {
      "Ticketinfo": "免費參觀",
      "Zone": "三民區",
      "Px": "120.30211",
      "Py": "22.63961",
      "Add": "高雄市三民區建國二路318號",
      "Gov": "397000000A",
      "Class2": null,
      "Class1": "3",
      "Website": "",
      "Opentime": "週二至週日10:00-18:00，每週一公休",
      "Description": "高雄願景館的前身是日治時期興建的高雄市舊火車站，外觀是”和洋混合式建築”氣勢雄偉，內部則為西式的玄關及大廳。2002年為了配合鐵路、捷運、高鐵的三鐵共構，這棟老火車站建築物遷移到附近的空地上，並由市府規劃，以\"數位博物館\"的型式，其中歷史迴廊對於鐵道文化及往日風貌有一系列回顧，讓遊客可以重溫老車站的過往風華，而3D虛擬互動區則讓參觀者以虛擬實境的方式飛越高雄的重要景點並同時見證高雄的發展歷史。願景館是認識高雄過去與未來的最佳場所，而願景橋、鐵路文化棧道、風的祝福廣場…等公共藝術區也是遊客們最愛駐足與拍照留念的美麗景點。",
      "Remarks": "",
      "Parkinginfo_py": "0",
      "Parkinginfo_px": "0",
      "Name": "高雄願景館",
      "Level": null,
      "Picture1": "http://khh.travel/FileArtPic.ashx?id=705&w=1280&h=960",
      "Toldescribe": "高雄願景館的前身是日治時期興建的高雄市舊火車站，外觀是”和洋混合式建築”氣勢雄偉，內部則為西式的玄關及大廳。2002年為了配合鐵路、捷運、高鐵的三鐵共構，這棟老火車站建築物遷移到附近的空地上，並由市府規劃，以\"數位博物館\"的型式，其中歷史迴廊對於鐵道文化及往日風貌有一系列回顧，讓遊客可以重溫老車站的過往風華，而3D虛擬互動區則讓參觀者以虛擬實境的方式飛越高雄的重要景點並同時見證高雄的發展歷史。願景館是認識高雄過去與未來的最佳場所，而願景橋、鐵路文化棧道、風的祝福廣場…等公共藝術區也是遊客們最愛駐足與拍照留念的美麗景點。",
      "Changetime": "2015-06-10T15:40:33",
      "Tel": "886-7-2363357",
      "Picdescribe1": "高雄願景館?",
      "Travellinginfo": "",
      "_id": 1,
      "Id": "C1_397000000A_000009"
    }
  ]
}