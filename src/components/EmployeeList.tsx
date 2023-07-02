import "./EmployeeList.style.css";
import { EmployeeDetails } from "./Employee.type";
import { useState } from "react";
import ViewModal from "./ViewModal";

type Props = {
  list: EmployeeDetails[];
  onDelete: (data: EmployeeDetails) => void;
  editEmployee: (data: EmployeeDetails) => void;
};
const EmployeeList = (props: Props) => {
  const { list, onDelete, editEmployee } = props;
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState(null as EmployeeDetails | null);

  const backButtonHandler = () => {
    setShowModal(false);
  };

  const openModal = (data: EmployeeDetails) => {
    setShowModal(true);
    setData(data);
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item) => {
            const { lastName, firstName, email, id } = item;
            return (
              <tr key={id}>
                <td>{`${firstName} ${lastName}`}</td>
                <td>{email}</td>
                <td>
                  <button onClick={() => openModal(item)}>view</button>
                  <button onClick={() => editEmployee(item)}>eidt</button>
                  <button onClick={() => onDelete(item)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {showModal && data !== null && (
        <ViewModal backButton={backButtonHandler} data={data} />
      )}
    </>
  );
};

export default EmployeeList;
