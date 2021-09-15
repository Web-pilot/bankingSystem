import React, { useState, useReducer, useEffect } from "react";
import DepositForm from "./component/DepositForm";

import reducer from "./component/reducer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Transaction from "./component/Transaction";
import AccountBalance from "./component/AccountBalance";
import WithDrawalForm from "./component/WithDrawalForm";
import FullTransactionDetails from "./component/FullTransactionDetails";
import { initialState } from "./component/initialState";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [depositInput, setDepositInput] = useState({
    amount: "",
    depositorsName: "",
    date: "",
  });
  const [withdrawInput, setWithdrawInput] = useState({
    withdrawAmount: "",
    withDrawalsName: "",
    withdrawDate: "",
  });

  useEffect(() => {
    if (state.successAlert) {
      setTimeout(() => {
        dispatch({ type: "CLOSE_SUCCESS_ALERT" });
      }, 3000);
    }
  });

  //DISPLAY ALERT MODAL TO COMFIRM DEPOSIT TRANSACTION
  const handleAlertModalDeposit = (e) => {
    e.preventDefault();
    if (
      !depositInput.amount ||
      depositInput.amount < 1 ||
      !depositInput.depositorsName ||
      !depositInput.date
    ) {
      dispatch({ type: "EMPTY_INPUT_FORM" });
      return;
    } else {
      dispatch({ type: "OPEN_MODAL" });
    }
  };

  //DISPLAY ALERT MODAL TO COMFIRM WITHDRAW TRANSACTION
  const handleAlertModalWithdraw = (e) => {
    e.preventDefault();
    if (
      !withdrawInput.withDrawalsName ||
      withdrawInput.withdrawAmount < 1 ||
      !withdrawInput.withdrawDate
    ) {
      dispatch({ type: "EMPTY_INPUT_FORM" });
      return;
    } else if (state.account < withdrawInput.withdrawAmount) {
      alert("Insufficient balance!!!");
      return;
    } else {
      propmtUser("withdrawal");
    }
  };

  //PROMPT THE USER TO COMFIRM WHETHER THE TRANSACTION SHOULD BE CARRIED OUT
  const propmtUser = (transaction) => {
    if (transaction === "deposit") {
      dispatch({
        type: "DEPOSIT",
        payLoad: {
          depositAmount: depositInput.amount,
          depositorsName: depositInput.depositorsName,
          date: depositInput.date,
          transactionType: "Deposit",
        },
      });
      setDepositInput({ depositorsName: "", amount: "", date: "" });
      return;
    } else {
      dispatch({
        type: "WITHDRAW",
        payLoad: {
          withdrawalAmount: withdrawInput.withdrawAmount,
          withDrawalsName: withdrawInput.withDrawalsName,
          withdrawDate: withdrawInput.withdrawDate,
          transactionType: "Withdrawal",
        },
      });
      setWithdrawInput({
        withdrawAmount: "",
        withDrawalsName: "",
        withdrawDate: "",
      });
    }
  };

  //DEPOSIT MONEY
  const handleDeposit = () => {
    propmtUser("deposit");
  };

  //WITHDRAW MONEY

  //HANDLE INPUT STATE
  const handleInputState = (e) => {
    let value = e.target.value;
    let name = e.target.name;

    dispatch({ type: "TYPING" });

    setDepositInput((prevState) => {
      return { ...prevState, [name]: value };
    });

    setWithdrawInput((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  //IF ANY TRANSACTION IS BEEN TERMINATED OR IF THE USER PRESS CANCEL
  const cancelTransaction = () => {
    dispatch({ type: "CANCEL_TRANSACTION" });
  };

  //DELETE TRANSACTION
  const handleDelete = (id) => {
    dispatch({ type: "DELETE_TRANSACTION", payLoad: id });
  };
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route
            path="/deposit"
            element={
              <DepositForm
                handleAlertModal={handleAlertModalDeposit}
                depositInput={depositInput}
                handleInputState={handleInputState}
                handleDeposit={handleDeposit}
                cancelTransaction={cancelTransaction}
                {...state}
              />
            }
          />
          <Route
            path="/withdrawal"
            element={
              <WithDrawalForm
                withdrawInput={withdrawInput}
                handleInputState={handleInputState}
                handleAlertModal={handleAlertModalWithdraw}
                {...state}
              />
            }
          />
          <Route
            path="/transaction"
            element={<Transaction {...state} handleDelete={handleDelete} />}
          />
          <Route path="/balance" element={<AccountBalance {...state} />} />
          <Route
            path="/transaction/:id"
            element={<FullTransactionDetails state={state} />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
