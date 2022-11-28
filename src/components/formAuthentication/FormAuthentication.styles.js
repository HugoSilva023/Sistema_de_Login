import styled from "styled-components";
import Light from "../../fonts_heebo/Heebo-Light.ttf"
import Medium from "../../fonts_heebo/Heebo-Medium.ttf"

// Component Global - Fonts Heebo
export const Global = styled.div`
    @font-face {
    font-family: 'Heebo Light';
    src: url(${Light}) format('truetype');
    }

    @font-face {
        font-family: 'Heebo Medium';
        src: url(${Medium}) format('truetype');
    }
`

export const BoxLogo = styled.div `
    margin-top: 273px;
`

export const Book = styled.span `
    position: absolute;
    margin-left: 16px;
    top: 268px;

    font-size: 28px;
    color: ${props => props.theme.colors.white};
`

export const BoxEmail = styled.div `
    margin-top: 39px;
`

export const Box = styled.div `
    background: rgba(0, 0, 0, 0.32);
    border-radius: 4px;
    backdrop-filter: blur(1px);
    color: ${props => props.theme.colors.white};
    font-family: 'Heebo Light';
    font-style: normal;
    font-weight: 400;
`

export const Input = styled.input `
    background: none;
    color: ${props => props.theme.colors.white};
    border: none;
`

export const TitleBox = styled.p `
    line-height: 16px;
    padding-top: 8px;
    padding-left: 16px;

    opacity: 0.5;
`

export const InputBox = styled.div `
    padding-top: 4px;
    padding-left: 16px;
    padding-bottom: 8px;
`

export const BoxPassword = styled.div `
    padding-top: 16px;
`

export const Button = styled.button`
    position: sticky;
    color: ${props => props.theme.colors.white};
    border-radius: 44px;
    border: none;
    padding: 8px 20px;
    margin-left: 90px;
    top: -20px;

    font-family: 'Heebo Medium';
    font-size: 16px;
    line-height: 20px; 
    color: ${props => props.theme.colors.pinkDark};
`

export const MsgBox = styled.div `
    display: inline-block;
    margin-top: 24px;
    border-radius: 4px;

    background: rgba(255, 255, 255, 0.4);
`

export const Msg = styled.span ` 
    padding: 16px 16px 0 16px;
    font-family: 'Heebo Medium';
    font-weight: 700;
    font-size: 16px;
    line-height: 16px;
    color: ${props => props.theme.colors.white};
`