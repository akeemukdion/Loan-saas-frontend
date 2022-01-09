import React from 'react'
import { TableWrapper } from './table.style'

const DataTable = () => {
    return (
            <div>
  <TableWrapper>
      <thead>
      <tr>
      <th>Customer Name</th>
      <th>Loan</th>
      <th>Amount</th>
      <th>Branch</th>
      <th>Status</th>
    
    </tr>
      </thead>
    <tbody>

    <tr>
      <td>James Bond</td>
      <td>Federal</td>
      <td>500000</td>
      <td>Ikeja</td>
      <td>waiting</td>
     
    </tr>
    <tr>
      <td>Eve</td>
      <td>Jackson</td>
      <td>94000</td>
      <td>Lekki</td>
      <td>approved</td>
      
    </tr>
    <tr>
      <td>Adam</td>
      <td>Johnson</td>
      <td>60000</td>
      <td>PH</td>
      <td>60000</td>
     
    </tr>
    </tbody>
  </TableWrapper>
</div>
    )
}

export default DataTable
