import EduInfoForms from "./EducationalInfromation/EduInfoForms";
import PersonalInformationForm from "./PersonalInformation/PersonalInformationForm";

const CvInfo = ({ userData, updateUserData }) => {
  return (
    <>
      <PersonalInformationForm />
      <EduInfoForms userData={userData} updateUserData={updateUserData} />
    </>
  );
};
export default CvInfo;
