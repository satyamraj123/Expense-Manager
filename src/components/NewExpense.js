import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import react,{useState} from 'react';
function NewExpense(props){
    const [showForm,setShowForm]=useState(false);
    const onAddNewExpenseHandler=(expenseData)=>{
        const data={
            ...expenseData,
            id: Math.random().toString()
        }
        props.onAddNewExpense(data);
    }
    const toggleShowForm=()=>{
        setShowForm((prvBool)=>{
            return !prvBool;
        });
    }
    return showForm===true?
    (<div className='new-expense'>
        <ExpenseForm onCancel={toggleShowForm} onAddNewExpense={onAddNewExpenseHandler}></ExpenseForm>
    </div>):(<div className='new-expense'><button onClick={toggleShowForm}>Add New Expense</button></div>);
}

export default NewExpense;