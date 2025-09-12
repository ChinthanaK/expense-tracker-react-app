import Chart from "../Chart/Chart"
const ExpenseChart = (props) => {
   
  return (
    <div >
        <Chart chartExpenses={props.onChartData}/>
    </div>
  )
}

export default ExpenseChart
