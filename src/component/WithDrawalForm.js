import React from "react";

import { Link } from "react-router-dom";
import Modal from "./Modal";

import { FaHome, FaMoneyCheck } from "react-icons/fa";
import SuccesMessage from "./SuccesMessage";
import Alert from "./Alert";

const WithDrawalForm = ({
  withdrawInput,
  handleInputState,
  handleWithdrawal,
  handleAlertModal,
  isModalOpen,
  message,
  account,
  transactionAmount,
  successAlert,
  modalContent,
  handleDeposit,
  cancelTransaction,
  alert,
}) => {
  return (
    <>
      <form className="form" onSubmit={handleAlertModal}>
        <h5>withdrawal form</h5>
        {isModalOpen && <Modal modalContent={modalContent} />}
        <div className="form-control">
          <label htmlFor="withdrawAmount">Amount : </label>
          <input
            type="number"
            name="withdrawAmount"
            value={withdrawInput.withdrawAmount}
            onChange={handleInputState}
          />
        </div>
        <div className="form-control">
          <label htmlFor="withDrawalsName">Name:</label>
          <input
            type="text"
            name="withDrawalsName"
            value={withdrawInput.withDrawalsName}
            onChange={handleInputState}
          />
        </div>
        <div className="form-control">
          <label htmlFor="withdrawDate">Date:</label>
          <input
            type="date"
            name="withdrawDate"
            value={withdrawInput.withdrawDate}
            onChange={handleInputState}
          />
        </div>
        <div className="form-control">
          <Link to="/">
            <button type="button" className="btn btn-cancel">
              <FaHome /> CANCEL
            </button>
          </Link>
          <button type="submit" className="btn">
            CASHOUT <FaMoneyCheck />
          </button>
        </div>
      </form>
      {successAlert && (
        <SuccesMessage
          message={message}
          account={account}
          transactionAmount={transactionAmount}
        />
      )}
      {alert && (
        <Alert
          handleDeposit={handleDeposit}
          cancelTransaction={cancelTransaction}
        />
      )}
      <div className="left-background"></div>
    </>
  );
};

export default WithDrawalForm;
