import styled from "styled-components";

interface ITitleContainerProps{
    lineColor: string;
}
export const Container = styled.div`
    grid-area: CT;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 25px;
`;
export const TitleContainer = styled.div<ITitleContainerProps>`
    font-size: .7em;
    > h1 {
        color: ${ props => props.theme.colors.white };
    }
    &::after{
        content: '';
        display: block;
        width: 60px;
        border-bottom: 10px solid ${props => props.lineColor};
    }
`
export const Controllers = styled.div`
    display: flex;
    gap: 10px;
`