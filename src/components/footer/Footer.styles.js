import styled from "styled-components";

// Component Footer
export const Footer = styled.span`
    position: absolute;
    right: 8rem;
`;

// Component PageControl
export const PageControl = styled.button`
    border: 1px solid rgba(51, 51, 51, 0.2);
    border-radius: 100%;
    transform: ${(props) => props.transform};
    background: none;
`;

// Component IconsKeys
export const IconsKeys = styled.img`
    width: 5.5px;
    height: 14px;
    margin-bottom: 0.3rem;
`;