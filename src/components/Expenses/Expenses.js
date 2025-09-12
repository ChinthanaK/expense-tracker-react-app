import React, { useState } from 'react';
import "./Expenses.css";
import ExpenseItem from './ExpenseItem';
import Card from "../UI/Card";
import ExpenseFilter from './ExpenseFilter';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2023");
   const changeFilterHandler=(selectedYear)=>{
    setFilteredYear(selectedYear);

   }
   const filteredExpense = props.expenses.filter((expense) =>{
        return expense.date.getFullYear().toString()===filteredYear;
      })

      let expenseContent = <p>No expenses found</p>
      
       if(filteredExpense.length===1){
      expenseContent = filteredExpense.map((expense) => {
        return (
          <React.Fragment key={expense.id}>
            <ExpenseItem key={expense.id} date={expense.date} title={expense.title} price={expense.price} location={expense.location} ></ExpenseItem>  
            <p>Only one expense found. Please add more</p>
          </React.Fragment>
        )
      })
    }
   
    if(filteredExpense.length >1){
      expenseContent = filteredExpense.map((expense) =>(
        <ExpenseItem key={expense.id} date={expense.date} title={expense.title} price={expense.price} location={expense.location} ></ExpenseItem>  
      ))
    }
    
  return (
    <Card className='expenses'>
    <ExpenseFilter onSelected={filteredYear} onChangeFilter={changeFilterHandler}/>
    {expenseContent}

     
    </Card>
  )
}

export default Expenses
