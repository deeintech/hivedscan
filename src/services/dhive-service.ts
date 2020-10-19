import { Client, DatabaseAPI, DynamicGlobalProperties } from '@hiveio/dhive';

const client = new Client(process.env.REACT_APP_HIVE_MAINNET, { rebrandedApi: true });
const db = new DatabaseAPI(client);

let globalProperties: DynamicGlobalProperties;
db.getDynamicGlobalProperties().then(g => {
  globalProperties = g;
});

export function getHivePerMvest() {
  let total_vesting_fund_hive = parseFloat(
    globalProperties.total_vesting_fund_steem.toString()
  );
  let total_vesting_shares = parseFloat(
    globalProperties.total_vesting_shares.toString()
  );
  let hivePerMvest =
    total_vesting_fund_hive / (total_vesting_shares / 1000000);
  return hivePerMvest;
}

export function vestsToHive(vests: number) {
  let result = vests*Number(getHivePerMvest())/1000000000;
  return result;
}