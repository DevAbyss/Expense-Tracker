import React, { useContext } from 'react';

import { GlobalContext } from '../context/GlobalStates';

const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0);

  return (
    <>
      <h4>수익 금액</h4>
      <h1 id='balance'>${total}</h1>
    </>
  );
};

export default Balance;
