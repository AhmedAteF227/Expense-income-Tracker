import React from "react";
import { useRecoilValue } from "recoil";
import { expensesIncomeState } from "../atoms/atomsTracker";

export default function Balance() {
  const { total } = useRecoilValue(expensesIncomeState);

  return (
    <>
      <h4>Your balance</h4>
      <h2 id="balance" className="money">
        ${total}
      </h2>
    </>
  );
}
