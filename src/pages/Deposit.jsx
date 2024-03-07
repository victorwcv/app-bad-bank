import { useFormik } from "formik";
import { useContext } from "react";
import { MyContext } from "../components/Context";
import Card from "../components/Card";
// import { validate } from "../validations/DepositValidate.js";

function Deposit() {
  const { data, updateData } = useContext(MyContext);

  const {name, balance} = data.currentUser;
  console.log(name, balance);

  console.log(data);
  const formik = useFormik({
    initialValues: {
      depositAmount: 0 
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div>
      <h1 className="text-center p-4">Deposit</h1>
      <Card
        form={
          <form className="mt-4" onSubmit={formik.handleSubmit}>
            <div className="mb-4">
              <label htmlFor="client" className="form-label">
                Client:
              </label>
              <input id="client" disabled type="name" value={name} className="form-control text-center" />
            </div>

            <div className="mb-4">
              <label htmlFor="balance" className="form-label">
                Balance:
              </label>
              <input id="balance" disabled type="text" value={balance} className="form-control text-center" />
            </div>

            <div className="mb-4">
              <label htmlFor="depositAmount" className="form-label">
                Deposit Amount:
              </label>
              <input
                id="depositAmount"
                type="text"
                className="form-control text-center"
                {...formik.getFieldProps("depositAmount")}
              />
              {formik.touched.depositAmount && formik.errors.depositAmount ? (
                <div className="form-errors">{formik.errors.depositAmount}</div>
              ) : null}
            </div>

            <button type="submit" className="btn btn-primary float-end px-5">
              Deposit
            </button>
          </form>
        }
      />
    </div>
  );
}

export default Deposit;
