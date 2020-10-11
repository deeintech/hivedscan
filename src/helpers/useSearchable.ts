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