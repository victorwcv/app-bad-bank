import { useContext } from "react";
import { MyContext } from "../components/Context";
import Card from "../components/Card";

function AllData() {
  const { data } = useContext(MyContext);

  return (
    <div>
      <h1 className="text-center my-4">All Data</h1>
      <Card
        form={
          <table className="table table-striped ">
            <thead>
              <tr>
                <th scope="col" className="text-center">
                  #
                </th>
                <th scope="col" className="text-center">
                  User
                </th>
                <th scope="col" className="text-center">
                  Email
                </th>
                <th scope="col" className="text-center">
                  Password
                </th>
                <th scope="col" className="text-center">
                  Balance
                </th>
              </tr>
            </thead>
            <tbody>
              {data.users.map((user, index) => {
                return (
                  <tr key={user.name}>
                    <th scope="row">{index + 1}</th>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.password}</td>
                    <td>$ {user.balance}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        }
      />
    </div>
  );
}

export default AllData;
