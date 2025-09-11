import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState(0);
  const [enteredDate, setEnteredDate] = useState("");

  function titleChangeHandler(event){
    setEnteredTitle(event.target.value);
  }
  function amountChangeHandler(event){
    setEnteredAmount(event.target.value);
  }

  function dateChangeHandler(event){
    setEnteredDate(event.target.value);
  }
  const formSubmitHandler = (event) =>{
    event.preventDefault();
    const submitData = {
      title:enteredTitle,
      amount:enteredAmount,
      date:new Date(enteredDate)
    }
    console.log(submitData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("")
  }
  return (
    <form onSubmit={formSubmitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label htmlFor='title'>Title</label>
          <input id='title' type='text' onChange={titleChangeHandler} value={enteredTitle}/>
        </div>
        <div className='new-expense__control'>
          <label htmlFor='amount'>Amount</label>
          <input id='amount' type='number' onChange={amountChangeHandler} value={enteredAmount}/>
        </div>
        <div className='new-expense__control'>
          <label htmlFor='date'>Date</label>
          <input id='date' type='date' min="2023-01-01" max="2024-12-31" onChange={dateChangeHandler} value={enteredDate}/>
        </div>
        <div className='new-expense__action'>
          <button type='submit'>Add Expense</button>
        </div>
      </div>
    </form>
  )
}

export default ExpenseForm
