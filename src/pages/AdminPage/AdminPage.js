import styled from "styled-components";
import Post from "../../components/Post";
import useGetPost from "../../customHooks/useGetPosts";
import { Link } from "react-router-dom";

const Root = styled.div``;

const PostList = styled.div`
  width: 60%;
  margin: 30px auto;
  max-height: 80vh;
  overflow: scroll;
  padding: 30px 0;

  @media screen and (max-width: 768px) {
    margin: 100px auto;
    width: 80%;
  }
`;

const Button = styled(Link)`
  display: block;
  width: 30%;
  margin-bottom: 30px;
  text-decoration: none;
  text-align: center;
  background: #ff8100;
  color: white;
  font-size: 18px;
  padding: 12px;
  border: solid 1px #ff8100;
  cursor: pointer;

  @media screen and (max-width: 576px) {
    width: 60%;
  }
`;

function AdminPage() {
  const { posts } = useGetPost();

  return (
    <Root>
      <PostList>
        <Button to={"/new-post"}>Add New Post</Button>
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </PostList>
    </Root>
  );
}

export default AdminPage;
