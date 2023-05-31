import { ContentHeader } from "../../components/ContentHeader";
import { SelectInput } from "../../components/SelectInput";
import { Container } from "./style";

export function List(){
    const contas = [
        {value: "Energia", label: "R$ 200"},
        {value: "Carro", label: "R$ 800"},
    ]
    return(
        <Container>
            <ContentHeader title="Saídas" lineColor="#FFFF33 ">
                <SelectInput options={contas} />
            </ContentHeader>
        </Container>
    )
}