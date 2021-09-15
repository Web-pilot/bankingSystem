import React from "react";

const SuccesMessage = ({ message, account, transactionAmount }) => {
  return (
    <article className="success-message">
      <b>OIBS</b>
      <p>
        ALERT: <span>{message}</span>
        <br />
        Amount: $ {transactionAmount}
        <br />
        Main Bal: ${account}
        <br />
      </p>
    </article>
  );
};

export default SuccesMessage;
