import React from "react";
import { Button } from "reactstrap";

type Props = {
  style: string,
  textStyle: string,
  content: string,
  icon: string
}

export const AppButton = ({ style, textStyle, content, icon }: Props) => {
  return (
    <Button className={`btn-icon btn-3 ${textStyle}`} color={style} type="button" >
      <span className="btn-inner--icon">
        <i className={icon} />
      </span>
      <span className="btn-inner--text">{content}</span>
    </Button>
  );
}

export default AppButton;