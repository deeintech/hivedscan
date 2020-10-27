export function vestsFilter(value: string) {
  if (value !== undefined) {
    let valueN = Number(value);
    let thousand = 1000;
    let million = 1000000;
    let billion = 1000000000;
    let trillion = 1000000000000;
    if (valueN < thousand) {
      return String(valueN.toFixed(0));
    }
    if (valueN >= thousand && valueN <= million) {
      return Math.abs(valueN / thousand).toFixed(2) + "k";
    }
    if (valueN >= million && valueN <= billion) {
      return Math.abs(valueN / million).toFixed(2) + "k";
    }
    if (valueN >= billion && valueN <= trillion) {
      return Math.abs(valueN / billion).toFixed(2) + "m";
    } else {
      return Math.abs(valueN / trillion).toFixed(0) + "b";
    }
  }
}

export function localeNumberFilter(value: number) {
  if (value !== undefined) {
    return value.toLocaleString();
  }
}

export function daysLeftFilter(value: Date) {
  if (value !== undefined) {
    let today = new Date();
    let one_day = 1000 * 60 * 60 * 24;
    let result = `${Math.ceil(
      (new Date(value).getTime() - today.getTime()) / one_day
    )} days left`;
    return result;
  }
}

export function dateFilter(value: Date) {
  if (value !== undefined) {
    let options = { day: "numeric", month: "short", year: "numeric" };
    let result = new Date(value).toLocaleDateString(undefined, options);
    return result;
  }
}
