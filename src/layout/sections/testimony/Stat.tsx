import React from 'react';
import styled from "styled-components";

type StatTypes = {
    title: string
    text: string
}

export const Stat = (props:StatTypes) => {
    return (
        <StyledStat>
            <Title>{props.title}</Title>
            <Text>{props.text}</Text>
        </StyledStat>
    );
};

const StyledStat = styled.div`
  
`

const Title = styled.h3`

`

const Text = styled.p`
`