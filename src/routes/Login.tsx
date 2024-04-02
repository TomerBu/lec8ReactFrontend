import { useForm } from "react-hook-form";
import { LoginType } from "../@types/types";
import patterns from "../validation/patterns";
import { auth } from "../services/auth";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  const onLogin = (data: LoginType) => {
    auth
      .login(data)
      .then((res) => {
        const jwt = res.data as string;
        authContext.login(jwt);
        navigate("/");
      })
      .catch((e) => {
        const errorMessage = e.response.data as string;
        alert(errorMessage);
      });
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<LoginType>({
    mode: "onTouched",
    defaultValues: { email: "iMosheVis@gmail.com", password: "Abc!123Abc" },
  });
  return (
    <>
      <h1>Login</h1>
      <form noValidate /*CSS*/ onSubmit={handleSubmit(onLogin)}>
        <input
          type="email"
          autoComplete="email"
          placeholder="email"
          {...register("email", {
            pattern: {
              value: patterns.email,
              message: "email address",
            },
          })}
        />
        <p>{errors.email?.message}</p>

        <input
          type="password"
          autoComplete="current-password"
          placeholder="password"
          {...register("password", {
            pattern: {
              value: patterns.password,
              message: "Email or Password does not match",
            },
          })}
        />
        <p>{errors.password?.message}</p>

        <button disabled={!isValid}>Submit</button>
      </form>
    </>
  );
};

export default Login;
