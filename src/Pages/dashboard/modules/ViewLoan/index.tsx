import React from 'react'
import Card from '../../components/ViewLoanCard';
import { dummyData } from './data'

type Props = {};

const ViewLoan: React.FC<Props> = () => {
    return (
        <div>
            <Card dummyData={dummyData} />
        </div>
    )
}

export default ViewLoan
