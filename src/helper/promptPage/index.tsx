import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import Modal from "../../components/Modal";
import Button from "../../components/Button/index";
import SelectInput from "../../components/SelectInput";
import * as Style from "./rejectPromptPage.style";

const RejectionDialogue = () => {
  const [showModal, setShowModal] = useState(false);
  //   const navigate = useNavigate();
  // const [acceptanceLoading, setAcceptanceLoading] = useState(false);

  // eslint-disable-next-line
  const [RejectionLevel, setRejectionLevel] = useState("");

  const onValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRejectionLevel(event.target.value);
    // if (radioValue === event.target.value) {
    //   setNextQuestion(nextQuestion + 1);
    // }
  };

  return (
    <>
      <Button small onClick={() => setShowModal(true)}>
        {" "}
        Reject
      </Button>
      <Modal Open={showModal} onClose={() => setShowModal(false)}>
        <Style.Container>
          <Style.Title>You are about to reject !!!,</Style.Title>
          {/* <p>Please select who you are rejecting to </p> */}
          <SelectInput
            name="rejectLevel"
            handleChange={onValueChange}
            optItem={["RISK OFFICER 1", "RISK OFFICER 2", "RISK OFFICER 3"]}
            label="Please select who you are rejecting to"
          />
          <Style.TextareaWrapper>
            <textarea
              rows={6}
              name="subject"
              placeholder="Reason(s) for rejection"
              style={{ width: "100%", padding: " 10px" }}
            ></textarea>
          </Style.TextareaWrapper>
          <Style.Actions>
            <Button onClick={() => "clicked"} small>
              Reject
            </Button>
            <Button small onClick={() => setShowModal(false)}>
              Cancel
            </Button>
          </Style.Actions>
        </Style.Container>
      </Modal>
    </>
  );
};

export default RejectionDialogue;
