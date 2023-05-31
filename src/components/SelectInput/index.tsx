import { Container } from "./style";

interface ISelectInputProps { // tipagem para uso
    options: {
        value: string | number;
        label: string | number;
    }[],
}
export function SelectInput( {options} : ISelectInputProps) {
    return(
        <Container>›
            <select>
                { options.map(option => (
                        <option
                            key={option.value}
                            value={option.value}>
                            {option.label}
                        </option>
                    ))
                }›
            </select>
        </Container>
)}