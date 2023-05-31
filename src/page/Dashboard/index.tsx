import { ContentHeader } from "../../components/ContentHeader";
import { SelectInput } from "../../components/SelectInput";
import { Container } from "./style";

export function Dashboard(){
    const ano = [
        {value: '2022', label: '2022' },
        {value: '2023', label: '2023' },
    ];
    const mes = [
        {value: 'Janeiro',   label: 'Janeiro' },
        {value: 'Fevereiro', label: 'Fevereiro' },
    ];
    return(
        <Container>
            <ContentHeader title="Dashbord" lineColor="	#00ff00">
                <SelectInput options={mes} />
                <SelectInput options={ano} />
            </ContentHeader>
        </Container>
    )
}