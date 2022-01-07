// import { ReqeustWrapper } from "./request,style"



// const RequestLoan = () => {
//     return (
//         <ReqeustWrapper>
//             <p>Request Loan</p>
//         </ReqeustWrapper>
//     )
// }

// export default RequestLoan
import React from 'react'
import DetailCard from '../../components/Card/DetailCard'
import { allLoans } from './dummyData'
import { Container } from './request.style'

const LoanStatus = () => {
    return (
        <Container>
          {allLoans.map(item=><DetailCard key={item.createdBy} item={item} />)}  
        </Container>
    )
}

export default LoanStatus
