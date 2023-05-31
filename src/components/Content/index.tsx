import { ReactNode } from "react";
import { Container } from "./style";

interface IpropsContent{
    children?: ReactNode;
}

export function Content( {children} : IpropsContent ){
    return(
        <Container>
            {children}
        </Container>
    )
}