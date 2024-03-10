import { useFormik } from "formik";
import { useContext } from "react";
import { MyContext } from "../components/Context";
import Card from "../components/Card";

function Deposit({ login }) {
  const { data, updateData } = useContext(MyContext);
  const { currentUser: userIndex } = data;
  const { name: userName, balance: userBalance } = data.users[userIndex];

  console.log(data);

  const validate = (values) => {
    const errors = {};
    const regex = /^\d+(\.\d{1})?$/;
    if (regex.test(values.depositAmount) === false) {
      errors.depositAmount =
        "Enter a valid amount (no leading zeros, up to one decimal)";
    } else if (values.depositAmount < 1 || values.depositAmount > 10000) {
      errors.depositAmount = "Deposit must be between 1 and 10 000";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      depositAmount: "",
    },
    validate,
    onSubmit: (values) => {
      if (userIndex !== -1) {
        const clonedUsers = [...data.users]; // Clona el array de usuarios
        // const clonedCurrentUser = { ...data.currentUser };
        clonedUsers[userIndex].balance += Number(values.depositAmount); // Actualiza la propiedad balance
        //clonedCurrentUser.balance += Number(values.depositAmount);
        updateData((prevData) => ({
          ...prevData,
          users: clonedUsers,
        }));
        formik.resetForm();
        alert("Succes deposit");
      }
    },
  });

  // Función para restringir el uso de letras o caracteres que no sean numeros.
  const handleInputChange = (e) => {
    const value = e.target.value;
    // Filtrar caracteres no permitidos
    const newValue = value.replace(/[^0-9.]/g, "");
    // Actualizar el valor del campo en el estado de Formik
    formik.setFieldValue("depositAmount", newValue);
  };

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
              <input
                id="client"
                disabled
                type="name"
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
                disabled
                type="text"
                value={userBalance}
                className="form-control text-center"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="depositAmount" className="form-label">
                Deposit Amount:
              </label>
              <input
                disabled={!login}
                id="depositAmount"
                type="text"
                className="form-control text-center"
                {...formik.getFieldProps("depositAmount")}
                onChange={handleInputChange}
                placeholder="Enter the amount to deposit"
              />
              {formik.errors.depositAmount && (
                <div className="form-errors">{formik.errors.depositAmount}</div>
              )}
            </div>

            <button
              type="submit"
              className="btn btn-primary float-end px-5"
              disabled={!login}
            >
              ← Deposit
            </button>
          </form>
        }
      />
    </div>
  );
}

export default Deposit;
