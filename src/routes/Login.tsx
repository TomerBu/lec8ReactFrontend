import { useForm } from "react-hook-form";
import { LoginType } from "../@types/types";
import patterns from "../validation/patterns";

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
