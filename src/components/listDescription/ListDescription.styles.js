import styled from "styled-components";

export const ModalContainerInfo = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding-bottom: 32px;
//    margin-left: 220px;
`

export const ModalTags = styled.div`
    margin: 0;
    padding: 0;
    border: 0;

    font-family: 'Heebo Medium';
    font-size: 12px;
    text-align: left;
    color: ${props => props.theme.colors.black};

    & p {
        padding: 1px;
        border: 0;
        margin: 0;
    }
`

export const ModalInfos = styled.div`
    font-family: 'Heebo Regular';
    font-size: 12px;
    text-align: right;
    color: ${props => props.theme.colors.grey};
`