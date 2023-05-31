import { Container, Controllers, TitleContainer } from "./style";

interface IContentHeaderProps {
    title: string;
    lineColor: string;
    children: React.ReactNode;
}
export function ContentHeader( 
    { title, lineColor, children } : IContentHeaderProps ){   
    return(
        <Container >
            <TitleContainer lineColor={lineColor}>
                <h1>{title}</h1>
            </TitleContainer>
            <Controllers>
                {children}
            </Controllers>
        </Container>
    )
}