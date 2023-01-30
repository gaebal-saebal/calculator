import React from 'react';
import { Button, Layout, Display } from './components';
import styled from 'styled-components';

const KeypadDiv = styled.div`
  height: 70%;
`;

const App = () => {
  return (
    <Layout>
      <Display>5+5</Display>
      <KeypadDiv>
        <Button>버튼1</Button>
        <Button>버튼2</Button>
        <Button>버튼3</Button>
        <Button>버튼4</Button>
      </KeypadDiv>
    </Layout>
  );
};

export default App;
