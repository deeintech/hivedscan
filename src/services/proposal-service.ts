import * as apiService from './api-service';
import config from '../config';
import { IProposalsResult, IProposal } from 'interfaces/proposal';

export async function getProposals(limit: number): Promise<IProposalsResult> {
  let proposals: IProposal[] = [];
  let returnProposal: IProposal;

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