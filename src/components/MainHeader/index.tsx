import { useMemo } from 'react'
import emojis from './../../utils/emojis'
import { Container, Profile, Welcome, UserName } from "./style";
import { Toggle } from '../Toggle';

export function MainHeader(){

    const emoji = useMemo(() => {
        const indice = Math.floor(Math.random() * emojis.length );
        return emojis[indice];
    }, []);
    return(
        <Container>
            <Toggle />
            <Profile>
                <Welcome>Olá, {emoji} </Welcome>
                <UserName>Sebastião Rodrigo</UserName>
            </Profile>
        </Container>
    )
}