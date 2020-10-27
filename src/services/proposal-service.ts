import * as apiService from './api-service';
import config from '../config';
import { IProposalsResult, IProposal, IProposalResult } from 'interfaces/proposal';
import { IContentResult } from 'interfaces/content';
import { getContent } from 'services/content-service';
import { vestsToHive, getAccount, getGlobalProperties } from 'services/dhive-service';

export async function getProposals(limit: number): Promise<IProposalsResult> {
  let proposals: IProposal[] = [];
  let returnProposal: IProposal;
  let totalProposals: number;
  let totalBudget: number;
  let dailyBudget: number;
  let globalProperties = await getGlobalProperties();

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
      try {
        proposals = data.proposals
          .sort((a, b) => b.total_votes - a.total_votes)
          .map((p) => {
             vestsToHive(p.total_votes, globalProperties).then(votes => {
              p.total_votes = votes.toFixed();
              return votes;
            })
            p.daily_pay = {
              amount: (Number(p.daily_pay.amount) / 1000).toLocaleString(),
              precision: p.daily_pay.precision,
              nai: p.daily_pay.nai
            };
            return p;
          });
        returnProposal = proposals
          .find(p => p.receiver === config.returnProposalAccount && p.id === config.returnProposalId);
        totalProposals = proposals.length;
        return data;
      } catch (error) {
        console.log(error);
      }
    })
    .then(async () => {
      try {
        await getAccount(config.hdfAccount).then(acc => {
          if (acc[0].hbd_balance) {
            totalBudget = parseFloat(acc[0].hbd_balance.toString());
            dailyBudget = (totalBudget / 100);
          }
        })
      } catch (error) {
        console.log(error);
      }
    })
    .catch(() => {
      return [];
    })
  return {
    proposals,
    returnProposal,
    totalProposals,
    totalBudget,
    dailyBudget
  };
};

export async function getProposalById(id: number): Promise<IProposalResult> {
  let proposal: IProposal;
  let content: IContentResult;

  await apiService.post({
    url: `${config.hiveConfig}`,
    body: {
      method: "call",
      id: 2,
      params: [
        "condenser_api",
        "find_proposals",
        [[`${id}`]]
      ]
    }
  })
    .then((data) => {
      proposal = data[0];
      return proposal;
    })
    .then(async (p) => {
      try {
        content = await getContent(p.creator, p.permlink);
        return content;
      } catch (error) {
        console.log(error);
      }
    })
    .catch(() => {
      return {};
    })
  return {
    proposal,
    content
  };
};