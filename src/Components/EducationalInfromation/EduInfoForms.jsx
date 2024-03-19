import InstituteInfo from "./InstituteInfo";
import eduInfoFormStyle from "../Styles/EduInfoStyle/eduInfoForm.module.css";
import ToggleInfoSection from "../ToggleInfoSection";
import AddInfoButton from "../AddInfoButton";
import { useState } from "react";

const EduInfoForms = () => {
  const [toggleSection, setToggleSection] = useState(false);

  const handleEducation = (event) => {
    setToggleSection(!toggleSection);
  };

  const handleSubmitClick = (event) => {
    event.preventDefault();
  };

  const handleCancelClick = (event) => {
    setToggleSection(!toggleSection);
  };

  return (
    <section className={eduInfoFormStyle.educationForms}>
      <ToggleInfoSection icon="school" sectionName="Education">
        <section
          className={`${eduInfoFormStyle.informationSection} ${
            toggleSection ? eduInfoFormStyle.toggleInfo : null
          } `}
        >
          <section className={eduInfoFormStyle.oldInformation}>
            <p>London university</p>
          </section>
          <AddInfoButton
            buttonName="Education"
            addInfoBtnOnlick={handleEducation}
          />
        </section>

        <div
          className={`${eduInfoFormStyle.addInfoForm} ${
            toggleSection ? null : eduInfoFormStyle.toggleInfo
          }`}
        >
          <InstituteInfo
            onSubmitForm={handleSubmitClick}
            onclickCancel={handleCancelClick}
          />
        </div>
      </ToggleInfoSection>
    </section>
  );
};
export default EduInfoForms;
