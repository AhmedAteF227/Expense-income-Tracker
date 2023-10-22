import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { addTransactionState } from "../atoms/atomsTracker";
import Swal from "sweetalert2";

export default function AddNewTransaction() {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const [addTransaction, setAddTransaction] =
    useRecoilState(addTransactionState);

  const handleForm = (e) => {
    e.preventDefault();

    if (
      typeof text === "string" &&
      text &&
      typeof Number(amount) === "number"
    ) {
      setAddTransaction([
        ...addTransaction,
        {
          id: getId(),
          text: text,
          amount: amount,
        },
      ]);
      setText("");
      setAmount(0);
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Write text and amount correctly!",
      });
    }
  };
  return (
    <div className="add">
      <h3>Add new transaction</h3>
      <form onSubmit={handleForm}>
        <label htmlFor="text-input">Text</label>
        <input
          id="text-input"
          type="text"
          placeholder="Enter text...."
          autoFocus
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <label htmlFor="amount-input">
          Amount <br />
          (negative : expense, positive : income)
        </label>
        <input
          id="amount-input"
          type="number"
          placeholder="Enter amount...."
          value={amount}
          onChange={(e) => {
            setAmount(e.target.value);
          }}
        />
        <button>Add Transaction</button>
      </form>
    </div>
  );
}

let id = 0;
function getId() {
  return id++;
}
