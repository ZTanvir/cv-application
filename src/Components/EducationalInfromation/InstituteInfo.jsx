import InputField from "../InputField";

const InstituteInfo = () => {
  return (
    <section className="institute-information">
      <form>
        <InputField lableName="School" inputType="text" />
        <InputField lableName="Degree" inputType="text" />
        <InputField lableName="Start Date" inputType="date" />
        <InputField lableName="End Date" inputType="date" />
        <button>
          <span></span>Delete
        </button>
        <button>Cancel</button>
        <button type="submit">Save</button>
      </form>
    </section>
  );
};
export default InstituteInfo;
