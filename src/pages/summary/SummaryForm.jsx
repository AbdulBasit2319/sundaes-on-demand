import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const SummaryForm = () => {
  const [termsAndConditionCheck, setTermsAndConditionCheck] = useState(false);
  console.log(termsAndConditionCheck);
  const checkBoxLabel = (
    <span>
      I agree to <span style={{ color: "blue" }}>Terms and Conditions</span>
    </span>
  );

  return (
    <Form>
      <Form.Group controlId="terms-and-condition">
        <Form.Check
          type="checkbox"
          checked={termsAndConditionCheck}
          onChange={(e) => setTermsAndConditionCheck(e.target.checked)}
          label={checkBoxLabel}
        ></Form.Check>
        <Button
          variant="primary"
          disabled={!termsAndConditionCheck}
          type="submit"
        >
          Confirm Order
        </Button>
      </Form.Group>
    </Form>
  );
};

export default SummaryForm;
