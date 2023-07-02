import AddEmplloyee from "./AddEmplloyee";
import { EmployeeDetails, dummyEmployee, pageEmum } from "./Employee.type";
import EmployeeList from "./EmployeeList";
import "./Home.style.css";
import { useState } from "react";
import EditEmployee from "./EditEmployee";

const Home = () => {
  const [employee, setEmployee] = useState(dummyEmployee as EmployeeDetails[]);
  const [showPage, setShowPage] = useState(pageEmum.list);
  const [editData,setEditData] = useState({} as EmployeeDetails)

  const addEmployeeHandler = () => {
    setShowPage(pageEmum.add);
  };

  const showEmployeeLlist = () => {
    setShowPage(pageEmum.list);
  };

  const editEmployeeLlist = () => {
    setShowPage(pageEmum.edit);
  };

  const submitedData = (data: EmployeeDetails) => {
    setEmployee([...employee, data]);
  };

  const handleDelete = (data: EmployeeDetails) => {
    const indexofEmployee = employee.indexOf(data);
    const temp = [...employee];

    temp.splice(indexofEmployee, 1);
    setEmployee(temp);
  };

  const editHandler = (data: EmployeeDetails) => {
    editEmployeeLlist();
    setEditData(data)
  };

  const updateData = (data:EmployeeDetails) =>{
    const filteredData = employee.filter(item => item.id === data.id)[0];
    const indexOfData = employee.indexOf(filteredData)
    const temp = [...employee]
    temp[indexOfData] = data
    setEmployee(temp)
  }

  return (
    <>
      <article className="article-header">
        <header>
          <h1>CRUD APPLICATION</h1>
        </header>
      </article>
      <section className="section-content">
        {showPage === pageEmum.list && (
          <>
            <h5>Content</h5>
            <div
              style={{ display: "flex", justifyContent: "end", width: "100%" }}
            >
              <input
                type="button"
                value={"Add Employee"}
                onClick={addEmployeeHandler}
                style={{
                  width: "100px",
                  marginBottom: "10px",
                  backgroundColor: "cadetblue",
                  color: "white",
                  padding: "5px",
                  border: "5px",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              />
            </div>
            <EmployeeList
              list={employee}
              editEmployee={editHandler}
              onDelete={handleDelete}
            />
          </>
        )}
        {showPage === pageEmum.add && (
          <AddEmplloyee
            showEmployeeLlist={showEmployeeLlist}
            submitedData={submitedData}
          />
        )}
        {showPage === pageEmum.edit && (
          <EditEmployee  data={editData} showEmployeeLlist={showEmployeeLlist} updateData={updateData}/>
        )}
      </section>
    </>
  );
};

export default Home;
