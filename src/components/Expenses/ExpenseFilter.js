import React from 'react'

const ExpenseFilter = (props) => {
    const dropdownChangeFilter =(event) =>{
        props.onChangeFilter(event.target.value);
    }
  return (
    <div className='expenses-filter'>
        <div className='expenses-filter__control'>
            <label htmlFor="dropdown">Filter by year</label>
            <select name="" id="dropdown" value={props.onSelected} onChange={dropdownChangeFilter}>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
            </select>
        </div>
    </div>
  )
}

export default ExpenseFilter
