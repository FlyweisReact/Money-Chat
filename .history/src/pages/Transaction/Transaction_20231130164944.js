/** @format */

import HOC from "../../layout/HOC";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// Payment Modal
const TransationModal = ({ isOpen, onClose }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <motion.div
      ref={modalRef}
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
      className="payment_custom_modal"
    >
      <div className="content">
        <div className="title">
          <p>TRANSACTION’S BREAKDOWN</p>
          <div>
            <img src="./Image/19.png" alt="" />
            <img src="./Image/20.png" alt="" />
          </div>
        </div>

        <div className="Table">

        </div>

      </div>
    </motion.div>
  );
};

// ---------

const Transaction = () => {
  const [paymentOpen, setPaymentOpen] = useState(false);

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
                  <img
                    src="./Image/18.png"
                    alt=""
                    onClick={() => setPaymentOpen(!paymentOpen)}
                  />
                  <TransationModal
                    isOpen={paymentOpen}
                    onClose={() => setPaymentOpen(false)}
                  />
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
