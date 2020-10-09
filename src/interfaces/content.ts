export interface Content {
  id: number;
  author: string;
  permlink: string;
  category: string;
  parent_author: string;
  parent_permlink: string;
  title: string;
  body: string;
  json_metadata: string;
  last_update: Date;
  created: Date;
  active: Date;
  last_payout: Date;
  depth: number;
  children: number;
  net_rshares: number;
  abs_rshares: number;
  vote_rshares: number;
  children_abs_rshares: number;
  cashout_time: Date;
  max_cashout_time: Date;
  total_vote_weight: number;
  reward_weight: number;
  total_payout_value: string;
  curator_payout_value: string;
  author_rewards: number;
  net_votes: number;
  root_author: string;
  root_permlink: string;
  max_accepted_payout: string;
  percent_steem_dollars: number;
  allow_replies: boolean;
  allow_votes: boolean;
  allow_curation_rewards: boolean;
  beneficiaries: any[];
  url: string;
  root_title: string;
  pending_payout_value: string;
  total_pending_payout_value: string;
  active_votes: ActiveVote[];
  replies: any[];
  author_reputation: string;
  promoted: string;
  body_length: number;
  reblogged_by: any[];
}

export interface ActiveVote {
  voter: string;
  weight: number;
  rshares: any;
  percent: number;
  reputation: number;
  time: Date;
}

export interface ContentResult {
  id: number;
  author: string;
  body: string;
  created: Date;
  permlink: string;
  title: string;
}