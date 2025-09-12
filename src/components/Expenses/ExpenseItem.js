import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";

const ExpenseItem = (props)=>{
    //const expenseTitle = props.title;
    const expensePrice = props.price;
    
    return(
        <Card className="expense-item">
           <ExpenseDate date={props.date} />
           <div className="expense-item__description">
            <h2>{props.title}</h2>
           </div>
           <div className="expense-item__price">${expensePrice}</div>
        </Card>
    )
}

export default ExpenseItem;