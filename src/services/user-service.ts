import * as apiService from './api-service';
import config from '../config';
import { IUser } from 'interfaces/user';

export async function getUser(name: string): Promise<IUser> {
  let result: IUser;

  await apiService.post({
    url: `${config.hiveConfig}`,
    body: {
      method: "call",
      id: 0,
      params: [
        "condenser_api",
        "list_proposal_votes",
        [[name, 0], 1000, "by_voter_proposal"]
      ]
    }
  })
    .then(response => {
      if (response !== undefined) {
        let voterProposals = response.filter(
          p => p.voter === name
        );
        let newproposals = [];
        voterProposals.forEach(p => {
          newproposals.push(p.proposal.proposal_id);
        });
        result = {
          name: name,
          signedIn: false,
          voterProposals: newproposals
        };
      }
    })
    .catch(() => {
      return [];
    })
  return result;
};