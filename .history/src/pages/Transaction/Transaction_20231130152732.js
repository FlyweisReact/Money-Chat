/** @format */

import HOC from "../../layout/HOC";

const Transaction = () => {
  return (
    <>
      <section>
        <div className="heading">
          <h5>Transactions</h5>
          <div>
            <img src="./Image/15.png" alt="" />
            <div>
              <i className="fa-solid fa-magnifying-glass"></i>
              <input type="search" placeholder="Search..." />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HOC(Transaction);
