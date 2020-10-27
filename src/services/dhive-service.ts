import { Client, DatabaseAPI, DynamicGlobalProperties } from '@hiveio/dhive';

const client = new Client(process.env.REACT_APP_HIVE_MAINNET, { rebrandedApi: true });
const db = new DatabaseAPI(client);

export async function getGlobalProperties() {
  return await db.getDynamicGlobalProperties();
};

export function getAccount(account: string) {
  return db.getAccounts([account]);
}

export async function getHivePerMvest(global: DynamicGlobalProperties) {
  let total_vesting_fund_hive = parseFloat(
    global.total_vesting_fund_hive.toString()
  );
  let total_vesting_shares = parseFloat(
    global.total_vesting_shares.toString()
  );
  let hivePerMvest =
    total_vesting_fund_hive / (total_vesting_shares / 1000000);
  return hivePerMvest;
}

export async function vestsToHive(vests: number, global: DynamicGlobalProperties) {
  let hivePerMvest = await getHivePerMvest(global);
  let result = vests * parseFloat(hivePerMvest.toString()) / 1000000000;
  return result;
}