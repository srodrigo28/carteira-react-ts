import styled from "styled-components";

interface IContainerPrpos{ color: string; }
interface ITagProps{ color: string; }

export const Container = styled.li<IContainerPrpos>`
    background-color: ${props => props.color};
    list-style: none;  
    border-radius: 5px;
    margin: 10px 0; 
    padding: 12px 10px;
    
    cursor: pointer; 
    transition: .5s;
    position: relative;

    > div{
        display: flex; 
        justify-content: space-between;
    }

    &:hover{ 
        opacity: .7; 
        transform: translateX(20px);
    }
`;

export const Tag = styled.div<ITagProps>`
    width: 10px;
    height: 60%;
    position: absolute;

    background-color: ${props => props.color};
    
`;