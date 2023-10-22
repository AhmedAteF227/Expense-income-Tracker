import { atom, selector } from "recoil";

export const addTransactionState = atom({
  key: "addTransactionState",
  default: [],
});

export const expensesIncomeState = selector({
  key: "expenseIncomeState",
  get: ({ get }) => {
    const transactionList = get(addTransactionState);
    let expense = 0;
    let income = 0;
    let total = 0;
    for (let i = 0; i < transactionList.length; i++) {
      total += +transactionList[i].amount;
      if (transactionList[i].amount >= 0) {
        income += +transactionList[i].amount;
      } else {
        expense += Number(transactionList[i].amount);
      }
    }

    return {
      expense,
      income,
      total,
    };
  },
});
