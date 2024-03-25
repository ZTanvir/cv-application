import { useState } from "react";
import InputField from "../InputField";
import institudeStyle from "../Styles/EduInfoStyle/institudeInfo.module.css";

const InstituteInfo = ({ onSubmitForm, onclickCancel }) => {
  const [schoolName, setSchoolName] = useState("");
  const [degree, setDegree] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  return (
    <section className={institudeStyle.institudeInfo}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmitForm(schoolName, degree, startDate, endDate);
        }}
      >
        <InputField
          lableName="School"
          placeholder="Enter school / university"
          inputType="text"
          isRequired={false}
          formValue={schoolName}
          formOnchange={setSchoolName}
        />
        <InputField
          lableName="Degree"
          placeholder="Enter Degree / Field of study"
          inputType="text"
          isRequired={true}
          formValue={degree}
          formOnchange={setDegree}
        />
        <InputField
          lableName="Start Date"
          inputType="date"
          isRequired={true}
          formValue={startDate}
          formOnchange={setStartDate}
        />
        <InputField
          lableName="End Date"
          inputType="date"
          isRequired={true}
          formValue={endDate}
          formOnchange={setEndDate}
        />
        <div className={institudeStyle.saveCancelBtn}>
          <button className={institudeStyle.saveBtn} type="submit">
            Save
          </button>
          <button
            onClick={onclickCancel}
            className={institudeStyle.cancelBtn}
            type="button"
          >
            Cancel
          </button>
        </div>
        <button className={institudeStyle.deleteBtn} type="button">
          <span className="material-symbols-outlined">delete</span>Delete
        </button>
      </form>
    </section>
  );
};
export default InstituteInfo;
