import { Container, Tag } from "./style";

interface IHistoryFinanceCardPros{
    tagColor: string;
    title: string;
    subtitle: string;
    amount: string;
}

export function HistoryFinanceCard( 
    {tagColor, title, subtitle, amount} 
    : IHistoryFinanceCardPros){
    
    return(
        <Container>
            <Tag color={tagColor} />

            <div className="info">
                <span>{title}</span>
                <small>{subtitle}</small>
            </div>
            <h3>{amount}</h3>
        </Container>
    )
}