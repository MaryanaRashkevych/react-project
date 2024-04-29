import TransactionHistory from "./TransactionHistory";
import css from "./TransactionData.module.css";


export default function TransactionItem({ items }){
    return(
        <div>
        {items.map((item)=> (
            <TransactionHistory key={item.id} items={item}/>
        ))}
        </div>
    )
}