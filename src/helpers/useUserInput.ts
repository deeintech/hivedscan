import { useState, useCallback } from "react";
const useUserInput = (defaultValue: string = "") => {
  const [value, setValue] = useState(defaultValue);
  const onChange = useCallback((e) => setValue(e.target.value), []);
  console.log(value);
  return {value, onChange,};
};
export default useUserInput;