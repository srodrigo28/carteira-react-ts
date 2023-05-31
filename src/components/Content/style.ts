import styled from "styled-components";

export const Container = styled.div`
    grid-area: CT;
    padding: 25px;
    color: ${ props => props.theme.colors.white };
    background-color: ${ props => props.theme.colors.primary};
`;