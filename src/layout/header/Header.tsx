import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";

const menuItems = ["Home", "About", "Services", "Contact me"]
export const Header = () => {
    return (
        <StyledHeader>
            <Logo />
            <Menu menuItems={menuItems}/>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
  background-color: transparent;
  display: flex;
  justify-content: space-between;
`