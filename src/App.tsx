import { ThemeProvider } from "styled-components";
import { Layout } from "./components/Layout";
import dark from "./style/theme/dark";
import { List } from "./page/List";

export function App(){
    return(
       <ThemeProvider theme={dark}>
        <Layout>
            <List/>
        </Layout>
       </ThemeProvider>
    )
}