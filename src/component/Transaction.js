import React from "react";
import { Link } from "react-router-dom";

import { FaHome, FaTrash } from "react-icons/fa";
const Transaction = ({ transaction, handleDelete }) => {
  return (
    <section className="container">
      <h1>ochas international banking system</h1>
      <div className="container">
        <h5>Transaction</h5>
        <ul>
          {transaction.map((action) => {
            const { id, date, transactionType } = action;
            return (
              <li key={id}>
                <div className="flex-left">
                  <span>{date}</span>
                  <span className="transaction-type">{transactionType}</span>
                </div>
                <div className="flex-right">
                  <Link
                    to={{
                      pathname: `/transaction/${id}`,
                      state: { action: id },
                    }}
                  >
                    <button className="">Details</button>
                  </Link>
                  <span>
                    <FaTrash
                      className="trash-icons"
                      onClick={() => handleDelete(id)}
                    />
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <Link to="/">
        <button type="button" className="btn">
          <FaHome /> BACK HOME
        </button>
      </Link>
    </section>
  );
};

export default Transaction;
