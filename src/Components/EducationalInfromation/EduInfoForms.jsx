import InstituteInfo from "./InstituteInfo";
import eduInfoFormStyle from "../Styles/EduInfoStyle/eduInfoForm.module.css";

const EduInfoForms = () => {
  return (
    <section className={eduInfoFormStyle.educationForms}>
      <h3 className={eduInfoFormStyle.educationText}>
        <span>
          <span className="material-symbols-outlined">school</span> Education
        </span>
        {/* expand_less */}
        <span className="material-symbols-outlined">expand_more</span>
      </h3>
      <button className={eduInfoFormStyle.addEducationBtn}>+ Education</button>
      <InstituteInfo />
    </section>
  );
};
export default EduInfoForms;
