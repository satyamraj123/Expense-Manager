//import ExpenseItem from "./components/ExpenseItem";
import react,{useState} from "react";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense";
const dummyExpenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses,setExpenses]=useState(dummyExpenses);
  const [year,setYear]=useState('2020');
  const addNewExpenseHandler=(expense)=>{
    console.log(expense);
    setExpenses((prvExpenses)=>{
      return [expense,...prvExpenses];
    });
    //expenses.push(data);
  }
  const onYearChangeHandler = (data) => {
    console.log(data);
    setYear(data);
  };
  
    let filteredExpenses= expenses.filter((expense)=>{
      return expense.date.getFullYear()==year;
    });
  
  return (
    <div>
      <NewExpense onAddNewExpense={addNewExpenseHandler}></NewExpense>
      <Expenses year={year} onYearChange={onYearChangeHandler} expenses={filteredExpenses}></Expenses>
    </div>
  );
}

export default App;
