import styled from "styled-components";
import useGetPost from "../../customHooks/useGetPosts";
import useComments from "../../customHooks/useComments";
import CommentForm from "../../components/CommentForm";
import Comment from "../../components/Comment";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context";

const Root = styled.div``;

const Container = styled.div`
  width: 50%;
  margin: 100px auto;

  @media screen and (max-width: 768px) {
    width: 80%;
  }
`;

const PostTop = styled.div`
  border-bottom: 1px solid #ff8100;
  text-align: left;
`;

const PostTitle = styled.div`
  font-size: 28px;
  white-space: pre-wrap;
  word-break: break-all;
  color: #ff8100;
`;

const PostInfo = styled.div`
  margin-top: 12px;
`;

const PostBody = styled.div`
  font-size: 18px;
  margin-top: 30px;
  max-height: 60vh;
  white-space: pre-line;
  overflow: scroll;
  word-break: break-all;
`;

const Button = styled.button`
  padding: 12px;
  margin-top: 20px;
  background: #ff8100;
  color: white;
  border: solid 1px #ff8100;
  cursor: pointer;
  float: right;
`;

const CommentWrapper = styled.div`
  margin: 150px 0 80px 0;
  border-top: 1px solid #ff8100;
`;

const CommentTitle = styled.h1``;

const CommentList = styled.div`
  margin-top: 100px;
`;

function PostPage() {
  const { post } = useGetPost();
  const history = useHistory();
  const { user } = useContext(AuthContext);

  const {
    comments,
    body,
    errorMessage,

    handleSubmit,
    handleBodyInput,
  } = useComments();
  const state = { comments, body, errorMessage };
  const handle = { handleSubmit, handleBodyInput };

  return (
    <Root>
      <Container>
        <PostTop>
          <PostTitle>{post.title}</PostTitle>
          <PostInfo>
            {new Date(post.createdAt).toLocaleString("en", { hour12: false })}
          </PostInfo>
        </PostTop>
        <PostBody>{post.body}</PostBody>
        <Button
          onClick={() => {
            history.goBack();
          }}
        >
          Back
        </Button>
        <CommentWrapper>
          <CommentTitle>Comments</CommentTitle>
          {!user && "Please login to comment"}
          {user && <CommentForm state={state} handle={handle} />}

          <CommentList>
            {comments.map((comment) => (
              <Comment key={comment.id} comment={comment}></Comment>
            ))}
          </CommentList>
        </CommentWrapper>
      </Container>
    </Root>
  );
}

export default PostPage;
