import { useFormik } from "formik"; // Importando hook de formik
import { useContext, useState } from "react"; // Importando hooks de react
import { Link } from "react-router-dom";
import { MyContext } from "../components/Context"; // Importando contexto
import Card from "../components/Card";
import { valuePresent } from "../utilities/fnSearchVal.js"; // Función utilitaria que nos indica si el usuario existe y su indice.

// Definición del componente de inicio de sesión
function Login({ login, loginChange }) {
  // Extrayendo datos y función de actualización del contexto
  const { data, updateData } = useContext(MyContext);
  // Estado local para renderizar errores
  const [shoowErrors, setShowErrors] = useState(false);
  // Estado local para el indice del usuario
  const [userIndex, setUserIndex] = useState(null);

  // Función para validar el formulario
  const validate = (values) => {
    // Buscando el índice del usuario
    setUserIndex(valuePresent(data.users, values.email));

    // Objeto de errores
    const errors = {};

    // Validaciones de campos de formulario
    if (!values.email) {
      errors.email = "*Enter your email";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "*Enter a valid email address";
    } else if (userIndex === false) {
      errors.email = "*This email doesn't exist";
    }

    if (!values.password) {
      errors.password = "*Enter your password";
    } else if (
      userIndex !== null &&
      data.users[userIndex].password !== values.password
    ) {
      errors.password = "*Incorrect password";
    }

    return errors; // Devuelve los errores
  };

  // Configuración del formulario utilizando useFormik
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate, // Función de validación personalizada
    onSubmit: (values) => {
      console.log(values);
      if (userIndex >= 0) {
        console.log(userIndex);
        updateData((prevData) => ({
          // Actualizando los datos del contexto
          users: [...prevData.users], // Manteniendo los usuarios existentes
          currentUser: userIndex, // Estableciendo el índice del usuario actual
        }));
      }
      formik.resetForm(); // Reiniciando el formulario
      loginChange(true); // Actualizando el estado de inicio de sesión
      alert("You've successfully logged in!"); // Alerta de inicio de sesión exitoso
    },
  });

  console.log(data);

  return (
    <div>
      {/* Componente de tarjeta para el formulario de inicio de sesión */}
      <Card
        title="Login"
        form={
          // Contenido del formulario
          <form className="mt-4" onSubmit={formik.handleSubmit}>
            {/* Campo de correo electrónico */}
            <div className="mb-4">
              <label htmlFor="email" className="form-label">
                Email :
              </label>
              <input
                id="email"
                type="text"
                className="form-control"
                placeholder="example@mail.com"
                disabled={login}
                onFocus={() => setShowErrors(false)} // Oculta errores al enfocar
                {...formik.getFieldProps("email")} // Propiedades del campo de formulario
              />
              {shoowErrors && formik.errors.email ? (
                <div className="form-errors">{formik.errors.email}</div>
              ) : null}
            </div>

            {/* Campo de contraseña */}
            <div className="mb-4">
              <label htmlFor="password" className="form-label">
                Password :
              </label>
              <input
                id="password"
                type="password"
                className="form-control"
                disabled={login}
                onFocus={() => setShowErrors(false)} // Oculta errores al enfocar
                {...formik.getFieldProps("password")} // Propiedades del campo de formulario
              />
              {shoowErrors && formik.errors.password ? (
                <div className="form-errors">{formik.errors.password}</div>
              ) : null}
            </div>

            {/* Botón de envio de formulario */}
            <div className="d-flex flex-column">
              <div>
                {" "}
                <button
                  type="submit"
                  disabled={login}
                  className="btn btn-success float-end px-5"
                  onClick={() => setShowErrors(true)} // Muestra los errores al hacer clic en el botón
                >
                  Login
                </button>
              </div>

              <div className="py-2 px-3 d-flex flex-row justify-content-between mt-3 text-center ">
                <Link
                  to="/deposit"
                  className={`nav-link custom ${!login ? "disabled" : ""}`}
                >
                  Continue with Deposit...
                </Link>

                <Link
                  to="/withdraw"
                  className={`nav-link custom ${!login ? "disabled" : ""}`}
                >
                  Continue with Withdraw...
                </Link>
              </div>
            </div>
          </form>
        }
      />
    </div>
  );
}

export default Login;
