import LoginForm from "../../components/LoginForm";
import useRegister from "../../customHooks/useRegister";

function RegisterPage() {
  const {
    nickname,
    username,
    password,
    errorMessage,

    handleSubmit,
    handleNicknameInput,
    handleUsernameInput,
    handlePasswordInput,
  } = useRegister();

  const state = { nickname, username, password, errorMessage };
  const handle = {
    handleSubmit,
    handleNicknameInput,
    handleUsernameInput,
    handlePasswordInput,
  };

  return <LoginForm state={state} handle={handle} />;
}

export default RegisterPage;
