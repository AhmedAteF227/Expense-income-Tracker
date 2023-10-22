import React from "react";
import { useRecoilValue } from "recoil";
import { expensesIncomeState } from "../atoms/atomsTracker";

export default function () {
  const { income, expense } = useRecoilValue(expensesIncomeState);
  return (
    <div className="income-expense-container">
      <div>
        <h4>income</h4>
        <p id="moneyPlus" className="money plus">
          ${income}
        </p>
      </div>
      <div>
        <h4>expense</h4>
        <p id="moneyMinus" className="money minus">
          ${expense}
        </p>
      </div>
    </div>
  );
}
