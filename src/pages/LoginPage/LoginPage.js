import LoginForm from "../../components/LoginForm";
import useLogin from "../../customHooks/useLogin";

function LoginPage() {
  const {
    username,
    password,
    errorMessage,

    handleSubmit,
    handleUsernameInput,
    handlePasswordInput,
  } = useLogin();

  const state = { username, password, errorMessage };
  const handle = { handleSubmit, handleUsernameInput, handlePasswordInput };

  return <LoginForm state={state} handle={handle} />;
}

export default LoginPage;
