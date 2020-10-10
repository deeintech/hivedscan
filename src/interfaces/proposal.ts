export interface IProposal {
  id: number;
  proposal_id: number;
  creator: string;
  receiver: string;
  start_date: Date;
  end_date: Date;
  daily_pay: IDailyPay;
  subject: string;
  permlink: string;
  total_votes: number;
  status: string;
}

export interface IDailyPay {
  amount: string;
  precision: number;
  nai: string;
}

export interface IProposalsResult {
  proposals: IProposal[];
  returnProposal: IProposal;
}