import React from "react";

import Alert from "./Alert";
import Modal from "./Modal";
import { Link } from "react-router-dom";

import { FaHome, FaMoneyCheck } from "react-icons/fa";
import SuccesMessage from "./SuccesMessage";

const DepositForm = ({
  depositInput,
  handleInputState,
  handleAlertModal,
  alert,
  handleDeposit,
  modalContent,
  isModalOpen,
  cancelTransaction,
  account,
  message,
  transactionAmount,
  successAlert,
}) => {
  return (
    <>
      <form className="form" onSubmit={handleAlertModal}>
        <h5>Deposit Form</h5>
        {isModalOpen && <Modal modalContent={modalContent} />}
        <div className="form-control">
          <label htmlFor="amount">Amount : $</label>
          <input
            type="number"
            name="amount"
            value={depositInput.amount}
            onChange={handleInputState}
          />
        </div>
        <div className="form-control">
          <label htmlFor="depositorsName">Depositor's Name:</label>
          <input
            type="text"
            name="depositorsName"
            value={depositInput.depositorsName}
            onChange={handleInputState}
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">Date:</label>
          <input
            type="date"
            name="date"
            value={depositInput.date}
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
            DEPOSIT <FaMoneyCheck />
          </button>
        </div>
      </form>
      {alert && (
        <Alert
          handleDeposit={handleDeposit}
          cancelTransaction={cancelTransaction}
        />
      )}
      {successAlert && (
        <SuccesMessage
          message={message}
          account={account}
          transactionAmount={transactionAmount}
        />
      )}
      <div className="right-background"></div>
    </>
  );
};

export default DepositForm;
