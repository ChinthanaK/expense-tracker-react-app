import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "./Card";
import { useState } from "react";


const ExpenseItem = (props)=>{
    //const expenseTitle = props.title;
    const expensePrice = props.price;
    const expenseLocation = props.location;
    const [title, setTitle] = useState(props.title);
    function buttonClickHandler(){   
        setTitle("new title")
    }
    return(
        <Card className="expense-item">
           <ExpenseDate date={props.date} />
           <div className="expense-item__description">
            <h2>{title}</h2>
           </div>
           <div className="expense-item__price">${expensePrice}</div>
           <div className="expense-item__location">{expenseLocation}</div>
           <button onClick={buttonClickHandler}>Change Title</button>
        </Card>
    )
}

export default ExpenseItem;