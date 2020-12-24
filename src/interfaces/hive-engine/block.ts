import { ITransaction } from "./transaction";

export interface IBlock {
  _id: number;
  blockNumber: number;
  refHiveBlockNumber: number;
  refHiveBlockId: string;
  prevRefHiveBlockId: string;
  previousHash: string;
  previousDatabaseHash: string;
  timestamp: Date;
  transactions: ITransaction[];
  virtualTransactions: any[];
  hash: string;
  databaseHash: string;
  merkleRoot: string;
  round?: any;
  roundHash: string;
  witness: string;
  signingKey: string;
  roundSignature: string;
}