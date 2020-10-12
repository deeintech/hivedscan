import React from "react";
import { Modal } from "reactstrap";

type Props = {
  isShowing: boolean,
  hide: any,
  size: string,
  header: string,
  children: any
}

export const AppModal = ({ isShowing, hide, size, header, children }: Props) => {
  return (
    <Modal
      className="modal-dialog-centered"
      isOpen={isShowing}
      toggle={hide}
      size={size}
    >
      <div className="modal-header">
        <h5 className="modal-title">
          {header}
        </h5>
        <button
          aria-label="Close"
          className="close"
          data-dismiss="modal"
          type="button"
          onClick={hide}
        >
          <span aria-hidden={true}>×</span>
        </button>
      </div>
      <div className="modal-body">
        {children}
      </div>
    </Modal>
  );
}

export default AppModal;