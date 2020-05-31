import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import IncomeTransaction from '../components/IncomeTransaction';

//store
const initialState = {
  incomeTransactions: [
    { id: 1, incomeText: 'Car-sold', incomeAmount: 15000 },
    { id: 2, incomeText: 'Salary', incomeAmount: 5000 },
    { id: 3, incomeText: 'Bonus', incomeAmount: 15000 }
  ],
  expenseTransactions: [
    { id: 1, expenseText: 'Rent', expenseAmount: 100 },
    { id: 2, expenseText: 'Electicity', expenseAmount: 1500 },
    { id: 3, expenseText: 'Private Jet', expenseAmount: 100000 }
  ]
};

//creating context
export const GlobalContext = createContext(initialState);

export const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const addIncome = incomeTransaction => {
    dispatch({
      type: 'ADD_INCOME',
      payload: incomeTransaction
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        incomeTransactions: state.incomeTransactions,
        expenseTransactions: state.expenseTransactions,
        addIncome
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
