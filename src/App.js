import "./App.css";
import AddNewTransaction from "./components/AddNewTransaction";
import Balance from "./components/Balance";
import History from "./components/History";
import IncomeExpense from "./components/IncomeExpense";

function App() {
  return (
    <div className="App">
      <h2>Expense Tracker</h2>
      <div className="container">
        <Balance />
        <IncomeExpense />
        <History />
        <AddNewTransaction />
      </div>
    </div>
  );
}

export default App;
