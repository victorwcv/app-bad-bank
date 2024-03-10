import { useFormik } from "formik";
import Card from "../components/Card";
import { useContext, useState } from "react";
import { MyContext } from "../components/Context";
import { valuePresent } from "../utilities/fnSearchVal.js";
import { Link } from "react-router-dom";

function CreateAccount() {
  const { data, updateData } = useContext(MyContext);
  const [btnState, setBtnState] = useState(false);
  const [showErrors, setShowErrors] = useState({
    name: false,
    email: false,
    password: false,
  });

  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "*Required field";
    } else if (typeof valuePresent(data.users, values.name) === "number") {
      errors.name = "*User already exist";
    }

    if (!values.email) {
      errors.email = "Required field";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "*Invalid email address";
    } else if (typeof valuePresent(data.users, values.email) === "number") {
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
      const clonedUsers = [...data.users]; // Clona el array de usuarios
      clonedUsers.push(values); // Agrega el usuario creado
      updateData((prevData) => ({
        ...prevData,
        users: clonedUsers,
      }));
      setBtnState(true);
      setShowErrors({ name: false, email: false, password: false });
      alert("Account created successfully");
      formik.resetForm();
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
                disabled={btnState}
                onFocus={() =>
                  setShowErrors((prevData) => ({ ...prevData, name: false }))
                }
                {...formik.getFieldProps("name")}
              />
              {showErrors.name ? (
                <div className="form-errors">{formik.errors.name}</div>
              ) : null}
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="form-label">
                Email Address:
              </label>
              <input
                id="email"
                type="text"
                className="form-control"
                disabled={btnState}
                onFocus={() =>
                  setShowErrors((prevData) => ({ ...prevData, email: false }))
                }
                {...formik.getFieldProps("email")}
              />
              {showErrors.email ? (
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
                disabled={btnState}
                onFocus={() =>
                  setShowErrors((prevData) => ({
                    ...prevData,
                    password: false,
                  }))
                }
                {...formik.getFieldProps("password")}
              />
              {showErrors.password ? (
                <div className="form-errors">{formik.errors.password}</div>
              ) : null}
            </div>

            <button
              type="submit"
              disabled={formik.dirty ? btnState : true}
              className="btn btn-success  mx-3 transition
            "
              onClick={() =>
                setShowErrors({ name: true, email: true, password: true })
              }
            >
              Create Account
            </button>

            {btnState && (
              <button
                type="button"
                onClick={() => {
                  setBtnState(false);
                }}
                className="btn btn-success float-end mx-3 transition
            "
              >
                Create Another Account
              </button>
            )}
            <div className="py-2 px-3 d-flex  flex-wrap mt-3 text-center column-gap-5 ">
              <div style={{width:'200px'}}></div>
              <Link
                to="/login"
                className={`nav-link custom ${!btnState ? "disabled" : ""}`}
              >
                Continue with Login →
              </Link>
            </div>
          </form>
        }
      />
    </>
  );
}

export default CreateAccount;
