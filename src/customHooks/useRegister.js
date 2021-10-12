import { useState, useContext, useCallback } from "react";
import { register, getMe } from "../WebAPI";
import { setAuthToken } from "../utils";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../context";

function useRegister() {
  const { setUser } = useContext(AuthContext);
  const [nickname, setNickname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("Lidemy");
  const [errorMessage, setErrorMessage] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrorMessage(null);

    if (isLoading) {
      return;
    }

    setIsLoading(true);

    register(nickname, username, password).then((data) => {
      setIsLoading(false);
      if (data.ok === 0) {
        return setErrorMessage(data.message);
      }

      setAuthToken(data.token);

      getMe().then((response) => {
        if (response.ok !== 1) {
          setAuthToken(null);
          return setErrorMessage(response.message);
        }
        setUser(response.data);
        history.push("/");
      });
    });
  };

  const handleNicknameInput = useCallback((e) => {
    setNickname(e.target.value);
  }, []);

  const handleUsernameInput = useCallback((e) => {
    setUsername(e.target.value);
  }, []);

  const handlePasswordInput = useCallback((e) => {
    setPassword(e.target.value);
  }, []);

  return {
    nickname,
    username,
    password,
    errorMessage,

    handleSubmit,
    handleNicknameInput,
    handleUsernameInput,
    handlePasswordInput,
  };
}

export default useRegister;
