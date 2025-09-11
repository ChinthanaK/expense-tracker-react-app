import "./ExpenseForm.css";
import { useState } from "react";

const initialData={
  enteredTitle:"",
  enteredAmount:"",
  enteredDate:""
}
const ExpenseForm = () => {
  const [userInput, setUserInput] = useState(initialData);

  function titleChangeHandler(event){
    setUserInput((prevState) =>{
      return{
        ...prevState,
        enteredTitle:event.target.value,
      }
    });
  }
  function amountChangeHandler(event){
    setUserInput((prevState) =>{
      return{
        ...prevState,
        enteredAmount:event.target.value,
      }
    });
  }

  function dateChangeHandler(event){
    setUserInput((prevState) =>{
      return{
        ...prevState,
        enteredDate:event.target.value,
      }
    });
  }
  return (
    <form>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label htmlFor='title'>Title</label>
          <input id='title' type='text' onChange={titleChangeHandler}/>
        </div>
        <div className='new-expense__control'>
          <label htmlFor='amount'>Amount</label>
          <input id='amount' type='number' onChange={amountChangeHandler}/>
        </div>
        <div className='new-expense__control'>
          <label htmlFor='date'>Date</label>
          <input id='date' type='date' min="2023-01-01" max="2024-12-31" onChange={dateChangeHandler}/>
        </div>
        <div className='new-expense__action'>
          <button type='submit'>Add Expense</button>
        </div>
      </div>
    </form>
  )
}

export default ExpenseForm
