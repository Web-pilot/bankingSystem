import React from "react";

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <main className="home-page">
        <h1>ochas international banking system ( O I B S)</h1>
        <div className="home-menu-grid">
          <Link to="/withdrawal">Withdrawal</Link>
          <Link to="/deposit">Deposit</Link>
          <Link to="/balance">Balance</Link>
          <Link to="/transaction">Transaction</Link>
        </div>
        <div className="partial-background"></div>
        <div className="left-background"></div>
        <span className="copyright">
          Copyright &copy;2021 || Created by Web-Pilot
        </span>
      </main>
    </>
  );
};

export default Home;
