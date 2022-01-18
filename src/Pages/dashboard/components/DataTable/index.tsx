import React from "react";
import { customerDetails } from "./DummyInfo";
import * as Style from "./table.style";
import ActionBTN from "../../../../components/Button/index";
import {NavLink } from 'react-router-dom'

const DataTable = () => {
  return (
    <div>
      <Style.TableWrapper>
        <thead>
          <tr>
            <th>S/N</th>
            <th>Customer Name</th>
            <th>Loan</th>
            <th>Amount</th>
            <th>Branch</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {customerDetails.map((customer, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{customer.name}</td>
              <td>{customer.product}</td>
              <td>&#8358; {customer.amount}</td>
              <td>{customer.branch}</td>
              <td>
                <Style.Status status={customer.status}>
                  {customer.status}
                </Style.Status>
              </td>
              <td>
                <NavLink to ={`/dashboard/view-loan/${customer.name}`}>
                   <ActionBTN small> View</ActionBTN>
                </NavLink>
              </td>
            </tr>
          ))}
        </tbody>
      </Style.TableWrapper>
    </div>
  );
};

export default DataTable;
