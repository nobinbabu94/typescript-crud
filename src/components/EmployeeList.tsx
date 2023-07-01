import "./EmployeeList.style.css";
import { EmployeeDetails } from "./Employee.type";

type Props = {
  list: EmployeeDetails[];
};
const EmployeeList = (props: Props) => {
  const { list, } = props;

  return (
    <>
      <table>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>
        {list.map((item) => {
          const { lastName, firstName, email, id } = item;
          return (
            <tr key={id}>
              <td>{`${firstName} ${lastName}`}</td>
              <td>{email}</td>
              <td
              // style={{
              //   display: "flex",
              //   alignItems: "center",
              //   justifyContent: "space-evenly",
              // }}
              >
                <button>view</button>
                <button>eidt</button>
                <button>Delete</button>
              </td>
            </tr>
          );
        })}
      </table>
    </>
  );
};

export default EmployeeList;
