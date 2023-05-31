import { Container, Tag } from "./style";

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
        <Container color={cardColor}>
            
            <Tag color={tagColor} />  
            
            <div>
                <span>{title}</span>
                <small>{subtitle}</small>
                <h3>{amount}</h3>
            </div>
            
        </Container>
    )
}