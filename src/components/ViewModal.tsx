import { EmployeeDetails } from "./Employee.type";
import "./ViewModal.style.css";

type Props = {
  backButton: () => void;
  data: EmployeeDetails;
};
const ViewModal = (props: Props) => {
  const { backButton, data } = props;
  const { firstName, lastName, email, id } = data;

  return (
    <>
      <div id="modal" className="modal">
        <div className="modal-content">
          <div className="closebtn">
            <span onClick={backButton} style={{ cursor: "pointer" }}>
              &times;
            </span>
          </div>
          <div>
            <h1>Employee Details</h1>
          </div>
          {/* <div className="viewEmployee"> */}
          {/* <h3>First Name : {firstName}</h3>
            <h3>Last Name : {lastName}</h3>
            <h3>Email Id : {email}</h3>
            <h5>Employee added to the system: {id.toString()}</h5> */}
          <table>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              <tr>
              <td>{firstName}</td>

                <td>{lastName}</td>
                <td>{email}</td>
              </tr>
            </tbody>
          </table>
          <h5>Employee added to the system: {id.toString()}</h5>
          <button onClick={backButton}>back</button>
        </div>
      </div>
    </>
  );
};

export default ViewModal;
