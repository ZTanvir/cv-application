import InstituteInfo from "./InstituteInfo";
import eduInfoFormStyle from "../Styles/EduInfoStyle/eduInfoForm.module.css";
import ToggleInfoSection from "../ToggleInfoSection";
import AddInfoButton from "../AddInfoButton";
import { useState } from "react";

const EduInfoForms = ({ userData, updateUserData }) => {
  console.log({ userData });
  const [toggleSection, setToggleSection] = useState(false);

  const handleEducation = (event) => {
    setToggleSection(!toggleSection);
  };

  const handleSubmitClick = (event) => {
    event.preventDefault();
  };

  const handleCancelClick = (event) => {
    setToggleSection(!toggleSection);
    updateUserData({ ...userData.personal_details, full_name: "sadek" });
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
            {JSON.stringify(userData.education)}
            {userData.education.map((item) => {
              return <div key={crypto.randomUUID()}>{item.school}</div>;
            })}
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
