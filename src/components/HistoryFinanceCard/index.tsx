import { Container } from "./style";

interface IHistoryFinanceCardPros{
    cardColor: string;
    tagColor: string;
    title: string;
    subtitle: string;
    amount: string;
}

export function HistoryFinanceCard( 
    {cardColor, tagColor, title, subtitle, amount} 
    : IHistoryFinanceCardPros){
    return(
        <Container>
            <h1>HistoryFinanceCard</h1>
            
            {cardColor} {tagColor}
            {title} {subtitle}
            {amount}
        </Container>
    )
}