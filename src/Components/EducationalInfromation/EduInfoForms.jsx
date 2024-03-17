import InstituteInfo from "./InstituteInfo";
import eduInfoFormStyle from "../Styles/EduInfoStyle/eduInfoForm.module.css";
import ToggleInfoSection from "../ToggleInfoSection";
import ToggleButton from "../ToggleButton";
import { useState } from "react";

const EduInfoForms = () => {
  const [toggleInstituteInfo, setToggleInstituteInfo] = useState(false);

  const handleEducation = (event) => {
    setToggleInstituteInfo(!toggleInstituteInfo);
  };

  return (
    <section className={eduInfoFormStyle.educationForms}>
      <ToggleInfoSection icon="school" sectionName="Education">
        <ToggleButton buttonName="Education" addInfoBtnOnlick={handleEducation}>
          {toggleInstituteInfo ? <InstituteInfo /> : null}
        </ToggleButton>
      </ToggleInfoSection>
    </section>
  );
};
export default EduInfoForms;
