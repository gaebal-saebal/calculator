import React from 'react';
import styled from 'styled-components';

const OutputDiv = styled.div`
  width: calc(100% - 60px);
  height: 30%;
  background: #eee;
  padding: 30px;
`;

const Display = ({ children }) => {
  return <OutputDiv>{children}</OutputDiv>;
};

export default Display;
