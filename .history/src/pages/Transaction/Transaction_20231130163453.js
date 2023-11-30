/** @format */

import HOC from "../../layout/HOC";
import { motion } from "framer-motion";

// Payment Modal
const TransationModal = () => {
  return (
    <motion.div
      initial={{
        height: 0,
        opacity: 0,
        display: "none",
        zIndex: -100,
      }}
      animate={{
        height: isOpen ? "auto" : 0,
        opacity: isOpen ? 1 : 0,
        zIndex: 200,
      }}
      transition={{ duration: 0.3 }}
      exit={{
        height: 0,
        opacity: 0,
        display: "none",
        zIndex: -100,
      }}
      className="search_Header"
    >
      <div className="content">
        <div className="search-input">
          <img src="/asessts/navbar/search.png" alt="" />
          <input
            type="search"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {filteredProducts?.map((i, index) => (
          <div className="Item" key={index}>
            <div className="sub-Item">
              <div className="media">
                <img
                  className="product-image"
                  src={i.productImages?.[0]?.image}
                  alt=""
                />

                <div className="media-body">
                  <div className="product-name">
                    <Link to={`/product/${i._id}`}>{i.name}</Link>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

// ---------

const Transaction = () => {
  return (
    <>
      <section className="pages">
        <div className="Heading_all">
          <h5>Transactions</h5>
          <div className="search">
            <img src="./Image/15.png" alt="" />
            <div>
              <i className="fa-solid fa-magnifying-glass"></i>
              <input type="search" placeholder="Search Transaction" />
            </div>
          </div>

          <div className="button_container">
            <button className="filter">
              <img src="./Image/16.png" alt="" />
              <span>FILTERS</span>
            </button>
            <button className="report">
              <img src="./Image/17.png" alt="" />
              <span>REPORT</span>
            </button>
          </div>
        </div>

        <table>
          <thead>
            <tr>
              <th>Amount</th>
              <th>Ref. ID</th>
              <th>Date & Time</th>
              <th>Sender</th>
              <th>Reciever</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <span className="amount_td">
                  <span> £500</span>

                  <img src="./Image/18.png" alt="" />
                </span>
              </td>
              <td>ABCD12345</td>
              <td>
                DD/MM/YYYY <span style={{ color: "#0070BC" }}>(6:30 AM)</span>
              </td>
              <td>Lorem Ipsum</td>
              <td>Lorem Ipsum</td>
              <td>
                <span className="status complete">COMPLETED</span>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  );
};

export default HOC(Transaction);
