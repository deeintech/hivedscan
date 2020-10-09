export function hivesignerProposalVote(voteStatus: boolean, username: string, proposalId: string) {
  if (username !== undefined && username !== "") {
    window.open(
      `https://hivesigner.com/sign/update-proposal-votes?proposal_ids=[${proposalId}]&approve=${voteStatus}`
    );
  } else {
    console.log("nice try");
  }
}

export function keychainProposalVote(voteStatus: boolean, user: string, proposalId: string) {
  if (window.hive_keychain && user !== undefined && user !== "") {
    hive_keychain.requestBroadcast(
      user,
      [
        [
          "update_proposal_votes",
          {
            voter: user,
            proposal_ids: [`${proposalId}`],
            approve: `${voteStatus}`
          }
        ]
      ],
      "Active",
      response => {
        if (response.success) {
          return response;
        } else {
          return response.success;
        }
      }
    );
  } else {
    return [];
  }
}