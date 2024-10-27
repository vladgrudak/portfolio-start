import React from 'react';
import styled from "styled-components";
import photo from "../../../assets/img/my-photo.webp"
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper direction={"column"}>
                <h2>Hello! I’m Zarror Nibors</h2>
                <p>I’am freelance web developer based in Indonesia who loves to craft attractive design experiences for
                    the web.</p>
                <div>
                    <button>Email me</button>
                    <a href="#">Download CV</a>
                </div>
            </FlexWrapper>
        </StyledMain>
    );
};

const StyledMain = styled.main`
  background-color: rgba(213, 232, 255, 0.95);
  background-image: url("${photo}");
  background-repeat: no-repeat;
  background-position: 100%;
  min-height: 743px;
`