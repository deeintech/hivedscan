import { Client, DatabaseAPI } from '@hiveio/dhive';

const client = new Client(process.env.REACT_APP_HIVE_MAINNET, { rebrandedApi: true });
const db = new DatabaseAPI(client);

export function getAccount(account: string) {
  return db.getAccounts([account]);
}

export async function getHivePerMvest() {
  let global = await db.getDynamicGlobalProperties();

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

export async function vestsToHive(vests: number) {
  let hivePerMvest = await getHivePerMvest();
  let result = vests * parseFloat(hivePerMvest.toString()) / 1000000000;
  return result;
}