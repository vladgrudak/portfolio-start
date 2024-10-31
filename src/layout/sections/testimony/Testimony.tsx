import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Slider} from "../../../components/slider/Slider";
import {Stat} from "./Stat";

export const Testimony = () => {
    return (
        <StyledTestimony>
            <FlexWrapper justify={"space-around"}>
                <Slider />
                <Stats>
                    <Stat title={"Satisfaction Clients"} text={"100%"} />
                    <Stat title={"Clients On Worldwide"} text={"+80"} />
                    <Stat title={"Projects Done"} text={"743"} />
                </Stats>
            </FlexWrapper>
        </StyledTestimony>
    );
};

const StyledTestimony = styled.section`
  min-height: 50vh;
  background-color: #928cf5;
`

const Stats = styled.div`
    
`