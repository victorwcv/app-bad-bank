import { useFormik } from "formik";
import { useContext, useState } from "react";
import { MyContext } from "../components/Context";
import Card from "../components/Card";
import { valuePresent } from "../utilities/fnSearchVal";

function Login() {
  const { data, updateData } = useContext(MyContext);
  const [errors, setErrors] = useState(false);
  const validate = (values) => {
    const errors = {};

    let userIndex = valuePresent(data.users, values.email);

    if (!values.email) {
      errors.email = "*Enter your email";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "*Enter a valid email address";
    } else if (valuePresent(data.users, values.email) === false) {
      errors.email = "*This email doesn't exist";
    } else if (data.users[userIndex].password !== values.password) {
      errors.password = "*Wrong password";
    }

    if (!values.password) {
      errors.password = "*Enter your password";
    }

    return errors;
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      let index = valuePresent(data.users, values.email);
      if (index >= 0) {
        updateData((prevData) => ({
          users: [...prevData.users],
          currentUser: { ...prevData.users[index] },
        }));
      }
      alert('You\'ve successfully logged in!')
    },
  });

  return (
    <div>
      <Card
        title="Login"
        form={
          <form className="mt-4" onSubmit={formik.handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="form-label">
                Email :
              </label>
              <input
                id="email"
                type="text"
                className="form-control"
                onFocus={() => setErrors(false)}
                {...formik.getFieldProps("email")}
              />
              {errors && formik.errors.email ? (
                <div className="form-errors">{formik.errors.email}</div>
              ) : null}
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="form-label">
                Password :
              </label>
              <input
                id="password"
                type="password"
                className="form-control"
                onFocus={() => setErrors(false)}
                {...formik.getFieldProps("password")}
              />
              {errors && formik.errors.password ? (
                <div className="form-errors">{formik.errors.password}</div>
              ) : null}
            </div>

            <button
              type="submit"
              className="btn btn-success float-end px-5"
              onClick={() => setErrors(true)}
            >
              Submit
            </button>
          </form>
        }
      />
    </div>
  );
}

export default Login;
