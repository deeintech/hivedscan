export function vestsFilter(value: number) {
  if (value !== undefined) {
    var thousand = 1000;
    var million = 1000000;
    var billion = 1000000000;
    var trillion = 1000000000000;
    if (value < thousand) {
      return String(value.toFixed(0));
    }
    if (value >= thousand && value <= million) {
      return Math.abs(value / thousand).toFixed(2) + "k";
    }
    if (value >= million && value <= billion) {
      return Math.abs(value / million).toFixed(2) + "k";
    }
    if (value >= billion && value <= trillion) {
      return Math.abs(value / billion).toFixed(2) + "m";
    } else {
      return Math.abs(value / trillion).toFixed(0) + "b";
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
