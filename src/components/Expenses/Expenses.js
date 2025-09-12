import React, { useState } from 'react';
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from './ExpenseFilter';
import ExpenseList from './ExpenseList';
import ExpenseChart from './ExpenseChart';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2023");
   const changeFilterHandler=(selectedYear)=>{
    setFilteredYear(selectedYear);

   }
   const filteredExpense = props.expenses.filter((expense) =>{
        return expense.date.getFullYear().toString()===filteredYear;
      })

  return (
    <Card className='expenses'>
      <ExpenseFilter onSelected={filteredYear} onChangeFilter={changeFilterHandler}/>
      <ExpenseChart onChartData={filteredExpense}/>
      <ExpenseList items={filteredExpense} />
    </Card>
  )
}

export default Expenses
