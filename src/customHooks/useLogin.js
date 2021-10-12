import { useState, useContext, useCallback } from "react";
import { login, getMe } from "../WebAPI";
import { setAuthToken } from "../utils";
import { useRouteMatch, useHistory } from "react-router-dom";
import { AuthContext } from "../context";

function useLogin() {
  const { setUser } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("Lidemy");
  const [errorMessage, setErrorMessage] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();
  const match = useRouteMatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrorMessage(null);

    if (isLoading) {
      return;
    }

    setIsLoading(true);

    login(username, password).then((data) => {
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

  const handleUsernameInput = useCallback((e) => {
    setUsername(e.target.value);
  }, []);

  const handlePasswordInput = useCallback((e) => {
    setPassword(e.target.value);
  }, []);

  const handleLogout = () => {
    setAuthToken("");
    setUser(null);
    if (match.path !== "/") {
      history.push("/");
    }
  };

  return {
    username,
    password,
    errorMessage,

    handleSubmit,
    handleUsernameInput,
    handlePasswordInput,
    handleLogout,
  };
}

export default useLogin;
