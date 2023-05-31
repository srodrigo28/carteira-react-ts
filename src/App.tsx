import { ThemeProvider } from "styled-components";
import { Layout } from "./components/Layout";
import dark from "./style/theme/dark";

export function App(){
    return(
       <ThemeProvider theme={dark}>
        <Layout />
       </ThemeProvider>
    )
}