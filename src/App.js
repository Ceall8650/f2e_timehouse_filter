import React, { Component } from 'react';
import styled from 'styled-components';
import Topbar from 'view/Topbar';
import Sidebar from 'view/Sidebar';
import Main from 'view/Main';

const Root = styled.div`
`
const Container = styled.div`
  display: flex;
  padding: 0px 20px;
`

 class App extends Component {
  render() {
    return (
      <Root>
        <Topbar />
        <Container>
          <Sidebar />
          <Main />
        </Container>
      </Root>
    );
  }
}

export default App;
