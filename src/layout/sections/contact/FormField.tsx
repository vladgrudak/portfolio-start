import React from 'react';
import styled from "styled-components";

type FormFiledTypes = {
    fieldTitle: string
    fieldInputType?: string
}
export const FormField = (props: FormFiledTypes) => {
    return (
        <StyledFormField>
            <InputHeader>{props.fieldTitle}</InputHeader>
            <Input type={props.fieldInputType || "text"}/>
        </StyledFormField>
    );
};

const StyledFormField = styled.div`

`

const InputHeader = styled.h3`
    
`

const Input = styled.input`

`