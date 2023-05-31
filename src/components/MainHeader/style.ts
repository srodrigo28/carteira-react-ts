import styled from "styled-components";

export const Container = styled.div`
    grid-area: MH;

    color: ${ props => props.theme.colors.white };
    background-color: ${ props => props.theme.colors.secondary };

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 10px;
    border-bottom: 1px solid ${ props => props.theme.colors.gray};
`;
export const  Profile = styled.div``
export const  Welcome = styled.div``
export const UserName =styled.div``