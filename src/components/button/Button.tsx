import React from 'react';
import styled from "styled-components";
import {Icon} from "../icon/Icon";

type ButtonTypes = {
    type?: "button" | "submit" | "reset"
    iconId?: string
    iconWidth?: string
    iconHeight?: string
    iconPosition?: "left" | "right"
    text: string
}

export const Button = (props: ButtonTypes) => {
    return (
        <StyledButton type={props.type || "button"}>
            {props.text}
            {props.iconId ? <Icon iconId={props.iconId} height={props.iconHeight} width={props.iconWidth}/> : ''}
        </StyledButton>
    );
};

const StyledButton = styled.button`
    
`

