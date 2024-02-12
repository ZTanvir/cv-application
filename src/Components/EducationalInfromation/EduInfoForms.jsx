import InstituteInfo from "./InstituteInfo";
import eduInfoFormStyle from "../Styles/EduInfoStyle/eduInfoForm.module.css";
import ToggleInfoSection from "../ToggleInfoSection";

const EduInfoForms = () => {
  return (
    <section className={eduInfoFormStyle.educationForms}>
      <ToggleInfoSection icon="school" sectionName="Education">
        <button className={eduInfoFormStyle.addEducationBtn}>
          + Education
        </button>
        <InstituteInfo />
      </ToggleInfoSection>
    </section>
  );
};
export default EduInfoForms;
