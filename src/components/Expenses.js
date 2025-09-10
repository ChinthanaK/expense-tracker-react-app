import React from 'react';
import "./Expenses.css";
import ExpenseItem from './ExpenseItem';

const Expenses = (props) => {
   
  return (
    <div>
      {props.expenses.map((expense) => (
         <ExpenseItem key={expense.id} date={expense.date} title={expense.title} price={expense.price} location={expense.location} ></ExpenseItem>  
      ))} 
    </div>
  )
}

export default Expenses
