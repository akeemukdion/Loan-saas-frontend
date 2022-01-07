import React from 'react'
import { TableWrapper } from './table.style'

const DataTable = () => {
    return (
            <div>
  <TableWrapper>
      <thead>
      <tr>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Points</th>
    
    </tr>
      </thead>
    <tbody>

    <tr>
      <td>Jill</td>
      <td>Smith</td>
      <td>50</td>
     
    </tr>
    <tr>
      <td>Eve</td>
      <td>Jackson</td>
      <td>94</td>
      
    </tr>
    <tr>
      <td>Adam</td>
      <td>Johnson</td>
      <td>67</td>
     
    </tr>
    </tbody>
  </TableWrapper>
</div>
    )
}

export default DataTable
