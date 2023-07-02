import AddEmplloyee from "./AddEmplloyee";
import { EmployeeDetails, dummyEmployee, pageEmum } from "./Employee.type";
import EmployeeList from "./EmployeeList";
import "./Home.style.css";
import { useState } from "react";

const Home = () => {
  const [employee, setEmployee] = useState(dummyEmployee as EmployeeDetails[]);
  const [showPage, setShowPage] = useState(pageEmum.list);

  const addEmployeeHandler = () => {
    setShowPage(pageEmum.add);
  };
  const showEmployeeLlist = () => {
    setShowPage(pageEmum.list);
  };

  const submitedData = (data: EmployeeDetails) => {
    setEmployee([...employee, data]);
  };
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
            <EmployeeList list={employee} />
          </>
        )}
        {showPage === pageEmum.add && (
          <AddEmplloyee
            showEmployeeLlist={showEmployeeLlist}
            submitedData={submitedData}
          />
        )}
      </section>
    </>
  );
};

export default Home;
