import React, { useEffect, useState } from "react";
import Button from "../components/FormComponent/components/button";
import { getLoginEmployee } from "../services/userServices";
import {useHistory} from 'react-router-dom';
// import Swal from "sweetalert2";
import { fireRejectionForRepayment } from "../Modules/Funding/NewFunding/rejectionModal";


const AcceptRejectShared = ({investmentConfirmationProcess, investment_id , acceptAndReject, formDataKey}) => {
    const history = useHistory();
    // eslint-disable-next-line 
    const [loading, setLoading] = useState(false);
    const [userAccess, setUserAccess] = useState('');
    const [acceptanceLoading, setAcceptanceLoading] = useState(false);
    
    function reloadPage(){ 
        window.location.reload(); 
    }

    const getLoginUserDetails = async () => {
        setLoading(false);
        const result = await getLoginEmployee();
        let confirmationProcess = "";
          result &&
          // eslint-disable-next-line 
          result.map((item) => {
            confirmationProcess =
              item.confirmation_process.length &&
              item.confirmation_process[item.confirmation_process.length - 1]
                .process
                ? item.confirmation_process[item.confirmation_process.length - 1]
                    .process
                : 0;
            setUserAccess(confirmationProcess);
          });

          setLoading(true);
      };
    const checkToProcced = async (e) => {
        e.preventDefault();
        if (investment_id !== "undefined") {
            if(!formDataKey){
                const formData = {
                    repayment_id: investment_id,
                    accept: "accept",
                  };
                  await acceptAndReject(formData, history);
                  setAcceptanceLoading(false);
                  reloadPage();
            }else {
                const formData = {
                    [formDataKey]: investment_id,
                    accept: "accept",
                  };
                  await acceptAndReject(formData, history);
                  setAcceptanceLoading(false);
                  reloadPage();
            }
         
         
         
         
        
        }
      }

      const checkToReject = async () => {
          
          const result = fireRejectionForRepayment(investment_id);
          if(result){
            reloadPage();
          }
          //   await getAllInvestment();
          //   history.push({
          //     pathname: "/dashboards/on-queue",
          //   });
        // handleCloseModal()
      }

      useEffect(() => {
        getLoginUserDetails();
      }, []);


    return (
        <div>
             {userAccess.toString() === investmentConfirmationProcess.toString()  ? (
                <div className="row">
                <div className="buttonss col-lg-12 ml-auto mr-auto mt-auto">
              <Button
                className="btn btn-success w-75 mr-4 shadow mt-3 fa fa-check-circle p-3"
                btnName="Accept"
                isLoading={acceptanceLoading}
                onClick={checkToProcced}
              />
               </div>
               <div className="buttonss col-lg-12 ml-auto mr-auto  mt-auto">
              <Button
                className="btn btn-danger w-75 shadow mt-4 mt-3 fa fa-times-circle p-3"
                btnName="Reject"
                onClick={(e) => checkToReject(e)}
              />
              </div>
             </div>
          ) : null}
        </div>
    )
}

export default AcceptRejectShared