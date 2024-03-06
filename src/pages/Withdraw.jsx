import { useFormik } from "formik";
import { useContext } from "react";
import { MyContext } from "../components/Context";
import Card from "../components/Card";
// import { validate } from "../validations/WithdrawValidate.js";

function Withdraw() {
  const { data, updateData } = useContext(MyContext);

  const formik = useFormik({
    initialValues: {
      amount: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div>
      <h1 className="text-center p-4">Withdraw</h1>
      <Card
        form={
          <form className="mt-4" onSubmit={formik.handleSubmit}>
            <div className="mb-4">
              <label htmlFor="client" className="form-label">
                Client:
              </label>
              <input id="client" type="name" className="form-control" />
            </div>

            <div className="mb-4">
              <label htmlFor="balance" className="form-label">
                Balance:
              </label>
              <input id="balance" type="text" className="form-control" />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="form-label">
                Withdraw Amount:
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

            <button type="submit" className="btn btn-danger float-end px-5">
              Deposit
            </button>
          </form>
        }
      />
    </div>
  );
}

export default Withdraw;