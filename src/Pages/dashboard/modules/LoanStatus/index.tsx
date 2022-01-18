import React from 'react'
import DataTable from '../../components/DataTable'
// import DetailCard from '../../components/Card/DetailCard'
// import { allLoans } from '../RequestLoan/dummyData'
import { Container } from './status.styles'

const LoanStatus = () => {
    return (
        <Container>
          {/* {allLoans.map(item=><DetailCard key={item.createdBy} item={item} />)}   */}
          <DataTable/>
        </Container>
    )
}

export default LoanStatus
