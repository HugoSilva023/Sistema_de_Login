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

export const DialogOverlay = styled(Dialog.Overlay) `
    background-color: rgba(128, 128, 128, 0.644);
    position: fixed;
    inset: 0;
    animation: overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1);
`

export const DialogContent = styled(Dialog.Content)`
    background-color: white;
    border-radius: 4px;
    box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
    position: fixed;
    overflow: scroll;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
//    width: 100%;
    height: 608px;
    margin: 16px 0;
//    max-width: 1080px;
//    max-height: 85vh;
    padding: 25px;
    animation: contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1);
`
// Grid do Modal
export const DialogDescription = styled(Dialog.Description)`
    margin: 10px 0 20px;
    color: violet;
    font-size: 15px;
    line-height: 1.5;
`

export const DialogClose = styled(Dialog.Close)`
    border-radius: 100%;
    border: none;
    padding: 0 8px;
    position: fixed;
    top: 16px;
    right: 17px;
`

export const ModalGrid = styled.div`
    display: grid;
    gap: 50px;
    grid-template-columns: 1fr 1fr;

    @media (max-width: 860px) {
        display: block;
    }
`

export const ModalGridImage = styled.div`
    width: 100%;
`
export const ModalGridDescription = styled.div`
    width: 100%;
`

export const ModalImg = styled.img`
    width: 100%;
    object-fit: cover;
    max-height: 100%;
    margin-bottom: 24px;
    filter: drop-shadow(0px 12px 18px rgba(0, 0, 0, 0.3));
`

export const ModalTitle = styled.div`
    width: 276px;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    font-family: 'Heebo Medium';
    font-size: 28px;
    color: ${props => props.theme.colors.black};
`

export const ModalAuthor = styled.div`
    width: 276px;
    height: 20px;

    font-family: 'Heebo Regular';
    font-size: 12px;
    /* identical to box height, or 167% */
    color: ${props => props.theme.colors.pink40};
`

export const ModalResenhaTitle = styled.div`
    font-family: 'Heebo Medium';
    font-size: 12px;
    line-height: 20px;
    text-transform: uppercase;
    color: ${props => props.theme.colors.black};
`

export const ModalResenhaContent = styled.div`
    font-family: 'Heebo Regular';
    font-size: 12px;
    line-height: 20px;
    color: ${props => props.theme.colors.grey};
`