import InputField from "../InputField";
import institudeStyle from "../Styles/EduInfoStyle/institudeInfo.module.css";

const InstituteInfo = ({ onSubmitForm, onclickCancel }) => {
  return (
    <section className={institudeStyle.institudeInfo}>
      <form onSubmit={onSubmitForm}>
        <InputField
          lableName="School"
          placeholder="Enter school / university"
          inputType="text"
          isRequired={false}
        />
        <InputField
          lableName="Degree"
          placeholder="Enter Degree / Field of study"
          inputType="text"
          required
        />
        <InputField lableName="Start Date" inputType="date" required />
        <InputField lableName="End Date" inputType="date" required />
        <div className={institudeStyle.saveCancelBtn}>
          <button className={institudeStyle.saveBtn} type="submit">
            Save
          </button>
          <button onClick={onclickCancel} className={institudeStyle.cancelBtn}>
            Cancel
          </button>
        </div>
        <button className={institudeStyle.deleteBtn}>
          <span className="material-symbols-outlined">delete</span>Delete
        </button>
      </form>
    </section>
  );
};
export default InstituteInfo;
