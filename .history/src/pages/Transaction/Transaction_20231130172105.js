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
          <div className="head">
            <p>Charges</p>
            <p>Amount</p>
          </div>
          <div className="dashed_line"></div>

          <div className="three_sec">
            <p className="text_title">Fees & Charges</p>
            <div className="empty"></div>
            <p>£500</p>
          </div>
          <div className="three_sec">
            <p className="text_title">Exchange Rate</p>
            <div className="empty"></div>
            <p>£500</p>
          </div>

          <div className="dashed_line"></div>
          <div className="three_sec">
            <p className="text_total">TOTAL</p>
            <div className="empty"></div>
            <p className="price_total">£500</p>
          </div>
        </div>

        <div className="additional">
          <p className="note">Additional Notes -</p>
          <div>
            <img src="./Image/21.png" alt="" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum vulputate iaculis sollicitudin. Curabitur mollis ante
              id lacinia lobortis. Etiam lacinia velit luctus lacus pulvinar, eu
              sollicitudin felis pretium. In fermentum felis vitae porta
              hendrerit. Nulla ipsum sapien, imperdiet sed dolor quis, euismod
              aliquam justo. Nullam sed ante libero.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
// ---------

const Transaction = () => {
  const [paymentOpen, setPaymentOpen] = useState(false);

  // Copy to clipboard
  const CopyToClipboardButton = ({ text }) => {
    const handleCopyToClipboard = async () => {
      try {
        await navigator.clipboard.writeText(text);
        console.log("Text copied to clipboard:", text);
      } catch (err) {
        console.error("Unable to copy text to clipboard", err);
      }
    };

    return <button onClick={handleCopyToClipboard}>Copy to Clipboard</button>;
  };

  const data = [
    {
      amount: " £500",
      id: "ABCD12345",
      date: "DD/MM/YYYY",
      time: " (6:30 AM)",
      sender: "Lorem Ipsum",
      receiver: "Lorem Ipsum",
    },
  ];

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
            {data?.map((i, index) => (
              <tr key={>
                <td>
                  <span className="amount_td">
                    <span> £500</span>
                    <img
                      src="./Image/18.png"
                      alt=""
                      onClick={() => setPaymentOpen(true)}
                    />
                    <TransationModal
                      isOpen={paymentOpen}
                      onClose={() => setPaymentOpen(false)}
                    />
                  </span>
                </td>
                <td>
                  ABCD12345
                  <CopyToClipboardButton text={"ABCD12345"} />
                </td>
                <td>
                  DD/MM/YYYY <span style={{ color: "#0070BC" }}>(6:30 AM)</span>
                </td>
                <td>Lorem Ipsum</td>
                <td>Lorem Ipsum</td>
                <td>
                  <span className="status complete">COMPLETED</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
};

export default HOC(Transaction);
