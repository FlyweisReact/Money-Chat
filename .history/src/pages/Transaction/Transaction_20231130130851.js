/** @format */

import React, { useEffect, useState } from "react";
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
            All Transaction's ( Total : {total} )
          </span>
        </div>

        {data?.length === 0 || !data ? (
          <SpinnerComp />
        ) : (
          <>
            <div className="overFlowCont">
              {data?.length === 0 || !data ? (
                <Alert>No Data Found</Alert>
              ) : (
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
                    {data?.map((i, index) => (
                      <tr key={index}>
                        <td> #{index + 1} </td>
                        <td> {i.user?.firstName + " " + i.user?.lastName} </td>
                        <td>{i.subscriptionId?.plan}</td>
                        <td>${i.amount}</td>
                        <td>
                          <Badge>{i.Status}</Badge>
                        </td>
                        <td>
                          {i.date?.substr(0, 10)} & {i.date?.slice(11, 16)}{" "}
                        </td>
                      </tr>
                    ))}
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
