import { useState, useContext, useEffect, useCallback } from "react";
import { newPost } from "../WebAPI";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../context";
import { checkLogin } from "../utils";

function useAddPost() {
  const { user } = useContext(AuthContext);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [errorMessage, setErrorMessage] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  useEffect(() => {
    if (!checkLogin(user)) {
      history.push("/");
    }
  }, [history, user]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrorMessage(null);

    if (isLoading) {
      return;
    }

    setIsLoading(true);

    newPost(title, body).then((data) => {
      setIsLoading(false);
      if (data.ok === 0) {
        return setErrorMessage(data.message);
      }

      history.push("/");
    });
  };

  const handleTitleInput = useCallback((e) => {
    setTitle(e.target.value);
  }, []);

  const handleBodyInput = useCallback((e) => {
    setBody(e.target.value);
  }, []);

  return {
    title,
    body,
    errorMessage,

    handleSubmit,
    handleTitleInput,
    handleBodyInput,
  };
}

export default useAddPost;
