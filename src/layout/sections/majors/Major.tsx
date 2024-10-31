import React from 'react';
import {Icon} from "../../../components/icon/Icon";
import styled from "styled-components";

type MajorPropsType = {
    iconId: string
    title: string

}

export const Major = (props: MajorPropsType) => {
    return (
        <StyledMajor>
            <Icon iconId={props.iconId}/>
            <StyledMajorTitle>{props.title}</StyledMajorTitle>
        </StyledMajor>
    );
};

const StyledMajor = styled.div`
  background-color: rgba(127, 225, 255, 0.58);
  min-height: 295px;
`

const StyledMajorTitle = styled.h3`
    
`