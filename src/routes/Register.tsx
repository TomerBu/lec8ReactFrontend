import { useForm } from "react-hook-form";
import { RegisterType } from "../@types/types";
import patterns from "../validation/patterns";
import { auth } from "../services/auth";
import { useNavigate } from "react-router-dom";
 
const Register = () => {
  const navigate = useNavigate();
  const {
    formState: { errors, isValid },
    register,
    handleSubmit,
  } = useForm<RegisterType>({ mode: "onTouched" });

  // פונקציה שנפעיל בלחיצה על כפתור שליחה - רק אם הטופס תקין
  function onRegister(data: RegisterType) {
    auth
      .register(data)
      .then((res) => {
        console.log(res);
        alert("Success");
        navigate("/login");
      })
      .catch((e) => {
        alert(e.response.data);
      });
  }

  return (
    <>
      <h1>Register</h1>
      <form onSubmit={handleSubmit(onRegister)} noValidate /*css className*/>
        {/* firstName */}
        <section>
          <input
            placeholder="First Name"
            type="text"
            {...register("name.first", {
              required: "This field is mandatory",
              minLength: { value: 2, message: "Too short" },
              maxLength: { value: 255, message: "Too long" },
            })}
          />
          {errors.name?.last && (
            <p className="text-red-500">{errors.name?.first?.message}</p>
          )}
        </section>

        {/* middle */}
        <section>
          <input
            placeholder="Middle Name"
            type="text"
            {...register("name.middle", {
              minLength: { value: 2, message: "Too short" },
              maxLength: { value: 255, message: "Too long" },
            })}
          />
          {errors.name?.middle && (
            <p className="text-red-500">{errors.name?.middle?.message}</p>
          )}
        </section>

        {/* last */}
        <section>
          <input
            placeholder="Last Name"
            type="text"
            {...register("name.last", {
              required: "This field is mandatory",
              minLength: { value: 2, message: "Too short" },
              maxLength: { value: 255, message: "Too long" },
            })}
          />
          {errors.name?.last && (
            <p className="text-red-500">{errors.name?.last?.message}</p>
          )}
        </section>

        {/* phone */}
        <section>
          <input
            placeholder="Phone"
            type="tel"
            {...register("phone", {
              required: "This field is mandatory",
              minLength: { value: 9, message: "Too short" },
              maxLength: { value: 14, message: "Too long" },
            })}
          />
          {errors.phone && (
            <p className="text-red-500">{errors.phone?.message}</p>
          )}
        </section>

        {/* email */}
        <section>
          <input
            placeholder="Email"
            type="email"
            {...register("email", {
              required: "This field is mandatory",
              pattern: {
                value: patterns.email,
                message: "Invalid email",
              },
            })}
          />
          {errors.email && (
            <p className="text-red-500">{errors.email?.message}</p>
          )}
        </section>

        {/* password */}
        <section>
          <div className="password-container">
            <input
              placeholder="Password"
              type={`password`}
              {...register("password", {
                required: "This field is mandatory",
                pattern: {
                  value: patterns.password,
                  message:
                    "Password must be at least 9 characters long and contain an uppercase letter, a lowercase letter, a number and one of the following characters !@#$%^&*-",
                },
              })}
            />
          </div>
          {errors.password && (
            <p className="text-red-500">{errors.password?.message}</p>
          )}
        </section>

        {/* image.url */}
        <section>
          <input
            placeholder="Image URL"
            type="url"
            {...register("image.url", {
              pattern: {
                value: patterns.url,
                message: "Invalid image URL",
              },
            })}
          />
          {errors.image?.url && (
            <p className="text-red-500">{errors.image?.url?.message}</p>
          )}
        </section>

        {/* image.alt */}
        <section>
          <input
            placeholder="Image Description"
            type="text"
            {...register("image.alt", {
              minLength: { value: 2, message: "Too short" },
              maxLength: { value: 255, message: "Too long" },
            })}
          />
          {errors.image?.alt && (
            <p className="text-red-500">{errors.image?.alt?.message}</p>
          )}
        </section>

        {/* address.state */}
        <section>
          <input
            placeholder="State"
            type="text"
            {...register("address.state", {
              minLength: { value: 2, message: "Too short" },
              maxLength: { value: 255, message: "Too long" },
            })}
          />
          {errors.address?.state && (
            <p className="text-red-500">{errors.address?.state?.message}</p>
          )}
        </section>

        {/* address.country */}
        <section>
          <input
            placeholder="Country"
            type="text"
            {...register("address.country", {
              required: "This field is mandatory",
              minLength: { value: 2, message: "Too short" },
              maxLength: { value: 255, message: "Too long" },
            })}
          />
          {errors.address?.country && (
            <p className="text-red-500">{errors.address?.country?.message}</p>
          )}
        </section>

        {/* address.city */}
        <section>
          <input
            placeholder="City"
            type="text"
            {...register("address.city", {
              required: "This field is mandatory",
              minLength: { value: 2, message: "Too short" },
              maxLength: { value: 255, message: "Too long" },
            })}
          />
          {errors.address?.city && (
            <p className="text-red-500">{errors.address?.city?.message}</p>
          )}
        </section>

        {/* address.street */}
        <section>
          <input
            placeholder="Street"
            type="text"
            {...register("address.street", {
              required: "This field is mandatory",
              minLength: { value: 2, message: "Too short" },
              maxLength: { value: 255, message: "Too long" },
            })}
          />
          {errors.address?.street && (
            <p className="text-red-500">{errors.address?.street?.message}</p>
          )}
        </section>

        {/* address.houseNumber */}
        <section>
          <input
            placeholder="House Number"
            type="number"
            {...register("address.houseNumber", {
              required: "This field is mandatory",
              min: { value: 2, message: "Too small" },
              max: { value: 256, message: "Too big" },
            })}
          />
          {errors.address?.houseNumber && (
            <p className="text-red-500">
              {errors.address?.houseNumber?.message}
            </p>
          )}
        </section>

        {/* address.zip */}
        <section>
          <input
            placeholder="Zip"
            type="number"
            {...register("address.zip", {
              required: "This field is mandatory",
              min: { value: 2, message: "Too small" },
              max: { value: 256, message: "Too big" },
            })}
          />
          {errors.address?.zip && (
            <p className="text-red-500">{errors.address?.zip?.message}</p>
          )}
        </section>

        {/* isBusiness */}
        <section className="checkbox-container">
          <label htmlFor="isBusiness">Business</label>
          <input
            id="isBusiness"
            type="checkbox"
            {...register("isBusiness", {
              required: "This field is mandatory",
            })}
          />
          {errors.isBusiness && (
            <p className="text-red-500">{errors.isBusiness?.message}</p>
          )}
        </section>
        <button
          disabled={!isValid}
          className="disabled:bg-slate-300 bg-green-600 disabled:text-black text-white"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default Register;
