import { Form, Button } from "react-bootstrap";

import React from "react";

const TeamForm = (props) => {
  return (
    <>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>{props.label}</Form.Label>
        <Form.Control
          size="md"
          type="text"
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChangeHandler}
        />
      </Form.Group>
      <Button onClick={props.onClickHandler} variant="dark">
        Add {props.label.toLowerCase()}
      </Button>
    </>
  );
};

export default TeamForm;
