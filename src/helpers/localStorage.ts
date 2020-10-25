import { getUser } from "services/user-service";

const storage = {
  USER: "user",
  SIGNED_IN: "signedIn",
  PROPOSALS: "proposals"
};

export function saveLoginInfo(user: string) {
  if (user !== "") {
    localStorage.clear();
    getUser(user).then(result => {
      localStorage.setItem(storage.USER, result.name);
      localStorage.setItem(storage.SIGNED_IN, JSON.stringify(true));
      localStorage.setItem(storage.PROPOSALS, JSON.stringify(result.voterProposals));
    });
  }
}