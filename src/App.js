import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
function App() {
   const expenses = [
    { id: "1", date: new Date(2023, 7, 15), title: "Insurance", price: 100 },
    { id: "2", date: new Date(2023, 3, 25), title: "Book", price: 10 },
    { id: "3", date: new Date(2024, 10, 11), title: "Pen", price: 1 },
    { id: "4", date: new Date(2025, 1, 6), title: "Laptop", price: 200 },
  ]
  
  const [addExpenses, setAddExpenses] = useState(expenses);
  const ExpenseDataFromAppHandler = (userEnteredData) =>{
    setAddExpenses((prevExpenses) =>{
      return [
        ...prevExpenses,
        userEnteredData
      ]
    })
  }
  return (
    <div className="App">
      <NewExpense onExpenseDataFromApp = {ExpenseDataFromAppHandler}/>
      <Expenses  expenses={addExpenses}/>
    </div>
  );
}

export default App;


