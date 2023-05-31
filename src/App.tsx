import { ThemeProvider } from "styled-components";
import { Layout } from "./components/Layout";
import dark from "./style/theme/dark";
import { Dashboard } from "./page/Dashboard";

export function App(){
    return(
       <ThemeProvider theme={dark}>
        <Layout>
            <Dashboard/>
        </Layout>
       </ThemeProvider>
    )
}