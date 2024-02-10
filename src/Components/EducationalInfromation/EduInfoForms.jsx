import InstituteInfo from "./InstituteInfo";

const EduInfoForms = () => {
  return (
    <section className="education-forms">
      <h3>
        <span>
          <span className="education-icon">+</span>
          <span>Education</span>
        </span>
        <span className="education-dropdown">Dropdown</span>
      </h3>
      <button>+ Education</button>
      <InstituteInfo />
    </section>
  );
};
export default EduInfoForms;
