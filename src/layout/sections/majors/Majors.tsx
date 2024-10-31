import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Major} from "./Major";

// const majorItems = [{iconId: "computer", title: "Front End Developer"},
//                                             {iconId: "computer", title: "Front End Developer"},
//                                             {iconId: "computer", title: "Front End Developer"}]
export const Majors = () => {
    return (
        <StyledMajors>
            <StyledMajorsText>4+ Years Experience Working</StyledMajorsText>
            <FlexWrapper direction={"column"}>
                <StyledMajorsTitle>Developer and Designer, specialized in UI/UX and Web Developer</StyledMajorsTitle>
                <FlexWrapper justify={"space-between"}>

                    {/*{majorItems.map((item)=> {*/}
                    {/*    <Major iconId={item.iconId} title={item.title} />*/}
                    {/*})}*/}

                    <Major iconId={"computer"} title={"Front End Developer"}/>
                    <Major iconId={"paint"} title={"UI/UX Designer"}/>
                    <Major iconId={"thunder"} title={"Branding Designer"}/>
                </FlexWrapper>
            </FlexWrapper>
        </StyledMajors>
    );
};

const StyledMajors = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: rgba(250, 197, 197, 0.75);
  min-height: 50vh; 
`

const StyledMajorsTitle = styled.h2`
    
`

const StyledMajorsText = styled.h3`

`