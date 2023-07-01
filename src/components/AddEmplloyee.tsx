import React from "react";

type props = {
  addEmployeeHandler: () => void;
  showEmployeeLlist: () => void;
};
const AddEmplloyee = (props: props) => {
  const { addEmployeeHandler, showEmployeeLlist } = props;
  return (
    <form>
      <div>
        <label>First Name : </label>
        <input type="text" />
      </div>
      <div>
        <label>Last Name : </label>
        <input type="text" />
      </div>
      <div>
        <label>Email : </label>
        <input type="email" />
      </div>
      <div>
        <input type="button" value={"back"} onClick={showEmployeeLlist} />
        <input type="button" value={"Add Employee"} />
      </div>
    </form>
  );
};

export default AddEmplloyee;
