import { EmployeeDetails } from "./Employee.type";
import "./AddEmployee.style.css";
import {useState} from 'react'


type Props = {
    data:EmployeeDetails
    showEmployeeLlist:()=>void
    updateData:(data:EmployeeDetails)=>void
};

const EditEmployee = (props:Props) => {
    console.log(props.data)
    const {data,showEmployeeLlist,updateData} = props

    const [firstName, setFirstname] = useState(data.firstName);
    const [lastName, setLastName] = useState(data.lastName);
    const [email, setEmail] = useState(data.email);
    

    
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const temp = {
      id: data.id,
      firstName: firstName,
      lastName: lastName,
      email: email,
    };
    updateData(temp);
    showEmployeeLlist();
  };


  return (
    <>
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
          <button onClick={showEmployeeLlist}>back</button>
          <button type="submit">Edit Employee</button>
        </div>
      </form>
    </div>
    </>
  )
};

export default EditEmployee;
