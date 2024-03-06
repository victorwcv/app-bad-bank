import { useFormik } from "formik";
import Card from "../components/Card";
import { useContext } from "react";
import { MyContext } from "../components/Context";
import { validate } from "../validations/CreateAcountFormValidate.js";

function CreateAccount() {
  const { data, updateData } = useContext(MyContext);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      balance: 0
    },
    validate,
    onSubmit: (values) => {
      updateData(prevData => ({ users: [...prevData.users, values] }));
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
                {...formik.getFieldProps('name')}
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
                {...formik.getFieldProps('email')}
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
                {...formik.getFieldProps('password')}
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="form-errors">{formik.errors.password}</div>
              ) : null}
            </div>

            <button  type="submit" disabled={false} className="btn btn-success float-end px-3
            ">
              Create Account
            </button>
          </form>
        }
      />
    </>
  );
}

export default CreateAccount;
