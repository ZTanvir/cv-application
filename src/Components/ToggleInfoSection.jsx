import toggleInfoStyle from "./Styles/toggleInfoSection.module.css";

const ToggleInfoSection = ({ children, icon, sectionName }) => {
  return (
    <section className={sectionName}>
      <h3 className={toggleInfoStyle.sectionDetails}>
        <span>
          <span className="material-symbols-outlined">{icon}</span>
          {sectionName}
        </span>
        {/* expand_less */}
        <span className="material-symbols-outlined">expand_more</span>
      </h3>
      <div>{children}</div>
    </section>
  );
};

export default ToggleInfoSection;
