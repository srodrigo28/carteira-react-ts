import { Container, ToggleLabel } from "./style";

export function Toggle(){

    return(
        <Container>
            <ToggleLabel>Light</ToggleLabel>
            <Switch 
                checked
                uncheckedIcon={false}
                checkedIcon={false}
                onChange={() => console.log('mudou')}
            />
            <ToggleLabel>Dark</ToggleLabel>
        </Container>
    )
}