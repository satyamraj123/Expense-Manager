import "./ExpenseForm.css";
import react, { useState } from "react";
function ExpenseForm(props) {
  //single state management apprach
  // const [userInput, setUserInput] = useState({
  //   title:'',
  //   amount:'',
  //   date:'',
  // });
  // const titlechangeHandler=(event)=>{
  //   //setUserInput({...userInput,title:event.target.value});
  //   setUserInput((prvState)=>{
  //     return {...prvState,title:event.target.value};
  //   });
  // }
  // const datechangeHandler=(event)=>{
  //   setUserInput((prvState)=>{
  //     return {...prvState,date:event.target.value};
  //   });
  // }
  // const amountchangeHandler=(event)=>{
  //   setUserInput((prvState)=>{
  //     return {...prvState,amount:event.target.value};
  //   });
  // }

  //multiple states appraoch
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const titlechangeHandler = (event) => {
    setTitle(event.target.value);
  };
  const datechangeHandler = (event) => {
    setDate(event.target.value);
  };
  const amountchangeHandler = (event) => {
    setAmount(event.target.value);
  };

  const submitHandler = (event) => {
    //when submitting the form to prevent a browser reload/refresh
    event.preventDefault();
    const data = {
      title: title,
      amount: +amount,
      date: new Date(date),
    };
    //+ sign to represent that it is a num not string
    props.onAddNewExpense(data);
    setAmount('');
    setDate('');
    setTitle('');
    onCancelHandler();
  };

  const onCancelHandler=()=>{
    props.onCancel();
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            value={title}
            type="text"
            onChange={titlechangeHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={amount}
            onChange={amountchangeHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={date}
            min="2019-01-01"
            max="2022-12-31"
            onChange={datechangeHandler}
          ></input>
        </div>
      </div>
            <div className="new-expense__actions">
            <button onClick={onCancelHandler}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
