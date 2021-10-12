import styled from "styled-components";
import PropTypes from "prop-types";
import React, { memo } from "react";
import { useContext } from "react";
import { AuthContext } from "../../context";
import { deleteComment } from "../../WebAPI";

const Container = styled.div`
  border: 1px solid #ff8100;
  padding: 8px 16px;
  border-radius: 8px;

  & + & {
    margin-top: 20px;
  }
`;

const Head = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;
`;

const Author = styled.div`
  font-size: 20px;

  color: #ff8100;
`;
const Time = styled.div`
  color: rgba(255, 255, 255, 0.5);
`;

const Body = styled.div`
  display: flex;
  flex-wrap: wrap-reverse;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
`;

const Content = styled.div`
  white-space: pre-line;
  over-flow: hidden;
  word-break: break-all;
`;

const ButtonWrapper = styled.div`
  text-align: right;
  margin: 12px 0;
`;

const Button = styled.button`
  padding: 8px 4px;
  background: transparent;
  color: white;
  border: solid 1px #ff8100;
  cursor: pointer;

  &:hover {
    background: #ff8100;
  }

  & + & {
    margin-left: 5px;
  }
`;

function Comment({ comment }) {
  const { user } = useContext(AuthContext);

  return (
    <Container>
      <Head>
        <Author>{comment.nickname}</Author>
        <Time>
          {new Date(comment.createdAt).toLocaleString("en", { hour12: false })}
        </Time>
      </Head>
      <Body>
        <Content>{comment.body}</Content>
        {user && user.nickname === comment.nickname && (
          <ButtonWrapper>
            <Button
              onClick={() => {
                deleteComment(comment.id);
              }}
            >
              Delete
            </Button>
          </ButtonWrapper>
        )}
      </Body>
    </Container>
  );
}

Comment.propTypes = {
  post: PropTypes.object,
};

export default memo(Comment);
