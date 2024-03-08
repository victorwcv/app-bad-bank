import { useFormik } from "formik";
import { useContext } from "react";
import { MyContext } from "../components/Context";
import Card from "../components/Card";
// import { validate } from "../validations/WithdrawValidate.js";

function Withdraw({login}) {
  const { data, updateData } = useContext(MyContext);
  const {name, balance} = data.currentUser;

  const formik = useFormik({
    initialValues: {
      withdrawAmount: 0,
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
              <input id="client" type="name" disabled value={name} className="form-control text-center" />
            </div>

            <div className="mb-4">
              <label htmlFor="balance" className="form-label">
                Balance:
              </label>
              <input id="balance" type="text" disabled value={balance} className="form-control text-center" />
            </div>

            <div className="mb-4">
              <label htmlFor="withdrawAmount" className="form-label">
                Withdraw Amount:
              </label>
              <input
                id="withdrawAmount"
                type="text"
                className="form-control text-center"
                disabled={!login}
                {...formik.getFieldProps("withdrawAmount")}
              />
              {formik.touched.withdrawAmount && formik.errors.withdrawAmount ? (
                <div className="form-errors">{formik.errors.withdrawAmount}</div>
              ) : null}
            </div>

            <button type="submit" className="btn btn-danger float-end px-5" disabled={!login}>
              Deposit
            </button>
          </form>
        }
      />
    </div>
  );
}

export default Withdraw;