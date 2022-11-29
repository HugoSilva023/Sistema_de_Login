import styled from "styled-components";
import * as Dialog from '@radix-ui/react-dialog';

import Regular from "../../fonts_heebo/Heebo-Regular.ttf"
import Medium from "../../fonts_heebo/Heebo-Medium.ttf"

// styles-components
// Component Global - Fonts Heebo
export const Global = styled.div`
    @font-face {
    font-family: 'Heebo Regular';
    src: url(${Regular}) format('truetype');
    }

    @font-face {
        font-family: 'Heebo Medium';
        src: url(${Medium}) format('truetype');
    }
`

// Component Card
export const Card = styled.button`
/*   width: 100%; */
    height: 160px;
    background: #FFFFFF;
    box-shadow: 0px 6px 24px rgba(84, 16, 95, 0.13);
    border-radius: 4px;
    border-color: #FFFFFF;
    border-style: none;
    text-align: left;
`;

// Component Title
export const Title = styled.span`
    font-family: 'Heebo Medium';
    font-size: 14px;
    line-height: 20px;
    color: ${props => props.theme.colors.black};
`;

// Component Author
export const Author = styled.span`
    font-family: 'Heebo Regular';
    font-size: 12px;
    line-height: 20px;
    color: ${props => props.theme.colors.pink40};
`;

// Components Details
export const Details = styled.span`
    font-family: 'Heebo Regular';
    font-size: 12px;
    line-height: 20px;
    color: ${props => props.theme.colors.grey};
`;

export const Grid = styled.div`
 display: grid;
 gap: 16px;
 grid-template-columns: repeat(auto-fit, 272px);
`

export const DialogDescription = styled(Dialog.Description)`
margin: 10px 0 20px;
color: violet;
font-size: 15px;
line-height: 1.5;
`