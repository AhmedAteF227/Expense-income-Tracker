import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { addTransactionState } from "../atoms/atomsTracker";

export default function History() {
  const [transaction, setTransaction] = useRecoilState(addTransactionState);

  const handleDelete = (item) => {
    setTransaction(removeItemAtIndex(item.id, transaction));
  };

  return (
    <div className="history">
      <h3>History</h3>
      <ul>
        {transaction.map((item) => {
          return (
            <li
              key={item.id}
              style={{
                borderRight: `5px solid ${
                  item.amount >= 0 ? "#2ecc71" : "#c0392b"
                }`,
              }}
            >
              <span id="text">{item.text}</span>
              <span id="amount">{item.amount}</span>
              <button onClick={() => handleDelete(item)}>X</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function removeItemAtIndex(index, arr) {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}
