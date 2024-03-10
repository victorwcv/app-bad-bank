import { useFormik } from "formik";
import { useContext } from "react";
import { MyContext } from "../components/Context";
import Card from "../components/Card";
import { valuePresent } from "../utilities/fnSearchVal.js";

function Withdraw({ login }) {
  const { data, updateData } = useContext(MyContext);
  const { currentUser: userIndex } = data;
  const { name: userName, balance: userBalance } = data.users[userIndex];

  const validate = (values) => {
    const errors = {};

    const regex = /^\d+(\.\d{1,2})?$/;
    if (regex.test(values.withdrawAmount) === false) {
      errors.withdrawAmount =
        "Enter a valid amount (no leading zeros, up to one decimal)";
    } else if (values.withdrawAmount <= 0) {
      errors.withdrawAmount = "Please enter a positive number";
    } else if (values.withdrawAmount > userBalance) {
      errors.withdrawAmount = `Max withdraw ${userBalance}`;
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      withdrawAmount: "",
    },
    validate,
    onSubmit: (values) => {
      console.log(values);

      if (userIndex !== -1) {
        const clonedUsers = [...data.users];
        clonedUsers[userIndex].balance -= Number(values.withdrawAmount);
        updateData((prevData) => ({
          ...prevData,
          users: clonedUsers,
        }));
        formik.resetForm();
        alert("Succes withdraw");
      }
    },
  });

  // Función para manejar el evento onchange
  const handleInputChange = (e) => {
    const value = e.target.value;
    // Filtrar caracteres no permitidos
    const newValue = value.replace(/[^0-9.]/g, "");
    // Actualizar el valor del campo en el estado de Formik
    formik.setFieldValue("withdrawAmount", newValue);
  };

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
              <input
                id="client"
                type="name"
                disabled
                value={userName}
                className="form-control text-center"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="balance" className="form-label">
                Balance:
              </label>
              <input
                id="balance"
                type="text"
                disabled
                value={userBalance}
                className="form-control text-center"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="withdrawAmount" className="form-label">
                Withdraw Amount:
              </label>
              <input
                disabled={!login}
                id="withdrawAmount"
                type="text"
                className="form-control text-center"
                {...formik.getFieldProps("withdrawAmount")}
                onChange={handleInputChange}
                placeholder="Enter the amount to withdraw"
              />
              {formik.errors.withdrawAmount && (
                <div className="form-errors">
                  {formik.errors.withdrawAmount}
                </div>
              )}
            </div>

            <button
              type="submit"
              className="btn btn-danger float-end px-5"
              disabled={!login}
            >
              Withdraw →
            </button>
          </form>
        }
      />
    </div>
  );
}

export default Withdraw;
