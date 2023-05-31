import { ContentHeader } from "../../components/ContentHeader";
import { HistoryFinanceCard } from "../../components/HistoryFinanceCard";
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
            <HistoryFinanceCard 
                cardColor={"#313862"} 
                tagColor={"#E44C4E"}
                subtitle={"20-05-2023"}
                title={"Conta de Luz"}
                amount={" R$ 180,00"}
            />
        </Container>
    )
}