import useAddPost from "../../customHooks/useAddPost";
import PostForm from "../../components/PostForm";

function NewPostPage() {
  const {
    title,
    body,
    errorMessage,

    handleSubmit,
    handleTitleInput,
    handleBodyInput,
  } = useAddPost();

  const state = { title, body, errorMessage };
  const handle = { handleSubmit, handleTitleInput, handleBodyInput };

  return <PostForm state={state} handle={handle} />;
}

export default NewPostPage;
