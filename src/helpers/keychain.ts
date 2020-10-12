export function hivesignerProposalVote(voteStatus: boolean, username: string, proposalId: number) {
  if (username !== undefined && username !== "") {
    window.open(
      `https://hivesigner.com/sign/update-proposal-votes?proposal_ids=[${proposalId}]&approve=${voteStatus}`
    );
  } else {
    return;
  }
}

export function keychainProposalVote(voteStatus: boolean, username: string, proposalId: number) {
  if (window.hive_keychain && username !== undefined && username !== "") {
    hive_keychain.requestUpdateProposalVote(
      username,
      JSON.stringify([proposalId]),
      voteStatus,
      [],
      (response) => {
        if (response.success) {
          return response;
        } else {
          console.log(response);
          return response;
        }
      },
      null
    );
  } else {
    return;
  }
}

export function keychainCreateProposal(username: string, receiver: string, subject: string,
  permlink: string, daily_pay: number, start: Date, end: Date) {
  if (window.hive_keychain && username !== undefined && username !== "") {
    hive_keychain.requestCreateProposal(
      username,
      receiver,
      subject,
      permlink.replace(/^.*\/(.*)$/, "$1"),
      Number(daily_pay).toFixed(3) + " HBD",
      new Date(start).toISOString(),
      new Date(end).toISOString(),
      [],
      (response) => {
        if (response.success) {
          return response;
        } else {
          console.log(response);
          return response;
        }
      },
      null
    );
  } else {
    return;
  }
}