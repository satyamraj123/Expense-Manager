import "./Expenses.css";
import Card from "./Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
function Expenses(props) {
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          year={props.year}
          onYearChange={props.onYearChange}
        ></ExpensesFilter>
        <ExpensesChart expenses={props.expenses}></ExpensesChart>
        <ExpensesList expenses={props.expenses}></ExpensesList>
      </Card>
    </div>
  );
}

export default Expenses;
