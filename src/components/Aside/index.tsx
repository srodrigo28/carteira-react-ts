import { Container, ContainerMenu, Header, LogoImg, MenuItemLink, Title } from "./style";
import logoImg from "./../../assets/logo.svg"
import { MdDashboard, MdArrowDownward, MdArrowUpward, MdExitToApp } from "react-icons/md"

export function Aside(){
    return(
        <Container>
            <Header>
                <LogoImg src={logoImg} alt="logo do aplicativo" />
                <Title>Minha Carteira</Title>
            </Header>
            <ContainerMenu>
                <MenuItemLink>
                 <MdDashboard /> Dashboard
                </MenuItemLink>
                <MenuItemLink>
                   <MdArrowUpward /> Entradas
                </MenuItemLink>
                <MenuItemLink>
                   <MdArrowDownward /> Saída
                </MenuItemLink>
                <MenuItemLink>
                   <MdExitToApp /> Saír
                </MenuItemLink>
            </ContainerMenu>
        </Container>
    )
}