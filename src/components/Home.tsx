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
            <input
              type="button"
              value={"add Employee"}
              onClick={addEmployeeHandler}
            />
            <EmployeeList list={employee} />
          </>
        )}
        {showPage === pageEmum.add && (
          <AddEmplloyee
            addEmployeeHandler={addEmployeeHandler}
            showEmployeeLlist={showEmployeeLlist}
          />
        )}
      </section>
    </>
  );
};

export default Home;
