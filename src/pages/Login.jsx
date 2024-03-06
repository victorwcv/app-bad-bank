import { useFormik } from "formik";
import { useContext } from "react";
import { MyContext } from "../components/Context";
import Card from "../components/Card";
import { validate } from "../utilities/LoginFormValidate.js";

function Login() {
  const { data, updateData } = useContext(MyContext);

  const formik = useFormik({
    initialValues: {
      name: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div>
      <Card
        title="Login"
        form={
          <form className="mt-4" onSubmit={formik.handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="form-label">
                Username
              </label>
              <input
                id="name"
                type="name"
                className="form-control"
                {...formik.getFieldProps("name")}
              />
              {formik.touched.name && formik.errors.name ? (
                <div className="form-errors">{formik.errors.name}</div>
              ) : null}
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                id="password"
                type="password"
                className="form-control"
                {...formik.getFieldProps("password")}
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="form-errors">{formik.errors.password}</div>
              ) : null}
            </div>

            <button type="submit" className="btn btn-success float-end px-5">
              Submit
            </button>
          </form>
        }
      />
    </div>
  );
}

export default Login;
