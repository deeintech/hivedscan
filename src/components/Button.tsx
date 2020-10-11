import React from "react";
import { Button } from "reactstrap";

type Props = {
  style: string,
  textStyle: string,
  content: string
}

export const AppButton = ({ style, textStyle, content }: Props) => {
  return (
    <Button className={`btn-icon btn-2 ${textStyle}`} color={style} type="button">
      {content}
    </Button>
  );
}

export default AppButton;