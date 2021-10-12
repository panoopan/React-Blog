import styled from "styled-components";
import PropTypes from "prop-types";
import React, { memo } from "react";

const Form = styled.form`
  font-size: 20px;
`;

const Content = styled.textarea.attrs({
  placeholder: "Join the discussion...",
})`
  width: 100%;
  font-size: 16px;
  padding: 12px;
`;

const ErrorMessage = styled.div`
  color: red;
  margin-bottom: 12px;
`;

const Button = styled.button`
  padding: 12px;
  background: #ff8100;
  color: white;
  border: solid 1px #ff8100;
  cursor: pointer;
  float: right;

  &:hover {
    background: #ff8100;
  }

  & + & {
    margin-left: 5px;
  }
`;

function CommentForm({ state, handle }) {
  return (
    <Form onSubmit={handle.handleSubmit}>
      <div>
        <Content
          rows="5"
          value={state.body}
          onChange={handle.handleBodyInput}
        />
      </div>
      <ErrorMessage>{state.errorMessage}</ErrorMessage>
      <Button>submit</Button>
    </Form>
  );
}

CommentForm.propTypes = {
  state: PropTypes.object,
  handle: PropTypes.object,
};

export default memo(CommentForm);
