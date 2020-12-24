import { ITransaction } from 'interfaces/hive-engine/transaction';
import React from 'react';
import { TransactionsListItem } from './TransactionslListItem';

type Props = {
  transactions: ITransaction[];
}

export const TransactionsList = ({ transactions }: Props) => {
  const renderTransactions = transactions.map(transaction => (
    <TransactionsListItem
      transaction={transaction}
      key={Math.random()}
    />
  ));
  return (<div>
    {renderTransactions}
  </div>
  )
};