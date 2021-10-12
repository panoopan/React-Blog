import { useState, useContext, useCallback, useEffect } from "react";
import { getComments, addComment } from "../WebAPI";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../context";
import { useParams } from "react-router-dom";
import { checkLogin } from "../utils";

function useComments() {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [body, setBody] = useState("");
  const [comments, setcomments] = useState([]);
  const [errorMessage, setErrorMessage] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  useEffect(() => {
    getComments(id).then((comments) => {
      setcomments(comments);
    });
  }, [id, comments]);

  const handleSubmit = (e) => {
    if (!checkLogin(user)) {
      history.push("/login");
    }
    e.preventDefault();

    setErrorMessage(null);

    if (isLoading) {
      return;
    }

    setIsLoading(true);

    const nickname = user.nickname;

    if (body === "") {
      return setErrorMessage(`Invalid request, "body" is required`);
    }

    addComment(id, nickname, body).then(() => {
      setIsLoading(false);
      setBody("");
    });
  };

  const handleBodyInput = useCallback((e) => {
    setBody(e.target.value);
  }, []);

  return {
    comments,
    body,
    errorMessage,

    handleSubmit,
    handleBodyInput,
  };
}

export default useComments;
