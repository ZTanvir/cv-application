import InputField from "../InputField";
import institudeStyle from "../Styles/EduInfoStyle/institudeInfo.module.css";

const InstituteInfo = () => {
  return (
    <section className={institudeStyle.institudeInfo}>
      <form>
        <InputField lableName="School" inputType="text" />
        <InputField lableName="Degree" inputType="text" />
        <InputField lableName="Start Date" inputType="date" />
        <InputField lableName="End Date" inputType="date" />
        <div className={institudeStyle.saveCancelBtn}>
          <button className={institudeStyle.saveBtn} type="submit">
            Save
          </button>
          <button className={institudeStyle.cancelBtn}>Cancel</button>
        </div>
        <button className={institudeStyle.deleteBtn}>
          <span className="material-symbols-outlined">delete</span>Delete
        </button>
      </form>
    </section>
  );
};
export default InstituteInfo;
