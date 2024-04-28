import TransactionHistory from "./TransactionHistory";
  

export default function TransactionItem({ items }){
    return(
        <div>
        {items.map((item)=> (
            <TransactionHistory key={item.id} items={item}/>
        ))}
        </div>
    )
}