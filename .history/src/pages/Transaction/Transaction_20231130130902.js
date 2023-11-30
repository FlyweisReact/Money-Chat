/** @format */

import HOC from "../../layout/HOC";
import { Table, Alert,  Badge } from "react-bootstrap";
import SpinnerComp from "../Component/SpinnerComp";

const Transaction = () => {


  return (
    <>
      <section className="sectionCont">
        <p className="headP">Dashboard / All Transactions</p>

        <div className="pb-4  w-full flex justify-between items-center">
          <span
            className="tracking-widest text-slate-900 font-semibold uppercase"
            style={{ fontSize: "1.5rem" }}
          >
            All Transaction's 
          </span>
        </div>

       
            <div className="overFlowCont">
    
                <Table>
                  <thead>
                    <tr>
                      <th>Sno.</th>
                      <th>User </th>
                      <th>Subscription</th>
                      <th>Amount</th>
                      <th>Status</th>
                      <th>Date & Time</th>
                    </tr>
                  </thead>
                  <tbody>
                   
                  </tbody>
                </Table>
              )}
            </div>
          </>
        )}
      </section>
    </>
  );
};

export default HOC(Transaction);
