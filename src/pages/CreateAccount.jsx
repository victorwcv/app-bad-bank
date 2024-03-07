import { useFormik } from "formik";
import Card from "../components/Card";
import { useContext, useState } from "react";
import { MyContext } from "../components/Context";
import { valuePresent } from "../utilities/fnSearchVal.js";
import { Link } from "react-router-dom";

function CreateAccount() {
  const { data, updateData } = useContext(MyContext);
  const [btnState, setBtnState] = useState(false);

  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "*Required field";
    } else if (valuePresent(data.users, values.name)) {
      errors.name = "*User already exist";
    }

    console.log(valuePresent(data.users, values.name));

    if (!values.email) {
      errors.email = "Required field";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "*Invalid email address";
    } else if (valuePresent(data.users, values.email)) {
      errors.email = "*A user with this email already exists";
    }

    if (!values.password) {
      errors.password = "*Required field";
    } else if (values.password.length < 8) {
      errors.password = "*Must be at least 8 characters long";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      balance: 0,
    },
    validate,
    onSubmit: (values) => {
      updateData((prevData) => ({ users: [...prevData.users, values], currentUser:{...prevData.currentUsers} }));
      setBtnState(true);
    },
  });

  return (
    <>
      <Card
        title="Create New Account"
        form={
          <form className="mt-4" onSubmit={formik.handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="form-label">
                Username:
              </label>
              <input
                id="name"
                type="text"
                className="form-control"
                {...formik.getFieldProps("name")}
              />
              {formik.touched.name && formik.errors.name ? (
                <div className="form-errors">{formik.errors.name}</div>
              ) : null}
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="form-label">
                Email Address:
              </label>
              <input
                id="email"
                type="email"
                className="form-control"
                {...formik.getFieldProps("email")}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="form-errors">{formik.errors.email}</div>
              ) : null}
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="form-label">
                Password:
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

            <button
              type="submit"
              disabled={formik.dirty ? btnState : true}
              className="btn btn-success  mx-3 transition
            "
            >
              Create Account
            </button>
            {formik.isSubmitting && (
              <button
                type="button"
                onClick={() => {
                  formik.resetForm();
                  setBtnState(false);
                }}
                className="btn btn-success float-end mx-3 transition
            "
              >
                Create Another Account
              </button>
            )}
            <div className="mt-3 text-center">
              {formik.isSubmitting ? (
                <Link to="/login" className="link-underline-opacity-25-hover">
                  Continue with Login...
                </Link>
              ) : (
                <a className="link-opacity-50">Continue with Login...</a>
              )}
            </div>
          </form>
        }
      />
    </>
  );
}

export default CreateAccount;
