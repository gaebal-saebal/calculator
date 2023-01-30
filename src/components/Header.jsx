import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 93%;
`;
const HeaderContainer = styled.div`
  width: 93%;
  height: 100px;
  background-color: rgba(246, 251, 255, 1);
  box-shadow: rgb(204, 219, 232) 5px 5px 6px 0px inset,
    rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset,
    rgb(255, 255, 255) -5px -5px 6px 3px inset;

  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
  margin-bottom: 30px;
`;

const Header = ({ children }) => {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        {children}
        <div>
          <div className="first-count"></div>
          <div>+</div>
          <div className="second-c"></div>
        </div>
        <div className="result-count"></div>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;
