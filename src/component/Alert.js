import React from "react";

import { FaMountain } from "react-icons/fa";

const Alert = ({ handleDeposit, cancelTransaction }) => {
  return (
    <article className="alert">
      <p className="alert-message">Do you want to perform this transaction</p>
      <div className="alert-icon">
        <FaMountain />
      </div>
      <button className="btn-sm alert-ok-btn" onClick={handleDeposit}>
        OK
      </button>
      <button className="btn-sm alert-cancel-btn" onClick={cancelTransaction}>
        Cancel
      </button>
    </article>
  );
};

export default Alert;
