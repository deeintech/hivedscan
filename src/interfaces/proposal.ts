export interface Proposal {
  id: number;
  proposal_id: number;
  creator: string;
  receiver: string;
  start_date: Date;
  end_date: Date;
  daily_pay: DailyPay;
  subject: string;
  permlink: string;
  total_votes: number;
  status: string;
}

export interface DailyPay {
  amount: string;
  precision: number;
  nai: string;
}

export interface ProposalsResult {
  proposals: Proposal[];
  returnProposal: Proposal;
}