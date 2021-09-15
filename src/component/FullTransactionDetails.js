import React from "react";

import { useParams } from "react-router";
import { Link } from "react-router-dom";

const FullTransactionDetails = ({ state }) => {
  const { id } = useParams();

  const itemDetails = state.transaction.filter((item) => {
    return item.id === id;
  });

  return (
    <>
      <div className="container">
        {itemDetails.map((item) => {
          return (
            <article key={item.id}>
              <h5>Transaction Type : {item.transactionType}</h5>
              <h5>
                <span>Amount</span> : {item.amount}
              </h5>
              <h5>
                {item.transactionType === "Deposit"
                  ? `Depositor's Name : ${item.name}`
                  : `WithDrawal's Name: ${item.name}`}
              </h5>
              <h5>Date : {item.date}</h5>

              <Link to="/transaction">
                <button className="btn" style={{ marginTop: "2em" }}>
                  HOME
                </button>
              </Link>
            </article>
          );
        })}
      </div>
    </>
  );
};

export default FullTransactionDetails;
