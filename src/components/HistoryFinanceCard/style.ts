import styled from "styled-components";

interface ITagProps{ 
    color: string; 
}

export const Container = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin: 10px 0;
    padding: 12px;
    border-radius: 5px;
    background-color: ${props => props.theme.colors.tertiary};

    cursor: pointer;
    transition: all 1s;
    position: relative;
    
    > div {
        gap: 5px;
        display: flex;
        flex-direction: column;
        padding-left: 10px;
    }

    &:hover{
        opacity: .7;
        transform: translateX(10px);
    }
`;

export const Tag = styled.div<ITagProps>`
    background-color: ${props => props.color};
    width: 15px;
    height: 60px;
    position: absolute;
    margin-left: -12px;
    border-radius: 10px;
`;