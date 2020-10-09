import * as apiService from './api-service';
import config from '../config';
import { ProposalsResult, Proposal } from 'interfaces/proposal';

export async function getProposals(limit: number): Promise<ProposalsResult> {
  let proposals: Proposal[] = [];
  let returnProposal: Proposal;

  await apiService.post({
    url: `${config.hiveConfig}`,
    body: {
      method: "database_api.list_proposals",
      id: 2,
      params: {
        start: [],
        limit: limit,
        order: "by_total_votes",
        order_direction: "ascending",
        status: "all"
      }
    }
  })
    .then((data) => {
      proposals = data.proposals;
      returnProposal = proposals.find(p => p.receiver === "steem.dao" && p.id === 0);
    })
    .catch(() => {
      return [];
    })
  return {
    proposals,
    returnProposal
  };
};