import { useMemo } from "react";
const useSearchable = <T>(data: T[], searchText: string, searchProps: (item: T) => string[]) => {
  return useMemo(() => {
    const regex = new RegExp(searchText, "i");
    return data.filter((item) =>
      searchProps(item).some((sp) => regex.test(sp))
    );
  }, [data, searchText, searchProps]);
};

export default useSearchable;

// const useSearchableDuo = <T>(data1: T[], data2: T[], searchText: string, searchProps: (item: T) => string[]) => {
//   return useMemo(() => {
//     const regex = new RegExp(searchText, "i");
//     data1.filter((item) =>
//       searchProps(item).some((sp) => regex.test(sp))
//     );
//     data2.filter((item) =>
//       searchProps(item).some((sp) => regex.test(sp))
//     );
//     return { data1, data2 };
//   }, [data1, data2, searchText, searchProps]);
// // };
// export default { useSearchable, useSearchableDuo };