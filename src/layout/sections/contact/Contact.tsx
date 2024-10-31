import React from 'react';
import styled from "styled-components";
import {FormField} from "./FormField";
import {Button} from "../../../components/button/Button";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Icon} from "../../../components/icon/Icon";

export const Contact = () => {
    return (
        <StyledContact>
                <FlexWrapper direction={"column"}>
                    <Title>Let’s Connect</Title>
                    <div>
                        <Icon iconId={"dribble"} />
                        <Icon iconId={"upwork"} />
                        <Icon iconId={"youtube"} />
                        <Icon iconId={"linkedin"} />
                        <Icon iconId={"github"} />
                    </div>
                </FlexWrapper>
                <StyledForm action="#">
                    <FormField fieldTitle={"Your name"} />
                    <FormField fieldTitle={"Your email address:"} fieldInputType={"email"}/>
                    <FormField fieldTitle={"Tell about the project:"} />
                    <Button text={"Send"} type={"submit"} iconPosition={"right"} iconId={"arrow-right"} iconWidth={"30"} iconHeight={"26"}/>
                </StyledForm>
        </StyledContact>
    );
};

const StyledContact = styled.section`
  background-color: #334627;
  min-height: 50vh;
  display: flex;
  justify-content: space-around;
`

const Title = styled.h2`

`

const StyledForm = styled.form`
    
`