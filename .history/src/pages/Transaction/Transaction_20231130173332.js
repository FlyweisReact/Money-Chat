/** @format */

import HOC from "../../layout/HOC";
import { useState } from "react";
import CopyText from "../../Component/CopyText";

const data = [
  {
    amount: "£500",
    id: "ABCD12345",
    date: "DD/MM/YYYY",
    time: " (6:30 AM)",
    sender: "Lorem Ipsum",
    receiver: "Lorem Ipsum",
  },
  {
    amount: " £500",
    id: "ABCD12346",
    date: "DD/MM/YYYY",
    time: " (6:30 AM)",
    sender: "Lorem Ipsum",
    receiver: "Lorem Ipsum",
  },
  {
    amount: " £500",
    id: "ABCD12349",
    date: "DD/MM/YYYY",
    time: " (6:30 AM)",
    sender: "Lorem Ipsum",
    receiver: "Lorem Ipsum",
  },
];

const Transaction = () => {
  const [paymentOpen, setPaymentOpen] = useState(false);
  const [hoveredId, setHoveredId] = useState(null);

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
              <tr key={index}>
                <td>
                  <span className="amount_td">
                    <span> {i.amount} </span>
                    <img
                      src="./Image/18.png"
                      alt=""
                      onClick={() => setPaymentOpen(true)}
                    />
                    <Trans
                      isOpen={paymentOpen}
                      onClose={() => setPaymentOpen(false)}
                    />
                  </span>
                </td>
                <td
                  onMouseEnter={() => setHoveredId(i.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  {hoveredId === i.id ? <CopyText text={i.id} /> : i.id}
                </td>
                <td>
                  {i.date} <span style={{ color: "#0070BC" }}> {i.time} </span>
                </td>
                <td> {i.sender} </td>
                <td> {i.receiver} </td>
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
