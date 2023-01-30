import React from 'react';
import styled from 'styled-components';

const LayoutDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const WrapperDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  max-width: 393px;
  height: 100vh;
  max-height: 852px;
  background-color: #ddd;
`;

const Layout = ({ children }) => {
  return (
    <LayoutDiv>
      <WrapperDiv>{children}</WrapperDiv>
    </LayoutDiv>
  );
};

export default Layout;
