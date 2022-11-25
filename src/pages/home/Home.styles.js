import styled from "styled-components";
import bkg from "./images/Background.png";

export const Body = styled.div`
    position: relative;
    width: 100%;
    height: 100%;

    background-color: #E5E5E5;
    background-image: url(${bkg});
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
`