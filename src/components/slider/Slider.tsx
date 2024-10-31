import styled from "styled-components";
import React from 'react';
import {Icon} from "../icon/Icon";

export const Slider = () => {
    return (
        <StyledSlider>
            <Slide>
                <Image src="#" alt="client photo"/>
                <Quote>“</Quote>
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a,
                    mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
                    interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class
                    aptent taciti sociosqu ad litora torquent</Text>
            </Slide>
            <Pagination>
                <Icon iconId={"arrow-left"} />
                <Icon iconId={"arrow-right"} />
            </Pagination>
        </StyledSlider>
    );
};


const StyledSlider = styled.div`
    border: 1px solid red;
    max-width: 700px;
`
const Slide = styled.div`
    
`

const Image = styled.img`

`

const Quote = styled.span`

`

const Text = styled.p`

`

const Pagination = styled.div`

`