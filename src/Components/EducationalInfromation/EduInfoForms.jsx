import InstituteInfo from "./InstituteInfo";
import eduInfoFormStyle from "../Styles/EduInfoStyle/eduInfoForm.module.css";
import ToggleInfoSection from "../ToggleInfoSection";
import AddInfoButton from "../AddInfoButton";
import { useState } from "react";

const EduInfoForms = () => {
  const [toggleInstituteInfo, setToggleInstituteInfo] = useState(false);

  const handleEducation = (event) => {
    setToggleInstituteInfo(!toggleInstituteInfo);
  };

  return (
    <section className={eduInfoFormStyle.educationForms}>
      <ToggleInfoSection icon="school" sectionName="Education">
        <section className={eduInfoFormStyle.oldInformation}>
          <p>London university</p>
        </section>
        <AddInfoButton
          buttonName="Education"
          addInfoBtnOnlick={handleEducation}
        />
        <div className={eduInfoFormStyle}>
          <InstituteInfo />
        </div>
      </ToggleInfoSection>
    </section>
  );
};
export default EduInfoForms;
