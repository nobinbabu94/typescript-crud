import { useState } from "react";
import "./AddEmployee.style.css";
import { EmployeeDetails } from "./Employee.type";

type props = {
  showEmployeeLlist: () => void;
  submitedData: (data: EmployeeDetails) => void;
};
const AddEmplloyee = (props: props) => {
  const { showEmployeeLlist, submitedData } = props;

  const [firstName, setFirstname] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: any) => {
   e.preventDefault();
    const data: EmployeeDetails = {
      id: new Date().toJSON().toString(),
      firstName: firstName,
      lastName: lastName,
      email: email,
    };
    submitedData(data);
  };

  return (
    <div className="form">
      <h1>Add Employee</h1>
      <form onSubmit={handleSubmit}>
        <div className="formItems">
          <label>First Name : </label>
          <input
            type="text"
            value={firstName}
            onChange={(e: any) => setFirstname(e.target.value)}
          />
        </div>
        <div className="formItems">
          <label>Last Name : </label>
          <input
            type="text"
            value={lastName}
            onChange={(e: any) => setLastName(e.target.value)}
          />
        </div>
        <div className="formItems">
          <label>Email id -1 : </label>
          <input
            type="email"
            value={email}
            onChange={(e: any) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <input type="button" value={"back"} onClick={showEmployeeLlist} />
          <input type="submit" value={"Add Employee"} />
        </div>
      </form>
    </div>
  );
};

export default AddEmplloyee;
