import { ReactNode } from "react";
import { Aside } from "../Aside";
import { Content } from "../Content";
import { MainHeader } from "../MainHeader";
import { Grid } from "./style";

interface IpropsContentLayout{
    children?: ReactNode;
}

export function Layout( {children} : IpropsContentLayout ){
    return(
        <Grid>
            <MainHeader />
            <Aside />
            <Content>
                {children}
            </Content>
        </Grid>
    )
}