import "./ExpenseItem.css"
function ExpenseItem(props){
    const expenseDate = props.date.toDateString();
    const expenseTitle = props.title;
    const expensePrice = props.price;
    const expenseLocation = props.location;
    return(
        <div className="expense-item">
           <div>{expenseDate}</div>
           <div className="expense-item__description">
            <h2>{expenseTitle}</h2>
           </div>
           <div className="expense-item__price">${expensePrice}</div>
           <div className="expense-item__location">{expenseLocation}</div>
        </div>
    )
}

export default ExpenseItem;