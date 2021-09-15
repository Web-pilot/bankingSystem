import React from "react";

import { Link } from "react-router-dom";

const AccountBalance = ({ account }) => {
  return (
    <div className="container">
      <h1>Total Balance : ${account}</h1>
      <Link to="/">
        <button type="button" className="btn">
          BACK HOME
        </button>
      </Link>
    </div>
  );
};

export default AccountBalance;
