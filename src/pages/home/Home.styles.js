import styled from "styled-components";
import bkg from "./images/Background.png";

export const Body = styled.div`
    border: 0;
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;

    background-color: #E5E5E5;
    background-image: url(${bkg});
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
`

export const Cards = styled.span`
    position: relative;
    top: 120px;
    left: 115px;
    max-width: 1280px;
`