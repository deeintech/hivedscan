import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'app/store/rootReducer';
import AppError from 'components/Error';
import { fetchTransactions } from './transactionsListSlice';
import Skeleton from 'react-loading-skeleton';
import { TransactionsList } from './TransactionsList';

export const TransactionsListPage = () => {
  const dispatch = useDispatch();

  const {
    transactions,
    transactionsError,
    isLoading
  } = useSelector((state: RootState) => state.latestHeTransactions);

  useEffect(() => {
    dispatch(fetchTransactions());
  }, [dispatch]);

  if (transactionsError) {
    return (
      <AppError />
    );
  };

  const renderTransactions = isLoading ? (
    <Skeleton count={5} height={30} duration={3} />
  ) : (
      <div>
        <TransactionsList
          transactions={transactions}
        />
      </div>
    );

  return (
    <div className="mt-3">
      {renderTransactions}
    </div>
  );
}
