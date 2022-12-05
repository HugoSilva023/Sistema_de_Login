import styled from "styled-components";

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr
`;

export const AreaLogo = styled.div`
    margin: 30px 0 40px 0;
`;

export const AreaLogout = styled.div`
    text-align: right;
    margin: 30px 0 40px 0;
`;

// Component LogoBook
export const LogoBook = styled.span`
    margin-left: 16px;
    font-size: 28px;
    color: ${props => props.theme.colors.black};

    @media (max-width: 535px) {
        margin-left: 8px;
    }
`;

export const Reception = styled.span`
    font-family: 'Heebo Regular';
    font-size: 12px;
    color: ${props => props.theme.colors.black};

    margin-right: 16px;

    @media (max-width: 610px) {
        display: none;
    }
`;

export const Name = styled.span`
    font-weight: bold;
`;

// Component LogoutButton
export const LogoutButton = styled.button`
    background: none;
    border-radius: 100%;
    border: 1px solid rgba(51, 51, 51, 0.2);
    transform: matrix(1, 0, 0, 1, 0, 0);
    margin-right: 2rem;
`;

// Component IconBack
export const IconBack = styled.img`
    width: 5.5px;
    height: 14px;
    margin-bottom: 0.3rem;
`;

// Component IconRight
export const IconRight = styled.img`
    margin-bottom: 0.3rem;
`;