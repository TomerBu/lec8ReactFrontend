import { useForm } from "react-hook-form";
import { LoginType } from "../@types/types";

const Login = () => {
  //1) types
  //2) useForm
  //3) onLogin function
  //4) form
  //5) inputs and p

  const onLogin = (data: LoginType) => {
    alert(JSON.stringify(data));
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<LoginType>({ mode: "onTouched" });
  return (
    <>
      <h1>Login</h1>
    </>
  );
};

export default Login;
