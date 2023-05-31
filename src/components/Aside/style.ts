import styled from "styled-components";

export const Container = styled.div`
    grid-area: AS;

    color: ${ props => props.theme.colors.white }; 
    background-color: ${ props => props.theme.colors.secondary};
`;

export const Header = styled.header`
    height: 70px;
    display: flex;
    align-items: center;
`;

export const LogoImg = styled.img`
    height: 40px;
    width: 40px;
`;

export const Title = styled.h3`
    color: ${props => props.theme.colors.white};
    margin-left: 10px;
`;

export const ContainerMenu = styled.nav`
    gap: 10px;
    padding-left: 20px;
    display: flex;
    align-items: start;
    flex-direction: column;
    justify-content: center;
    margin-top: 50px;
`;

export const MenuItemLink = styled.a`
    display: flex;
    align-items: center;
    color: ${props => props.theme.colors.info};
    text-decoration: none;
    transition: .5s;

    > svg {
        font-size: 1.2em;
        margin-right: 7px;
    }

    &:hover {
        opacity: .7;
        font-size: 1.2em;
    }
    
    cursor: pointer;
`;