import * as apiService from './api-service';
import config from '../config';
import { ILatestTransactions, ITransaction } from 'interfaces/hive-engine/transaction';
import { IBlock } from 'interfaces/hive-engine/block';

export async function getLatestTransactions(): Promise<ILatestTransactions> {
  let transactions: ITransaction[];
  let blockNumber;

  await apiService.post({
    url: `${config.hiveEngineRpcConfig}/blockchain`,
    body: {
      method: "getLatestBlockInfo",
      id: 1605794849224
    }
  })
    .then((data) => {
      blockNumber = data.blockNumber;
      transactions = data.transactions;
      return {
        blockNumber,
        transactions
      };
    })
    .then(async (data) => {
    let nextTrx: ITransaction[];
      for (let i = 0; i < 5; i++) {
        const nextTrx = (await getBlock(data.blockNumber)).transactions;
        if (nextTrx.length) {
          transactions.push(...nextTrx);
        }
      }
      console.log(transactions);
      return nextTrx;
    })
    .catch(() => {
      return {};
    })
  return {
    transactions
  };
};

export async function getBlock(blockNumber: number): Promise<IBlock> {
  let block: IBlock;

  await apiService.post({
    url: `${config.hiveEngineRpcConfig}/blockchain`,
    body: {
      method: "getBlockInfo",
      id: 1605787842691,
      params: {
        "blockNumber": blockNumber
      }
    }
  })
    .then((data) => {
      block = data;
      return block;
    })
    .catch(() => {
      return {};
    })
  return block;
};