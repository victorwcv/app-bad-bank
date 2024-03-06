import { useFormik } from "formik";
import Card from "../components/Card";

function CreateAccount() {
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  
  return (
    <>
      <Card
        title="Create New Account"
        form={
          <form onSubmit={formik.handleSubmit} className="form-styles">
            <label htmlFor="username">Username:</label>
            <input
              id="username"
              name="username"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.username}
            />
            <label htmlFor="email">Email Address:</label>
            <input
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            <label htmlFor="password">Password:</label>
            <input
              id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />

            <button type="submit">Submit</button>
          </form>
        }
      />
    </>
  );
}

export default CreateAccount;
