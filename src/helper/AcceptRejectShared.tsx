import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import ActionBTN from "../components/Button/index";
// import { getLoginEmployee } from "../services/userServices";
// import Swal from "sweetalert2";
// import { fireRejectionForRepayment } from "../Modules/Funding/NewFunding/rejectionModal";

type Props = {};

// const AcceptRejectShared:React.FC<Props> = ({investmentConfirmationProcess, investment_id , acceptAndReject, formDataKey}) => {
const AcceptRejectDeclineAction: React.FC<Props> = () => {
  // eslint-disable-next-line
  const [isLoading, setLoading] = useState(false);
  const [userAccess] = useState("1");
  const navigate = useNavigate();
  // const [acceptanceLoading, setAcceptanceLoading] = useState(false);

  const loanConfirmationProcess = 1;
  const onLoanAccept = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#aad630",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ok, it is fine!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Approved!", "Loan moved to the next stage.", "success");
      }
    });
  };

  const onLoanReject = () => {
    Swal.fire({
      title: "You are about to reject!, Reason for rejection",
      input: "text",
      inputAttributes: {
        autocapitalize: "off",
      },
      showCancelButton: true,
      confirmButtonText: "Reject",
      cancelButtonColor: "#d33",
      confirmButtonColor: "#aad630",
      showLoaderOnConfirm: true,
      preConfirm: (login) => {
        return navigate(-1);
        // return fetch(`//api.github.com/users/${login}`)
        //   .then(response => {
        //     if (!response.ok) {
        //       throw new Error(response.statusText)
        //     }
        //     return response.json()
        //   })
        //   .catch(error => {
        //     Swal.showValidationMessage(
        //       `Request failed: ${error}`
        //     )
        //   })
      },
      allowOutsideClick: () => !Swal.isLoading(),
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: `Rejected`,
        });
      }
    });
  };
  const onLoanDecline = () => {
    Swal.fire({
      title: "You are about to Decline!, Please avail your reason",
      input: "text",
      inputAttributes: {
        autocapitalize: "off",
      },
      showCancelButton: true,
      confirmButtonText: "Reject",
      cancelButtonColor: "#d33",
      confirmButtonColor: "#aad630",
      showLoaderOnConfirm: true,
      preConfirm: (login) => {
        return navigate(-1);
        // return fetch(`//api.github.com/users/${login}`)
        //   .then(response => {
        //     if (!response.ok) {
        //       throw new Error(response.statusText)
        //     }
        //     return response.json()
        //   })
        //   .catch(error => {
        //     Swal.showValidationMessage(
        //       `Request failed: ${error}`
        //     )
        //   })
      },
      allowOutsideClick: () => !Swal.isLoading(),
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: `Rejected`,
          // preConfirm: (login) => {
          //   return navigate(-1);
          // },
        });
      }
    });
  };

  return (
    <div>
      {/* {userAccess.toString() === loanConfirmationProcess.toString()  ? ( */}
      {userAccess.toString() === loanConfirmationProcess.toString() ? (
        <div>
          <ActionBTN small onClick={() => onLoanAccept()}>
            Approve
          </ActionBTN>
          <ActionBTN onClick={() => onLoanReject()} small>
            Reject
          </ActionBTN>
          <ActionBTN small onClick={() => onLoanDecline()}>
            Decline
          </ActionBTN>
        </div>
      ) : null}
    </div>
  );
};

export default AcceptRejectDeclineAction;
