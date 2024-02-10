import InputField from "../InputField";

const PersonalInformationForm = () => {
  return (
    <section className="">
      <h3>Personal Details</h3>
      <InputField lableName="Full Name" type="text" />
      <InputField lableName="Profession" type="text" />
      <InputField lableName="Description" type="text" />
    </section>
  );
};
export default PersonalInformationForm;
