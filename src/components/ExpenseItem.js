import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";


function ExpenseItem(props){
   
   
    const expenseTitle = props.title;
    const expensePrice = props.price;
    const expenseLocation = props.location;
    return(
        <div className="expense-item">
           <ExpenseDate date={props.date} />
           <div className="expense-item__description">
            <h2>{expenseTitle}</h2>
           </div>
           <div className="expense-item__price">${expensePrice}</div>
           <div className="expense-item__location">{expenseLocation}</div>
        </div>
    )
}

export default ExpenseItem;