/** @format */

import HOC from "../../layout/HOC";
import { Modal } from "antd";
import { useRef, useState } from "react";

const Transaction = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const buttonRef = useRef(null);
  const modalButtonRef = useRef(null);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        getContainer={() => modalButtonRef.current}
      >
        <p>Modal content goes here.</p>
      </Modal>
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
                <span
                  className="amount_td"
                 
                  ref={(el) => {
                    buttonRef.current = el; 
                    modalButtonRef.current = el; 
                  }}
                >
                  <span> £500</span>
                  <img src="./Image/18.png" alt="" onClick={showModal} />
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
