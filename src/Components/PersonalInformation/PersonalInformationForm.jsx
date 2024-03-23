import InputField from "../InputField";

const PersonalInformationForm = () => {
  return (
    <section className="">
      <h3>Personal Details</h3>
      <InputField
        lableName="Full Name"
        placeholder="First and last name"
        type="text"
      />
      <InputField
        lableName="Profession"
        placeholder="Artist? Business? Engineer?"
        type="text"
      />
      <InputField
        lableName="Description"
        placeholder="Profile description"
        type="text"
      />
    </section>
  );
};
export default PersonalInformationForm;
