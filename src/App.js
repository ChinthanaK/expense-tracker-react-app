import ExpenseItem from "./components/ExpenseItem";
function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <ExpenseItem date={new Date(2023, 7, 15)} title="pen" price="5" location="Bangalore"  ></ExpenseItem>
      
    </div>
  );
}

export default App;
